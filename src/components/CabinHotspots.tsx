"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

interface Hotspot {
  x: string;
  y: string;
  label: string;
  description: string;
  popoverPosition: "top" | "bottom";
}

/**
 * Short brand-style feature tags, intentionally kept in English across all
 * locales — the same "wordmark" treatment as LuxuryBadge (see CLAUDE.md).
 */
const HOTSPOTS: Hotspot[] = [
  {
    x: "28%",
    y: "32%",
    label: "Nappa Leather",
    description: "Hand-finished full-grain leather throughout the cabin.",
    popoverPosition: "top",
  },
  {
    x: "50%",
    y: "24%",
    label: "Acoustic Glass",
    description: "Laminated glazing cancels road and wind noise.",
    popoverPosition: "top",
  },
  {
    x: "72%",
    y: "34%",
    label: "Climate Control",
    description: "Independent zones keep every passenger comfortable.",
    popoverPosition: "top",
  },
  {
    x: "40%",
    y: "62%",
    label: "High-Speed Wi-Fi",
    description: "Stay connected with onboard broadband and charging.",
    popoverPosition: "bottom",
  },
];

export default function CabinHotspots() {
  const [active, setActive] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0">
      {HOTSPOTS.map((hotspot, idx) => (
        <div
          key={hotspot.label}
          className="pointer-events-auto absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: hotspot.x, top: hotspot.y }}
        >
          <button
            type="button"
            aria-label={`${hotspot.label} — ${hotspot.description}`}
            aria-expanded={active === idx}
            onMouseEnter={() => setActive(idx)}
            onMouseLeave={() => setActive((v) => (v === idx ? null : v))}
            onFocus={() => setActive(idx)}
            onBlur={() => setActive((v) => (v === idx ? null : v))}
            onClick={() => setActive((v) => (v === idx ? null : idx))}
            className="focus-gold group relative flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-gold/50 bg-obsidian/70 text-gold backdrop-blur-sm transition-transform duration-200 hover:scale-110"
          >
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold/30 motion-reduce:animate-none" />
            <Plus
              className={`relative h-3.5 w-3.5 transition-transform duration-200 ${
                active === idx ? "rotate-45" : ""
              }`}
              strokeWidth={2.5}
            />
          </button>

          <AnimatePresence>
            {active === idx && (
              <motion.div
                initial={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: hotspot.popoverPosition === "top" ? 6 : -6, scale: 0.95 }
                }
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: hotspot.popoverPosition === "top" ? 6 : -6, scale: 0.95 }
                }
                transition={{ duration: shouldReduceMotion ? 0.1 : 0.2 }}
                className={`glass-deep absolute left-1/2 z-10 w-44 -translate-x-1/2 rounded-xl p-3 text-left shadow-gold-lg ${
                  hotspot.popoverPosition === "top" ? "bottom-full mb-3" : "top-full mt-3"
                }`}
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-gold">
                  {hotspot.label}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-slate-body">
                  {hotspot.description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
