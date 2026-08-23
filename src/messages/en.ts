import { Messages } from "@/types/messages";

const en: Messages = {
  nav: {
    home: "Home",
    fleet: "Fleet",
    routes: "Routes & Rates",
    about: "About",
    booking: "Booking",
    contact: "Contact",
    bookTransfer: "Book Transfer",
  },
  hero: {
    eyebrow: "VIP SERVICE — Roman Brinzík",
    headline: "Executive Airport & Intercity Transfers",
    subheadline:
      "Vienna • Bratislava • Budapest — Discreet, punctual chauffeur service for corporate executives. Fixed rates, flight monitoring, 24/7 availability.",
    ctaPrimary: "Book Your Transfer",
    ctaSecondary: "View Fleet",
    trust1: "Fixed Rates",
    trust2: "24/7 Availability",
    trust3: "Flight Monitoring",
    scrollHint: "Scroll to explore",
  },
  booking: {
    title: "Request Your Transfer",
    subtitle:
      "Complete the corridor request below — we confirm within minutes over WhatsApp.",
    stepRoute: "Route",
    stepDetails: "Details",
    stepConfirm: "Confirm",
    from: "Pickup",
    to: "Destination",
    date: "Pickup Date",
    time: "Pickup Time",
    passengers: "Passengers",
    luggage: "Luggage Pieces",
    name: "Full Name",
    phone: "Phone Number",
    notes: "Special Requests",
    notesPlaceholder: "Flight number, child seat, extra stops...",
    submit: "Send via WhatsApp",
    disclaimer:
      "One tap sends your request directly to our dispatch team via WhatsApp — no account required.",
    routeOptions: [
      { label: "Bratislava ↔ Vienna Airport (VIE)", value: "bts-vie" },
      { label: "Bratislava ↔ Vienna City Center", value: "bts-vienna-city" },
      { label: "Vienna ↔ Budapest (BUD)", value: "vie-bud" },
      { label: "Bratislava ↔ Prague", value: "bts-prg" },
      { label: "Custom Route", value: "custom" },
    ],
  },
  fleet: {
    title: "Executive Vehicle & Onboard Experience",
    subtitle:
      "A single, meticulously maintained Executive Black Edition vehicle — consistent, discreet, and appointed to the highest standard for every transfer.",
    vehicleName: "Mercedes-Benz S-Class",
    vehicleClass: "Executive Black Edition",
    passengers: "3 Passengers",
    luggage: "3-4 Executive Suitcases",
    amenities: [
      {
        title: "Executive Black Edition Standard",
        description:
          "Sedan and limousine specification, presented and detailed to executive standard for every departure.",
      },
      {
        title: "Leather Interior & Quiet Cabin",
        description:
          "High-grade leather upholstery paired with acoustic insulation for a calm, distraction-free ride.",
      },
      {
        title: "High-Speed Wi-Fi & Charging",
        description:
          "Stay connected en route with onboard high-speed Wi-Fi and device charging at every seat.",
      },
      {
        title: "Ample Luggage Capacity",
        description:
          "Room for 3-4 executive suitcases, comfortably accommodating business travel and airport transfers.",
      },
      {
        title: "Privacy Glass & Climate Zones",
        description:
          "Tinted privacy glass and individual climate zones keep every passenger comfortable and unseen.",
      },
      {
        title: "Complimentary Chilled Water",
        description:
          "Bottled water is chilled and ready on every journey, along with other small courtesies on request.",
      },
    ],
  },
  routes: {
    title: "Routes & Fixed Rates",
    subtitle:
      "Transparent, pre-agreed pricing — no meters, no surprises, no surge pricing.",
    items: [
      {
        from: "Bratislava",
        to: "Vienna Airport (VIE)",
        duration: "~55 min",
        price: "from €119",
      },
      {
        from: "Bratislava",
        to: "Vienna City Center",
        duration: "~60 min",
        price: "from €129",
      },
      {
        from: "Vienna",
        to: "Budapest (BUD)",
        duration: "~2h 40min",
        price: "from €399",
      },
      {
        from: "Bratislava",
        to: "Prague",
        duration: "~3h 40min",
        price: "from €449",
      },
    ],
    priceNote:
      "Prices are per vehicle, one-way, inclusive of tolls and VAT. Contact us for return trips and multi-day arrangements.",
  },
  about: {
    title: "Discretion. Precision. Excellence.",
    subtitle:
      "Trusted by executives, diplomats, and discerning travelers across Central Europe since day one.",
    pillars: [
      {
        title: "Absolute Discretion",
        description:
          "Confidentiality is standard practice. Your itinerary, conversations, and privacy remain protected at all times.",
      },
      {
        title: "Uncompromising Punctuality",
        description:
          "Every driver arrives 10 minutes early, tracked and confirmed — because your schedule cannot wait.",
      },
      {
        title: "Flight Delay Monitoring",
        description:
          "We track your flight in real time and adjust pickup automatically, so delays never become your problem.",
      },
      {
        title: "Meet & Greet Service",
        description:
          "A professional chauffeur awaits you at arrivals with a name sign, ready to assist with luggage immediately.",
      },
    ],
  },
  footer: {
    tagline:
      "Premium executive transfers between Vienna, Bratislava, and Budapest.",
    quickLinks: "Quick Links",
    contact: "Contact",
    legal: "Legal Notice",
    rights: "All rights reserved.",
    licensed: "Licensed & insured passenger transport operator.",
  },
  common: {
    whatsapp: "WhatsApp",
    call: "Call Now",
    minutes: "min",
    hours: "hrs",
  },
};

export default en;
