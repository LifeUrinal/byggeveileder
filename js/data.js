/**
 * Innhold for Byggeveileder.
 * Sjekklistene er strukturert etter den praktiske byggeprosessen (fasene under),
 * og hvert punkt er koblet til det kapittelet i TEK17 (Byggteknisk forskrift)
 * som regulerer temaet. `component` kobler punktet til en klikkbar del av
 * husillustrasjonen (se index.html / main.js).
 */

const ICONS = {
  compass: `<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5 13 13l-4.5 2.5L11 11l4.5-2.5Z"/>`,
  document: `<path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4"/><path d="m9.5 14 2 2 3.5-4"/>`,
  shovel: `<path d="M9 3 5 7l3 3 4-4"/><path d="M11.5 8.5 18 15a3 3 0 1 1-3.5 3.5L8 12"/>`,
  frame: `<path d="M4 12 12 4l8 8"/><path d="M6 11v9h12v-9"/><path d="M10 20v-6h4v6"/>`,
  roof: `<path d="M3 12 12 4l9 8"/><path d="M6 10.5V20h12v-9.5"/><path d="M15 4v4"/>`,
  window: `<rect x="4" y="4" width="16" height="16" rx="1"/><path d="M12 4v16M4 12h16"/>`,
  wrench: `<path d="M14.7 6.3a4 4 0 0 0-5.6 5.1L4 16.5 7.5 20l5.1-5.1a4 4 0 0 0 5.1-5.6l-2.8 2.8-2-2Z"/>`,
  roller: `<rect x="4" y="5" width="12" height="6" rx="1"/><path d="M9 11v8"/><path d="M9 15h4a2 2 0 0 0 2-2v-1"/>`,
  flame: `<path d="M12 3s5 4.5 5 9a5 5 0 0 1-10 0c0-1.4.6-2.4 1.3-3.3.2 1 1 1.6 1.7 1.3C9.3 9 9 7.2 9 6c1 .3 3 1 3-3Z"/>`,
  key: `<circle cx="8" cy="15" r="4"/><path d="M11 12 19 4"/><path d="M16 7l2 2"/><path d="M19 4l2 2"/>`
};

