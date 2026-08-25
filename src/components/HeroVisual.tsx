"use client";

import { useState } from "react";
import Image from "next/image";
import CarSilhouette from "./CarSilhouette";

interface HeroVisualProps {
  src?: string;
  className?: string;
}

/**
 * Cinematic hero vehicle visual. Renders a real photograph (next/image) when
 * `src` is provided and loads successfully; falls back to the hand-drawn
 * CarSilhouette SVG on missing src or load failure — the same graceful-degrade
 * contract as LuxuryImagePlaceholder, adapted for Hero's borderless,
 * absolutely-positioned placement (no card chrome). `className` (positioning +
 * the animate-float class) is shared by both render paths so the photo and
 * the silhouette occupy identical space and motion.
 */
export default function HeroVisual({ src, className = "" }: HeroVisualProps) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(src) && !failed;

  if (showImage) {
    return (
      <div className={`${className} relative aspect-[900/320]`}>
        <Image
          src={src as string}
          alt=""
          fill
          priority
          sizes="(max-width: 1024px) 0px, 900px"
          className="object-contain object-bottom"
          onError={() => setFailed(true)}
        />
      </div>
    );
  }

  return <CarSilhouette className={className} />;
}
