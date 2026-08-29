/* eslint-disable react-refresh/only-export-components -- dev-only entry point, never hot-reloaded as a module */
import { StrictMode, Suspense, lazy, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import CubeFallback from "../components/hero/CubeFallback";

/**
 * Dev-only harness: renders one HeroCube implementation in the same 560px square the hero uses.
 *   /cube-lab.html            -> the live src/components/hero/HeroCube.jsx
 *   /cube-lab.html?v=A        -> src/components/hero/variants/HeroCubeA.jsx (B, C, …)
 *   &size=400                 -> box size in px
 * Not linked from the site and excluded from the production build (see vite.config.js).
 */
const variants = import.meta.glob("../components/hero/variants/HeroCube*.jsx");
const params = new URLSearchParams(window.location.search);
const variantKey = (params.get("v") || "").toUpperCase();
const size = Number(params.get("size")) || 560;

const loader = variantKey
    ? variants[`../components/hero/variants/HeroCube${variantKey}.jsx`]
    : () => import("../components/hero/HeroCube.jsx");

const Cube = loader ? lazy(loader) : null;

function Lab() {
    const [mountKey, setMountKey] = useState(0);
    const box = useMemo(() => ({ width: size, height: size }), []);
    return (
        <div className="band-dark min-h-screen p-8 font-sans">
            <div className="mb-6 flex items-center gap-4">
                <span className="type-eyebrow text-muted-dark">Cube lab · {variantKey || "current"}</span>
                <button
                    type="button"
                    onClick={() => setMountKey((k) => k + 1)}
                    className="rounded-full border border-line-dark px-4 py-1.5 text-sm text-paper hover:border-paper"
                >
                    Replay assembly
                </button>
            </div>
            {Cube ? (
                <div style={box} className="relative border border-dashed border-line-dark">
                    <Suspense fallback={<CubeFallback className="h-full w-full" />}>
                        <Cube key={mountKey} className="h-full w-full" />
                    </Suspense>
                </div>
            ) : (
                <p className="text-muted-dark">No variant named “{variantKey}”.</p>
            )}
        </div>
    );
}

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Lab />
    </StrictMode>,
);
