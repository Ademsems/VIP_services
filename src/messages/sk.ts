import { Messages } from "@/types/messages";

const sk: Messages = {
  nav: {
    home: "Domov",
    fleet: "Vozový park",
    routes: "Trasy a ceny",
    about: "O nás",
    booking: "Rezervácia",
    contact: "Kontakt",
    bookTransfer: "Objednať transfer",
  },
  hero: {
    eyebrow: "VIP SERVICE — Roman Brinzík",
    headline: "Exkluzívne letiskové a medzimestské transfery",
    subheadline:
      "Viedeň • Bratislava • Budapešť — Diskrétna a presná šoférska služba pre firemných manažérov. Pevné ceny, monitoring letov, dostupnosť 24/7.",
    ctaPrimary: "Objednať transfer",
    ctaSecondary: "Zobraziť vozový park",
    trust1: "Pevné ceny",
    trust2: "Dostupnosť 24/7",
    trust3: "Monitoring letov",
    scrollHint: "Posunutím preskúmajte viac",
  },
  booking: {
    title: "Objednajte si transfer",
    subtitle:
      "Vyplňte nižšie požiadavku na trasu — potvrdíme do niekoľkých minút cez WhatsApp.",
    stepRoute: "Trasa",
    stepDetails: "Detaily",
    stepConfirm: "Potvrdenie",
    from: "Vyzdvihnutie",
    to: "Cieľ",
    date: "Dátum vyzdvihnutia",
    time: "Čas vyzdvihnutia",
    passengers: "Počet cestujúcich",
    luggage: "Počet batožín",
    name: "Meno a priezvisko",
    phone: "Telefónne číslo",
    notes: "Špeciálne požiadavky",
    notesPlaceholder: "Číslo letu, detská sedačka, zastávky...",
    submit: "Odoslať cez WhatsApp",
    disclaimer:
      "Jedným klikom odošlete požiadavku priamo nášmu dispečingu cez WhatsApp — bez registrácie.",
    routeOptions: [
      { label: "Bratislava ↔ Letisko Viedeň (VIE)", value: "bts-vie" },
      { label: "Bratislava ↔ Centrum Viedne", value: "bts-vienna-city" },
      { label: "Viedeň ↔ Budapešť (BUD)", value: "vie-bud" },
      { label: "Bratislava ↔ Praha", value: "bts-prg" },
      { label: "Vlastná trasa", value: "custom" },
    ],
  },
  fleet: {
    title: "Prémiové Vozidlo & Komfort",
    subtitle:
      "Jedno starostlivo udržiavané vozidlo triedy Executive Black Edition — konzistentné, diskrétne a vybavené podľa najvyšších štandardov pri každom transfere.",
    vehicleName: "Mercedes-Benz S-Class",
    vehicleClass: "Executive Black Edition",
    passengers: "3 cestujúci",
    luggage: "3-4 veľké kufre",
    interiorLabel: "Interiér kabíny",
    amenities: [
      {
        title: "Štandard Executive Black Edition",
        description:
          "Sedanová a limuzínová špecifikácia, pripravená a udržiavaná podľa exkluzívneho štandardu pri každej jazde.",
      },
      {
        title: "Kožený interiér a tichá kabína",
        description:
          "Kvalitná koža v kombinácii so zvukovou izoláciou pre pokojnú jazdu bez rušivých vplyvov.",
      },
      {
        title: "Rýchle Wi-Fi a nabíjanie",
        description:
          "Zostaňte pripojení počas jazdy vďaka vysokorýchlostnému Wi-Fi a nabíjaniu na každom sedadle.",
      },
      {
        title: "Dostatočný priestor na batožinu",
        description:
          "Priestor pre 3-4 veľké kufre, ideálny pre pracovné cesty a letiskové transfery.",
      },
      {
        title: "Tónované sklá a klimatizačné zóny",
        description:
          "Tónované sklá súkromia a individuálne klimatizačné zóny zaisťujú komfort a diskrétnosť.",
      },
      {
        title: "Chladená voda v cene",
        description:
          "Chladená voda je pripravená pri každej jazde, spolu s ďalšími drobnými doplnkami na požiadanie.",
      },
    ],
  },
  routes: {
    title: "Trasy a pevné ceny",
    subtitle:
      "Transparentné, vopred dohodnuté ceny — žiadny taxameter, žiadne prekvapenia, žiadne prirážky.",
    items: [
      {
        from: "Bratislava",
        to: "Letisko Viedeň (VIE)",
        duration: "~55 min",
        price: "od €119",
      },
      {
        from: "Bratislava",
        to: "Centrum Viedne",
        duration: "~60 min",
        price: "od €129",
      },
      {
        from: "Viedeň",
        to: "Budapešť (BUD)",
        duration: "~2 h 40 min",
        price: "od €399",
      },
      {
        from: "Bratislava",
        to: "Praha",
        duration: "~3 h 40 min",
        price: "od €449",
      },
    ],
    priceNote:
      "Ceny sú za vozidlo, jedným smerom, vrátane mýta a DPH. Kontaktujte nás pre spiatočné cesty a viacdňové zájazdy.",
  },
  about: {
    title: "Diskrétnosť. Presnosť. Excelentnosť.",
    subtitle:
      "Dôvera manažérov, diplomatov a náročných cestujúcich naprieč strednou Európou od prvého dňa.",
    pillars: [
      {
        title: "Absolútna diskrétnosť",
        description:
          "Dôvernosť je štandardom. Váš itinerár, rozhovory a súkromie sú vždy chránené.",
      },
      {
        title: "Bezkompromisná presnosť",
        description:
          "Každý vodič prichádza o 10 minút skôr, sledovaný a potvrdený — pretože váš program nemôže čakať.",
      },
      {
        title: "Monitoring meškania letov",
        description:
          "Sledujeme váš let v reálnom čase a automaticky upravujeme vyzdvihnutie, aby meškanie nikdy nebolo vaším problémom.",
      },
      {
        title: "Služba Meet & Greet",
        description:
          "Profesionálny šofér vás čaká pri prílete s tabuľkou s menom, pripravený okamžite pomôcť s batožinou.",
      },
    ],
  },
  footer: {
    tagline:
      "Prémiové exekutívne transfery medzi Viedňou, Bratislavou a Budapešťou.",
    quickLinks: "Rýchle odkazy",
    contact: "Kontakt",
    legal: "Právne informácie",
    rights: "Všetky práva vyhradené.",
    licensed: "Licencovaný a poistený prevádzkovateľ osobnej dopravy.",
  },
  common: {
    whatsapp: "WhatsApp",
    call: "Zavolať",
    minutes: "min",
    hours: "hod",
  },
};

export default sk;
