/** Join class names, skipping falsy values. */
export default function cx(...parts) {
    return parts.flat().filter(Boolean).join(" ");
}
