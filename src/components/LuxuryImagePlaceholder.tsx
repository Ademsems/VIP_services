"use client";

import { useState } from "react";
import Image from "next/image";
import { Car, LucideIcon } from "lucide-react";

interface LuxuryImagePlaceholderProps {
  src?: string;
  alt: string;
  icon?: LucideIcon;
  label?: string;
  className?: string;
  priority?: boolean;
}

/**
 * Renders a Next.js <Image> when `src` is provided and loads successfully.
 * Falls back to a CSS/SVG gold-mesh skeleton on missing src or load failure,
 * guaranteeing `next build` never fails on external image availability.
 */
export default function LuxuryImagePlaceholder({
  src,
  alt,
  icon: Icon = Car,
  label,
  className = "",
  priority = false,
}: LuxuryImagePlaceholderProps) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(src) && !failed;

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-border bg-surface ${className}`}
    >
      {showImage && (
        <Image
          src={src as string}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          onError={() => setFailed(true)}
        />
      )}

      {!showImage && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-mesh-gold bg-[#0F1117]">
          <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(135deg,transparent_40%,rgba(212,175,55,0.08)_50%,transparent_60%)] bg-[length:250%_250%] animate-shimmer motion-reduce:animate-none" />
          <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 bg-obsidian/60">
            <Icon className="h-7 w-7 text-gold" strokeWidth={1.5} />
          </div>
          {label && (
            <span className="relative font-display text-sm tracking-[0.2em] text-gold/80 uppercase">
              {label}
            </span>
          )}
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />
    </div>
  );
}
