"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealSectionProps {
  children: ReactNode;
  direction?: "left" | "right" | "up";
  delay?: number;
  className?: string;
}

export default function RevealSection({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: RevealSectionProps) {
  const initial =
    direction === "left"
      ? { x: -50, opacity: 0 }
      : direction === "right"
      ? { x: 50, opacity: 0 }
      : { y: 40, opacity: 0 };

  return (
    <motion.div
      initial={initial}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
