"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Phone, MessageCircle, ShieldCheck, Clock, PlaneTakeoff } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { buildTelLink, DIRECT_WHATSAPP_LINK, SITE_CONFIG } from "@/lib/config";
import MouseSpotlight from "./MouseSpotlight";
import HeroVisual from "./HeroVisual";
import LuxuryBadge from "./LuxuryBadge";

export default function Hero() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  const trustMarkers = [
    { icon: ShieldCheck, label: t.hero.trust1 },
    { icon: Clock, label: t.hero.trust2 },
    { icon: PlaneTakeoff, label: t.hero.trust3 },
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-obsidian pt-20"
    >
      <MouseSpotlight />
      <div className="pointer-events-none absolute inset-0 bg-mesh-gold" />
      <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-gold/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-gold/5 blur-[100px]" />

      <HeroVisual
        srcBase="/images/hero/hero-executive-mercedes"
        className={`pointer-events-none absolute -right-24 bottom-0 hidden w-[900px] max-w-none opacity-70 lg:block ${
          shouldReduceMotion ? "" : "animate-float"
        }`}
      />

      <div className="section-container relative py-24">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex flex-wrap items-center gap-3"
        >
          <span className="text-sm font-medium uppercase tracking-[0.3em] text-gold">
            {t.hero.eyebrow}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mb-6 flex flex-wrap gap-2"
        >
          <LuxuryBadge label="Executive Class" />
          <LuxuryBadge label="24/7 Private Dispatch" />
          <LuxuryBadge label="Flight Tracked" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-4xl text-balance font-display text-4xl font-semibold leading-tight text-gradient-gold sm:text-5xl lg:text-6xl"
        >
          {t.hero.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-2xl text-balance text-lg text-slate-body"
        >
          {t.hero.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <button
            onClick={() => scrollTo("#booking")}
            className="focus-gold cursor-pointer rounded-full bg-gold-gradient px-8 py-4 text-sm font-semibold text-obsidian shadow-gold transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            {t.hero.ctaPrimary}
          </button>
          <button
            onClick={() => scrollTo("#fleet")}
            className="focus-gold cursor-pointer rounded-full border border-border px-8 py-4 text-sm font-semibold text-white transition-colors duration-200 hover:border-gold/50 hover:text-gold active:scale-95"
          >
            {t.hero.ctaSecondary}
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a
            href={buildTelLink()}
            className="focus-gold glass-panel flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-medium text-white transition-colors duration-200 hover:border-gold/50"
          >
            <Phone className="h-4 w-4 text-gold" />
            {SITE_CONFIG.phoneDisplay}
          </a>
          <a
            href={DIRECT_WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-gold glass-panel flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-medium text-white transition-colors duration-200 hover:border-gold/50"
          >
            <MessageCircle className="h-4 w-4 text-gold" />
            {t.common.whatsapp}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-14 grid grid-cols-1 gap-4 border-t border-border pt-8 sm:grid-cols-3"
        >
          {trustMarkers.map(({ icon: Icon, label }) => (
            <div key={label} className="group flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/5 transition-colors duration-200 group-hover:border-gold/60 group-hover:bg-gold/10">
                <Icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
              </div>
              <span className="text-sm font-medium text-white">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        animate={shouldReduceMotion ? {} : { y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs text-slate-body"
      >
        <span className="uppercase tracking-[0.2em]">{t.hero.scrollHint}</span>
        <ChevronDown className="h-4 w-4 text-gold" />
      </motion.div>
    </section>
  );
}
