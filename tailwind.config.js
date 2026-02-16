/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Outfit", "sans-serif"],
            },
            colors: {
                "brand-dark": "#1e1b4b",
                "brand-muted": "#64748b",
                "brand-accent": "#4f46e5",
                "brand-bg": "#f8fafc",
                primary: "#1e1b4b",
                secondary: "#4f46e5",
                accent: "#818cf8",
                "main-text": "#0f172a",
                "sub-text": "#475569",
            },
        },
    },
    plugins: [],
};
