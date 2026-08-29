import {
    Layers,
    PenTool,
    Sparkles,
    Zap,
    ShoppingCart,
    Palette,
    Database,
    Code2,
} from "lucide-react";

export const services = [
    {
        icon: Layers,
        title: "Web Development",
        desc: "Custom websites and web applications built with modern technologies.",
        points: ["Responsive websites", "SPA & SSR", "Performance optimization"],
        layoutId: "icon-Layers",
        path: "/services/web-development"
    },
    {
        icon: PenTool,
        title: "Mobile App Development",
        desc: "Native mobile solutions for iOS and Android.",
        points: ["iOS & Android", "React Native / Flutter", "App Store deployment"],
        layoutId: "icon-PenTool",
        path: "/services/mobile-app-development"
    },
    {
        icon: Sparkles,
        title: "AI & Machine Learning",
        desc: "One well-scoped model or AI feature, shipped inside your product and measured.",
        points: ["Predictive models", "NLP & CV", "Model deployment"],
        layoutId: "icon-Sparkles",
        path: "/services/ai-machine-learning"
    },
    {
        icon: Zap,
        title: "Cloud Solutions",
        desc: "Scalable cloud infrastructure and migration services.",
        points: ["Cloud migration", "Serverless", "Cost optimization"],
        layoutId: "icon-Zap",
        path: "/services/cloud-solutions"
    },

    {
        icon: Palette,
        title: "UI/UX Design",
        desc: "Screens tested with real users before anything gets built.",
        points: ["User research", "Prototyping", "Design systems"],
        path: "/services/ui-ux-design"
    },
    {
        icon: ShoppingCart,
        title: "E-commerce",
        desc: "High-conversion digital storefronts and marketplaces.",
        points: ["Storefronts", "Payments & checkout", "Inventory & orders"],
        path: "/industries/ecommercesolutions"
    },
    {
        icon: Database,
        title: "Database Management",
        desc: "Robust database design, optimization, and maintenance.",
        points: ["Schema design", "Backups", "Performance tuning"],
        path: "/services/database-management"
    },
    {
        icon: Code2,
        title: "Custom Software",
        desc: "Internal tools, APIs and integrations built around how your business runs.",
        points: ["Custom apps", "APIs", "Integrations"],
        path: "/services/custom-software"
    },
];

