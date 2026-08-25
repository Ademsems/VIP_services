export const SITE_CONFIG = {
  companyName: "VIP SERVICE",
  ownerName: "Roman Brinzík",
  phoneDisplay: "+421 911 444 469",
  phoneE164: "+421911444469",
  whatsappNumber: "421911444469",
  email: "booking@vipservice.sk",
  address: "Bratislava, Slovakia",
  url: "https://vipservice.sk",
};

/**
 * Statutory registration details for the operating legal entity — required
 * disclosure on Slovak commercial websites. Kept as raw facts (not i18n
 * copy): a company's registered name, address, and ID numbers don't
 * translate.
 */
export const LEGAL_ENTITY = {
  name: "Queen Suzanne Investment - QSI, s.r.o.",
  addressLine: "Furdekova 8",
  cityLine: "Bratislava 851 03",
  ico: "52977005",
  dic: "2121247403",
};

export function buildWhatsAppLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encoded}`;
}

export function buildTelLink() {
  return `tel:${SITE_CONFIG.phoneE164}`;
}

/**
 * Fixed dispatch link used for quick-contact touchpoints (header, footer,
 * floating button) — a pre-filled general inquiry, distinct from the
 * booking form's dynamically composed WhatsApp message.
 */
export const DIRECT_WHATSAPP_LINK =
  "https://wa.me/421911444469?text=Hello%20VIP%20Service,%20I%20would%20like%20to%20inquire%20about%20a%20transfer.";
