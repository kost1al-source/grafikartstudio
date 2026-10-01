import { getAssetUrl } from '../utils/asset';

export interface Service {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  materials: string[];
  features: string[];
  popularFor: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'signs' | 'cars' | 'windows' | 'metal' | 'merch' | 'events';
  categoryLabel: string;
  image: string;
  client: string;
  location: string;
  year: string;
  description: string;
  materials: string;
}

export interface MaterialItem {
  id: string;
  name: string;
  code: string;
  category: string;
  thickness: string;
  durability: string;
  finish: string;
  description: string;
  bestFor: string;
  image: string;
  accent: string;
}

export interface ContentData {
  nav: {
    services: string;
    materials: string;
    beforeAfter: string;
    portfolio: string;
    process: string;
    calculator: string;
    about: string;
    contact: string;
    quoteBtn: string;
  };
  hero: {
    coordinates: string;
    status: string;
    leadTitle: string;
    titleAccent: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    taglineAddress: string;
    specs: { label: string; val: string }[];
  };
  stats: {
    completedProjects: string;
    completedProjectsLabel: string;
    localProduction: string;
    localProductionLabel: string;
    warranty: string;
    warrantyLabel: string;
    response: string;
    responseLabel: string;
  };
  materialsSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    thicknessLabel: string;
    durabilityLabel: string;
    finishLabel: string;
    bestForLabel: string;
    inquireMaterialBtn: string;
    items: MaterialItem[];
  };
  beforeAfterSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    beforeLabel: string;
    afterLabel: string;
    dragNotice: string;
    caseStudyTitle: string;
    caseStudyDesc: string;
    materialsUsed: string;
  };
  servicesSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    materialsLabel: string;
    popularLabel: string;
    detailBtn: string;
  };
  portfolioSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    filterAll: string;
    filterSigns: string;
    filterCars: string;
    filterWindows: string;
    filterMetal: string;
    filterMerch: string;
    filterEvents: string;
    viewDetails: string;
    materialsUsed: string;
    closeModal: string;
    inquireSimilar: string;
  };
  processSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: {
      number: string;
      title: string;
      description: string;
      highlight: string;
    }[];
  };
  whyUsSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: {
      iconName: string;
      title: string;
      description: string;
    }[];
  };
  calculatorSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    serviceLabel: string;
    sizeLabel: string;
    urgencyLabel: string;
    estimatedPrice: string;
    priceNotice: string;
    formName: string;
    formPhone: string;
    formNote: string;
    sendWhatsapp: string;
    sendEmail: string;
    successMessage: string;
  };
  instagramSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    handle: string;
    followers: string;
    posts: string;
    followBtn: string;
    directBtn: string;
  };
  aboutSection: {
    eyebrow: string;
    title: string;
    bioP1: string;
    bioP2: string;
    leadDesigner: string;
    leadRole: string;
    locationNote: string;
  };
  contactSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    addressTitle: string;
    phoneTitle: string;
    hoursTitle: string;
    hoursVal: string;
    formTitle: string;
    formSubtitle: string;
    submitBtn: string;
  };
}

