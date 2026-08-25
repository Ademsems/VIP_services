import { LucideIcon } from "lucide-react";

interface LuxuryBadgeProps {
  label: string;
  icon?: LucideIcon;
  className?: string;
}

/**
 * Small glowing metallic-gold pill tag — e.g. "EXECUTIVE CLASS",
 * "24/7 PRIVATE DISPATCH". Decorative brand marks kept in a single
 * consistent language across locales, the way a wordmark or logo stays
 * untranslated (see CLAUDE.md "Luxury Badges" note).
 */
export default function LuxuryBadge({
  label,
  icon: Icon,
  className = "",
}: LuxuryBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/[0.06] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-gradient-gold shadow-[0_0_20px_rgba(212,175,55,0.12)] ${className}`}
    >
      {Icon && <Icon className="h-3 w-3 text-gold" strokeWidth={2} />}
      {label}
    </span>
  );
}
