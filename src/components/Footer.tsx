"use client";

import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { buildTelLink, DIRECT_WHATSAPP_LINK, LEGAL_ENTITY, SITE_CONFIG } from "@/lib/config";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  const links = [
    { key: t.nav.fleet, href: "#fleet" },
    { key: t.nav.routes, href: "#routes" },
    { key: t.nav.about, href: "#about" },
    { key: t.nav.booking, href: "#booking" },
  ];

  return (
    <footer id="footer" className="relative border-t border-border bg-surface">
      <div className="section-container grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-display text-xl tracking-[0.15em] text-white">
            <span className="text-gradient-gold font-semibold">VIP</span>
            <span>SERVICE</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-slate-body">{t.footer.tagline}</p>
          <p className="mt-2 text-xs text-slate-body/70">{SITE_CONFIG.ownerName}</p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {t.footer.quickLinks}
          </h4>
          <ul className="mt-4 space-y-3">
            {links.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="focus-gold cursor-pointer rounded-sm text-sm text-slate-body transition-colors duration-200 hover:text-gold"
                >
                  {link.key}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {t.footer.contact}
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-slate-body">
            <li>
              <a
                href={buildTelLink()}
                className="focus-gold flex items-center gap-2 rounded-sm transition-colors duration-200 hover:text-gold"
              >
                <Phone className="h-4 w-4 text-gold" />
                {SITE_CONFIG.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={DIRECT_WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-gold flex items-center gap-2 rounded-sm transition-colors duration-200 hover:text-gold"
              >
                <MessageCircle className="h-4 w-4 text-gold" />
                {t.common.whatsapp}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="focus-gold flex items-center gap-2 rounded-sm transition-colors duration-200 hover:text-gold"
              >
                <Mail className="h-4 w-4 text-gold" />
                {SITE_CONFIG.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gold" />
              {SITE_CONFIG.address}
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {t.footer.legal}
          </h4>
          <p className="mt-4 text-sm text-slate-body">{t.footer.licensed}</p>
          <address className="mt-4 text-xs not-italic leading-relaxed text-slate-body/70">
            {LEGAL_ENTITY.name}
            <br />
            {LEGAL_ENTITY.addressLine}
            <br />
            {LEGAL_ENTITY.cityLine}
            <br />
            IČO: {LEGAL_ENTITY.ico}
            <br />
            DIČ: {LEGAL_ENTITY.dic}
          </address>
        </div>
      </div>

      <div className="border-t border-border py-6">
        <div className="section-container flex flex-col items-center gap-2 text-xs text-slate-body/70 sm:flex-row sm:justify-between">
          <p>
            © {year} {SITE_CONFIG.companyName} — {SITE_CONFIG.ownerName}. {t.footer.rights}
          </p>
          <a
            href="https://dunajmedia.sk"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-gold rounded-sm transition-colors duration-200 hover:text-gold"
          >
            Designed by DunajMedia
          </a>
        </div>
      </div>
    </footer>
  );
}