export const contentCS: ContentData = {
  nav: {
    services: 'Služby',
    materials: 'Materiály',
    beforeAfter: 'Transformace',
    portfolio: 'Realizace',
    process: 'Proces',
    calculator: 'Kalkulátor',
    about: 'O ateliéru',
    contact: 'Kontakt',
    quoteBtn: 'Poptat výrobu',
  },
  hero: {
    coordinates: '50.7671° N, 15.0562° E • LIBEREC III',
    status: 'ATELIÉR & DÍLNA V PROVOZU',
    leadTitle: 'REKLAMA JAKO',
    titleAccent: 'ARCHITEKTURA.',
    description: 'Zakázková manufaktura 3D světelných vývěsek, celopolepů vozidel, velkoformátového UV tisku a autorských HD obrazů na broušeném hliníku Dibond. Řemeslná preciznost z Liberce pro ty, kteří odmítají průměr.',
    ctaPrimary: 'Konfigurovat poptávku',
    ctaSecondary: 'Prozkoumat realizace',
    taglineAddress: 'Orlí 261/8, Liberec • Dodáváme po celé ČR i do zahraničí',
    specs: [
      { label: 'Přesnost CNC', val: '0.02 mm' },
      { label: 'Záruka autofólií', val: '7 let' },
      { label: 'LED úspora', val: 'A++ IP67' },
      { label: 'Reakční doba', val: '< 24 h' },
    ],
  },
  stats: {
    completedProjects: '120+',
    completedProjectsLabel: 'Dokončených realizací',
    localProduction: '100%',
    localProductionLabel: 'Vlastní výroba v Liberci',
    warranty: 'Oracal & 3M',
    warrantyLabel: 'Certifikované litinové fólie',
    response: '< 24h',
    responseLabel: 'Kalkulace & reakční čas',
  },
  materialsSection: {
    eyebrow: 'Materiálový ateliér',
    title: 'Hmatatelná kvalita. Žádné kompromisy.',
    subtitle: 'Úspěch každé vývěsky, polepu i obrazu začíná u volby materiálu. Vybíráme pouze průmyslové slitiny a kompozity, které vydrží roky mrazu, deště i UV záření.',
    thicknessLabel: 'Tloušťka / Gramáž',
    durabilityLabel: 'Garantovaná životnost',
    finishLabel: 'Povrchová úprava',
    bestForLabel: 'Doporučené využití',
    inquireMaterialBtn: 'Nacenit tento materiál',
    items: [
      {
        id: 'dibond',
        name: 'Broušený Dibond® Butlerfinish',
        code: 'ALU-DIB-3MM',
        category: 'Hliníkové slitiny',
        thickness: '3.0 mm kompozit',
        durability: '15+ let v interiéru / 10 let venku',
        finish: 'Strojně kartáčovaný hliník s metalickým odleskem',
        description: 'Vlajkový materiál pro luxusní HD obrazy a reprezentativní štíty. Přímý UV tisk nechává kovovou texturu prosvítat světlými tóny a vytváří kinetický světelný efekt.',
        bestFor: 'Moderní interiéry, luxusní kanceláře, umělecké HD obrazy, fasádní desky',
        image: getAssetUrl('assets/aluminum_print.jpg'),
        accent: '#94a3b8',
      },
      {
        id: 'acrylic_led',
        name: 'Litý akrylát Plexiglas® + Halo LED',
        code: 'ACR-LED-3000K',
        category: 'Světelné 3D profily',
        thickness: '20 mm profil + 1.5 mm hliník',
        durability: '50 000 hodin provozu LED čipů',
        finish: 'Satinovaný mléčný difuzor + práškový komaxit',
        description: '3D světelné písmo s nepřímým halo-podsvícením, které vrhá měkkou světelnou koronu na fasádu budovy. Používáme voděodolné LED čipy IP67 s nízkým odběrem.',
        bestFor: 'Fasády butiků, restaurací, hotelů, prestižní městské vývěsky',
        image: getAssetUrl('assets/hero_signage.jpg'),
        accent: '#f59e0b',
      },
      {
        id: 'oracal_cast',
        name: 'Oracal 970RA Premium Cast',
        code: 'VIN-CAST-970',
        category: 'Lité autofólie',
        thickness: '110 mikronů litý vinyl',
        durability: '7–8 let bez praskání a smršťování',
        finish: 'Hluboký saténový nebo ultra-lesklý lak',
        description: 'Špičková litinová fólie s mikrokanálky RapidAir pro dokonalé obtisknutí nýtů a prolisů karoserie. Chrání původní lak a lze ji beze stopy sundat.',
        bestFor: 'Celopolepy dodávek, firemních vozidel, luxusní barevné změny vozů',
        image: getAssetUrl('assets/car_wrap.jpg'),
        accent: '#38bdf8',
      },
      {
        id: 'frosted_glass',
        name: 'Dusted & Frosted Glass Vinyl',
        code: 'GLS-FROST-8510',
        category: 'Privátní okenní fólie',
        thickness: '80 mikronů pískovaný polymer',
        durability: '7 let odolnost vůči UV a mytí',
        finish: 'Matné pískované sklo, 72% světelné propustnosti',
        description: 'Vytváří elegantní efekt leptaného nebo pískovaného skla. Poskytuje dokonalé soukromí v zasedačkách a ordinacích, aniž by interiér přišel o denní světlo.',
        bestFor: 'Výlohy kaváren, ordinace, zasedací místnosti, skleněné příčky',
        image: getAssetUrl('assets/window_wrap.jpg'),
        accent: '#cbd5e1',
      },
      {
        id: 'flatbed_uv',
        name: 'Průmyslový UV Flatbed tisk',
        code: 'PRN-UV-1440DPI',
        category: 'Technologie tisku',
        thickness: 'Desky od 0.5 mm do 50 mm',
        durability: 'Okamžitá fotopolymerizace LED lampami',
        finish: 'Matný / lesklý s možností parciálního laku',
        description: 'Tiskneme přímo na hliník, sklo, akryl, překližku i Dibond. Bílý podtisk zaručuje 100% krytí i na transparentních a temných površích.',
        bestFor: 'Velkoformátové informační tabule, nábytkové komponenty, výstavy',
        image: getAssetUrl('assets/workshop_uv.jpg'),
        accent: '#0ea5e9',
      },
    ],
  },
  beforeAfterSection: {
    eyebrow: 'Vizuální transformace',
    title: 'Rozdíl, který mění vnímání značky',
    subtitle: 'Tažením posuvníku porovnejte surový stav bílého užitkového vozu před polepem a hotovou realizaci s matným litým wrapem a kobaltovou grafikou.',
    beforeLabel: 'PŘED: Surový tovární stav',
    afterLabel: 'PO: Zakázkový wrap GraphicArt',
    dragNotice: '← Tažením posuvníku interaktivně porovnávejte →',
    caseStudyTitle: 'Mercedes-Benz Sprinter — Voltaic Dynamics s.r.o.',
    caseStudyDesc: 'Kompletní aplikace lité fólie Oracal 970RA v matné antracitové barvě s lesklou kobaltovou linkou. Vůz slouží jako pojízdný showroom s dosahem 15 000+ zhlédnutí denně na silnicích.',
    materialsUsed: 'Oracal 970RA Matt Charcoal + 3M Gloss Cobalt Blue + UV Cast Laminace',
  },
  servicesSection: {
    eyebrow: 'Portfolio služeb',
    title: 'Řemeslné disciplíny studia',
    subtitle: 'Od 3D nápisů po průmyslový tisk. Kompletní zakázkový cyklus probíhá pod jednou střechou v Liberci.',
    materialsLabel: 'Prémiové materiály',
    popularLabel: 'Ideální pro',
    detailBtn: 'Více o službě',
  },
  portfolioSection: {
    eyebrow: 'Výběr z realizací',
    title: 'Archiv našich prací',
    subtitle: 'Prohlédněte si skutečné zakázky z ulic Liberce, Prahy a okolí. Každý projekt je originál navržený na míru.',
    filterAll: 'Všechny projekty',
    filterSigns: '3D Vývěsky',
    filterCars: 'Polepy aut',
    filterWindows: 'Výlohy',
    filterMetal: 'HD Kovové obrazy',
    filterMerch: 'Textil & Sklo',
    filterEvents: 'Fotozóny',
    viewDetails: 'Prozkoumat projekt',
    materialsUsed: 'Použité technologie & materiály',
    closeModal: 'Zavřít detail',
    inquireSimilar: 'Poptat podobné řešení',
  },
  processSection: {
    eyebrow: 'Metodika výroby',
    title: 'Jak probíhá zakázka',
    subtitle: 'Žádní prostředníci. Od prvního náčrtu komunikujete přímo s autorem grafiky a vedoucím výroby.',
    steps: [
      {
        number: '01',
        title: 'Konzultace & Zaměření',
        description: 'Změříme fasádu, výlohu či karoserii přímo na místě v Liberci. Zhodnotíme podklad, světelné podmínky a navrhneme materiálové řešení.',
        highlight: 'Osobní přístup & zaměření po domluvě zdarma',
      },
      {
        number: '02',
        title: '3D Fotomontáž & Vzorky',
        description: 'Připravíme věrný digitální model zasazený do reálné fotografie vašeho objektu. Vyzkoušíte si reálné vzorky hliníku i fólií.',
        highlight: 'Korekce až do vaší 100% spokojenosti',
      },
      {
        number: '03',
        title: 'Přesná CNC & UV Výroba',
        description: 'Frézování hliníkových profilů, řezání akrylátu, kompletace voděodolných LED modulů IP67 a velkoformátový přímý tisk.',
        highlight: 'Vlastní technologický park v Liberci',
      },
      {
        number: '04',
        title: 'Montáž & Kolaudace',
        description: 'Čistá instalace včetně elektroinstalace, revize zapojení a poučení o údržbě. Poskytujeme plnou záruku a servis.',
        highlight: 'Dlouholetá odolnost vůči větru a mrazu',
      },
    ],
  },
  whyUsSection: {
    eyebrow: 'Přednosti ateliéru',
    title: 'Proč svěřit identitu GraphicArt',
    subtitle: 'Nepatříme k anonymním reklamním agenturám s katalogovými řešeními. Každý kus z naší dílny má duši a řemeslnou hodnotu.',
    items: [
      {
        iconName: 'Sparkles',
        title: 'Vlastní výroba v Liberci',
        description: 'Vše vzniká v naší dílně v Orlí ulici. Máme přímou kontrolu nad každým milimetrem řezu, tiskem i pájením LED modulů.',
      },
      {
        iconName: 'ShieldCheck',
        title: 'Pouze certifikované kompozity',
        description: 'Zásadně nepoužíváme levné asijské fólie ani tenké plasty. Naše polepy drží 7 let a hliníkové vývěsky nerezaví.',
      },
      {
        iconName: 'Clock',
        title: 'Rychlá komunikace & termíny',
        description: 'Odpovídáme do 24 hodin. Pokud máte napjatý termín před otevřením provozovny, uděláme maximum pro včasné předání.',
      },
      {
        iconName: 'Palette',
        title: 'Autorský design s citem',
        description: 'Navrhujeme reklamu tak, aby harmonizovala s architekturou budovy a vyzdvihla prémiový charakter vašeho podnikání.',
      },
    ],
  },
  calculatorSection: {
    eyebrow: 'Zakázkový konfigurátor',
    title: 'Orientační kalkulace výroby',
    subtitle: 'Zvolte parametry svého projektu a získejte okamžitý odhad. Následně nám můžete odeslat hotovou specifikaci jedním kliknutím přímo na WhatsApp.',
    serviceLabel: '1. Typ realizace',
    sizeLabel: '2. Rozsah / Plocha',
    urgencyLabel: '3. Doplňkové služby',
    estimatedPrice: 'Orientační cena od',
    priceNotice: 'Konečná cena se upřesňuje po přesném zaměření a výběru finálních materiálů.',
    formName: 'Vaše jméno nebo firma',
    formPhone: 'Telefonní číslo',
    formNote: 'Specifikace nebo dotaz',
    sendWhatsapp: 'Odeslat kalkulaci na WhatsApp (+420 607 150 507)',
    sendEmail: 'Odeslat nezávaznou poptávku',
    successMessage: 'Děkujeme! Poptávku jsme v pořádku přijali a ozveme se vám do 24 hodin.',
  },
  instagramSection: {
    eyebrow: 'Život ateliéru',
    title: 'Sledujte tvorbu na Instagramu',
    subtitle: 'Pravidelně sdílíme zákulisí z dílny, čerstvě dokončené montáže v Liberci a detaily tiskových technologií.',
    handle: '@graphic_art_studio',
    followers: '1,480+',
    posts: 'Realizace z dílny',
    followBtn: 'Sledovat profil',
    directBtn: 'Napsat do Directu',
  },
  aboutSection: {
    eyebrow: 'O zakladatelce studia',
    title: 'Vášeň pro vizuální detail a poctivé materiály',
    bioP1: 'Jmenuji se Yeliena Loboda a založila jsem GraphicArt Studio s jasnou vizí: vytvářet vizuální identitu, která není jen obyčejnou cedulí na zdi, ale promyšleným architektonickým prvkem. Věřím, že kvalitní vývěska nebo reprezentativní polep vozu je tou nejefektivnější investicí do renomé firmy.',
    bioP2: 'V naší liberecké dílně v Orlí ulici propojujeme výtvarné cítění s průmyslovou výrobou. Každá zakázka prochází mýma rukama — od grafického konceptu až po výběr šroubů a finální kontrolu svítivosti LED diod.',
    leadDesigner: 'Yeliena Loboda',
    leadRole: 'Zakladatelka & Vedoucí ateliéru GraphicArt Studio',
    locationNote: 'Orlí 261/8, Liberec III-Jeřáb • Osobní návštěva možná po předchozí domluvě',
  },
  contactSection: {
    eyebrow: 'Spojte se s námi',
    title: 'Kde nás najdete & Kontakt',
    subtitle: 'Máte dotaz k materiálům, potřebujete zaměřit výlohu nebo nacenit nový projekt? Zavolejte nám nebo se zastavte.',
    addressTitle: 'Adresa dílny & ateliéru',
    phoneTitle: 'Telefon & WhatsApp',
    hoursTitle: 'Pracovní doba',
    hoursVal: 'Po – Pá: 08:30 – 17:30 (nebo dle domluvy)',
    formTitle: 'Napište nám zprávu',
    formSubtitle: 'Vyplňte krátký formulář a my se vám ozveme ještě dnes.',
    submitBtn: 'Odeslat zprávu do studia',
  },
};

