"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock3 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import RevealSection from "./RevealSection";

export default function Routes() {
  const { t } = useLanguage();

  return (
    <section id="routes" className="relative bg-obsidian py-24">
      <div className="section-container">
        <RevealSection direction="right" className="mb-14 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            {t.nav.routes}
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
            {t.routes.title}
          </h2>
          <p className="mt-4 text-slate-body">{t.routes.subtitle}</p>
        </RevealSection>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {t.routes.items.map((item, idx) => (
            <RevealSection
              key={`${item.from}-${item.to}`}
              direction={idx % 2 === 0 ? "left" : "right"}
              delay={idx * 0.08}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="flex items-center justify-between rounded-2xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-gold/40 hover:shadow-gold"
              >
                <div>
                  <div className="flex items-center gap-2 text-base font-semibold text-white">
                    <span>{item.from}</span>
                    <ArrowRight className="h-4 w-4 text-gold" />
                    <span>{item.to}</span>
                  </div>
                  <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-body">
                    <Clock3 className="h-3.5 w-3.5" />
                    {item.duration}
                  </div>
                </div>
                <div className="font-display text-xl font-semibold text-gradient-gold">
                  {item.price}
                </div>
              </motion.div>
            </RevealSection>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-slate-body">
          {t.routes.priceNote}
        </p>
      </div>
    </section>
  );
}
