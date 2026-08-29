import { Component, memo, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import {
    BoxGeometry,
    Euler,
    ExtrudeGeometry,
    MathUtils,
    MeshBasicMaterial,
    MeshPhysicalMaterial,
    Quaternion,
    Shape,
    Vector3,
} from "three";
import { toCreasedNormals } from "three/addons/utils/BufferGeometryUtils.js";
import cx from "../../lib/cx";
import CubeFallback from "./CubeFallback";

/* ------------------------------------------------------------------------------------------
   Scene constants
   ------------------------------------------------------------------------------------------ */

/* three.js needs literal colours; these sit next to the tokens in src/index.css (ink, accent). */
const COLORS = {
    body: "#1b1b27",
    core: "#08080d",
    accent: "#4f46e5",
    key: "#ffffff",
    rim: "#c9d3ff",
    fill: "#8d93c4",
};

const PITCH = 1.07;
const CUBELET_SIZE = 1;
const CUBELET_RADIUS = 0.1;
const CUBELET_SMOOTHNESS = 8;
/* Opaque box behind the hairline gaps so they read as grooves, not slits. */
const CORE_SIZE = 3 * PITCH - 0.15;
/* Collapsed core: a 0.88 box fits inside the bevelled centre cubelet, so it is never seen. */
const CORE_HIDDEN = 0.88 / CORE_SIZE;
const CORE_REVEAL = 6; // damping rate once the cube is whole

/* Camera: fov 32 at z 11.6 frames +-3.33 units at z=0; the inscribed sphere of the frustum has
   radius z*sin(16deg) = 0.2756*z, which is the orientation-independent "fully in frame" bound. */
const CAMERA = { fov: 32, near: 1, far: 50, position: [0, 0, 11.6] };
const CAMERA_Z = 11.6;
const ENTRANCE_Z = 21; // dolly start for the entrance
const EXPLODE_Z = 17.2; // dolly end for the explosion

const REST_YAW = MathUtils.degToRad(-35);
const REST_PITCH = MathUtils.degToRad(25);
const IDLE_SPIN = 0.12; // rad/s
const HOVER_SPIN = 0.25; // fraction of the idle spin while the pointer is over the cube
const SPIN_BLEND = 4; // damping rate for the spin factor
const FLOAT_AMPLITUDE = 0.06;
const FLOAT_SPEED = 0.9; // rad/s
const PARALLAX_MAX = 0.12; // rad
const PARALLAX_DAMPING = 4;

/* Drag: pointer sets target angles; the cube follows through a critically damped spring. */
const DRAG_RATE = 0.008; // rad per px
const DRAG_OMEGA = 22; // spring rate (1/s): ~45 ms lag behind the pointer
const COAST_DECAY = 2.6; // 1/s: a flick is down to ~2% after 1.5 s
const PITCH_LIMIT = MathUtils.degToRad(70);
const PITCH_SETTLE = 0.12; // 1/s: the cube drifts back level over several seconds, never snaps
const DRAG_THRESHOLD = 4; // px before a press counts as a drag
const TAP_INTERVAL = 350; // ms between two taps for a double tap
const TAP_RADIUS = 24; // px

/* Assembly: cubelets start on a scaled copy of the grid (target * scatter) and travel straight in.
   The tilt each carries is gone by the time its eased travel reaches TILT_WINDOW. */
const START_TILT = MathUtils.degToRad(45); // max per axis
const TILT_WINDOW = 0.5;
const PULSE_DURATION = 0.18; // s, the lock-in scale pulse
const PULSE_AMPLITUDE = 0.04;
const ENTRANCE = {
    seed: 0.4, // s, the centre cubelet scales in first
    travel: 1.1, // s per cubelet
    shells: [
        [0.16, 0.02], // face centres: first start, stagger
        [0.3, 0.014], // edges
        [0.5, 0.02], // corners
    ],
    accent: 0.7, // the accent corner lands last
    scatter: 2.4,
    tilt: 1,
    delayKey: "entranceDelay",
    cameraFrom: ENTRANCE_Z,
};
const REASSEMBLY = {
    seed: 0,
    travel: 1,
    shells: [
        [0, 0.02],
        [0.14, 0.012],
        [0.32, 0.02],
    ],
    accent: 0.48,
    scatter: 1.9,
    tilt: 0.6,
    delayKey: "reassemblyDelay",
    cameraFrom: EXPLODE_Z,
};
const EXPLODE_DURATION = 0.5;
const EXPLODE_HOLD = 0.12;

const MAX_DELTA = 0.1; // clamp after a paused loop so nothing jumps; still real-time down to 10fps
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
const SEED = 0x1f3d5b7;

const PHASE_ENTRANCE = 0;
const PHASE_SETTLED = 1;
const PHASE_EXPLODE = 2;
const PHASE_REASSEMBLE = 3;

/* ------------------------------------------------------------------------------------------
   Shared geometry: one extrude-and-crease build (what drei's <RoundedBox> does), run once when
   this chunk evaluates. Module-level and passed as a prop, so fiber never disposes it and it
   survives the Canvas remount at the lg breakpoint; unmount frees its GPU buffers only.
   ------------------------------------------------------------------------------------------ */

function buildCubeletGeometry(size, radius, smoothness, bevelSegments = 4, creaseAngle = 0.4) {
    const eps = 0.00001;
    const r = radius - eps;
    const shape = new Shape();
    shape.absarc(eps, eps, eps, -Math.PI / 2, -Math.PI, true);
    shape.absarc(eps, size - r * 2, eps, Math.PI, Math.PI / 2, true);
    shape.absarc(size - r * 2, size - r * 2, eps, Math.PI / 2, 0, true);
    shape.absarc(size - r * 2, eps, eps, 0, -Math.PI / 2, true);
    const geometry = new ExtrudeGeometry(shape, {
        depth: size - radius * 2,
        bevelEnabled: true,
        bevelSegments: bevelSegments * 2,
        steps: 1,
        bevelSize: r,
        bevelThickness: radius,
        curveSegments: smoothness,
    });
    geometry.center();
    return toCreasedNormals(geometry, creaseAngle);
}

const CUBELET_GEOMETRY = buildCubeletGeometry(CUBELET_SIZE, CUBELET_RADIUS, CUBELET_SMOOTHNESS);
const CORE_GEOMETRY = new BoxGeometry(1, 1, 1);

/* ------------------------------------------------------------------------------------------
   Deterministic layout: seeded so every load assembles the same way.
   ------------------------------------------------------------------------------------------ */

function mulberry32(seed) {
    let a = seed >>> 0;
    return () => {
        a = (a + 0x6d2b79f5) >>> 0;
        let t = a;
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

function shuffle(list, rand) {
    for (let i = list.length - 1; i > 0; i -= 1) {
        const j = Math.floor(rand() * (i + 1));
        const swap = list[i];
        list[i] = list[j];
        list[j] = swap;
    }
    return list;
}

function buildCubelets() {
    const rand = mulberry32(SEED);
    const list = [];

    for (let x = -1; x <= 1; x += 1) {
        for (let y = -1; y <= 1; y += 1) {
            for (let z = -1; z <= 1; z += 1) {
                const spread = () => (rand() - 0.5) * 2 * START_TILT;
                list.push({
                    id: `c${x + 1}${y + 1}${z + 1}`,
                    target: new Vector3(x, y, z).multiplyScalar(PITCH),
                    shell: Math.abs(x) + Math.abs(y) + Math.abs(z),
                    startQuaternion: new Quaternion().setFromEuler(new Euler(spread(), spread(), spread())),
                    accent: x === 1 && y === 1 && z === 1,
                    entranceDelay: 0,
                    reassemblyDelay: 0,
                });
            }
        }
    }

    // Shell by shell: face centres, then edges, then corners; the accent corner always last.
    for (let shell = 1; shell <= 3; shell += 1) {
        const members = shuffle(
            list.filter((c) => c.shell === shell && !c.accent),
            rand,
        );
        members.forEach((cubelet, rank) => {
            cubelet.entranceDelay = ENTRANCE.shells[shell - 1][0] + rank * ENTRANCE.shells[shell - 1][1];
            cubelet.reassemblyDelay = REASSEMBLY.shells[shell - 1][0] + rank * REASSEMBLY.shells[shell - 1][1];
        });
    }
    const accent = list.find((c) => c.accent);
    accent.entranceDelay = ENTRANCE.accent;
    accent.reassemblyDelay = REASSEMBLY.accent;

    return list;
}

const CUBELETS = buildCubelets();
const IDENTITY = new Quaternion();

const quintOut = (t) => 1 - Math.pow(1 - t, 5);
const cubicOut = (t) => 1 - Math.pow(1 - t, 3);
const cubicInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const smoothstep = (t) => {
    const x = MathUtils.clamp(t, 0, 1);
    return x * x * (3 - 2 * x);
};

/* ------------------------------------------------------------------------------------------
   Choreography. Every cubelet sits at target * k, so at any instant the set is a scaled grid:
   two cubelets that differ on an axis are at least PITCH * max(k) apart on it, and the outer
   shell (the later starter) always has the larger k. Tilt is only carried while k is large
   (eased travel < TILT_WINDOW), so tilted boxes never come close enough to touch, and settled
   boxes (scale <= 1.04, half-extent 0.52) sit 1.07 apart. Nothing overshoots its slot.
   ------------------------------------------------------------------------------------------ */

/** Poses every cubelet for time t of an assembly. True once all pulses have finished. */
function layoutAssembly(meshes, t, config) {
    let done = true;
    for (let i = 0; i < CUBELETS.length; i += 1) {
        const cubelet = CUBELETS[i];
        const mesh = meshes[i];
        if (!mesh) continue;

        if (cubelet.shell === 0) {
            const grow = config.seed > 0 ? cubicOut(MathUtils.clamp(t / config.seed, 0, 1)) : 1;
            mesh.position.set(0, 0, 0);
            mesh.quaternion.identity();
            mesh.scale.setScalar(grow);
            mesh.visible = grow > 0;
            if (grow < 1) done = false;
            continue;
        }

        const s = (t - cubelet[config.delayKey]) / config.travel;
        let k;
        let tilt;
        let scale = 1;
        if (s <= 0) {
            k = config.scatter;
            tilt = config.tilt;
            done = false;
        } else if (s < 1) {
            const eased = quintOut(s);
            k = config.scatter - (config.scatter - 1) * eased;
            tilt = config.tilt * smoothstep(1 - eased / TILT_WINDOW);
            done = false;
        } else {
            k = 1;
            tilt = 0;
            const pulse = ((s - 1) * config.travel) / PULSE_DURATION;
            if (pulse < 1) {
                scale = 1 + PULSE_AMPLITUDE * Math.sin(Math.PI * pulse);
                done = false;
            }
        }
        mesh.position.copy(cubelet.target).multiplyScalar(k);
        if (tilt > 0) mesh.quaternion.slerpQuaternions(IDENTITY, cubelet.startQuaternion, tilt);
        else mesh.quaternion.identity();
        mesh.scale.setScalar(scale);
    }
    return done;
}

/** Camera z for time t of an assembly: pushes in with the last cubelet, on an in-out curve
    that always trails the cubelets' ease-out, so the outermost piece stays inside the frustum. */
function assemblyCameraZ(t, config) {
    const s = MathUtils.clamp((t - config.accent) / config.travel, 0, 1);
    return config.cameraFrom + (CAMERA_Z - config.cameraFrom) * cubicInOut(s);
}

/** Poses every cubelet for time t of the explosion and returns the camera z. The tumble only
    starts once the grid has scaled past the midpoint, mirroring the assembly's tilt window. */
function layoutExplosion(meshes, t) {
    const eased = quintOut(MathUtils.clamp(t / EXPLODE_DURATION, 0, 1));
    const k = 1 + (REASSEMBLY.scatter - 1) * eased;
    const tilt = REASSEMBLY.tilt * smoothstep((eased - TILT_WINDOW) / (1 - TILT_WINDOW));
    for (let i = 0; i < CUBELETS.length; i += 1) {
        const cubelet = CUBELETS[i];
        const mesh = meshes[i];
        if (!mesh || cubelet.shell === 0) continue;
        mesh.position.copy(cubelet.target).multiplyScalar(k);
        if (tilt > 0) mesh.quaternion.slerpQuaternions(IDENTITY, cubelet.startQuaternion, tilt);
        else mesh.quaternion.identity();
        mesh.scale.setScalar(1);
    }
    return CAMERA_Z + (EXPLODE_Z - CAMERA_Z) * eased;
}

/** Exact step of a critically damped spring toward `target`; returns nothing, mutates `state`. */
function springStep(state, valueKey, velocityKey, target, dt) {
    const offset = state[valueKey] - target;
    const slope = state[velocityKey] + DRAG_OMEGA * offset;
    const decay = Math.exp(-DRAG_OMEGA * dt);
    state[valueKey] = target + (offset + slope * dt) * decay;
    state[velocityKey] = (state[velocityKey] - DRAG_OMEGA * slope * dt) * decay;
}

function createSim() {
    return {
        started: false,
        elapsed: 0,
        phase: PHASE_ENTRANCE,
        phaseStart: 0,
        coreScale: 0,
        explodeRequests: 0,
        explodesHandled: 0,
        yaw: REST_YAW,
        pitch: REST_PITCH,
        yawVel: 0,
        pitchVel: 0,
        targetYaw: REST_YAW,
        targetPitch: REST_PITCH,
        dragging: false,
        hovered: false,
        spinFactor: 1,
        pointerX: 0,
        pointerY: 0,
        parallaxBlend: 1,
        leanX: 0,
        leanY: 0,
    };
}

/* ------------------------------------------------------------------------------------------
   WebGL capability
   ------------------------------------------------------------------------------------------ */

let webglSupport = null;

/** True when this browser can hand out a WebGL context. Cached after the first probe. */
// eslint-disable-next-line react-refresh/only-export-components -- the integrator needs this next to the component
export function canUseWebGL() {
    if (webglSupport !== null) return webglSupport;
    if (typeof window === "undefined" || typeof document === "undefined") return false;
    try {
        const probe = document.createElement("canvas");
        const gl = probe.getContext("webgl2") || probe.getContext("webgl") || probe.getContext("experimental-webgl");
        webglSupport = Boolean(gl);
        if (gl) {
            const lose = gl.getExtension("WEBGL_lose_context");
            if (lose) lose.loseContext();
        }
    } catch {
        webglSupport = false;
    }
    return webglSupport;
}

/* ------------------------------------------------------------------------------------------
   Hooks
   ------------------------------------------------------------------------------------------ */

function useReducedMotion() {
    const [reduced, setReduced] = useState(
        () => typeof window !== "undefined" && window.matchMedia(REDUCED_MOTION_QUERY).matches,
    );
    useEffect(() => {
        const query = window.matchMedia(REDUCED_MOTION_QUERY);
        const onChange = (event) => setReduced(event.matches);
        query.addEventListener("change", onChange);
        return () => query.removeEventListener("change", onChange);
    }, []);
    return reduced;
}

/** 'always' while the canvas is on screen in a visible tab; otherwise 'demand' so the loop stops. */
function useFrameloop(wrapperRef, enabled, reducedMotion) {
    const [inView, setInView] = useState(true);
    const [tabVisible, setTabVisible] = useState(
        () => typeof document === "undefined" || document.visibilityState !== "hidden",
    );

    useEffect(() => {
        const el = wrapperRef.current;
        if (!enabled || !el || typeof IntersectionObserver === "undefined") return undefined;
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[entries.length - 1];
                if (entry) setInView(entry.isIntersecting);
            },
            { rootMargin: "96px" },
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [wrapperRef, enabled]);

    useEffect(() => {
        const onVisibility = () => setTabVisible(document.visibilityState !== "hidden");
        document.addEventListener("visibilitychange", onVisibility);
        return () => document.removeEventListener("visibilitychange", onVisibility);
    }, []);

    return inView && tabVisible && !reducedMotion ? "always" : "demand";
}

/**
 * Drag, tap and hover on the wrapper. Pointer capture keeps a drag alive outside the square;
 * a press that moves less than DRAG_THRESHOLD stays a tap, and two taps make an explosion.
 * Under reduced motion the pointer moves the cube directly and asks for a frame.
 */
function usePointerInput(wrapperRef, simRef, invalidateRef, enabled, reducedMotion) {
    useEffect(() => {
        const el = wrapperRef.current;
        if (!enabled || !el) return undefined;
        const sim = simRef.current;
        const drag = { id: null, moved: false, startX: 0, startY: 0, lastX: 0, lastY: 0, tapAt: -Infinity, tapX: 0, tapY: 0 };

        const endDrag = (event) => {
            if (drag.id !== event.pointerId) return;
            drag.id = null;
            sim.dragging = false;
            el.style.cursor = "";
            if (el.hasPointerCapture(event.pointerId)) el.releasePointerCapture(event.pointerId);
        };

        const onDown = (event) => {
            if (drag.id !== null || (event.pointerType === "mouse" && event.button !== 0)) return;
            drag.id = event.pointerId;
            drag.moved = false;
            drag.startX = drag.lastX = event.clientX;
            drag.startY = drag.lastY = event.clientY;
            // Holding the cube stops it: the spring re-bases on the current pose and absorbs any coast.
            sim.targetYaw = sim.yaw;
            sim.targetPitch = sim.pitch;
            sim.dragging = true;
            el.style.cursor = "grabbing";
            try {
                el.setPointerCapture(event.pointerId);
            } catch {
                // The pointer went away between the event and the capture; the drag still works inside the square.
            }
        };

        const onMove = (event) => {
            if (drag.id !== event.pointerId) return;
            const dx = event.clientX - drag.lastX;
            const dy = event.clientY - drag.lastY;
            drag.lastX = event.clientX;
            drag.lastY = event.clientY;
            if (!drag.moved) {
                if (Math.hypot(event.clientX - drag.startX, event.clientY - drag.startY) < DRAG_THRESHOLD) return;
                drag.moved = true;
            }
            sim.targetYaw += dx * DRAG_RATE;
            sim.targetPitch = MathUtils.clamp(sim.targetPitch + dy * DRAG_RATE, -PITCH_LIMIT, PITCH_LIMIT);
            if (reducedMotion) {
                sim.yaw = sim.targetYaw;
                sim.pitch = sim.targetPitch;
                if (invalidateRef.current) invalidateRef.current();
            }
        };

        const onUp = (event) => {
            if (drag.id !== event.pointerId) return;
            const tap = !drag.moved;
            endDrag(event);
            if (!tap || reducedMotion) return;
            const near = Math.hypot(event.clientX - drag.tapX, event.clientY - drag.tapY) < TAP_RADIUS;
            if (event.timeStamp - drag.tapAt < TAP_INTERVAL && near) {
                sim.explodeRequests += 1;
                drag.tapAt = -Infinity;
            } else {
                drag.tapAt = event.timeStamp;
                drag.tapX = event.clientX;
                drag.tapY = event.clientY;
            }
        };

        const onEnter = () => {
            sim.hovered = true;
        };
        const onLeave = () => {
            sim.hovered = false;
        };

        el.addEventListener("pointerdown", onDown);
        el.addEventListener("pointermove", onMove);
        el.addEventListener("pointerup", onUp);
        el.addEventListener("pointercancel", endDrag);
        el.addEventListener("lostpointercapture", endDrag);
        el.addEventListener("pointerenter", onEnter);
        el.addEventListener("pointerleave", onLeave);
        return () => {
            el.removeEventListener("pointerdown", onDown);
            el.removeEventListener("pointermove", onMove);
            el.removeEventListener("pointerup", onUp);
            el.removeEventListener("pointercancel", endDrag);
            el.removeEventListener("lostpointercapture", endDrag);
            el.removeEventListener("pointerenter", onEnter);
            el.removeEventListener("pointerleave", onLeave);
            el.style.cursor = "";
            sim.dragging = false;
            sim.hovered = false;
        };
    }, [wrapperRef, simRef, invalidateRef, enabled, reducedMotion]);
}

/** Window-level pointer position for the parallax lean; off under reduced motion. */
function useParallax(simRef, enabled, reducedMotion) {
    useEffect(() => {
        if (!enabled || reducedMotion) return undefined;
        const sim = simRef.current;
        const onMove = (event) => {
            sim.pointerX = (event.clientX / window.innerWidth) * 2 - 1;
            sim.pointerY = 1 - (event.clientY / window.innerHeight) * 2;
        };
        const onLeave = () => {
            sim.pointerX = 0;
            sim.pointerY = 0;
        };
        window.addEventListener("mousemove", onMove, { passive: true });
        document.documentElement.addEventListener("mouseleave", onLeave);
        return () => {
            window.removeEventListener("mousemove", onMove);
            document.documentElement.removeEventListener("mouseleave", onLeave);
            onLeave();
        };
    }, [simRef, enabled, reducedMotion]);
}

/* ------------------------------------------------------------------------------------------
   Scene
   ------------------------------------------------------------------------------------------ */

/** fiber only flips the frameloop flag; kick one frame on every change so a stopped loop
    restarts and a newly static (reduced motion) cube is drawn. Also lends `invalidate` out. */
function FrameBridge({ frameloop, invalidateRef }) {
    const invalidate = useThree((state) => state.invalidate);
    useEffect(() => {
        invalidateRef.current = invalidate;
        invalidate();
        return () => {
            invalidateRef.current = null;
        };
    }, [frameloop, invalidate, invalidateRef]);
    return null;
}

const Lighting = memo(function Lighting() {
    return (
        <>
            <ambientLight intensity={0.1} />
            <directionalLight position={[-5, 7, 5]} intensity={1} />
            <Environment resolution={256} frames={1}>
                {/* Large soft key, top-left: the top bevels read as a line of light. */}
                <Lightformer form="rect" intensity={2.4} color={COLORS.key} position={[-4, 7, 4]} scale={[8, 8, 1]} />
                {/* Cool rim on the right. */}
                <Lightformer form="rect" intensity={2} color={COLORS.rim} position={[7, 1.5, -1]} scale={[0.5, 8, 1]} />
                {/* Thin strip behind and above: a hairline on the back-top edges. */}
                <Lightformer form="rect" intensity={1.4} color={COLORS.key} position={[1, 7, -4]} scale={[9, 0.35, 1]} />
                {/* Faint fill from below so the underside is not a hole. */}
                <Lightformer form="rect" intensity={0.5} color={COLORS.fill} position={[0, -6, 3]} scale={[10, 4, 1]} />
            </Environment>
        </>
    );
});

const CubeGroup = memo(function CubeGroup({ reducedMotion, simRef }) {
    const tiltRef = useRef(null);
    const spinRef = useRef(null);
    const coreRef = useRef(null);
    const meshRefs = useRef([]);

    const materials = useMemo(() => {
        const plastic = () =>
            new MeshPhysicalMaterial({
                color: COLORS.body,
                roughness: 0.32,
                metalness: 0.12,
                clearcoat: 0.55,
                clearcoatRoughness: 0.3,
            });
        const accent = plastic();
        accent.emissive.set(COLORS.accent);
        accent.emissiveIntensity = 0.14;
        return { body: plastic(), accent, core: new MeshBasicMaterial({ color: COLORS.core }) };
    }, []);

    useEffect(
        () => () => {
            materials.body.dispose();
            materials.accent.dispose();
            materials.core.dispose();
            CUBELET_GEOMETRY.dispose();
            CORE_GEOMETRY.dispose();
        },
        [materials],
    );

    // fiber runs this before every draw, so the opening pose (scattered grid, far camera) is
    // already in place for the first frame; that frame is pinned to t=0 whatever the clock says.
    useFrame((state, delta) => {
        const tilt = tiltRef.current;
        const spin = spinRef.current;
        const core = coreRef.current;
        if (!tilt || !spin || !core) return;
        const sim = simRef.current;
        const meshes = meshRefs.current;

        if (reducedMotion) {
            layoutAssembly(meshes, Infinity, ENTRANCE);
            core.visible = true;
            core.scale.setScalar(CORE_SIZE);
            state.camera.position.z = CAMERA_Z;
            tilt.rotation.set(sim.pitch, 0, 0);
            tilt.position.y = 0;
            spin.rotation.y = sim.yaw;
            return;
        }

        const dt = sim.started ? Math.min(delta, MAX_DELTA) : 0;
        sim.started = true;
        sim.elapsed += dt;

        // Choreography: entrance -> settled <-> (explode, hold, reassemble).
        const t = sim.elapsed - sim.phaseStart;
        if (sim.phase === PHASE_ENTRANCE) {
            const done = layoutAssembly(meshes, t, ENTRANCE);
            state.camera.position.z = assemblyCameraZ(t, ENTRANCE);
            sim.coreScale = CORE_HIDDEN * cubicOut(MathUtils.clamp(t / ENTRANCE.seed, 0, 1));
            if (done) {
                sim.phase = PHASE_SETTLED;
                sim.phaseStart = sim.elapsed;
                sim.explodesHandled = sim.explodeRequests;
            }
        } else if (sim.phase === PHASE_SETTLED) {
            state.camera.position.z = CAMERA_Z;
            if (sim.explodeRequests !== sim.explodesHandled) {
                sim.explodesHandled = sim.explodeRequests;
                sim.phase = PHASE_EXPLODE;
                sim.phaseStart = sim.elapsed;
                sim.coreScale = CORE_HIDDEN;
            } else {
                sim.coreScale = MathUtils.damp(sim.coreScale, 1, CORE_REVEAL, dt);
            }
        } else if (sim.phase === PHASE_EXPLODE) {
            state.camera.position.z = layoutExplosion(meshes, t);
            if (t >= EXPLODE_DURATION + EXPLODE_HOLD) {
                sim.phase = PHASE_REASSEMBLE;
                sim.phaseStart += EXPLODE_DURATION + EXPLODE_HOLD;
            }
        } else {
            const done = layoutAssembly(meshes, t, REASSEMBLY);
            state.camera.position.z = assemblyCameraZ(t, REASSEMBLY);
            if (done) {
                sim.phase = PHASE_SETTLED;
                sim.phaseStart = sim.elapsed;
                sim.explodesHandled = sim.explodeRequests;
            }
        }
        core.visible = sim.coreScale > 0.02;
        core.scale.setScalar(CORE_SIZE * sim.coreScale);

        // Orientation: spring while held, coast after release, idle spin on top, slow re-levelling.
        const spinTarget = sim.dragging ? 0 : sim.hovered ? HOVER_SPIN : 1;
        sim.spinFactor = MathUtils.damp(sim.spinFactor, spinTarget, SPIN_BLEND, dt);
        if (sim.dragging) {
            springStep(sim, "yaw", "yawVel", sim.targetYaw, dt);
            springStep(sim, "pitch", "pitchVel", sim.targetPitch, dt);
        } else {
            const decay = Math.exp(-COAST_DECAY * dt);
            sim.yawVel *= decay;
            sim.pitchVel *= decay;
            sim.yaw += sim.yawVel * dt;
            sim.pitch += sim.pitchVel * dt;
            if (sim.pitch > PITCH_LIMIT || sim.pitch < -PITCH_LIMIT) {
                sim.pitch = MathUtils.clamp(sim.pitch, -PITCH_LIMIT, PITCH_LIMIT);
                sim.pitchVel = 0;
            }
            sim.pitch = MathUtils.damp(sim.pitch, REST_PITCH, PITCH_SETTLE, dt);
            sim.yaw += IDLE_SPIN * sim.spinFactor * dt;
        }

        // Parallax lean toward the cursor: suppressed while held, blends back afterwards.
        sim.parallaxBlend = MathUtils.damp(sim.parallaxBlend, sim.dragging ? 0 : 1, PARALLAX_DAMPING, dt);
        sim.leanX = MathUtils.damp(sim.leanX, -sim.pointerY * PARALLAX_MAX * sim.parallaxBlend, PARALLAX_DAMPING, dt);
        sim.leanY = MathUtils.damp(sim.leanY, sim.pointerX * PARALLAX_MAX * sim.parallaxBlend, PARALLAX_DAMPING, dt);

        tilt.rotation.set(sim.pitch + sim.leanX, sim.leanY, 0);
        tilt.position.y = Math.sin(sim.elapsed * FLOAT_SPEED) * FLOAT_AMPLITUDE;
        spin.rotation.y = sim.yaw;
    });

    return (
        <group ref={tiltRef} rotation={[REST_PITCH, 0, 0]}>
            <group ref={spinRef} rotation={[0, REST_YAW, 0]}>
                <mesh ref={coreRef} geometry={CORE_GEOMETRY} material={materials.core} visible={false} />
                {CUBELETS.map((cubelet, i) => (
                    <mesh
                        key={cubelet.id}
                        ref={(mesh) => {
                            meshRefs.current[i] = mesh;
                        }}
                        geometry={CUBELET_GEOMETRY}
                        material={cubelet.accent ? materials.accent : materials.body}
                    />
                ))}
            </group>
        </group>
    );
});

/* ------------------------------------------------------------------------------------------
   Error boundary: any render/runtime failure inside the canvas hands over to the SVG.
   ------------------------------------------------------------------------------------------ */

class CubeErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { failed: false };
    }

    static getDerivedStateFromError() {
        return { failed: true };
    }

    componentDidCatch() {
        this.props.onError();
    }

    render() {
        return this.state.failed ? null : this.props.children;
    }
}

/* ------------------------------------------------------------------------------------------
   HeroCube
   ------------------------------------------------------------------------------------------ */

/**
 * Matte-black 3x3x3 cube for the hero. Fills its parent (give it a square box).
 *
 * Entrance: the centre cubelet scales in, then the other 26 travel straight in from a 2.4x
 * scaled copy of the grid (face centres, edges, corners, accent corner last) while the camera
 * pushes in from z 21 to 11.6, so nothing ever crosses another piece or leaves the frame.
 * Each piece gives a small scale pulse as it locks in.
 *
 * Interaction (the square box is the hit area, nothing outside it):
 * - Press and drag turns the cube: horizontal = yaw, vertical = pitch (clamped to +-70 deg).
 *   The cube follows the pointer through a critically damped spring, so it has some mass,
 *   and on release it coasts on the spring's velocity, fading out over about 1.5 s. The idle
 *   turn then continues from wherever it was left; pitch drifts back level over several seconds.
 * - Hover slows the idle turn to a quarter; leaving speeds it back up.
 * - Double-click / double-tap blows the cube apart (grid scaled 1.9x, a small tumble, camera
 *   pulls back) and it reassembles with the entrance choreography. Ignored mid-assembly.
 * - Touch: horizontal drags rotate, vertical swipes still scroll the page (touch-action pan-y).
 * - A window-level parallax lean stays on as a subtle layer, muted while the cube is held.
 * - Reduced motion: the whole cube, no entrance, no idle or float; a drag still turns it
 *   directly, nothing moves on its own.
 *
 * Falls back to <CubeFallback /> without WebGL or on any runtime error.
 */
export default function HeroCube({ className }) {
    const wrapperRef = useRef(null);
    const invalidateRef = useRef(null);
    const simRef = useRef(null);
    if (simRef.current === null) simRef.current = createSim();

    const reducedMotion = useReducedMotion();
    const [supported] = useState(() => canUseWebGL());
    const [failed, setFailed] = useState(false);
    const enabled = supported && !failed;
    const frameloop = useFrameloop(wrapperRef, enabled, reducedMotion);

    usePointerInput(wrapperRef, simRef, invalidateRef, enabled, reducedMotion);
    useParallax(simRef, enabled, reducedMotion);

    if (!enabled) return <CubeFallback className={className} />;

    const fail = () => setFailed(true);

    return (
        <div
            ref={wrapperRef}
            aria-hidden="true"
            className={cx("relative h-full w-full cursor-grab touch-pan-y select-none", className)}
        >
            <CubeErrorBoundary onError={fail}>
                <Canvas
                    dpr={[1, 1.75]}
                    gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
                    camera={CAMERA}
                    frameloop={frameloop}
                    onCreated={({ gl }) => {
                        // Production setting per three.js: skips the synchronous info-log read and the
                        // ANGLE compiler notes it would print on Windows. Nothing here is a custom shader.
                        gl.debug.checkShaderErrors = false;
                        gl.domElement.style.touchAction = "pan-y";
                        gl.domElement.addEventListener("webglcontextlost", fail, { passive: true });
                    }}
                >
                    <FrameBridge frameloop={frameloop} invalidateRef={invalidateRef} />
                    <Lighting />
                    <CubeGroup reducedMotion={reducedMotion} simRef={simRef} />
                </Canvas>
            </CubeErrorBoundary>
        </div>
    );
}
