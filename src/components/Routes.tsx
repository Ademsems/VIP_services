"use client";

import { ArrowRight, Clock3, MapPin, Route as RouteIcon } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import RevealSection from "./RevealSection";
import TiltCard from "./TiltCard";
import LuxuryImagePlaceholder from "./LuxuryImagePlaceholder";
import RoutePathSVG from "./RoutePathSVG";

/** Indexed to match t.routes.items order: Vienna Airport, Vienna City, Budapest, Prague. */
const ROUTE_IMAGES = [
  "/images/routes/route-vienna-airport",
  "/images/routes/route-vienna-city",
  "/images/routes/route-budapest",
  "/images/routes/route-prague",
];

export default function Routes() {
  const { t } = useLanguage();

  const scrollToBooking = () =>
    document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" });

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
                className="glass-deep group flex flex-col gap-5 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between"
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
                    <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-body">
                      <span className="flex items-center gap-1.5">
                        <Clock3 className="h-3.5 w-3.5" />
                        {item.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <RouteIcon className="h-3.5 w-3.5" />
                        {item.distanceKm}
                      </span>
                    </div>
                    <RoutePathSVG />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={scrollToBooking}
                  className="focus-gold cursor-pointer self-start rounded-full border border-gold/30 bg-gold/5 px-4 py-2 font-display text-lg font-semibold tabular-nums text-gradient-gold transition-all duration-200 hover:scale-105 hover:border-gold/60 hover:bg-gold/10 active:scale-95 sm:self-auto"
                >
                  {item.price}
                </button>
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
