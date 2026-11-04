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
    summary: "Agree on shared costs before anyone pays.",
    subtitle: "Keep changing shares and payment claims in review.",
    status: "Interactive prototype",
    live: "https://splitflow-xi.vercel.app/",
    code: "https://github.com/syahmiharith/splitflow",
    media: "/images/splitflow.jpg",
    alt: "SplitFlow dashboard showing a seeded group, shared expenses and a payment claim awaiting review.",
    verified: "2026-11-03",
    evidence: [
      {
        label: "Payment checks and regression tests",
        url: "https://github.com/syahmiharith/splitflow/commit/929425f9242f78ff357c054bf807a614424d92b0",
      },
    ],
  },
  {
    slug: "receipt-to-form",
    number: "02",
    title: "Receipt-to-Form",
    summary: "Turn receipt images into editable records.",
    subtitle: "Check uncertain fields against the original receipt.",
    status: "Public demo",
    live: "https://receipt-to-form-syahmiharith.vercel.app/",
    code: "https://github.com/syahmiharith/receipt-to-form",
    media: "/images/receipt-to-form.jpg",
    alt: "Receipt-to-Form upload screen with image format and file size guidance.",
    verified: "2026-11-03",
    evidence: [
      {
        label: "Dependency update and validation tests",
        url: "https://github.com/syahmiharith/receipt-to-form/commit/556d3d93ad4be6bb8a889adfc025afa6310c8240",
      },
    ],
  },
  {
    slug: "inventory-request-system",
    number: "03",
    title: "Inventory Request System",
    summary: "Request supplies. Approve demand. Track stock.",
    subtitle: "Keep approval, fulfillment and stock changes consistent.",
    status: "Public demo · simulated roles",
    live: "https://inventory-request-system-syahmiharith.vercel.app/",
    code: "https://github.com/syahmiharith/inventory-request-system",
    media: "/images/inventory-request-system.jpg",
    alt: "Inventory Request System showing stock levels, reserved quantities and low-stock indicators in a populated inventory table.",
    verified: "2026-11-03",
    evidence: [
      {
        label: "Fulfillment regression tests",
        url: "https://github.com/syahmiharith/inventory-request-system/blob/00d4dacec0d3265c3dfa14a8c4358f86b9653e2d/tests/integration/fulfill-request.test.ts",
      },
      {
        label: "CI compatibility fix",
        url: "https://github.com/syahmiharith/inventory-request-system/commit/11393eb06f1d42dbf8dc650864543423233cbd78",
      },
    ],
  },
];
export const linkedin = "https://www.linkedin.com/in/zsyhmizlkfli/";
export const github = "https://github.com/syahmiharith";
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://portfolio-syahmiharith.vercel.app";