export const contentEN: ContentData = {
  nav: {
    services: 'Services',
    materials: 'Materials',
    beforeAfter: 'Transformation',
    portfolio: 'Portfolio',
    process: 'Process',
    calculator: 'Estimator',
    about: 'About Studio',
    contact: 'Contact',
    quoteBtn: 'Request Quote',
  },
  hero: {
    coordinates: '50.7671° N, 15.0562° E • LIBEREC, CZ',
    status: 'ATELIER & WORKSHOP OPEN',
    leadTitle: 'SIGNAGE AS',
    titleAccent: 'ARCHITECTURE.',
    description: 'Custom manufacture of 3D illuminated letters, commercial fleet vehicle wraps, wide-format UV printing, and authorial HD prints on brushed aluminum Dibond. Craft precision from Liberec for brands that demand distinction.',
    ctaPrimary: 'Configure Production',
    ctaSecondary: 'Explore Showcase',
    taglineAddress: 'Orlí 261/8, Liberec • Delivering across the Czech Republic & Europe',
    specs: [
      { label: 'CNC Precision', val: '0.02 mm' },
      { label: 'Cast Film Warranty', val: '7 Years' },
      { label: 'LED Efficiency', val: 'A++ IP67' },
      { label: 'Turnaround Quote', val: '< 24 h' },
    ],
  },
  stats: {
    completedProjects: '120+',
    completedProjectsLabel: 'Successful Realizations',
    localProduction: '100%',
    localProductionLabel: 'In-House Production in Liberec',
    warranty: 'Oracal & 3M',
    warrantyLabel: 'Certified Cast Wrap Films',
    response: '< 24h',
    responseLabel: 'Rapid Quotation & Response',
  },
  materialsSection: {
    eyebrow: 'Material Atelier',
    title: 'Tangible Quality. Zero Compromise.',
    subtitle: 'The longevity of any sign, vehicle wrap, or metallic print depends strictly on material science. We work exclusively with certified industrial alloys and cast vinyls built to withstand frost, rain, and intense UV.',
    thicknessLabel: 'Thickness / Gauge',
    durabilityLabel: 'Guaranteed Durability',
    finishLabel: 'Surface Finish',
    bestForLabel: 'Recommended Application',
    inquireMaterialBtn: 'Inquire About This Material',
    items: [
      {
        id: 'dibond',
        name: 'Brushed Dibond® Butlerfinish',
        code: 'ALU-DIB-3MM',
        category: 'Aluminum Composites',
        thickness: '3.0 mm rigid composite',
        durability: '15+ years indoors / 10 years exterior',
        finish: 'Machine-brushed silver with kinetic light reflection',
        description: 'Our flagship choice for luxury HD metal art and premium architectural fascia. Direct UV ink cures into the brushed grain, turning ambient lighting into dynamic highlights.',
        bestFor: 'Modern interiors, executive offices, HD wall art, architectural facades',
        image: getAssetUrl('assets/aluminum_print.jpg'),
        accent: '#94a3b8',
      },
      {
        id: 'acrylic_led',
        name: 'Cast Acrylic Plexiglas® + Halo LED',
        code: 'ACR-LED-3000K',
        category: 'Illuminated 3D Letters',
        thickness: '20 mm acrylic + 1.5 mm alloy body',
        durability: '50,000+ hours certified LED lifespan',
        finish: 'Satin diffuser + powder-coated aluminum trim',
        description: '3D letters with warm indirect halo backlighting that casts a smooth, luminous glow against building facades. Powered by waterproof IP67 low-draw LED modules.',
        bestFor: 'Boutiques, cafes, hotels, high-end retail storefronts',
        image: getAssetUrl('assets/hero_signage.jpg'),
        accent: '#f59e0b',
      },
      {
        id: 'oracal_cast',
        name: 'Oracal 970RA Premium Cast',
        code: 'VIN-CAST-970',
        category: 'Automotive Wrap Film',
        thickness: '110 micron cast PVC',
        durability: '7–8 years without shrink or peel',
        finish: 'Deep satin, ultra-gloss, or matte finish',
        description: 'Top-tier cast vinyl equipped with RapidAir microchannels for bubble-free application around deep curves and rivets. Protects underlying OEM paint and removes cleanly.',
        bestFor: 'Full van wraps, commercial fleets, personal luxury restyling',
        image: getAssetUrl('assets/car_wrap.jpg'),
        accent: '#38bdf8',
      },
      {
        id: 'frosted_glass',
        name: 'Dusted & Frosted Glass Film',
        code: 'GLS-FROST-8510',
        category: 'Architectural Window Graphics',
        thickness: '80 micron polymeric vinyl',
        durability: '7 years UV and moisture resistance',
        finish: 'Etched matte crystal with 72% light transmission',
        description: 'Creates a bespoke sandblasted glass aesthetic. Imparts pristine privacy for meeting rooms and healthcare clinics while keeping rooms naturally illuminated.',
        bestFor: 'Coffee shops, medical clinics, corporate conference rooms',
        image: getAssetUrl('assets/window_wrap.jpg'),
        accent: '#cbd5e1',
      },
      {
        id: 'flatbed_uv',
        name: 'Industrial UV Flatbed Printing',
        code: 'PRN-UV-1440DPI',
        category: 'Print Technology',
        thickness: 'Substrates from 0.5 mm up to 50 mm',
        durability: 'Instant LED photopolymerization',
        finish: 'Matte / Gloss with selective varnish highlights',
        description: 'Direct printing onto aluminum, glass, acrylic, wood, and Dibond. White underprinting ensures 100% color vibrancy even across transparent and dark surfaces.',
        bestFor: 'Signage boards, exhibition panels, bespoke interior components',
        image: getAssetUrl('assets/workshop_uv.jpg'),
        accent: '#0ea5e9',
      },
    ],
  },
  beforeAfterSection: {
    eyebrow: 'Visual Transformation',
    title: 'The Real Difference in Brand Presence',
    subtitle: 'Drag the slider across to compare a plain white commercial vehicle before wrapping with the finished matte anthracite & cobalt realization by GraphicArt Studio.',
    beforeLabel: 'BEFORE: Plain Factory Vehicle',
    afterLabel: 'AFTER: GraphicArt Custom Wrap',
    dragNotice: '← Drag the slider horizontally to compare →',
    caseStudyTitle: 'Mercedes-Benz Sprinter — Voltaic Dynamics Ltd.',
    caseStudyDesc: 'Full commercial wrap utilizing Oracal 970RA Matt Charcoal with Gloss Cobalt accents. Delivers over 15,000 daily visual impressions on roads across Northern Bohemia.',
    materialsUsed: 'Oracal 970RA Matt Charcoal + 3M Gloss Cobalt Blue + UV Cast Overlaminate',
  },
  servicesSection: {
    eyebrow: 'Production Capabilities',
    title: 'Craft Disciplines of Our Studio',
    subtitle: 'From dimensional architectural lettering to wide-format industrial printing. Our complete workflow happens under one roof in Liberec.',
    materialsLabel: 'Materials Used',
    popularLabel: 'Ideal for',
    detailBtn: 'Service Details',
  },
  portfolioSection: {
    eyebrow: 'Selected Realizations',
    title: 'Production Archive',
    subtitle: 'Browse authentic commercial commissions crafted for clients across Liberec, Prague, and beyond. Every piece is tailor-engineered.',
    filterAll: 'All Projects',
    filterSigns: '3D Signs',
    filterCars: 'Vehicle Wraps',
    filterWindows: 'Window Graphics',
    filterMetal: 'HD Metal Prints',
    filterMerch: 'Apparel & Glass',
    filterEvents: 'Photo Zones',
    viewDetails: 'Inspect Project',
    materialsUsed: 'Material Execution & Tech',
    closeModal: 'Close Inspector',
    inquireSimilar: 'Inquire About Similar Solution',
  },
  processSection: {
    eyebrow: 'Our Production Process',
    title: 'How We Bring Concepts to Life',
    subtitle: 'Zero middlemen. You communicate directly with the designer and lead production specialist from the very first sketch.',
    steps: [
      {
        number: '01',
        title: 'Consultation & Site Survey',
        description: 'We measure your building facade, shop window, or vehicle on-site in Liberec. We inspect surfaces and advise on optimal materials.',
        highlight: 'Personal consultation & complimentary measurement',
      },
      {
        number: '02',
        title: '3D Mockup & Material Samples',
        description: 'We prepare realistic mockups placed onto actual photos of your building or car. You can review physical aluminum and vinyl samples.',
        highlight: 'Revisions included until complete satisfaction',
      },
      {
        number: '03',
        title: 'Precision CNC & UV Fabrication',
        description: 'CNC milling of aluminum profiles, acrylic letter contouring, waterproof IP67 LED wiring, and high-resolution direct UV printing.',
        highlight: 'In-house workshop equipment in Liberec',
      },
      {
        number: '04',
        title: 'On-Site Installation & Warranty',
        description: 'Clean installation including wiring, electrical safety check, and maintenance guidance. Backed by solid warranty and service.',
        highlight: 'Engineered for years of weather and frost resistance',
      },
    ],
  },
  whyUsSection: {
    eyebrow: 'Atelier Advantages',
    title: 'Why Entrust Your Brand to GraphicArt',
    subtitle: 'We are not an anonymous agency with templated catalog items. Every sign and wrap from our atelier is crafted with authentic care and industrial strength.',
    items: [
      {
        iconName: 'Sparkles',
        title: 'In-House Production in Liberec',
        description: 'Everything is built in our workshop on Orlí Street. We maintain hands-on control over every millimeter of cut, weld, and LED circuit.',
      },
      {
        iconName: 'ShieldCheck',
        title: 'Only Certified Composites',
        description: 'We refuse cheap unbranded vinyls. Our vehicle wraps stay bonded for 7+ years, and our aluminum signs never corrode.',
      },
      {
        iconName: 'Clock',
        title: 'Rapid Communication & Firm Deadlines',
        description: 'We reply within 24 hours. When you have a tight opening deadline for your store or restaurant, we do whatever it takes to deliver on time.',
      },
      {
        iconName: 'Palette',
        title: 'Bespoke Aesthetic Sensibility',
        description: 'We engineer signage to honor building architecture, elevating your commercial presence above generic street clutter.',
      },
    ],
  },
  calculatorSection: {
    eyebrow: 'Custom Estimator',
    title: 'Interactive Production Calculator',
    subtitle: 'Select project parameters and get an immediate ballpark estimate. Send the full technical specification directly to WhatsApp in 1 click.',
    serviceLabel: '1. Production Discipline',
    sizeLabel: '2. Project Scope / Dimensions',
    urgencyLabel: '3. Add-on Services',
    estimatedPrice: 'Estimated From',
    priceNotice: 'Final quotation is finalized following exact site measurement and material confirmation.',
    formName: 'Your Name or Company',
    formPhone: 'Phone Number',
    formNote: 'Project Notes or Requirements',
    sendWhatsapp: 'Send Specification to WhatsApp (+420 607 150 507)',
    sendEmail: 'Send Direct Inquiry Form',
    successMessage: 'Thank you! We received your inquiry and will respond within 24 hours.',
  },
  instagramSection: {
    eyebrow: 'Live from the Workshop',
    title: 'Follow Our Craft on Instagram',
    subtitle: 'Behind-the-scenes glimpses from our workshop, newly installed signboards in Liberec, and material printing techniques.',
    handle: '@graphic_art_studio',
    followers: '1,480+',
    posts: 'Workshop Updates',
    followBtn: 'Follow Instagram',
    directBtn: 'Message in Direct',
  },
  aboutSection: {
    eyebrow: 'Meet the Founder',
    title: 'A Passion for Physical Craft and Clean Design',
    bioP1: 'My name is Yeliena Loboda. I founded GraphicArt Studio with a clear mission: to create visual identities that are not just printed boards, but refined architectural features. I believe an illuminated sign or commercial fleet wrap is the highest-ROI brand investment a business can make.',
    bioP2: 'In our Liberec workshop on Orlí Street, we fuse creative graphic direction with heavy-duty fabrication. Every piece passes through my hands — from vector sketching to alloy selection and LED luminosity testing.',
    leadDesigner: 'Yeliena Loboda',
    leadRole: 'Founder & Creative Production Director, GraphicArt Studio',
    locationNote: 'Orlí 261/8, Liberec III-Jeřáb, Czech Republic • Personal visits welcome by appointment',
  },
  contactSection: {
    eyebrow: 'Connect with Our Studio',
    title: 'Workshop Location & Direct Contact',
    subtitle: 'Have a question about composite materials, need on-site facade measurements, or want a custom quotation? Reach out directly.',
    addressTitle: 'Workshop & Studio Address',
    phoneTitle: 'Phone & WhatsApp',
    hoursTitle: 'Workshop Hours',
    hoursVal: 'Mon – Fri: 08:30 – 17:30 (or by appointment)',
    formTitle: 'Send a Direct Message',
    formSubtitle: 'Fill out this brief form and we will get back to you today.',
    submitBtn: 'Send Message to Studio',
  },
};

