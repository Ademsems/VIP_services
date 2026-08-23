"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Locale } from "@/types/messages";

const LOCALE_LABELS: Record<Locale, string> = {
  en: "EN",
  de: "DE",
  sk: "SK",
};

const NAV_LINKS: { key: keyof ReturnType<typeof useLanguage>["t"]["nav"]; href: string }[] = [
  { key: "fleet", href: "#fleet" },
  { key: "routes", href: "#routes" },
  { key: "about", href: "#about" },
  { key: "booking", href: "#booking" },
  { key: "contact", href: "#footer" },
];

export default function Navbar() {
  const { locale, setLocale, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-obsidian/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="section-container flex h-20 items-center justify-between">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          className="flex items-center gap-2 font-display text-xl tracking-[0.15em] text-white"
        >
          <span className="text-gradient-gold font-semibold">VIP</span>
          <span className="text-white/90">SERVICE</span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-slate-body transition-colors duration-200 hover:text-gold"
            >
              {t.nav[link.key]}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="relative hidden sm:block">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-slate-body transition-colors hover:border-gold/50 hover:text-gold"
            >
              <Globe className="h-3.5 w-3.5" />
              {LOCALE_LABELS[locale]}
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-24 overflow-hidden rounded-lg border border-border bg-surface shadow-gold-lg"
                >
                  {(Object.keys(LOCALE_LABELS) as Locale[]).map((l) => (
                    <button
                      key={l}
                      onClick={() => {
                        setLocale(l);
                        setLangOpen(false);
                      }}
                      className={`block w-full px-3 py-2 text-left text-xs font-medium transition-colors ${
                        locale === l
                          ? "bg-gold/10 text-gold"
                          : "text-slate-body hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {LOCALE_LABELS[l]}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={() => handleNavClick("#booking")}
            className="hidden rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-obsidian shadow-gold transition-transform duration-200 hover:scale-105 sm:block"
          >
            {t.nav.bookTransfer}
          </button>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="text-white lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-border bg-obsidian/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="rounded-md px-2 py-3 text-left text-sm font-medium text-slate-body hover:bg-white/5 hover:text-gold"
                >
                  {t.nav[link.key]}
                </button>
              ))}
              <div className="mt-2 flex gap-2">
                {(Object.keys(LOCALE_LABELS) as Locale[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLocale(l)}
                    className={`rounded-full border px-3 py-1.5 text-xs font-medium ${
                      locale === l
                        ? "border-gold text-gold"
                        : "border-border text-slate-body"
                    }`}
                  >
                    {LOCALE_LABELS[l]}
                  </button>
                ))}
              </div>
              <button
                onClick={() => handleNavClick("#booking")}
                className="mt-3 rounded-full bg-gold-gradient px-5 py-3 text-sm font-semibold text-obsidian"
              >
                {t.nav.bookTransfer}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
