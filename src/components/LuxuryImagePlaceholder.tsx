"use client";

import { useState } from "react";
import Image from "next/image";
import { Car, LucideIcon } from "lucide-react";
import { IMAGE_EXTENSIONS, candidateSrc } from "@/lib/image";

interface LuxuryImagePlaceholderProps {
  /** Path without extension, e.g. "/images/fleet/vehicle-exterior" — any of
   *  IMAGE_EXTENSIONS is tried in turn, so any format works under that name. */
  srcBase?: string;
  alt: string;
  icon?: LucideIcon;
  label?: string;
  className?: string;
  priority?: boolean;
}

/**
 * Renders a Next.js <Image> when `srcBase` is provided, trying each format in
 * IMAGE_EXTENSIONS until one loads. Falls back to a CSS/SVG gold-mesh skeleton
 * once every candidate fails (or `srcBase` is omitted), guaranteeing
 * `next build` never fails on external image availability.
 */
export default function LuxuryImagePlaceholder({
  srcBase,
  alt,
  icon: Icon = Car,
  label,
  className = "",
  priority = false,
}: LuxuryImagePlaceholderProps) {
  const [extensionIndex, setExtensionIndex] = useState(0);
  const exhausted = extensionIndex >= IMAGE_EXTENSIONS.length;
  const showImage = Boolean(srcBase) && !exhausted;
  const currentSrc = showImage ? candidateSrc(srcBase as string, extensionIndex) : undefined;

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-border bg-surface ${className}`}
    >
      {showImage && (
        <Image
          key={currentSrc}
          src={currentSrc as string}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          onError={() => setExtensionIndex((i) => i + 1)}
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
