interface CarSilhouetteProps {
  className?: string;
}

/**
 * Hand-drawn side-profile luxury sedan silhouette — inline SVG, zero external
 * asset dependency (keeps the "zero broken assets" build guarantee intact).
 * Dark body fill with a gold rim-light stroke along the beltline/roofline for
 * a cinematic, backlit look against the obsidian background.
 */
export default function CarSilhouette({ className = "" }: CarSilhouetteProps) {
  return (
    <svg
      viewBox="0 0 900 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id="carRimLight" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
          <stop offset="45%" stopColor="#F4E5B2" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="carBodyFill" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#15181F" />
          <stop offset="100%" stopColor="#050505" />
        </linearGradient>
        <radialGradient id="wheelGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ground contact shadow */}
      <ellipse cx="450" cy="290" rx="380" ry="14" fill="#000000" opacity="0.5" />

      {/* Body silhouette: long hood, cabin greenhouse, sloped trunk */}
      <path
        d="M 40 230
           C 60 180, 110 165, 160 162
           L 210 120
           C 250 90, 300 78, 355 76
           L 520 76
           C 570 78, 610 92, 640 118
           L 690 160
           C 750 164, 810 178, 850 210
           L 858 228
           L 858 240
           C 858 250, 850 256, 840 256
           L 790 256
           C 786 226, 760 202, 728 202
           C 696 202, 670 226, 666 256
           L 300 256
           C 296 226, 270 202, 238 202
           C 206 202, 180 226, 176 256
           L 66 256
           C 52 256, 42 246, 40 232
           Z"
        fill="url(#carBodyFill)"
        stroke="url(#carRimLight)"
        strokeWidth="3"
      />

      {/* Greenhouse / window line */}
      <path
        d="M 218 118
           C 254 96, 300 84, 356 82
           L 518 82
           C 566 84, 602 96, 630 116
           L 610 118
           L 372 118
           Z"
        fill="#050505"
        opacity="0.9"
      />
      <path
        d="M 232 116
           C 264 98, 304 88, 350 86
           L 512 86
           C 552 88, 584 98, 608 114"
        stroke="url(#carRimLight)"
        strokeWidth="1.5"
        opacity="0.6"
      />

      {/* Beltline gold accent */}
      <path
        d="M 60 178 L 840 178"
        stroke="url(#carRimLight)"
        strokeWidth="1"
        opacity="0.35"
      />

      {/* Wheels */}
      <circle cx="238" cy="230" r="46" fill="url(#wheelGlow)" />
      <circle cx="238" cy="230" r="30" fill="#050505" stroke="#1E2230" strokeWidth="4" />
      <circle cx="238" cy="230" r="14" fill="#0F1117" stroke="#D4AF37" strokeWidth="1.5" opacity="0.6" />

      <circle cx="728" cy="230" r="46" fill="url(#wheelGlow)" />
      <circle cx="728" cy="230" r="30" fill="#050505" stroke="#1E2230" strokeWidth="4" />
      <circle cx="728" cy="230" r="14" fill="#0F1117" stroke="#D4AF37" strokeWidth="1.5" opacity="0.6" />
    </svg>
  );
}
