import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE, canonicalPath, resolveRoute } from "../seo/routes";

/* The static tags in index.html are the defaults (what crawlers that skip JavaScript see).
   These helpers update them in place, so there is never a second <title>, <meta> or canonical. */
function setMeta(attr, key, content) {
    let tag = document.head.querySelector(`meta[${attr}="${key}"]`);
    if (content == null) {
        tag?.remove();
        return;
    }
    if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, key);
        document.head.appendChild(tag);
    }
    tag.setAttribute("content", content);
}

function setLink(rel, href) {
    let tag = document.head.querySelector(`link[rel="${rel}"]`);
    if (!tag) {
        tag = document.createElement("link");
        tag.setAttribute("rel", rel);
        document.head.appendChild(tag);
    }
    tag.setAttribute("href", href);
}

/**
 * Keeps <head> in step with the route: title, description, canonical URL and the
 * Open Graph / Twitter mirrors, all read from src/seo/routes.js. Unknown paths get
 * `noindex`, so a mistyped URL (which the router renders as an empty page) is not indexed.
 * Renders nothing; mount it once inside the Router.
 */
export default function Seo() {
    const { pathname } = useLocation();

    useEffect(() => {
        const route = resolveRoute(pathname);
        const url = `${SITE.origin}${canonicalPath(pathname)}`;
        const { title, description } = route;

        document.title = title;
        setMeta("name", "description", description);
        setMeta("name", "robots", route.noindex ? "noindex" : null);
        setLink("canonical", url);
        setMeta("property", "og:url", url);
        setMeta("property", "og:title", title);
        setMeta("property", "og:description", description);
        setMeta("name", "twitter:title", title);
        setMeta("name", "twitter:description", description);
    }, [pathname]);

    return null;
}
