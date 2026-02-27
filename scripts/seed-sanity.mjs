import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "eacbjhwl",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_TOKEN,
});

const IV_DRIPS = [
  {
    name: "Swift Fasting",
    category: "iv-drip",
    description: "Fast drip for quick replenishment and recovery.",
    shortDescription: "Fast drip for quick replenishment and recovery.",
    benefits: ["Fast replenishment", "Mobile service", "Quick recovery"],
    price: "Starting at $300",
    mobile: true,
    featured: false,
    order: 1,
    icon: "droplets",
  },
  {
    name: "Swift Travel/Jet Lag",
    category: "iv-drip",
    description:
      "Air travel puts a lot of stress on your immune system and can cause major dehydration, a combination that often leads to post travel fatigue and feeling unwell. Prepare for your upcoming travel by getting a boost of hydration and immunity with this mix. It works for post travel jet lag and fatigue as well.",
    shortDescription: "Hydration and immunity boost for travel prep and jet lag recovery.",
    benefits: ["Travel prep", "Immune boost", "Hydration"],
    price: "Starting at $200",
    mobile: false,
    featured: false,
    order: 2,
    icon: "plane",
  },
  {
    name: "Swift Ultra Recovery",
    category: "iv-drip",
    description:
      "The holy grail of IV drips. Hydration, vitamins, minerals, analgesics, and anti-inflammatories. This drip will replenish and rejuvenate you.",
    shortDescription: "The holy grail of IV drips — full-spectrum recovery and rejuvenation.",
    benefits: ["Full-spectrum recovery", "Anti-inflammatory", "Rejuvenation"],
    price: "$250",
    mobile: false,
    featured: true,
    order: 3,
    icon: "sparkles",
  },
  {
    name: "Swift Stomach Bug",
    category: "iv-drip",
    description:
      "This drip is great for anyone with a stomach bug or food poisoning. It will help replenish and hydrate your body, while also alleviating the discomfort associated with an upset stomach.",
    shortDescription: "Relief for stomach bugs and food poisoning.",
    benefits: ["Stomach relief", "Rehydration", "Nausea support"],
    price: "Starting at $240",
    mobile: false,
    featured: false,
    order: 4,
    icon: "shieldPlus",
  },
  {
    name: "Swift Immunity",
    category: "iv-drip",
    description:
      "Help boost your immune system with a mega dose of Vitamin C and B-Complex vitamins. This drip is great for combatting symptoms associated with the Flu, Covid, upper respiratory tract infections, strep throat, and overall feelings of fatigue.",
    shortDescription: "Mega dose Vitamin C and B-Complex for immune defense.",
    benefits: ["Vitamin C mega dose", "B-Complex", "Immune defense"],
    price: "Starting at $225",
    mobile: false,
    featured: true,
    order: 5,
    icon: "shield",
  },
  {
    name: "Swift Migraine",
    category: "iv-drip",
    description:
      "Migraines can be debilitating. Let us help the pain with hydration and some heavy hitting analgesics like IV Tylenol, Toradol, Zofran, Reglan, and Dexamethasone.",
    shortDescription: "Migraine relief with IV analgesics and hydration.",
    benefits: ["Migraine relief", "IV analgesics", "Hydration"],
    price: "Starting at $250",
    mobile: false,
    featured: false,
    order: 6,
    icon: "brain",
  },
  {
    name: "Swift Hangover",
    category: "iv-drip",
    description: "Knock that hangover out and get back to work with this awesome mix.",
    shortDescription: "Knock that hangover out and get back to feeling great.",
    benefits: ["Hangover recovery", "Rehydration", "Quick relief"],
    price: "Starting at $200",
    mobile: false,
    featured: false,
    order: 7,
    icon: "beer",
  },
  {
    name: "Swift Hydration",
    category: "iv-drip",
    description:
      "Need an extra boost in your life? This mix includes a large dose of fluids, electrolytes and minerals that benefit overall well being and health providing quick rejuvenation.",
    shortDescription: "Fluids, electrolytes, and minerals for quick rejuvenation.",
    benefits: ["Electrolytes", "Minerals", "Quick rejuvenation"],
    price: "Starting at $250",
    mobile: true,
    featured: false,
    order: 8,
    icon: "droplets",
  },
];

