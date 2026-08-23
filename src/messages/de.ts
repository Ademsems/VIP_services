import { Messages } from "@/types/messages";

const de: Messages = {
  nav: {
    home: "Startseite",
    fleet: "Fahrzeugflotte",
    routes: "Strecken & Preise",
    about: "Über uns",
    booking: "Buchung",
    contact: "Kontakt",
    bookTransfer: "Transfer buchen",
  },
  hero: {
    eyebrow: "VIP SERVICE — Roman Brinzík",
    headline: "Exekutive Flughafen- & Städtetransfers",
    subheadline:
      "Wien • Bratislava • Budapest — Diskreter, pünktlicher Chauffeurservice für Führungskräfte. Festpreise, Flugüberwachung, rund um die Uhr verfügbar.",
    ctaPrimary: "Transfer buchen",
    ctaSecondary: "Flotte ansehen",
    trust1: "Festpreise",
    trust2: "24/7 verfügbar",
    trust3: "Flugüberwachung",
    scrollHint: "Zum Entdecken scrollen",
  },
  booking: {
    title: "Transfer anfragen",
    subtitle:
      "Füllen Sie die Streckenanfrage aus — wir bestätigen innerhalb weniger Minuten per WhatsApp.",
    stepRoute: "Strecke",
    stepDetails: "Details",
    stepConfirm: "Bestätigen",
    from: "Abholung",
    to: "Ziel",
    date: "Abholdatum",
    time: "Abholzeit",
    passengers: "Passagiere",
    luggage: "Gepäckstücke",
    name: "Vollständiger Name",
    phone: "Telefonnummer",
    notes: "Besondere Wünsche",
    notesPlaceholder: "Flugnummer, Kindersitz, Zwischenstopps...",
    submit: "Per WhatsApp senden",
    disclaimer:
      "Mit einem Klick senden Sie Ihre Anfrage direkt an unser Dispositionsteam über WhatsApp — kein Konto erforderlich.",
    routeOptions: [
      { label: "Bratislava ↔ Flughafen Wien (VIE)", value: "bts-vie" },
      { label: "Bratislava ↔ Wien Stadtzentrum", value: "bts-vienna-city" },
      { label: "Wien ↔ Budapest (BUD)", value: "vie-bud" },
      { label: "Bratislava ↔ Prag", value: "bts-prg" },
      { label: "Individuelle Strecke", value: "custom" },
    ],
  },
  fleet: {
    title: "Die Flotte",
    subtitle:
      "Eine ausgewählte Reihe von Mercedes-Benz Fahrzeugen, gepflegt nach höchsten Standards für Geschäftsreisen.",
    vehicles: [
      {
        name: "Mercedes-Benz S-Klasse",
        class: "Executive Limousine",
        passengers: "3 Passagiere",
        luggage: "2 große Koffer",
        features: [
          "Vollleder-Innenraum",
          "WLAN an Bord",
          "Sichtschutzverglasung",
          "Klimazonen",
        ],
      },
      {
        name: "Mercedes-Benz E-Klasse",
        class: "Business Limousine",
        passengers: "3 Passagiere",
        luggage: "2 große Koffer",
        features: [
          "Premium-Ledersitze",
          "WLAN an Bord",
          "Getönte Sichtschutzverglasung",
          "Wasser & Annehmlichkeiten",
        ],
      },
      {
        name: "Mercedes-Benz V-Klasse",
        class: "Executive Van",
        passengers: "6 Passagiere",
        luggage: "6 große Koffer",
        features: [
          "Konferenzbestuhlung",
          "WLAN an Bord",
          "Erweiterte Beinfreiheit",
          "Ideal für Gruppen & Teams",
        ],
      },
    ],
  },
  routes: {
    title: "Strecken & Festpreise",
    subtitle:
      "Transparente, vereinbarte Preise — kein Taxameter, keine Überraschungen, keine Preiserhöhungen.",
    items: [
      {
        from: "Bratislava",
        to: "Flughafen Wien (VIE)",
        duration: "~55 Min.",
        price: "ab €119",
      },
      {
        from: "Bratislava",
        to: "Wien Stadtzentrum",
        duration: "~60 Min.",
        price: "ab €129",
      },
      {
        from: "Wien",
        to: "Budapest (BUD)",
        duration: "~2 Std. 40 Min.",
        price: "ab €399",
      },
      {
        from: "Bratislava",
        to: "Prag",
        duration: "~3 Std. 40 Min.",
        price: "ab €449",
      },
    ],
    priceNote:
      "Preise pro Fahrzeug, einfache Fahrt, inklusive Maut und MwSt. Kontaktieren Sie uns für Rückfahrten und mehrtägige Arrangements.",
  },
  about: {
    title: "Diskretion. Präzision. Exzellenz.",
    subtitle:
      "Das Vertrauen von Führungskräften, Diplomaten und anspruchsvollen Reisenden in Mitteleuropa seit dem ersten Tag.",
    pillars: [
      {
        title: "Absolute Diskretion",
        description:
          "Vertraulichkeit ist Standard. Ihre Reiseroute, Gespräche und Privatsphäre bleiben stets geschützt.",
      },
      {
        title: "Kompromisslose Pünktlichkeit",
        description:
          "Jeder Fahrer trifft 10 Minuten früher ein, verfolgt und bestätigt — denn Ihr Zeitplan kann nicht warten.",
      },
      {
        title: "Flugverspätungsüberwachung",
        description:
          "Wir verfolgen Ihren Flug in Echtzeit und passen die Abholung automatisch an, damit Verspätungen nie zu Ihrem Problem werden.",
      },
      {
        title: "Meet & Greet Service",
        description:
          "Ein professioneller Chauffeur erwartet Sie bei der Ankunft mit einem Namensschild und hilft sofort mit dem Gepäck.",
      },
    ],
  },
  footer: {
    tagline:
      "Premium Executive-Transfers zwischen Wien, Bratislava und Budapest.",
    quickLinks: "Schnellzugriff",
    contact: "Kontakt",
    legal: "Impressum",
    rights: "Alle Rechte vorbehalten.",
    licensed: "Lizenzierter und versicherter Personenbeförderungsdienst.",
  },
  common: {
    whatsapp: "WhatsApp",
    call: "Jetzt anrufen",
    minutes: "Min.",
    hours: "Std.",
  },
};

export default de;
