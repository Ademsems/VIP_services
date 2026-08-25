"use client";

import { useState } from "react";
import Image from "next/image";
import { EyeOff, Timer, PlaneLanding, Handshake } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import RevealSection from "./RevealSection";
import TiltCard from "./TiltCard";
import { IMAGE_EXTENSIONS, candidateSrc } from "@/lib/image";

const ICONS = [EyeOff, Timer, PlaneLanding, Handshake];
const ABOUT_IMAGE_BASE = "/images/about/about-atmosphere";

export default function About() {
  const { t } = useLanguage();
  const [extensionIndex, setExtensionIndex] = useState(0);
  const exhausted = extensionIndex >= IMAGE_EXTENSIONS.length;

  return (
    <section id="about" className="relative overflow-hidden bg-obsidian py-24">
      {!exhausted && (
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <Image
            key={extensionIndex}
            src={candidateSrc(ABOUT_IMAGE_BASE, extensionIndex)}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-40"
            onError={() => setExtensionIndex((i) => i + 1)}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/95 via-obsidian/50 to-obsidian/95" />
        </div>
      )}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-gold/5 blur-[120px]" />

      <div className="section-container relative">
        <RevealSection className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            {t.nav.about}
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold text-white sm:text-4xl">
            {t.about.title}
          </h2>
          <p className="mt-4 text-slate-body">{t.about.subtitle}</p>
        </RevealSection>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.about.pillars.map((pillar, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            return (
              <RevealSection
                key={pillar.title}
                direction={idx % 2 === 0 ? "left" : "right"}
                delay={idx * 0.06}
              >
                <TiltCard className="glass-deep h-full rounded-2xl p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-gold/5">
                    <Icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-body">
                    {pillar.description}
                  </p>
                </TiltCard>
              </RevealSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
