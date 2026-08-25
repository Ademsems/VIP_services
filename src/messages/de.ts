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
    title: "Premium Fahrzeug & Komfort",
    subtitle:
      "Ein einzelnes, sorgfältig gepflegtes Fahrzeug der Executive Black Edition — konsistent, diskret und nach höchstem Standard für jeden Transfer ausgestattet.",
    vehicleName: "Mercedes-Benz S-Klasse",
    vehicleClass: "Executive Black Edition",
    passengers: "3 Passagiere",
    luggage: "3-4 große Koffer",
    interiorLabel: "Innenraum",
    amenities: [
      {
        title: "Executive Black Edition Standard",
        description:
          "Limousinen-Ausstattung, für jede Fahrt nach höchstem Standard präsentiert und aufbereitet.",
      },
      {
        title: "Lederinterieur & ruhige Kabine",
        description:
          "Hochwertiges Leder kombiniert mit Schalldämmung für eine ruhige, ablenkungsfreie Fahrt.",
      },
      {
        title: "Highspeed-WLAN & Ladefunktion",
        description:
          "Bleiben Sie unterwegs vernetzt mit Highspeed-WLAN an Bord und Ladefunktion an jedem Sitzplatz.",
      },
      {
        title: "Großzügiger Gepäckraum",
        description:
          "Platz für 3-4 große Koffer — komfortabel für Geschäftsreisen und Flughafentransfers.",
      },
      {
        title: "Sichtschutzverglasung & Klimazonen",
        description:
          "Getönte Sichtschutzverglasung und individuelle Klimazonen sorgen für Komfort und Diskretion.",
      },
      {
        title: "Gekühltes Wasser inklusive",
        description:
          "Gekühltes Wasser steht auf jeder Fahrt bereit, ergänzt durch weitere kleine Annehmlichkeiten auf Anfrage.",
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
