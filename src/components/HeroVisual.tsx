"use client";

import { useState } from "react";
import Image from "next/image";
import CarSilhouette from "./CarSilhouette";
import { IMAGE_EXTENSIONS, candidateSrc } from "@/lib/image";

interface HeroVisualProps {
  /** Path without extension, e.g. "/images/hero/hero-executive-mercedes" —
   *  any of IMAGE_EXTENSIONS is tried in turn, so any format works. */
  srcBase?: string;
  className?: string;
}

/**
 * Cinematic hero vehicle visual. Renders a real photograph (next/image) when
 * `srcBase` is provided, trying each format in IMAGE_EXTENSIONS until one
 * loads; falls back to the hand-drawn CarSilhouette SVG once every candidate
 * fails — the same graceful-degrade contract as LuxuryImagePlaceholder,
 * adapted for Hero's borderless, absolutely-positioned placement (no card
 * chrome). `className` (positioning + the animate-float class) is shared by
 * both render paths so the photo and the silhouette occupy identical space
 * and motion.
 */
export default function HeroVisual({ srcBase, className = "" }: HeroVisualProps) {
  const [extensionIndex, setExtensionIndex] = useState(0);
  const exhausted = extensionIndex >= IMAGE_EXTENSIONS.length;
  const showImage = Boolean(srcBase) && !exhausted;

  if (showImage) {
    const currentSrc = candidateSrc(srcBase as string, extensionIndex);
    return (
      <div className={`${className} aspect-[900/320]`}>
        <Image
          key={currentSrc}
          src={currentSrc}
          alt=""
          fill
          priority
          sizes="(max-width: 1024px) 0px, 900px"
          className="object-contain object-bottom"
          onError={() => setExtensionIndex((i) => i + 1)}
        />
      </div>
    );
  }

  return <CarSilhouette className={className} />;
}
