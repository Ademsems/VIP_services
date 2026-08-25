"use client";

import {
  Users,
  Briefcase,
  Car,
  Armchair,
  Wifi,
  Snowflake,
  GlassWater,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import LuxuryImagePlaceholder from "./LuxuryImagePlaceholder";
import RevealSection from "./RevealSection";
import TiltCard from "./TiltCard";
import CabinHotspots from "./CabinHotspots";
import LuxuryBadge from "./LuxuryBadge";

const AMENITY_ICONS = [Car, Armchair, Wifi, Briefcase, Snowflake, GlassWater];

export default function Fleet() {
  const { t } = useLanguage();

  return (
    <section id="fleet" className="relative bg-obsidian py-24">
      <div className="section-container">
        <RevealSection className="mb-14 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            {t.nav.fleet}
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold text-white sm:text-4xl">
            {t.fleet.title}
          </h2>
          <p className="mt-4 text-slate-body">{t.fleet.subtitle}</p>
        </RevealSection>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:items-start">
          <RevealSection direction="left" className="space-y-6 lg:col-span-2">
            <div className="glass-panel overflow-hidden rounded-2xl shadow-gold-lg">
              <LuxuryImagePlaceholder
                srcBase="/images/fleet/vehicle-exterior"
                alt={t.fleet.vehicleName}
                icon={Car}
                label={t.fleet.vehicleClass}
                className="aspect-[4/3] w-full"
              />
              <div className="p-6">
                <div className="mb-3">
                  <LuxuryBadge label="Executive Class" />
                </div>
                <h3 className="font-display text-xl font-semibold text-white">
                  {t.fleet.vehicleName}
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-gold">
                  {t.fleet.vehicleClass}
                </p>

                <div className="mt-4 flex gap-4 border-t border-border/80 pt-4 text-sm text-slate-body">
                  <span className="flex items-center gap-1.5">
                    <Users className="h-4 w-4 text-gold" />
                    {t.fleet.passengers}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Briefcase className="h-4 w-4 text-gold" />
                    {t.fleet.luggage}
                  </span>
                </div>
              </div>
            </div>

            <div className="glass-panel rounded-2xl shadow-gold-lg">
              <div className="relative">
                <LuxuryImagePlaceholder
                  srcBase="/images/fleet/vehicle-interior"
                  alt={`${t.fleet.vehicleName} — ${t.fleet.interiorLabel}`}
                  icon={Armchair}
                  label={t.fleet.interiorLabel}
                  className="aspect-[4/3] w-full"
                />
                <CabinHotspots />
              </div>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-3">
            {t.fleet.amenities.map((amenity, idx) => {
              const Icon = AMENITY_ICONS[idx % AMENITY_ICONS.length];
              return (
                <RevealSection
                  key={amenity.title}
                  direction="right"
                  delay={idx * 0.06}
                >
                  <TiltCard className="glass-deep h-full rounded-2xl p-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-gold/5">
                      <Icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                    </div>
                    <h4 className="mt-4 font-display text-base font-semibold text-white">
                      {amenity.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-body">
                      {amenity.description}
                    </p>
                  </TiltCard>
                </RevealSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
