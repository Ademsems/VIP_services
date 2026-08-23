"use client";

import { motion } from "framer-motion";
import { Users, Briefcase, Check, Car } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import LuxuryImagePlaceholder from "./LuxuryImagePlaceholder";
import RevealSection from "./RevealSection";

export default function Fleet() {
  const { t } = useLanguage();

  return (
    <section id="fleet" className="relative bg-obsidian py-24">
      <div className="section-container">
        <RevealSection className="mb-14 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            {t.nav.fleet}
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
            {t.fleet.title}
          </h2>
          <p className="mt-4 text-slate-body">{t.fleet.subtitle}</p>
        </RevealSection>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {t.fleet.vehicles.map((vehicle, idx) => (
            <RevealSection
              key={vehicle.name}
              direction={idx % 2 === 0 ? "left" : "right"}
              delay={idx * 0.1}
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-surface transition-shadow duration-300 hover:border-gold/40 hover:shadow-gold-lg"
              >
                <LuxuryImagePlaceholder
                  alt={vehicle.name}
                  icon={Car}
                  label={vehicle.class}
                  className="aspect-[4/3] w-full"
                />

                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-white">
                    {vehicle.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-gold">
                    {vehicle.class}
                  </p>

                  <div className="mt-4 flex gap-4 text-sm text-slate-body">
                    <span className="flex items-center gap-1.5">
                      <Users className="h-4 w-4 text-gold" />
                      {vehicle.passengers}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="h-4 w-4 text-gold" />
                      {vehicle.luggage}
                    </span>
                  </div>

                  <ul className="mt-5 space-y-2 border-t border-border pt-4">
                    {vehicle.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-slate-body transition-colors duration-200 group-hover:text-white"
                      >
                        <Check className="h-3.5 w-3.5 shrink-0 text-gold" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 ring-1 ring-gold/30 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
