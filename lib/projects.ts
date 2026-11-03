export type Project = {
  slug: string;
  number: string;
  title: string;
  summary: string;
  subtitle: string;
  status: string;
  live: string;
  code: string;
  media: string;
  alt: string;
  verified: string;
  evidence: { label: string; url: string }[];
};
export const projects: readonly Project[] = [
  {
    slug: "splitflow",
    number: "01",
    title: "SplitFlow",
    summary: "Shared costs, clearer agreements.",
    subtitle: "Make the shared bill easier to follow.",
    status: "Interactive prototype",
    live: "https://splitflow-xi.vercel.app/",
    code: "https://github.com/syahmiharith/splitflow",
    media: "/images/splitflow.jpg",
    alt: "SplitFlow dashboard showing a seeded group, shared expenses and a payment claim awaiting review.",
    verified: "2026-11-03",
    evidence: [
      {
        label: "Prototype boundaries",
        url: "https://github.com/syahmiharith/splitflow/blob/main/docs/engineering/PROTOTYPE_BOUNDARIES.md",
      },
    ],
  },
  {
    slug: "receipt-to-form",
    number: "02",
    title: "Receipt-to-Form",
    summary: "From a receipt to a record you can review.",
    subtitle: "A clearer path from receipt to record.",
    status: "Public demo",
    live: "https://receipt-to-form-syahmiharith.vercel.app/",
    code: "https://github.com/syahmiharith/receipt-to-form",
    media: "/images/receipt-to-form.jpg",
    alt: "Receipt-to-Form upload screen with image format and file size guidance.",
    verified: "2026-11-03",
    evidence: [
      {
        label: "Source and setup",
        url: "https://github.com/syahmiharith/receipt-to-form#readme",
      },
    ],
  },
  {
    slug: "inventory-request-system",
    number: "03",
    title: "Inventory Request System",
    summary: "A shared picture of stock and the work behind it.",
    subtitle: "Keep requests and available stock connected.",
    status: "Public demo · simulated roles",
    live: "https://inventory-request-system-syahmiharith.vercel.app/",
    code: "https://github.com/syahmiharith/inventory-request-system",
    media: "/images/inventory-request-system.jpg",
    alt: "Inventory Request System showing stock levels, reserved quantities and low-stock indicators in a populated inventory table.",
    verified: "2026-11-03",
    evidence: [
      {
        label: "Source and setup",
        url: "https://github.com/syahmiharith/inventory-request-system#readme",
      },
    ],
  },
];
export const linkedin = "https://www.linkedin.com/in/zsyhmizlkfli/";
export const github = "https://github.com/syahmiharith";
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://portfolio-syahmiharith.vercel.app";
