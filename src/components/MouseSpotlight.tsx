"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

/**
 * Ambient radial spotlight that follows the cursor within its nearest positioned
 * ancestor. Absolutely positioned, pointer-events-none — purely decorative.
 * Falls back to a static centered glow under prefers-reduced-motion (no tracking,
 * no pulse) instead of disabling the atmosphere entirely.
 */
export default function MouseSpotlight() {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.4);
  const springConfig = { stiffness: 60, damping: 20, mass: 0.6 };
  const smx = useSpring(mx, springConfig);
  const smy = useSpring(my, springConfig);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const handleMove = (e: MouseEvent) => {
      const el = ref.current?.parentElement;
      if (!el) return;
      const bounds = el.getBoundingClientRect();
      mx.set((e.clientX - bounds.left) / bounds.width);
      my.set((e.clientY - bounds.top) / bounds.height);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [shouldReduceMotion, mx, my]);

  const xPercent = useTransform(smx, (v) => `${v * 100}%`);
  const yPercent = useTransform(smy, (v) => `${v * 100}%`);
  const background = useMotionTemplate`radial-gradient(600px circle at ${xPercent} ${yPercent}, rgba(212,175,55,0.14), transparent 60%)`;

  if (shouldReduceMotion) {
    return (
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(600px circle at 50% 35%, rgba(212,175,55,0.12), transparent 60%)",
        }}
      />
    );
  }

  return (
    <motion.div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{ background }}
    />
  );
}
