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

export interface ContentData {
  nav: {
    services: string;
    portfolio: string;
    process: string;
    calculator: string;
    about: string;
    contact: string;
    quoteBtn: string;
  };
  hero: {
    badge: string;
    titleStart: string;
    titleAccent: string;
    titleEnd: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    taglineAddress: string;
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
    portfolio: 'Realizace',
    process: 'Proces',
    calculator: 'Kalkulačka',
    about: 'O studiu',
    contact: 'Kontakt',
    quoteBtn: 'Zadat poptávku',
  },
  hero: {
    badge: '📍 Orlí 261/8, Liberec • Příjem zakázek otevřen',
    titleStart: 'Vizuální identita a reklama, která je',
    titleAccent: 'skutečně vidět.',
    titleEnd: '',
    description: 'Zakázková výroba světelných vývěsek, polepy aut i výloh, velkoformátový UV tisk a exkluzivní HD obrazy na broušeném hliníku. Řemeslná preciznost a moderní design z Liberce.',
    ctaPrimary: 'Prohlédnout realizace',
    ctaSecondary: 'Nezávazná poptávka',
    taglineAddress: 'Doručujeme po celém Libereckém kraji a ČR',
  },
  stats: {
    completedProjects: '120+',
    completedProjectsLabel: 'Úspěšných realizací',
    localProduction: '100%',
    localProductionLabel: 'Výroba na míru v Liberci',
    warranty: 'UV & Oracal',
    warrantyLabel: 'Špičkové certifikované materiály',
    response: '< 24h',
    responseLabel: 'Rychlé nacenění & odezva',
  },
  servicesSection: {
    eyebrow: 'Komplexní nabídka studia',
    title: 'Naše klíčové služby',
    subtitle: 'Od prvotního grafického náčrtu až po finální instalaci a UV tisk. Pracujeme pouze s prověřenými materiály s dlouhou životností.',
    materialsLabel: 'Použité materiály',
    popularLabel: 'Ideální pro',
    detailBtn: 'Více o službě',
  },
  portfolioSection: {
    eyebrow: 'Vybrané projekty',
    title: 'Galerie našich prací',
    subtitle: 'Ukázky realizovaných vývěsek, celopolepů vozidel, výloh a unikátních obrazů na hliníkových deskách.',
    filterAll: 'Všechny práce',
    filterSigns: 'Vývěsky & Světlo',
    filterCars: 'Polepy aut',
    filterWindows: 'Výlohy & Interiér',
    filterMetal: 'HD Obrazy na hliníku',
    filterMerch: 'Textil & Sklo',
    filterEvents: 'Fotozóny & 3D Art',
    viewDetails: 'Detail projektu',
    materialsUsed: 'Materiálové řešení',
    closeModal: 'Zavřít náhled',
    inquireSimilar: 'Chci podobnou realizaci',
  },
  processSection: {
    eyebrow: 'Jak pracujeme',
    title: 'Od nápadu k hotové montáži',
    subtitle: 'Jednoduchý, transparentní proces bez zbytečné administrativy. Vše řešíte přímo s autorem a výrobcem.',
    steps: [
      {
        number: '01',
        title: 'Konzultace & Zaměření',
        description: 'Probereme vaše požadavky, změříme vůz či výlohu přímo v Liberci a doporučíme optimální technologii a materiály.',
        highlight: 'Osobní přístup & zaměření zdarma',
      },
      {
        number: '02',
        title: 'Grafický návrh & Vizualizace',
        description: 'Vytvoříme přesný grafický model včetně fotomontáže na reálnou fasádu nebo karoserii pro vaši 100% jistotu.',
        highlight: 'Připomínky a úpravy do schválení',
      },
      {
        number: '03',
        title: 'Výroba & Přímý UV tisk',
        description: 'Tisk na velkoformátových UV strojích, plotrový ořez fólií, frézování a osazení spolehlivými LED moduly.',
        highlight: 'Prémiové barvy odolné vůči UV záření',
      },
      {
        number: '04',
        title: 'Precizní montáž / Expedice',
        description: 'Odborná instalace vývěsek a lepení fólií v bezprašném prostředí. Výrobky předáváme s garancí kvality.',
        highlight: 'Dlouhá životnost i v náročném počasí',
      },
    ],
  },
  whyUsSection: {
    eyebrow: 'Proč GraphicArt Studio',
    title: 'Spojení grafického citu a poctivého řemesla',
    subtitle: 'Nejsme přeprodejci. Vše navrhujeme a realizujeme s osobní odpovědností za každý detail.',
    items: [
      {
        iconName: 'MapPin',
        title: 'Lokální liberecká dílna',
        description: 'Sídlíme na adrese Orlí 261/8. Můžete se osobně zastavit, prohlédnout vzorníky hliníku a fólií a domluvit zakázku.',
      },
      {
        iconName: 'Sparkles',
        title: 'Unikátní HD obrazy na hliníku',
        description: 'Naše specialita — přímý UV tisk na kartáčovaný Dibond hliník, který v interiéru vytváří fascinující metalické odlesky.',
      },
      {
        iconName: 'ShieldCheck',
        title: 'Špičkové materiály (Oracal & Dibond)',
        description: 'Používáme výhradně osvědčené lité a polymerické fólie s UV laminací, které neblednou a neodlepují se po jedné zimě.',
      },
      {
        iconName: 'Zap',
        title: 'Komplexně od A do Z',
        description: 'Nemusíte shánět grafika a zvlášť tiskárnu. U nás máte logo, tisková data i hotovou montáž pod jednou střechou.',
      },
    ],
  },
  calculatorSection: {
    eyebrow: 'Rychlý odhad ceny',
    title: 'Interaktivní kalkulátor poptávky',
    subtitle: 'Zvolte typ služby a parametry pro okamžitý orientační odhad. Výslednou poptávku můžete jedním kliknutím odeslat na WhatsApp nebo e-mail.',
    serviceLabel: 'Vyberte službu',
    sizeLabel: 'Rozsah / Velikost projektu',
    urgencyLabel: 'Požadovaný termín dodání',
    estimatedPrice: 'Orientační rozpočet',
    priceNotice: '* Konečná cena závisí na členitosti podkladu a přesné grafické náročnosti. Přesnou cenovou nabídku vám zašleme obratem.',
    formName: 'Vaše jméno / Firma',
    formPhone: 'Telefon nebo e-mail',
    formNote: 'Stručný popis představy',
    sendWhatsapp: 'Odeslat na WhatsApp (+420 607 150 507)',
    sendEmail: 'Odeslat poptávkový e-mail',
    successMessage: 'Poptávka byla úspěšně připravena k odeslání!',
  },
  instagramSection: {
    eyebrow: 'Sociální sítě & Život studia',
    title: 'Sledujte naši aktuální tvorbu na Instagramu',
    subtitle: 'Pravidelně zveřejňujeme novinky z dílny, video ukázky lepení vozidel a právě dokončené realizace.',
    handle: '@graphic_art_studio',
    followers: '750+ sledujících',
    posts: '120+ příspěvků',
    followBtn: 'Otevřít profil na Instagramu',
    directBtn: 'Napsat do Direct zpráv',
  },
  aboutSection: {
    eyebrow: 'O zakladatelce studia',
    title: 'Osobní přístup s citem pro moderní vizuální styl',
    bioP1: 'Jmenuji se Yeliena Loboda a v Liberci vedu studio GraphicArt. Věřím, že reklama a firemní prezentace by neměly být nudné šablony, ale výrazné prvky, které budují autoritu značky.',
    bioP2: 'Každou zakázku — od malé vizitky přes celopolep dodávky až po velkou světelnou vývěsku — řeším individuálně. Mým cílem je, aby vaše investice do vizuální prezentace přitahovala nové zákazníky a dělala vám radost mnoho let.',
    leadDesigner: 'Yeliena Loboda',
    leadRole: 'Zakladatelka & Hlavní designérka GraphicArt Studio',
    locationNote: 'Ateliér & Výroba: Orlí 261/8, Liberec',
  },
  contactSection: {
    eyebrow: 'Spojte se s námi',
    title: 'Pojďme probrat váš projekt',
    subtitle: 'Napište nám do zpráv na Instagramu, zavolejte nebo vyplňte poptávkový formulář. Ozveme se vám do 24 hodin.',
    addressTitle: 'Adresa studia v Liberci',
    phoneTitle: 'Přímý telefon & WhatsApp',
    hoursTitle: 'Konzultační hodiny',
    hoursVal: 'Po – Pá: 08:30 – 17:30 (návštěvy po předchozí domluvě)',
    formTitle: 'Nezávazná zpráva studiu',
    formSubtitle: 'Rádi vám připravíme bezplatnou kalkulaci a vizuální doporučení.',
    submitBtn: 'Odeslat zprávu',
  },
};

