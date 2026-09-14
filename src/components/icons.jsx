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
export function IconCheck({ size = 18, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...base}
      aria-hidden="true"
    >
      <path d="M4 12.5 9.5 18 20 6" />
    </svg>
  );
}
export function IconPlus({ size = 18, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...base}
      aria-hidden="true"
    >
      <path d="M12 4v16M4 12h16" />
    </svg>
  );
}
export function IconSun({ size = 18, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...base}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v3M12 18.5v3M4.6 4.6l2.1 2.1M17.3 17.3l2.1 2.1M2.5 12h3M18.5 12h3M4.6 19.4l2.1-2.1M17.3 6.7l2.1-2.1" />
    </svg>
  );
}
export function IconCloudSun({ size = 18, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...base}
      aria-hidden="true"
    >
      <path d="M7.5 9.5a2.9 2.9 0 0 1 2.6-3 4 4 0 0 1 7.7 1.3 3.3 3.3 0 0 1-.6 6.6H8.2a3.2 3.2 0 0 1-.7-6.3Z" />
      <path d="M4.5 4.5v2M2.5 8h2M6 5.6 7.4 7" />
    </svg>
  );
}
export function IconCloudRain({ size = 18, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...base}
      aria-hidden="true"
    >
      <path d="M6.5 10.5a3.3 3.3 0 0 1 3-3.3 4.3 4.3 0 0 1 8.3 1.4 3.5 3.5 0 0 1-.6 6.9H7a3.4 3.4 0 0 1-.5-5Z" />
      <path d="M8.5 18.5 7.5 21M12.5 18.5l-1 2.5M16.5 18.5l-1 2.5" />
    </svg>
  );
}
export function IconUsers({ size = 18, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...base}
      aria-hidden="true"
    >
      <circle cx="9" cy="8.5" r="3" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <path d="M16 5.3a3 3 0 0 1 0 5.9M18.5 14.2A6 6 0 0 1 21 20" />
    </svg>
  );
}
export function IconQuote({ size = 18, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M9.5 6.5C6 7.4 4 10 4 13.3 4 16 5.9 18 8.5 18c2 0 3.5-1.5 3.5-3.5S10.5 11 8.7 11c-.3 0-.6 0-.9.1.4-1.6 1.7-2.8 3.4-3.3L9.5 6.5Zm9 0c-3.5.9-5.5 3.5-5.5 6.8 0 2.7 1.9 4.7 4.5 4.7 2 0 3.5-1.5 3.5-3.5s-1.5-3.5-3.3-3.5c-.3 0-.6 0-.9.1.4-1.6 1.7-2.8 3.4-3.3l-1.7-1.3Z" />
    </svg>
  );
}
export function IconWallet({ size = 18, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...base}
      aria-hidden="true"
    >
      <rect x="3" y="6.5" width="18" height="12" rx="2.5" />
      <path d="M3 10.5h18" />
      <circle cx="16.5" cy="14.3" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}
export function IconList({ size = 18, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...base}
      aria-hidden="true"
    >
      <path d="M8 6.5h12M8 12h12M8 17.5h12" />
      <circle cx="4" cy="6.5" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="4" cy="12" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="4" cy="17.5" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}
export function IconStar({ size = 18, className, filled = true }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3.5 14.6 9l6.1.6-4.6 4.1 1.3 6L12 16.5l-5.4 3.2 1.3-6-4.6-4.1L9.4 9 12 3.5Z" />
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
