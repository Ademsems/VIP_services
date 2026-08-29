/**
 * Decorative mini corridor telemetry line for Routes cards: a static faint
 * path plus a gold dashed overlay that pulses along the route on hover
 * (parent must carry the `group` class). Purely visual, no a11y role.
 */
export default function RoutePathSVG() {
  return (
    <svg
      viewBox="0 0 120 24"
      className="mt-2 h-6 w-full max-w-[140px]"
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M2 18 C 30 18, 30 6, 50 6 S 90 18, 118 6"
        stroke="rgba(212,175,55,0.25)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M2 18 C 30 18, 30 6, 50 6 S 90 18, 118 6"
        stroke="#D4AF37"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="6 10"
        className="opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:[animation:dash_1.4s_linear_infinite]"
      />
      <circle cx="2" cy="18" r="2.5" fill="#D4AF37" />
      <circle cx="118" cy="6" r="2.5" fill="#D4AF37" />
    </svg>
  );
}