export const servicesData: Service[] = [
  {
    id: 'signs',
    number: '01',
    title: 'Vývěsky & Světelná reklama',
    shortDesc: '3D profilová světelná písmena, podsvícené LED kazety, výstrče a neonové nápisy pro obchody i firmy.',
    fullDesc: 'Navrhujeme a vyrábíme exteriérové i interiérové vývěsky na míru. Používáme prémiové lité akryláty, odolné hliníkové bočnice a úsporné LED čipy s vysokou svítivostí a zárukou dlouhé životnosti v každém počasí.',
    image: getAssetUrl('assets/hero_signage.jpg'),
    materials: ['Akrylát Plexiglas®', 'Hliníkové profily', 'Vodotěsné LED moduly IP67', 'Dibond kompozit'],
    features: ['Vysoká viditelnost ve dne i v noci', 'Kompaktní spotřeba energie', 'Kompletní montáž a elektroinstalace'],
    popularFor: 'Prodejny, restaurace, kavárny, hotely, firemní sídla',
  },
  {
    id: 'cars',
    number: '02',
    title: 'Polepy aut, dodávek & vozových parků',
    shortDesc: 'Částečné i celopolepy automobilů, dodávek, přívěsů a firemních flotil s ochrannou UV laminací.',
    fullDesc: 'Mobilní reklama s nejvyšším dosahem na silnicích. Aplikujeme litinové autofólie značek Oracal a 3M, které dokonale kopírují prolisy karoserie a chrání původní lak vozidla.',
    image: getAssetUrl('assets/car_wrap.jpg'),
    materials: ['Oracal 970RA Premium Cast', '3M Wrap Film', 'Ochranná litá UV laminace', 'Magnetické fólie'],
    features: ['Životnost 5–7 let bez odlupování', 'Ochrana původního laku vozu', 'Možnost odstranění bez stop'],
    popularFor: 'Řemeslníci, kurýrní služby, firemní flotily, osobní styling',
  },
  {
    id: 'windows',
    number: '03',
    title: 'Výlohy, polepy skel & interiérová grafika',
    shortDesc: 'Pískované mléčné dekory pro soukromí, perforovaná One-Way Vision grafika a plotrovaný nápis.',
    fullDesc: 'Proměňte prosklené plochy v efektivní poutač. Využíváme perforované fólie (propouštějí světlo do interiéru, zvenku je vidět plnobarevný tisk), pískované fólie pro luxusní matný vzhled i řezanou grafiku otevíracích dob.',
    image: getAssetUrl('assets/window_wrap.jpg'),
    materials: ['One-Way Vision perforovaná fólie', 'Pískovaná mléčná fólie (Dusted/Frosted)', 'Plotrované vinyly'],
    features: ['Zachování denního světla v interiéru', 'Elegantní matný privátní efekt', 'Snadná sezónní obměna akcí'],
    popularFor: 'Salony krásy, kanceláře, ordinace, butiky, kavárny',
  },
  {
    id: 'metal',
    number: '04',
    title: 'HD obrazy na hliníku (Dibond) & 3D art',
    shortDesc: 'Špičkový přímý UV tisk na broušený stříbrný i bílý hliník s luxusním kovovým odleskem.',
    fullDesc: 'Naše vlajková specialita pro milovníky moderního designu. Motiv je natištěn přímo na hliníkovou kompozitní desku, kde kovová struktura prosvítá světlými tóny a vytváří jedinečný prostorový efekt s vysokým rozlišením.',
    image: getAssetUrl('assets/aluminum_print.jpg'),
    materials: ['Kartáčovaný hliník (Brushed Butlerfinish)', 'Dibond 3mm', 'Průmyslový UV tisk 1440 DPI', 'Závěsné distanční profily'],
    features: ['Odolné proti vlhkosti a blednutí', 'Bez nutnosti rámu — levitující efekt', 'Exkluzivní kovový lesk v dopadu světla'],
    popularFor: 'Moderní interiéry, luxusní kanceláře, galerie, originální dárky',
  },
  {
    id: 'merch',
    number: '05',
    title: 'Potisk textilu, brandované sklo & merch',
    shortDesc: 'Kvalitní potisk triček, mikin a pracovních oděvů, gravírované a brandované sklenice, hrnky a dárky.',
    fullDesc: 'Posilněte svou firemní identitu nebo potěšte partnery. Dodáváme značkový textil s odolným transferovým potiskem a personalizované skleněné či keramické výrobky pro každodenní reprezentaci.',
    image: getAssetUrl('assets/apparel_glass.jpg'),
    materials: ['Organická bavlna 180–280g', 'DTF & sítotiskové transfery', 'Pískované křišťálové sklo', 'Keramika'],
    features: ['Vysoká odolnost při praní', 'Jemné detaily a věrné barvy', 'Výroba od malých sérií až po stovky kusů'],
    popularFor: 'Firemní oblečení, gastro provozy, sportovní týmy, merch akcí',
  },
];

