"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import { ReactNode, useRef } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  /** Max rotation in degrees applied at the card edges. */
  maxTilt?: number;
}

/**
 * Wraps content in a pointer-driven 3D tilt: rotateX/rotateY track the cursor
 * position within the card bounds, with a subtle scale-up and gold border-beam
 * glow (.glow-gold-hover) on hover. Tilt is disabled under prefers-reduced-motion
 * — the glow/scale still respond, but nothing rotates.
 */
export default function TiltCard({
  children,
  className = "",
  maxTilt = 10,
}: TiltCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const springConfig = { stiffness: 200, damping: 20, mass: 0.5 };
  const spx = useSpring(px, springConfig);
  const spy = useSpring(py, springConfig);

  const rotateX = useTransform(spy, [0, 1], [maxTilt, -maxTilt]) as MotionValue<number>;
  const rotateY = useTransform(spx, [0, 1], [-maxTilt, maxTilt]) as MotionValue<number>;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !ref.current) return;
    const bounds = ref.current.getBoundingClientRect();
    px.set((e.clientX - bounds.left) / bounds.width);
    py.set((e.clientY - bounds.top) / bounds.height);
  };

  const handleMouseLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        shouldReduceMotion
          ? undefined
          : { rotateX, rotateY, transformPerspective: 800 }
      }
      whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className={`glow-gold-hover ${className}`}
    >
      {children}
    </motion.div>
  );
}