const RAPID_TESTS = [
  {
    name: "Flu Testing",
    category: "rapid-test",
    description: "Rapid test for Influenza A and B with results in minutes.",
    shortDescription: "Rapid Influenza A and B test — results in minutes.",
    benefits: ["Fast results", "Influenza A & B", "On-the-spot diagnostics"],
    price: "Starting at $25",
    mobile: true,
    featured: false,
    order: 1,
    icon: "thermometer",
  },
  {
    name: "Covid-19 Testing",
    category: "rapid-test",
    description: "Rapid test for Covid-19 with quick, reliable results.",
    shortDescription: "Quick, reliable Covid-19 rapid test.",
    benefits: ["Fast results", "Reliable detection", "On-the-spot diagnostics"],
    price: "Starting at $20",
    mobile: true,
    featured: false,
    order: 2,
    icon: "shieldCheck",
  },
  {
    name: "Strep Testing",
    category: "rapid-test",
    description: "Rapid test for Strep Throat - fast and accurate results.",
    shortDescription: "Fast and accurate Strep Throat rapid test.",
    benefits: ["Fast results", "Accurate detection", "On-the-spot diagnostics"],
    price: "Starting at $25",
    mobile: true,
    featured: false,
    order: 3,
    icon: "stethoscope",
  },
  {
    name: "RSV Testing",
    category: "rapid-test",
    description: "Rapid test for RSV (Respiratory Syncytial Virus).",
    shortDescription: "Rapid RSV detection test.",
    benefits: ["Fast results", "RSV detection", "On-the-spot diagnostics"],
    price: "Starting at $30",
    mobile: true,
    featured: false,
    order: 4,
    icon: "heartPulse",
  },
];

const LAB_PANELS = [
  {
    name: "Anemia Testing",
    description: "Comprehensive anemia panel to evaluate iron levels and blood health.",
    price: "Starting at $150",
    featured: false,
    order: 1,
  },
  {
    name: "Women's Wellness Panel",
    description: "Tailored wellness panel designed for women's health screening and preventive care.",
    price: "Starting at $150",
    featured: true,
    order: 2,
  },
  {
    name: "STI Testing",
    description:
      "Sexually Transmitted Infections (STI) Profile with CT/NG/TV NAA, HIV, and Hepatitis B/C screening.",
    price: "Starting at $325",
    featured: false,
    order: 3,
  },
  {
    name: "Men's Wellness Panel",
    description: "Comprehensive wellness panel designed for men's health screening and preventive care.",
    price: "Starting at $300",
    featured: true,
    order: 4,
  },
];

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

async function seed() {
  console.log("Seeding Sanity with SwiftDrip data...\n");

  // Seed Services (IV Drips + Rapid Tests)
  const allServices = [...IV_DRIPS, ...RAPID_TESTS];
  for (const svc of allServices) {
    const doc = {
      _type: "service",
      name: svc.name,
      slug: { _type: "slug", current: slugify(svc.name) },
      category: svc.category,
      description: svc.description,
      shortDescription: svc.shortDescription,
      icon: svc.icon,
      price: svc.price,
      benefits: svc.benefits,
      mobile: svc.mobile,
      featured: svc.featured,
      order: svc.order + (svc.category === "rapid-test" ? 100 : 0),
    };
    const result = await client.create(doc);
    console.log(`  Created service: ${svc.name} (${result._id})`);
  }

  // Seed Lab Panels
  for (const panel of LAB_PANELS) {
    const doc = {
      _type: "labPanel",
      name: panel.name,
      slug: { _type: "slug", current: slugify(panel.name) },
      description: panel.description,
      price: panel.price,
      featured: panel.featured,
      order: panel.order,
    };
    const result = await client.create(doc);
    console.log(`  Created lab panel: ${panel.name} (${result._id})`);
  }

  // Seed Site Settings
  const settings = {
    _type: "siteSettings",
    title: "SwiftDrip Comprehensive Wellness",
    tagline: "Recharge. Recover. Rejuvenate.",
    description:
      "Philadelphia's physician-owned destination for IV therapy, lab testing, and rapid diagnostics. Founded by an experienced Anesthesiologist.",
    phone: "267-386-2566",
    email: "wellness@swiftdrip.com",
    address: {
      street: "1800 JFK Blvd, Ste 104",
      city: "Philadelphia",
      state: "PA",
      zip: "19103",
    },
    socialLinks: {
      instagram: "https://www.instagram.com/swiftdripwellness/",
      facebook: "https://www.facebook.com/swiftdripwellness/",
    },
    bookingUrl: "https://www.vagaro.com/swiftdrip",
  };
  const settingsResult = await client.create(settings);
  console.log(`  Created site settings (${settingsResult._id})`);

  console.log("\nDone! All data seeded successfully.");
}

seed().catch((err) => {
  console.error("Seed failed:", err.message);
  process.exit(1);
});