export const contentEN: ContentData = {
  nav: {
    services: 'Services',
    portfolio: 'Portfolio',
    process: 'Process',
    calculator: 'Estimate',
    about: 'About',
    contact: 'Contact',
    quoteBtn: 'Get a Quote',
  },
  hero: {
    badge: '📍 Orlí 261/8, Liberec, CZ • Accepting Projects',
    titleStart: 'Visual identity & signage that is',
    titleAccent: 'truly noticed.',
    titleEnd: '',
    description: 'Custom illuminated signboards, full vehicle and window vinyl wraps, large-format UV printing, and exclusive HD art prints on brushed aluminum. Crafted in Liberec.',
    ctaPrimary: 'View Portfolio',
    ctaSecondary: 'Request a Quote',
    taglineAddress: 'Serving Liberec region & across the Czech Republic',
  },
  stats: {
    completedProjects: '120+',
    completedProjectsLabel: 'Completed Projects',
    localProduction: '100%',
    localProductionLabel: 'In-House Studio Production',
    warranty: 'UV & Oracal',
    warrantyLabel: 'Certified Premium Materials',
    response: '< 24h',
    responseLabel: 'Quick Quotation & Response',
  },
  servicesSection: {
    eyebrow: 'Our Core Capabilities',
    title: 'Professional Studio Services',
    subtitle: 'From initial concept sketches to precision UV manufacturing and turnkey installation. We craft durable visual assets built to impress.',
    materialsLabel: 'Materials Used',
    popularLabel: 'Ideal for',
    detailBtn: 'Service Details',
  },
  portfolioSection: {
    eyebrow: 'Selected Work',
    title: 'Production Showcase',
    subtitle: 'Explore our latest illuminated storefronts, commercial vehicle fleet wraps, shop window graphics, and custom metal art.',
    filterAll: 'All Works',
    filterSigns: 'Signboards & Lighting',
    filterCars: 'Vehicle Wraps',
    filterWindows: 'Window Graphics',
    filterMetal: 'HD Metal Prints',
    filterMerch: 'Apparel & Glass',
    filterEvents: 'Photo Zones & 3D',
    viewDetails: 'Project Details',
    materialsUsed: 'Material Execution',
    closeModal: 'Close Preview',
    inquireSimilar: 'Inquire About Similar Project',
  },
  processSection: {
    eyebrow: 'Our Workflow',
    title: 'From Brief to Installation',
    subtitle: 'A smooth, transparent four-step workflow directly with the designer and production specialist.',
    steps: [
      {
        number: '01',
        title: 'Consultation & Survey',
        description: 'We review your needs, take exact measurements of your store facade or vehicle, and recommend optimal materials.',
        highlight: 'Personal consultation & complimentary measurement',
      },
      {
        number: '02',
        title: 'Graphic Concept & 3D Mockup',
        description: 'We prepare realistic mockups on your building facade or vehicle body so you see the exact result before production.',
        highlight: 'Revisions included until complete satisfaction',
      },
      {
        number: '03',
        title: 'Precision UV Manufacturing',
        description: 'Wide-format UV direct printing, plotter vector cutting, CNC contouring, and waterproof LED module integration.',
        highlight: 'UV-cured, weather-resistant inks',
      },
      {
        number: '04',
        title: 'Professional Installation',
        description: 'Clean on-site installation by experienced craftsmen in Liberec and surrounding areas.',
        highlight: 'Long-lasting warranty and weather resistance',
      },
    ],
  },
  whyUsSection: {
    eyebrow: 'Why GraphicArt Studio',
    title: 'Where Design Sensibility Meets Master Craftsmanship',
    subtitle: 'We are not resellers. Everything is designed, printed, and inspected with personal pride.',
    items: [
      {
        iconName: 'MapPin',
        title: 'Local Studio in Liberec',
        description: 'Located at Orlí 261/8. Visit us in person to feel material samples, compare aluminum finishes, and discuss ideas.',
      },
      {
        iconName: 'Sparkles',
        title: 'Signature HD Aluminum Prints',
        description: 'Our proprietary specialty — direct high-definition UV print on brushed Dibond aluminum panels for striking gallery art.',
      },
      {
        iconName: 'ShieldCheck',
        title: 'Top Tier Materials (Oracal & Dibond)',
        description: 'We exclusively use cast polymeric wrapping films and industrial composites that resist peeling and UV fade.',
      },
      {
        iconName: 'Zap',
        title: 'Turnkey Design to Delivery',
        description: 'No need to juggle separate graphic designers and sign makers. Get coherent branding from vision to installed reality.',
      },
    ],
  },
  calculatorSection: {
    eyebrow: 'Instant Pricing Estimation',
    title: 'Interactive Project Estimator',
    subtitle: 'Select service type and scope to calculate an approximate budget. Send your inquiry directly via WhatsApp or Email.',
    serviceLabel: 'Select Service',
    sizeLabel: 'Project Scope / Dimensions',
    urgencyLabel: 'Delivery Timeframe',
    estimatedPrice: 'Estimated Budget',
    priceNotice: '* Final quotation depends on substrate complexity, installation conditions, and artwork preparation. Custom quote provided in 24h.',
    formName: 'Your Name / Company',
    formPhone: 'Phone or Email',
    formNote: 'Brief project details',
    sendWhatsapp: 'Send via WhatsApp (+420 607 150 507)',
    sendEmail: 'Send Inquiry Email',
    successMessage: 'Inquiry details prepared for sending!',
  },
  instagramSection: {
    eyebrow: 'Social Proof & Studio Daily',
    title: 'Follow Our Latest Work on Instagram',
    subtitle: 'Discover behind-the-scenes wrapping videos, newly mounted signs, and metal prints straight from our workbench.',
    handle: '@graphic_art_studio',
    followers: '750+ Followers',
    posts: '120+ Realizations',
    followBtn: 'Open Instagram Profile',
    directBtn: 'Send Instagram Direct Message',
  },
  aboutSection: {
    eyebrow: 'About the Founder',
    title: 'Personal Dedication with an Eye for Contemporary Style',
    bioP1: 'I am Yeliena Loboda, founder and creative director of GraphicArt Studio in Liberec. I believe signage and branding should never look generic; they should be proud visual milestones that set your business apart.',
    bioP2: 'Every project — whether an illuminated storefront, a fleet wrap, or a personalized Dibond metal print — is executed with meticulous care. My goal is to deliver visual products that elevate your brand and stand the test of time.',
    leadDesigner: 'Yeliena Loboda',
    leadRole: 'Founder & Lead Designer, GraphicArt Studio',
    locationNote: 'Studio & Workshop: Orlí 261/8, Liberec, Czech Republic',
  },
  contactSection: {
    eyebrow: 'Get in Touch',
    title: 'Let’s Bring Your Vision to Life',
    subtitle: 'Send us a message on Instagram, call our direct line, or fill out the form below. We respond within 24 hours.',
    addressTitle: 'Studio Address (Liberec)',
    phoneTitle: 'Direct Line & WhatsApp',
    hoursTitle: 'Consultation Hours',
    hoursVal: 'Mon – Fri: 08:30 – 17:30 (Visits by appointment)',
    formTitle: 'Send a Message',
    formSubtitle: 'We will happily prepare a tailored estimate and mockups for your project.',
    submitBtn: 'Send Message',
  },
};

