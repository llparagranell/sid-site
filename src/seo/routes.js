/**
 * Per-route document metadata: the single source for <Seo /> (runtime <head> updates)
 * and for the sitemap.xml that vite.config.js emits at build time. Plain data, no React,
 * because the Vite config imports this file in Node.
 *
 * Titles and descriptions restate each page's own headline and lede; keep them in step
 * when that copy changes. Titles stay under ~60 characters, descriptions under ~155.
 */

export const SITE = {
    name: "DevGrowth Solutions",
    alternateName: "DevGrowth",
    /* Canonical origin. www.devgrowthsolutions.com redirects here (Vercel domain settings). */
    origin: "https://devgrowthsolutions.com",
    title: "DevGrowth Solutions | Engineering MVPs That Matter",
    description:
        "DevGrowth Solutions engineers MVPs that ship, scale and matter — web, mobile, AI and cloud products for founders and growing businesses.",
    ogImage: "/og-image.png",
};

const SUFFIX = ` | ${SITE.name}`;

/** A static page, listed in the sitemap under its own path. */
const page = (path, title, description) => ({
    path,
    title: `${title}${SUFFIX}`,
    description,
    sitemap: [path],
});

const CLOUD = page(
    "/services/cloud-solutions",
    "Cloud Solutions",
    "Secure, scalable cloud systems so your business can grow without worrying about infrastructure: cloud migration, serverless, databases and cost optimization.",
);

export const routes = [
    { path: "/", title: SITE.title, description: SITE.description, sitemap: ["/"] },
    page(
        "/about",
        "About Us",
        "DevGrowth Solutions builds high-performance MVPs and scalable enterprise products, bridging complex technical challenges and smooth user experiences.",
    ),
    page(
        "/case-studies",
        "Case Studies",
        "Deep dives into how we partner with experienced teams to build high-impact digital products: the brief, the build and the metric that moved.",
    ),
    page(
        "/blog",
        "Blog",
        "Thoughts on scaling technology, engineering culture and the future of digital products, from the DevGrowth Solutions team.",
    ),
    /* BlogView renders the same article for every id, so only /blog/0 goes in the sitemap. */
    {
        path: "/blog/:id",
        title: `Scaling MVPs for Seed-Stage Startups${SUFFIX}`,
        description:
            "Launching an MVP is a milestone, not the finish line. The technical decisions you make at the MVP stage decide whether your product scales or struggles.",
        sitemap: ["/blog/0"],
    },
    page(
        "/services/web-development",
        "Web Development Services",
        "From idea to market-ready website: fast, secure and responsive web applications built with React, Next.js and Node.js to help startups launch confidently.",
    ),
    page(
        "/services/mobile-app-development",
        "Mobile App Development",
        "Scalable iOS and Android apps that power growth, built with React Native and Flutter and shipped to the App Store and Google Play.",
    ),
    page(
        "/services/ai-machine-learning",
        "AI & Machine Learning",
        "AI-powered systems that automate, optimize and scale your operations: one well-scoped model or AI feature, shipped inside your product and measured.",
    ),
    page(
        "/services/ai-automation",
        "AI Automation with n8n",
        "n8n workflows and AI agents that handle the routine so your team handles the exceptions. Hosted on your infrastructure, owned by you.",
    ),
    CLOUD,
    /* Retired URL: App.jsx redirects it to Cloud Solutions. Same metadata, kept out of the sitemap. */
    { ...CLOUD, path: "/services/database-management", sitemap: [] },
    page(
        "/services/ui-ux-design",
        "UI/UX Design",
        "Intuitive, modern and meaningful digital experiences that turn visitors into loyal users: user research, prototyping and design systems.",
    ),
    page(
        "/services/custom-software",
        "Custom Software Development",
        "Software built around the way you work: internal tools, APIs and integrations that support your growth instead of slowing it down.",
    ),
    page(
        "/industries/ecommercesolutions",
        "E-Commerce Development",
        "Fast, secure and scalable online stores that turn visitors into customers: storefronts, payments and checkout, inventory and orders.",
    ),
    page(
        "/industries/healthcare",
        "Healthcare Software",
        "Secure, reliable and user-friendly digital systems that help healthcare providers deliver better patient care.",
    ),
    page(
        "/industries/education",
        "Education & EdTech Software",
        "Digital platforms that help schools, institutes and EdTech startups deliver simpler, smarter and more accessible learning experiences.",
    ),
    page(
        "/industries/fintech",
        "Fintech Software",
        "Secure and scalable technology for modern financial businesses: reliable platforms that let fintech companies innovate while maintaining trust and security.",
    ),
    page(
        "/industries/it-software",
        "IT & Software Solutions",
        "From SaaS platforms to complex backend systems, we help IT and software companies build stronger, scalable products with technology that's built to grow.",
    ),
    page(
        "/industries/logistics",
        "Logistics Software",
        "Digital systems that keep logistics businesses organized, reduce delays and grow without chaos: efficient transportation and fleet management systems.",
    ),
    page(
        "/industries/supply-chain",
        "Supply Chain Software",
        "Clarity and control for complex supply chains: systems to manage suppliers, inventory and distribution with better visibility and fewer disruptions.",
    ),
];

/** Metadata for unknown paths. The router renders nothing there, so keep them out of the index. */
export const NOT_FOUND = { title: `Page not found${SUFFIX}`, description: SITE.description, noindex: true };

/** Strip trailing slashes (except on the root) so /about/ and /about share one canonical URL. */
export function canonicalPath(pathname) {
    return pathname.length > 1 ? pathname.replace(/\/+$/, "") || "/" : "/";
}

/** "/blog/:id" → /^\/blog\/[^/]+$/ */
const toPattern = (path) => new RegExp(`^${path.replace(/:[^/]+/g, "[^/]+")}$`);

export function resolveRoute(pathname) {
    const path = canonicalPath(pathname);
    return routes.find((route) => toPattern(route.path).test(path)) ?? NOT_FOUND;
}

/** Every URL the sitemap lists, in page order. */
export const sitemapPaths = () => routes.flatMap((route) => route.sitemap);
