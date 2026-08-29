"use client";

import { useMemo, useState } from "react";
import { Users, Briefcase, Calendar, Clock, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { buildWhatsAppLink } from "@/lib/config";
import RevealSection from "./RevealSection";

export default function BookingForm() {
  const { t } = useLanguage();
  const [route, setRoute] = useState(t.booking.routeOptions[0].value);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [luggage, setLuggage] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  const routeLabel = useMemo(
    () => t.booking.routeOptions.find((r) => r.value === route)?.label ?? route,
    [route, t.booking.routeOptions]
  );

  const whatsappHref = useMemo(() => {
    const lines = [
      `*${t.booking.title}*`,
      `${t.booking.stepRoute}: ${routeLabel}`,
      date && `${t.booking.date}: ${date}`,
      time && `${t.booking.time}: ${time}`,
      `${t.booking.passengers}: ${passengers}`,
      `${t.booking.luggage}: ${luggage}`,
      name && `${t.booking.name}: ${name}`,
      phone && `${t.booking.phone}: ${phone}`,
      notes && `${t.booking.notes}: ${notes}`,
    ].filter(Boolean);
    return buildWhatsAppLink(lines.join("\n"));
  }, [routeLabel, date, time, passengers, luggage, name, phone, notes, t]);

  return (
    <section id="booking" className="relative bg-obsidian py-24">
      <div className="section-container">
        <RevealSection direction="left" className="mb-12 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            {t.nav.booking}
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold text-white sm:text-4xl">
            {t.booking.title}
          </h2>
          <p className="mt-4 text-slate-body">{t.booking.subtitle}</p>
        </RevealSection>

        <RevealSection direction="right" delay={0.1}>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="glass-panel rounded-2xl p-6 shadow-gold-lg sm:p-10"
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="md:col-span-2">
                <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-slate-body">
                  {t.booking.from} → {t.booking.to}
                </label>
                <select
                  value={route}
                  onChange={(e) => setRoute(e.target.value)}
                  className="w-full cursor-pointer rounded-lg border border-border bg-obsidian px-4 py-3 text-sm text-white outline-none transition-colors duration-200 focus:border-gold focus:ring-1 focus:ring-gold/40"
                >
                  {t.booking.routeOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-body">
                  <Calendar className="h-3.5 w-3.5" />
                  {t.booking.date}
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full rounded-lg border border-border bg-obsidian px-4 py-3 text-sm text-white outline-none transition-colors duration-200 focus:border-gold focus:ring-1 focus:ring-gold/40 [color-scheme:dark]"
                />
              </div>

              <div>
                <label className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-body">
                  <Clock className="h-3.5 w-3.5" />
                  {t.booking.time}
                </label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full rounded-lg border border-border bg-obsidian px-4 py-3 text-sm text-white outline-none transition-colors duration-200 focus:border-gold focus:ring-1 focus:ring-gold/40 [color-scheme:dark]"
                />
              </div>

              <div>
                <label className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-body">
                  <Users className="h-3.5 w-3.5" />
                  {t.booking.passengers}
                </label>
                <input
                  type="number"
                  min={1}
                  max={16}
                  value={passengers}
                  onChange={(e) => setPassengers(Number(e.target.value))}
                  className="w-full rounded-lg border border-border bg-obsidian px-4 py-3 text-sm text-white outline-none transition-colors duration-200 focus:border-gold focus:ring-1 focus:ring-gold/40"
                />
              </div>

              <div>
                <label className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-body">
                  <Briefcase className="h-3.5 w-3.5" />
                  {t.booking.luggage}
                </label>
                <input
                  type="number"
                  min={0}
                  max={20}
                  value={luggage}
                  onChange={(e) => setLuggage(Number(e.target.value))}
                  className="w-full rounded-lg border border-border bg-obsidian px-4 py-3 text-sm text-white outline-none transition-colors duration-200 focus:border-gold focus:ring-1 focus:ring-gold/40"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-slate-body">
                  {t.booking.name}
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-border bg-obsidian px-4 py-3 text-sm text-white outline-none transition-colors duration-200 focus:border-gold focus:ring-1 focus:ring-gold/40"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-slate-body">
                  {t.booking.phone}
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-lg border border-border bg-obsidian px-4 py-3 text-sm text-white outline-none transition-colors duration-200 focus:border-gold focus:ring-1 focus:ring-gold/40"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-slate-body">
                  {t.booking.notes}
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={t.booking.notesPlaceholder}
                  rows={3}
                  className="w-full resize-none rounded-lg border border-border bg-obsidian px-4 py-3 text-sm text-white outline-none transition-colors duration-200 placeholder:text-slate-body/50 focus:border-gold focus:ring-1 focus:ring-gold/40"
                />
              </div>
            </div>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-sheen focus-gold mt-8 flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-gold-gradient px-8 py-4 text-sm font-semibold text-obsidian shadow-gold transition-transform duration-200 hover:scale-[1.02] active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                {t.booking.submit}
              </span>
            </a>
            <p className="mt-4 text-center text-xs text-slate-body">
              {t.booking.disclaimer}
            </p>
          </form>
        </RevealSection>
      </div>
    </section>
  );
}