const PHASES = [
  {
    id: "forprosjekt",
    number: 1,
    title: "Forprosjekt og rammebetingelser",
    lede: "Før første spadetak avklares hva som skal bygges, hvor mye, og hvilke krav som gjelder for akkurat dette tiltaket.",
    icon: ICONS.compass,
    chapters: [1, 2, 5, 6],
    items: [
      {
        title: "Avklar formål og hvilke krav som gjelder tiltaket",
        chapter: 1,
        chapterTitle: "Felles bestemmelser",
        ref: "§ 1-1, § 1-2",
        text: "Kartlegg hvilken tiltaksklasse og hvilke bestemmelser i TEK17 som gjelder for akkurat ditt prosjekt, ut fra tiltakets art og omfang."
      },
      {
        title: "Sjekk tomtens utnyttelsesgrad",
        chapter: 5,
        chapterTitle: "Grad av utnytting",
        ref: "§ 5-1 – § 5-9",
        text: "Beregn bebygd areal (BYA) og bruksareal (BRA) opp mot det reguleringsplanen eller kommuneplanen tillater på tomten."
      },
      {
        title: "Fastsett beregnings- og målemetoder",
        chapter: 6,
        chapterTitle: "Beregnings- og måleregler",
        ref: "§ 6-1 – § 6-5",
        text: "Bruk riktige definisjoner for areal, volum og høyder, slik at søknaden og prosjekteringen bygger på samme grunnlag."
      },
      {
        title: "Planlegg hvordan kravoppfyllelse skal dokumenteres",
        chapter: 2,
        chapterTitle: "Dokumentasjon for oppfyllelse av krav",
        ref: "§ 2-1 – § 2-4",
        text: "Bestem tidlig hvordan hvert krav i forskriften skal dokumenteres oppfylt gjennom prosjektet – prosjekteringen, utførelsen og ferdig byggverk."
      }
    ]
  },
  {
    id: "soknad",
    number: 2,
    title: "Søknad og myndighetsbehandling",
    lede: "Tiltaket meldes til kommunen. Her legges grunnlaget for tomtebruk, uteareal og hvordan bygget skal forholde seg til omgivelsene.",
    icon: ICONS.document,
    chapters: [3, 7, 8, 9],
    items: [
      {
        title: "Dokumenter byggevarenes egenskaper",
        chapter: 3,
        chapterTitle: "Dokumentasjon av byggevarer",
        ref: "§ 3-1",
        text: "Byggevarer som skal inngå i byggverket skal ha tilstrekkelig dokumenterte egenskaper, slik at det kan vurderes om kravene i forskriften oppfylles."
      },
      {
        title: "Vurder sikkerhet mot naturpåkjenninger",
        chapter: 7,
        chapterTitle: "Sikkerhet mot naturpåkjenninger",
        ref: "§ 7-1 – § 7-4",
        text: "Kartlegg fare for flom, skred, stormflo og overvann på tomten, og prosjekter tiltaket slik at det har tilstrekkelig sikkerhet gjennom byggverkets levetid.",
        component: "tomt"
      },
      {
        title: "Planlegg opparbeidet uteareal, adkomst og parkering",
        chapter: 8,
        chapterTitle: "Opparbeidet uteareal",
        ref: "§ 8-1 – § 8-10",
        text: "Uteoppholdsareal, gangatkomst, parkering og terrengbehandling skal være egnet for bruk og oppfylle krav til universell utforming.",
        component: "terrasse"
      },
      {
        title: "Ivareta ytre miljø",
        chapter: 9,
        chapterTitle: "Ytre miljø",
        ref: "§ 9-1",
        text: "Tiltaket skal prosjekteres og utføres slik at det ytre miljøet blir ivaretatt, blant annet overvannshåndtering, avfall, energi og materialbruk."
      }
    ]
  },
  {
    id: "grunnarbeid",
    number: 3,
    title: "Grunnarbeid og fundamentering",
    lede: "Grunnen graves ut, dreneres og forberedes, og fundamentet som skal bære hele bygget støpes.",
    icon: ICONS.shovel,
    chapters: [7, 10, 13],
    items: [
      {
        title: "Dimensjonering av fundament og bæreevne",
        chapter: 10,
        chapterTitle: "Konstruksjonssikkerhet",
        ref: "§ 10-1",
        text: "Fundamentet skal ha tilstrekkelig bæreevne og stabilitet til å tåle laster gjennom hele byggverkets planlagte levetid.",
        component: "fundament"
      },
      {
        title: "Drenering og fuktsikring av grunnmur",
        chapter: 13,
        chapterTitle: "Inneklima og helse",
        ref: "Fukt, våtrom og rom med vanninstallasjoner",
        text: "Grunnmur og gulv på grunn skal sikres mot fukt fra grunnen, med drenering, fuktmembran og tilstrekkelig fall bort fra bygningen."
      },
      {
        title: "Sikring mot telehiv og overvann",
        chapter: 7,
        chapterTitle: "Sikkerhet mot naturpåkjenninger",
        ref: "§ 7-2",
        text: "Grunnarbeidet skal ta hensyn til lokale grunnforhold, frostdybde og håndtering av overvann slik at byggverket ikke tar skade over tid."
      }
    ]
  },
  {
    id: "rabygg",
    number: 4,
    title: "Bæresystem og råbygg",
    lede: "Bindingsverk, bjelkelag og etasjeskillere reises – skjelettet som resten av huset skal henge på.",
    icon: ICONS.frame,
    chapters: [10, 11],
    items: [
      {
        title: "Bæreevne og stabilitet",
        chapter: 10,
        chapterTitle: "Konstruksjonssikkerhet",
        ref: "§ 10-1",
        text: "Byggverket skal prosjekteres og utføres slik at det har tilfredsstillende sikkerhet for bæreevne og stabilitet ved alle relevante lastsituasjoner."
      },
      {
        title: "Robusthet mot uforholdsmessig svikt",
        chapter: 10,
        chapterTitle: "Konstruksjonssikkerhet",
        ref: "§ 10-2, § 10-3",
        text: "Konstruksjonen skal ikke være mer sårbar for skader enn nødvendig, og en lokal skade skal ikke føre til at hele byggverket kollapser."
      },
      {
        title: "Brannmotstand i bærende konstruksjoner",
        chapter: 11,
        chapterTitle: "Sikkerhet ved brann",
        ref: "§ 11-4",
        text: "Bærende konstruksjoner skal opprettholde sin bæreevne i den tiden som er nødvendig for rømning, redning og slokking ved brann."
      }
    ]
  },
  {
    id: "tak",
    number: 5,
    title: "Tak og klimaskjerming",
    lede: "Bygget lukkes mot vær og vind. Taktekking, snøsikring og gjennomføringer må spille sammen.",
    icon: ICONS.roof,
    chapters: [13, 7, 15, 11],
    items: [
      {
        title: "Tett og fuktsikkert tak",
        chapter: 13,
        chapterTitle: "Inneklima og helse",
        ref: "Fukt",
        text: "Taket skal utføres slik at det hindrer skadelig fukttransport til konstruksjonen, med riktig lufting, undertak og tekking.",
        component: "tak"
      },
      {
        title: "Snølast og sikring mot naturpåkjenninger",
        chapter: 7,
        chapterTitle: "Sikkerhet mot naturpåkjenninger",
        ref: "§ 7-3",
        text: "Taket skal dimensjoneres for lokal snølast, og snøfangere eller andre tiltak skal hindre snø- og issørpe fra å skade personer eller eiendom."
      },
      {
        title: "Ventilasjon og gjennomføringer i tak",
        chapter: 15,
        chapterTitle: "Installasjoner og anlegg",
        ref: "Kap. 15",
        text: "Avtrekk fra bad, kjøkken og ventilasjonsanlegg føres gjennom tak med tette, frostsikre gjennomføringer og tilstrekkelig avstand til luftinntak.",
        component: "takhatt"
      },
      {
        title: "Skorstein og ildsted",
        chapter: 11,
        chapterTitle: "Sikkerhet ved brann",
        ref: "§ 11-4",
        text: "Skorstein og ildsted skal ha tilstrekkelig avstand til brennbart materiale, og skal ikke svekke brannmotstanden i konstruksjonen den går gjennom.",
        component: "skorstein"
      }
    ]
  },
  {
    id: "fasade",
    number: 6,
    title: "Fasade, vinduer og dører",
    lede: "Klimaskjermen får sitt uttrykk og sin energiytelse: yttervegg, glass, dører og rekkverk.",
    icon: ICONS.window,
    chapters: [12, 13, 14],
    items: [
      {
        title: "Energieffektiv klimaskjerm",
        chapter: 14,
        chapterTitle: "Energi",
        ref: "§ 14-3, § 14-4",
        text: "Yttervegger, vinduer og dører skal samlet oppfylle forskriftens energikrav, enten via energitiltak eller en energirammeberegning for hele bygget.",
        component: "fasade"
      },
      {
        title: "Dagslys og utsyn fra oppholdsrom",
        chapter: 13,
        chapterTitle: "Inneklima og helse",
        ref: "Lys og utsyn",
        text: "Rom for varig opphold skal ha tilfredsstillende tilgang på dagslys og utsyn, normalt løst gjennom vindusareal og plassering.",
        component: "vinduer"
      },
      {
        title: "Rekkverk på balkong og trapp",
        chapter: 12,
        chapterTitle: "Planløsning og bygningsdeler",
        ref: "§ 12-15, § 12-17",
        text: "Rekkverk skal ha tilstrekkelig høyde og utforming til å hindre fall, med åpninger som er trygge også for barn.",
        component: "balkong"
      },
      {
        title: "Universell utforming av inngangsparti",
        chapter: 12,
        chapterTitle: "Planløsning og bygningsdeler",
        ref: "§ 12-4, § 12-5",
        text: "Atkomst til bygget skal, der det kreves, være trinnfri, med tilstrekkelig dørbredde og fri manøvreringsplass utenfor inngangsdøren.",
        component: "inngang"
      }
    ]
  },
  {
    id: "installasjoner",
    number: 7,
    title: "Tekniske installasjoner",
    lede: "Varme, vann, avløp, elektro og ventilasjon knyttes sammen og gjør huset levelig.",
    icon: ICONS.wrench,
    chapters: [15, 16, 13],
    items: [
      {
        title: "Varme-, ventilasjons- og sanitæranlegg",
        chapter: 15,
        chapterTitle: "Installasjoner og anlegg",
        ref: "Kap. 15",
        text: "Installasjonene skal dimensjoneres og utføres slik at de fungerer som forutsatt og ikke medfører fare for liv, helse eller materielle verdier."
      },
      {
        title: "Innvendige vann- og avløpsinstallasjoner",
        chapter: 15,
        chapterTitle: "Installasjoner og anlegg",
        ref: "Kap. 15",
        text: "Rørinstallasjoner skal utføres med tilstrekkelig kapasitet, lekkasjesikring og fall, og våtrom skal ha membran og sluk som fungerer sammen."
      },
      {
        title: "Sikkerhetskontroll av heis",
        chapter: 16,
        chapterTitle: "Sikkerhetskontroll av heis",
        ref: "Kap. 16",
        text: "Heis, rulletrapp og løfteplattform skal kontrolleres jevnlig av et kontrollorgan for å sikre at anlegget er trygt i bruk."
      },
      {
        title: "Luftkvalitet og ventilasjon i oppholdsrom",
        chapter: 13,
        chapterTitle: "Inneklima og helse",
        ref: "Luftkvalitet",
        text: "Ventilasjonen skal sikre tilfredsstillende luftkvalitet i alle rom for varig opphold, tilpasset bruken av rommet."
      }
    ]
  },
  {
    id: "innredning",
    number: 8,
    title: "Innredning og planløsning",
    lede: "Vegger, gulv og rom får sin endelige form – og skal fungere for alle som skal bruke bygget.",
    icon: ICONS.roller,
    chapters: [12, 13],
    items: [
      {
        title: "Planløsning og tilgjengelighet",
        chapter: 12,
        chapterTitle: "Planløsning og bygningsdeler",
        ref: "§ 12-1 – § 12-18",
        text: "Rom og bygningsdeler skal ha en størrelse og utforming som er hensiktsmessig for den tiltenkte bruken, inkludert krav til tilgjengelig boenhet."
      },
      {
        title: "Lydforhold og romakustikk",
        chapter: 13,
        chapterTitle: "Inneklima og helse",
        ref: "Lyd og vibrasjoner",
        text: "Bygningen skal utformes slik at støy og lyd fra andre rom, installasjoner og omgivelser ikke gir uakseptable forhold for brukerne."
      },
      {
        title: "Termisk inneklima",
        chapter: 13,
        chapterTitle: "Inneklima og helse",
        ref: "Termisk inneklima",
        text: "Rom for varig opphold skal ha et termisk inneklima som gir helsemessig tilfredsstillende forhold, sommer som vinter."
      }
    ]
  },
  {
    id: "brann",
    number: 9,
    title: "Brannsikkerhet og rømning",
    lede: "Rømningsveier, branncelledeling og varsling testes og dokumenteres før bygget kan tas i bruk.",
    icon: ICONS.flame,
    chapters: [11],
    items: [
      {
        title: "Rømningsveier og brannceller",
        chapter: 11,
        chapterTitle: "Sikkerhet ved brann",
        ref: "§ 11-8 – § 11-10",
        text: "Byggverket skal deles inn i brannceller, og det skal finnes tilstrekkelige, sikre rømningsveier ut i det fri ved brann."
      },
      {
        title: "Brannalarm og slokkeutstyr",
        chapter: 11,
        chapterTitle: "Sikkerhet ved brann",
        ref: "§ 11-12",
        text: "Byggverket skal ha brannalarmanlegg eller røykvarslere og manuelt slokkeutstyr tilpasset risikoen i akkurat dette bygget."
      },
      {
        title: "Brannmotstand i bygningsdeler",
        chapter: 11,
        chapterTitle: "Sikkerhet ved brann",
        ref: "§ 11-4, § 11-6",
        text: "Vegger, dekker og dører som skiller brannceller skal ha den brannmotstanden som kreves for å hindre spredning av brann og røyk."
      }
    ]
  },
  {
    id: "overlevering",
    number: 10,
    title: "Ferdigstillelse og overlevering",
    lede: "Siste kontroller gjøres, dokumentasjon samles, og nøklene overleveres til eier.",
    icon: ICONS.key,
    chapters: [4, 17, 2],
    items: [
      {
        title: "FDV-dokumentasjon",
        chapter: 4,
        chapterTitle: "Dokumentasjon for forvaltning, drift og vedlikehold",
        ref: "§ 4-1, § 4-2",
        text: "Eier skal motta dokumentasjon som gjør det mulig å forvalte, drifte og vedlikeholde byggverket på en forsvarlig måte."
      },
      {
        title: "Klimagassregnskap for materialer",
        chapter: 17,
        chapterTitle: "Klima og livsløp",
        ref: "§ 17-1",
        text: "For tiltak som omfattes av kravet, skal det utarbeides klimagassregnskap som viser utslipp knyttet til materialbruken i byggverket."
      },
      {
        title: "Samlet dokumentasjon for kravoppfyllelse",
        chapter: 2,
        chapterTitle: "Dokumentasjon for oppfyllelse av krav",
        ref: "§ 2-1",
        text: "Før ferdigattest gis, skal det foreligge dokumentasjon som samlet sett viser at byggverket oppfyller kravene i forskriften."
      }
    ]
  }
];

const HOUSE_LABELS = {
  tak: "Tak",
  skorstein: "Skorstein",
  takhatt: "Ventilasjon i tak",
  fasade: "Yttervegg / fasade",
  vinduer: "Vinduer",
  balkong: "Balkong og rekkverk",
  inngang: "Inngangsparti",
  fundament: "Fundament / grunnmur",
  terrasse: "Uteareal / terrasse",
  tomt: "Tomt og grunnforhold"
};