export const servicesData: Service[] = [
  {
    id: 'signs',
    number: '01',
    title: 'Vývěsky & Světelná reklama',
    shortDesc: '3D profilová světelná písmena, podsvícené LED kazety, výstrče a neonové nápisy pro obchody i firmy.',
    fullDesc: 'Navrhujeme a vyrábíme exteriérové i interiérové vývěsky na míru. Používáme prémiové lité akryláty, odolné hliníkové bočnice a úsporné LED čipy s vysokou svítivostí a zárukou dlouhé životnosti v každém počasí.',
    image: '/assets/hero_signage.jpg',
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
    image: '/assets/car_wrap.jpg',
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
    image: '/assets/window_wrap.jpg',
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
    image: '/assets/aluminum_print.jpg',
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
    image: '/assets/apparel_glass.jpg',
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
    image: '/assets/hero_signage.jpg',
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
    image: '/assets/car_wrap.jpg',
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
    image: '/assets/aluminum_print.jpg',
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
    image: '/assets/window_wrap.jpg',
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
    image: '/assets/apparel_glass.jpg',
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
    image: '/assets/workshop_uv.jpg',
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
    image: '/assets/photozone_decor.jpg',
    client: 'NextGen Global',
    location: 'Liberec',
    year: '2024',
    description: 'Exkluzivní fotozóna pro firemní večírek s plastickými podsvícenými 3D nápisy, zlatou prostorovou geometrií a texturovaným kamenným pozadím.',
    materials: 'Extrudovaný polystyren s tvrzeným povrchem, LED warm light, zlatý akryl.',
  },
];
