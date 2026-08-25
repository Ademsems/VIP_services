"use client";

import { ArrowRight, Clock3, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import RevealSection from "./RevealSection";
import TiltCard from "./TiltCard";
import LuxuryImagePlaceholder from "./LuxuryImagePlaceholder";

/** Indexed to match t.routes.items order: Vienna Airport, Vienna City, Budapest, Prague. */
const ROUTE_IMAGES = [
  "/images/routes/route-vienna-airport",
  "/images/routes/route-vienna-city",
  "/images/routes/route-budapest",
  "/images/routes/route-prague",
];

export default function Routes() {
  const { t } = useLanguage();

  return (
    <section id="routes" className="relative bg-obsidian py-24">
      <div className="section-container">
        <RevealSection direction="right" className="mb-14 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            {t.nav.routes}
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold text-white sm:text-4xl">
            {t.routes.title}
          </h2>
          <p className="mt-4 text-slate-body">{t.routes.subtitle}</p>
        </RevealSection>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {t.routes.items.map((item, idx) => (
            <RevealSection
              key={`${item.from}-${item.to}`}
              direction={idx % 2 === 0 ? "left" : "right"}
              delay={idx * 0.06}
            >
              <TiltCard
                maxTilt={6}
                className="glass-deep flex items-center justify-between rounded-2xl p-6"
              >
                <div className="flex items-center gap-4">
                  <LuxuryImagePlaceholder
                    srcBase={ROUTE_IMAGES[idx]}
                    alt={`${item.from} to ${item.to}`}
                    icon={MapPin}
                    className="h-16 w-16 shrink-0"
                  />
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
                </div>
                <div className="font-display text-xl font-semibold tabular-nums text-gradient-gold">
                  {item.price}
                </div>
              </TiltCard>
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