export const portfolioData: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'AURORA & CO. — Světelná 3D vývěska',
    category: 'signs',
    categoryLabel: 'Vývěsky & Světlo',
    image: getAssetUrl('assets/hero_signage.jpg'),
    client: 'Aurora & Co. Luxury Goods',
    location: 'Liberec centrum',
    year: '2024',
    description: 'Kompletní výroba a montáž exteriérové fasádní vývěsky s 3D akrylátovými písmeny a teplým LED halo-podsvícením. Precizní sladění s architekturou budovy.',
    materials: 'Černě práškovaný hliník, 20mm litý akrylát, LED teplá bílá 3000K.',
  },
  {
    id: 'p2',
    title: 'VOLTAIC DYNAMICS — Firemní polep dodávky',
    category: 'cars',
    categoryLabel: 'Polepy aut',
    image: getAssetUrl('assets/car_wrap.jpg'),
    client: 'Voltaic Dynamics s.r.o.',
    location: 'Liberec / Jablonec',
    year: '2024',
    description: 'Design a aplikace celopolepu na novou dodávku Mercedes-Benz Sprinter. Kombinace matné antracitové báze s lesklými kobaltově modrými a stříbrnými křivkami.',
    materials: 'Oracal 970RA Cast autofólie, matná lícní laminace, aplikace do prolisů.',
  },
  {
    id: 'p3',
    title: 'LIQUID SILVER — HD obraz na broušeném hliníku',
    category: 'metal',
    categoryLabel: 'HD Obrazy na hliníku',
    image: getAssetUrl('assets/aluminum_print.jpg'),
    client: 'Soukromá rezidence',
    location: 'Liberec Jeřáb',
    year: '2024',
    description: 'Velkoformátový umělecký tisk 180 × 120 cm natištěný přímo na broušenou hliníkovou desku. Odlesky kartáčovaného kovu vytvářejí kinetický vizuální vjem.',
    materials: 'Dibond 3mm Butlerfinish Silver, přímý UV tisk 8 barev, skrytý závěsný rám.',
  },
  {
    id: 'p4',
    title: 'THE DAILY HARVEST — Branding výlohy kavárny',
    category: 'windows',
    categoryLabel: 'Výlohy & Interiér',
    image: getAssetUrl('assets/window_wrap.jpg'),
    client: 'The Daily Harvest Cafe',
    location: 'Liberec',
    year: '2024',
    description: 'Návrh a instalace grafiky pro rohovou prosklenou kavárnu. Spodní třetina z pískované mléčné fólie s autorskou botanickou ilustrací, horní část zlaté plotrované logo.',
    materials: 'Pískovaná polymerická fólie, zlatý litý vinyl Oracal 751C.',
  },
  {
    id: 'p5',
    title: 'ARISEN DISTILLERY — Reprezentační textil a sklo',
    category: 'merch',
    categoryLabel: 'Textil & Sklo',
    image: getAssetUrl('assets/apparel_glass.jpg'),
    client: 'Arisen Distillery',
    location: 'Severní Čechy',
    year: '2023',
    description: 'Série prémiových bavlněných triček s detailním vintage logem doplněná o sklenice na whisky s matným pískovaným logem a matné keramické šálky.',
    materials: 'Česaná bio bavlna 220g, DTF tisk, pískování skla, keramický výpal.',
  },
  {
    id: 'p6',
    title: 'PRŮMYSLOVÝ UV TISK — Výrobní kapacita studia',
    category: 'signs',
    categoryLabel: 'Tisk & Výroba',
    image: getAssetUrl('assets/workshop_uv.jpg'),
    client: 'Interní výrobní technologie',
    location: 'Studio Orlí 261/8, Liberec',
    year: 'Stálý provoz',
    description: 'Pohled na naši velkoformátovou UV flatbed tiskárnu s okamžitým LED vytvrzováním. Umožňuje tisknout na desky z hliníku, skla, plexi i dřeva do tloušťky 50 mm.',
    materials: 'Hybridní UV pigmentové inkousty CMYK + bílá + lak.',
  },
  {
    id: 'p7',
    title: 'ANNUAL GALA — 3D fotostěna a společenský dekor',
    category: 'events',
    categoryLabel: 'Fotozóny & 3D Art',
    image: getAssetUrl('assets/photozone_decor.jpg'),
    client: 'NextGen Global',
    location: 'Liberec',
    year: '2024',
    description: 'Exkluzivní fotozóna pro firemní večírek s plastickými podsvícenými 3D nápisy, zlatou prostorovou geometrií a texturovaným kamenným pozadím.',
    materials: 'Extrudovaný polystyren s tvrzeným povrchem, LED warm light, zlatý akryl.',
  },
];
