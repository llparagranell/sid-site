import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToTarget, scrollToTop } from "../lib/scroll";

/**
 * On every route change: jump to the top, or — when the URL carries a hash
 * such as /#contact — settle on that section once it has rendered.
 */
export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (!hash) {
            scrollToTop();
            return undefined;
        }
        const id = window.setTimeout(() => scrollToTarget(hash), 80);
        return () => window.clearTimeout(id);
    }, [pathname, hash]);

    return null;
}
