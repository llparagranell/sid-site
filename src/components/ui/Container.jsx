import cx from "../../lib/cx";

/** Page-width column: 1280px max, responsive gutters. */
export default function Container({ as: Tag = "div", className, children, ...rest }) {
    return (
        <Tag className={cx("mx-auto w-full max-w-[1280px] px-6 md:px-10 lg:px-14", className)} {...rest}>
            {children}
        </Tag>
    );
}
