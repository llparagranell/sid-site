import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import cx from "../../lib/cx";

const base =
    "group inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-semibold " +
    "transition-[background-color,color,border-color,transform] duration-300 ease-out " +
    "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent " +
    "disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer select-none";

/**
 * variant: primary | accent | ghost   tone: light | dark (the band it sits on)
 * Renders <Link> for `to`, <a> for `href`, otherwise <button>.
 */
const styles = {
    light: {
        primary: "bg-ink text-paper hover:bg-ink-3",
        accent: "bg-accent text-white hover:bg-accent-deep",
        ghost: "border border-line bg-transparent text-ink hover:border-ink",
    },
    dark: {
        primary: "bg-paper text-ink hover:bg-white",
        accent: "bg-accent text-white hover:bg-accent-bright hover:text-ink",
        ghost: "border border-line-dark bg-transparent text-paper hover:border-paper",
    },
};

export default function Button({
    children,
    variant = "primary",
    tone = "light",
    arrow = false,
    icon: Icon,
    to,
    href,
    className,
    type = "button",
    ...rest
}) {
    const classes = cx(base, styles[tone]?.[variant] ?? styles.light.primary, className);
    const content = (
        <>
            {Icon && <Icon size={16} aria-hidden="true" />}
            <span>{children}</span>
            {arrow && (
                <ArrowUpRight
                    size={16}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
            )}
        </>
    );

    if (to) {
        return (
            <Link to={to} className={classes} {...rest}>
                {content}
            </Link>
        );
    }
    if (href) {
        const external = /^https?:\/\//.test(href);
        return (
            <a
                href={href}
                className={classes}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                {...rest}
            >
                {content}
            </a>
        );
    }
    return (
        <button type={type} className={classes} {...rest}>
            {content}
        </button>
    );
}
