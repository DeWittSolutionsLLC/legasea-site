// Small circular photo badge (e.g. a decorative icon next to a label).
// Centralizes the "img cropped into a circle" inline-style pattern that was
// hand-rolled at each call site (icon-badge.jsx style={{ borderRadius: "50%", objectFit: "cover" }}).
export default function IconBadge({
  src,
  alt = "",
  size,
  className,
  style,
  ...rest
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={className}
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        objectFit: "cover",
        ...style,
      }}
      {...rest}
    />
  );
}
