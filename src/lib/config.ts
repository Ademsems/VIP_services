export const SITE_CONFIG = {
  companyName: "VIP SERVICE",
  ownerName: "Roman Brinzík",
  phoneDisplay: "+421 900 123 456",
  phoneE164: "+421900123456",
  whatsappNumber: "421900123456",
  email: "booking@vipservice.sk",
  address: "Bratislava, Slovakia",
  url: "https://vipservice.sk",
};

export function buildWhatsAppLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encoded}`;
}

export function buildTelLink() {
  return `tel:${SITE_CONFIG.phoneE164}`;
}
