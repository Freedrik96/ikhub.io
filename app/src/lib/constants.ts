export const CATEGORIES = [
  { name: "Verktøy og maskinutstyr", slug: "verktoy-og-maskinutstyr", icon: "Wrench" },
  { name: "Elektronikk og IT", slug: "elektronikk-og-it", icon: "Monitor" },
  { name: "Kontor og drift", slug: "kontor-og-drift", icon: "Building2" },
  { name: "HMS / Verneutstyr", slug: "hms-verneutstyr", icon: "ShieldCheck" },
  { name: "Lager og logistikk", slug: "lager-og-logistikk", icon: "Warehouse" },
  { name: "Industri og produksjon", slug: "industri-og-produksjon", icon: "Factory" },
  { name: "Bygg og anlegg", slug: "bygg-og-anlegg", icon: "HardHat" },
  { name: "Emballasje og forbruk", slug: "emballasje-og-forbruk", icon: "Package" },
  { name: "Service og vedlikehold", slug: "service-og-vedlikehold", icon: "Settings" },
  { name: "Kjøl/varme/energi", slug: "kjol-varme-energi", icon: "Thermometer" },
  { name: "Renhold og hygiene", slug: "renhold-og-hygiene", icon: "Sparkles" },
  { name: "Kjøretøy og verksted", slug: "kjoretoy-og-verksted", icon: "Car" },
  { name: "Landbruk og gårdsdrift", slug: "landbruk-og-gardsdrift", icon: "Tractor" },
] as const;

export const UNITS = [
  "stk",
  "meter",
  "kg",
  "liter",
  "pakke",
  "sett",
  "time",
  "annet",
] as const;

export const SITE_NAME = "Innkjøpshub";

export const COUNTIES = [
  "Agder",
  "Innlandet",
  "Møre og Romsdal",
  "Nordland",
  "Oslo",
  "Rogaland",
  "Troms og Finnmark",
  "Trøndelag",
  "Vestfold og Telemark",
  "Vestland",
  "Viken",
] as const;
