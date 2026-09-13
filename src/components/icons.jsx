const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
export function IconClock({ size = 18, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...base}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.2 2" />
    </svg>
  );
}
export function IconPin({ size = 18, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...base}
      aria-hidden="true"
    >
      <path d="M12 21s-6.5-5.7-6.5-11a6.5 6.5 0 0 1 13 0c0 5.3-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  );
}
export function IconTicket({ size = 18, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...base}
      aria-hidden="true"
    >
      <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1.2a1.6 1.6 0 0 0 0 3.1V15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1.7a1.6 1.6 0 0 0 0-3.1V9Z" />
      <path d="M14 7.5v9" strokeDasharray="2.2 2.6" />
    </svg>
  );
}
export function IconChevronDown({ size = 18, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...base}
      aria-hidden="true"
    >
      <path d="M5 8.5 12 15l7-6.5" />
    </svg>
  );
}
export function IconArrowRight({ size = 18, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...base}
      aria-hidden="true"
    >
      <path d="M4 12h16M13 5l7 7-7 7" />
    </svg>
  );
}
export function IconDroplet({ size = 18, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...base}
      aria-hidden="true"
    >
      <path d="M12 3s6.5 7.2 6.5 11.5a6.5 6.5 0 1 1-13 0C5.5 10.2 12 3 12 3Z" />
    </svg>
  );
}
export function IconLeaf({ size = 18, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...base}
      aria-hidden="true"
    >
      <path d="M20 4C10 4 4 10 4 18v2h2c8 0 14-6 14-16Z" />
      <path d="M6 20c4-4 8-8 14-14" />
    </svg>
  );
}
export function IconSparkle({ size = 18, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...base}
      aria-hidden="true"
    >
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
    </svg>
  );
}
export function IconCompass({ size = 18, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...base}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="m14.5 9.5-2 5-5 2 2-5 5-2Z" />
    </svg>
  );
}
export function IconInstagram({ size = 18, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...base}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
export function IconTikTok({ size = 18, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M15.5 2h3a5.4 5.4 0 0 0 3.5 4.9v3.1a8.6 8.6 0 0 1-3.5-.9v6.4a6.4 6.4 0 1 1-6.4-6.4c.3 0 .6 0 .9.06v3.2a3.2 3.2 0 1 0 2.2 3.05V2Z" />
    </svg>
  );
}
export function IconYouTube({ size = 18, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...base}
      aria-hidden="true"
    >
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="M10.5 9.2v5.6l5-2.8-5-2.8Z" fill="currentColor" stroke="none" />
    </svg>
  );
}
export function IconFacebook({ size = 18, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M14.5 21v-7.6h2.6l.4-3H14.5V8.3c0-.87.24-1.46 1.5-1.46h1.6V4.14C17.3 4.1 16.34 4 15.2 4c-2.33 0-3.93 1.42-3.93 4.03v2.37H8.7v3h2.57V21h3.23Z" />
    </svg>
  );
}
