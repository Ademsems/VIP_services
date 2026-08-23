export type Locale = "en" | "de" | "sk";

export interface Messages {
  nav: {
    home: string;
    fleet: string;
    routes: string;
    about: string;
    booking: string;
    contact: string;
    bookTransfer: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trust1: string;
    trust2: string;
    trust3: string;
    scrollHint: string;
  };
  booking: {
    title: string;
    subtitle: string;
    stepRoute: string;
    stepDetails: string;
    stepConfirm: string;
    from: string;
    to: string;
    date: string;
    time: string;
    passengers: string;
    luggage: string;
    name: string;
    phone: string;
    notes: string;
    notesPlaceholder: string;
    submit: string;
    disclaimer: string;
    routeOptions: { label: string; value: string }[];
  };
  fleet: {
    title: string;
    subtitle: string;
    vehicles: {
      name: string;
      class: string;
      passengers: string;
      luggage: string;
      features: string[];
    }[];
  };
  routes: {
    title: string;
    subtitle: string;
    items: {
      from: string;
      to: string;
      duration: string;
      price: string;
    }[];
    priceNote: string;
  };
  about: {
    title: string;
    subtitle: string;
    pillars: {
      title: string;
      description: string;
    }[];
  };
  footer: {
    tagline: string;
    quickLinks: string;
    contact: string;
    legal: string;
    rights: string;
    licensed: string;
  };
  common: {
    whatsapp: string;
    call: string;
    minutes: string;
    hours: string;
  };
}
