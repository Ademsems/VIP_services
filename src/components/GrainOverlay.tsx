/**
 * Fixed, full-viewport film-grain texture sitting above the background but
 * below all interactive content. Static (no animation), so it needs no
 * reduced-motion guard. See .grain-overlay in globals.css.
 */
export default function GrainOverlay() {
  return (
    <div
      aria-hidden
      className="grain-overlay pointer-events-none fixed inset-0 z-[1] opacity-20 mix-blend-overlay"
    />
  );
}
