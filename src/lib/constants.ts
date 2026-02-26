export const SITE_NAME = "SwiftDrip";
export const SITE_TAGLINE = "Comprehensive Wellness";
export const SITE_DESCRIPTION =
  "Philadelphia's physician-owned destination for IV therapy, lab testing, and rapid diagnostics. Founded by an experienced Anesthesiologist.";

export const BOOKING_URL =
  "https://www.vagaro.com/swiftdrip";

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/swiftdripwellness/",
  facebook: "https://www.facebook.com/swiftdripwellness/",
};

export const CONTACT_PHONE_E164 = "+12673862566";
export const CONTACT_PHONE_DISPLAY = "267-386-2566";
export const CONTACT_EMAIL = "wellness@swiftdrip.com";
export const CONTACT_ADDRESS = "1800 JFK Blvd, Ste 104";
export const CONTACT_CITY_STATE_ZIP = "Philadelphia, PA 19103";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "IV Therapy", href: "/iv-drips" },
  { label: "Lab Testing", href: "/lab-testing" },
  { label: "Rapid Testing", href: "/rapid-testing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const HIGHLIGHTS = [
  {
    title: "Anesthesiologist Founded",
    description: "Physician-led care you can trust",
    icon: "stethoscope",
  },
  {
    title: "In-Office and Mobile",
    description: "We come to you or visit our clinic",
    icon: "mapPin",
  },
  {
    title: "By Appointment Only",
    description: "Personalized, unhurried attention",
    icon: "calendar",
  },
];

export const SERVICES_OVERVIEW = [
  {
    title: "IV Vitamin and Hydration Therapy",
    description:
      "Custom IV drips for hydration, immunity, recovery, and rejuvenation - delivered by licensed providers. Starting at $200.",
    href: "/iv-drips",
    icon: "droplets",
  },
  {
    title: "Lab Testing by LabCorp",
    description:
      "Comprehensive lab panels for wellness, anemia, STI screening, and more - with physician-reviewed results. Starting at $150.",
    href: "/lab-testing",
    icon: "testTube",
  },
  {
    title: "Rapid Testing",
    description:
      "On-the-spot rapid diagnostics for Flu, Covid-19, Strep, and RSV - results in minutes. Starting at $20.",
    href: "/rapid-testing",
    icon: "sparkles",
  },
];

// ─── IV VITAMIN AND HYDRATION THERAPY (from Vagaro) ────────────────────────
export const IV_DRIPS = [
  {
    name: "Swift Fasting",
    description: "Fast drip for quick replenishment and recovery.",
    benefits: ["Fast replenishment", "Mobile service", "Quick recovery"],
    price: "Starting at $300",
    mobile: true,
  },
  {
    name: "Swift Travel/Jet Lag",
    description:
      "Air travel puts a lot of stress on your immune system and can cause major dehydration, a combination that often leads to post travel fatigue and feeling unwell. Prepare for your upcoming travel by getting a boost of hydration and immunity with this mix. It works for post travel jet lag and fatigue as well.",
    benefits: ["Travel prep", "Immune boost", "Hydration"],
    price: "Starting at $200",
    mobile: false,
  },
  {
    name: "Swift Ultra Recovery",
    description:
      "The holy grail of IV drips. Hydration, vitamins, minerals, analgesics, and anti-inflammatories. This drip will replenish and rejuvenate you.",
    benefits: ["Full-spectrum recovery", "Anti-inflammatory", "Rejuvenation"],
    price: "$250",
    mobile: false,
  },
  {
    name: "Swift Stomach Bug",
    description:
      "This drip is great for anyone with a stomach bug or food poisoning. It will help replenish and hydrate your body, while also alleviating the discomfort associated with an upset stomach.",
    benefits: ["Stomach relief", "Rehydration", "Nausea support"],
    price: "Starting at $240",
    mobile: false,
  },
  {
    name: "Swift Immunity",
    description:
      "Help boost your immune system with a mega dose of Vitamin C and B-Complex vitamins. This drip is great for combatting symptoms associated with the Flu, Covid, upper respiratory tract infections, strep throat, and overall feelings of fatigue.",
    benefits: ["Vitamin C mega dose", "B-Complex", "Immune defense"],
    price: "Starting at $225",
    mobile: false,
  },
  {
    name: "Swift Migraine",
    description:
      "Migraines can be debilitating. Let us help the pain with hydration and some heavy hitting analgesics like IV Tylenol, Toradol, Zofran, Reglan, and Dexamethasone.",
    benefits: ["Migraine relief", "IV analgesics", "Hydration"],
    price: "Starting at $250",
    mobile: false,
  },
  {
    name: "Swift Hangover",
    description:
      "Knock that hangover out and get back to work with this awesome mix.",
    benefits: ["Hangover recovery", "Rehydration", "Quick relief"],
    price: "Starting at $200",
    mobile: false,
  },
  {
    name: "Swift Hydration",
    description:
      "Need an extra boost in your life? This mix includes a large dose of fluids, electrolytes and minerals that benefit overall well being and health providing quick rejuvenation.",
    benefits: ["Electrolytes", "Minerals", "Quick rejuvenation"],
    price: "Starting at $250",
    mobile: true,
  },
];

// ─── LAB TESTING BY LABCORP (from Vagaro) ──────────────────────────────────
export const LAB_PANELS = [
  {
    name: "Anemia Testing",
    description: "Comprehensive anemia panel to evaluate iron levels and blood health.",
    price: "Starting at $150",
  },
  {
    name: "Women's Wellness Panel",
    description: "Tailored wellness panel designed for women's health screening and preventive care.",
    price: "Starting at $150",
  },
  {
    name: "STI Testing",
    description:
      "Sexually Transmitted Infections (STI) Profile with CT/NG/TV NAA, HIV, and Hepatitis B/C screening.",
    price: "Starting at $325",
  },
  {
    name: "Men's Wellness Panel",
    description: "Comprehensive wellness panel designed for men's health screening and preventive care.",
    price: "Starting at $300",
  },
];

// ─── RAPID TESTING (from Vagaro) ───────────────────────────────────────────
export const RAPID_TESTS = [
  {
    name: "Flu Testing",
    description: "Rapid test for Influenza A and B with results in minutes.",
    price: "Starting at $25",
    mobile: true,
  },
  {
    name: "Covid-19 Testing",
    description: "Rapid test for Covid-19 with quick, reliable results.",
    price: "Starting at $20",
    mobile: true,
  },
  {
    name: "Strep Testing",
    description: "Rapid test for Strep Throat - fast and accurate results.",
    price: "Starting at $25",
    mobile: true,
  },
  {
    name: "RSV Testing",
    description: "Rapid test for RSV (Respiratory Syncytial Virus).",
    price: "Starting at $30",
    mobile: true,
  },
];
