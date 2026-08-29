import { useState } from "react";
import { motion } from "framer-motion";
import { EASE, VIEWPORT, staggerParent } from "./constants";

/**
 * Fade-up reveal on scroll. Use it once per block, not on every leaf.
 *
 *   <Reveal>…</Reveal>
 *   <Reveal as="li" delay={0.1} y={16}>…</Reveal>
 */
export default function Reveal({
    children,
    as = "div",
    delay = 0,
    y = 24,
    duration = 0.7,
    className,
    viewport = VIEWPORT,
    ...rest
}) {
    const Tag = motion[as] ?? motion.div;
    const [seen, setSeen] = useState(false);
    return (
        <Tag
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={seen ? { opacity: 1, y: 0 } : undefined}
            onFocusCapture={() => setSeen(true)}
            viewport={viewport}
            transition={{ duration, ease: EASE, delay }}
            className={className}
            {...rest}
        >
            {children}
        </Tag>
    );
}

/**
 * Staggered group. Children should be `motion.*` elements using `variants={staggerChild}`
 * (import `staggerChild` from "./constants").
 *
 *   <Stagger className="grid …">
 *     {items.map(i => <motion.li key={i.id} variants={staggerChild}>…</motion.li>)}
 *   </Stagger>
 */
export function Stagger({ children, as = "div", stagger = 0.08, delay = 0, className, viewport = VIEWPORT, animate, ...rest }) {
    const Tag = motion[as] ?? motion.div;
    const [seen, setSeen] = useState(false);
    return (
        <Tag
            variants={staggerParent(stagger, delay)}
            initial="hidden"
            whileInView="show"
            animate={animate ?? (seen ? "show" : undefined)}
            onFocusCapture={() => setSeen(true)}
            viewport={viewport}
            className={className}
            {...rest}
        >
            {children}
        </Tag>
    );
}
