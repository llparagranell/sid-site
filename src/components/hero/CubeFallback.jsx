import { useId } from "react";
import cx from "../../lib/cx";

/**
 * Isometric 3x3x3 cube as a hand-authored SVG: the static stand-in for HeroCube.
 * Used when WebGL is unavailable, as the Suspense fallback while the three.js chunk
 * loads, and as the mobile version. Fills come from the design tokens in src/index.css.
 *
 * Geometry: side 84 on a 240x240 viewBox (cube spans ~70% of the box, like the canvas).
 * Each face is the unit square (u, v) mapped through an affine matrix; the nine tiles are
 * authored once in unit space and reused per face with <use>, so the gaps stay hairline.
 */

/* Unit-square to face parallelogram: matrix(a b c d e f) => x = a*u + c*v + e, y = b*u + d*v + f */
const FACE = {
    top: "matrix(72.746 42 -72.746 42 120 36)",
    left: "matrix(72.746 42 0 84 47.254 78)",
    right: "matrix(72.746 -42 0 84 120 120)",
};

const GAP = 0.018;
const TILE = (1 - 2 * GAP) / 3;
const STEP = TILE + GAP;
const RADIUS = 0.014;

const TILES = [0, 1, 2].flatMap((row) =>
    [0, 1, 2].map((col) => ({ id: `r${row}c${col}`, x: col * STEP, y: row * STEP })),
);

/* The one accent cubelet is the front-top-right corner: its three visible faces. */
const ACCENT_TILES = [
    { id: "top", face: FACE.top, x: 2 * STEP, y: 2 * STEP },
    { id: "left", face: FACE.left, x: 2 * STEP, y: 0 },
    { id: "right", face: FACE.right, x: 0, y: 0 },
];

export default function CubeFallback({ className }) {
    const rawId = useId();
    const tilesId = `cube-${rawId.replace(/[^a-zA-Z0-9_-]/g, "")}-tiles`;
    const tilesHref = `#${tilesId}`;

    return (
        <svg
            className={cx("block h-auto w-full", className)}
            viewBox="0 0 240 240"
            width="100%"
            role="img"
            aria-label="A black three-by-three cube with a single indigo tile"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <g id={tilesId}>
                    {TILES.map((tile) => (
                        <rect
                            key={tile.id}
                            x={tile.x}
                            y={tile.y}
                            width={TILE}
                            height={TILE}
                            rx={RADIUS}
                            ry={RADIUS}
                        />
                    ))}
                </g>
            </defs>

            {/* Faces, lit from the top-left: top is the lightest, right is the deepest. */}
            <use href={tilesHref} transform={FACE.top} fill="var(--color-ink-3)" />
            <use href={tilesHref} transform={FACE.left} fill="var(--color-ink-2)" />
            <use href={tilesHref} transform={FACE.right} fill="var(--color-ink-2)" />

            {/* The accent cubelet, drawn over its base tiles and shaded with them below. */}
            {ACCENT_TILES.map((tile) => (
                <rect
                    key={tile.id}
                    transform={tile.face}
                    x={tile.x}
                    y={tile.y}
                    width={TILE}
                    height={TILE}
                    rx={RADIUS}
                    ry={RADIUS}
                    fill="var(--color-accent)"
                />
            ))}

            {/* Shading: the side faces fall away from the light, the right one furthest. */}
            <use href={tilesHref} transform={FACE.left} fill="var(--color-ink)" fillOpacity="0.18" />
            <use href={tilesHref} transform={FACE.right} fill="var(--color-ink)" fillOpacity="0.42" />

            {/* Thin highlights where the edges catch the light: the top rim and the right silhouette. */}
            <g fill="none" stroke="currentColor" strokeLinejoin="round" strokeLinecap="round" vectorEffect="non-scaling-stroke">
                <polyline points="47.254,78 120,36 192.746,78" strokeOpacity="0.28" strokeWidth="1" />
                <polyline points="192.746,78 192.746,162" strokeOpacity="0.14" strokeWidth="1" />
            </g>
        </svg>
    );
}
