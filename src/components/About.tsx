"use client";

import { motion } from "framer-motion";
import { EyeOff, Timer, PlaneLanding, Handshake } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import RevealSection from "./RevealSection";

const ICONS = [EyeOff, Timer, PlaneLanding, Handshake];

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative overflow-hidden bg-obsidian py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-gold/5 blur-[120px]" />

      <div className="section-container relative">
        <RevealSection className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            {t.nav.about}
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
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
                delay={idx * 0.1}
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="h-full rounded-2xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-gold/40"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-gold/5">
                    <Icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-body">
                    {pillar.description}
                  </p>
                </motion.div>
              </RevealSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
