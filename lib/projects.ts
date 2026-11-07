export type Project = {
  slug: string;
  number: string;
  title: string;
  summary: string;
  subtitle: string;
  status: string;
  role?: string;
  seoTitle?: string;
  seoDescription?: string;
  updated?: string;
  live: string;
  code: string;
  media: string;
  alt: string;
  caption?: string;
  verified: string;
  evidence: { label: string; url: string }[];
};
export const projects: readonly Project[] = [
  {
    slug: "splitflow",
    seoTitle: "SplitFlow: Shared Expenses",
    seoDescription:
      "Explore the product and engineering decisions behind SplitFlow: shared expense allocation, payment claims, and group review before payment.",
    updated: "2026-11-08",
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
    updated: "2026-11-08",
    number: "02",
    title: "Receipt-to-Form",
    summary: "Receipts in. Expenses ready.",
    subtitle:
      "A receipt-to-spreadsheet workflow I designed, built, and maintain—from upload to reviewed CSV export.",
    role: "Product design · Full-stack engineering · Ongoing ownership",
    seoTitle: "Receipt-to-Form: Receipt to CSV",
    seoDescription:
      "How I designed, built, and maintain Receipt-to-Form: receipt extraction, editable review, saved corrections, and CSV exports that match approved values.",
    status: "Live product",
    live: "https://receipt-to-form-syahmiharith.vercel.app/",
    code: "https://github.com/syahmiharith/receipt-to-form",
    media: "/images/receipt-to-form-expenses.jpg",
    alt: "Two reviewed receipts with corrected totals and the CSV export ready in Receipt-to-Form.",
    caption: "Reviewed receipts, ready for CSV export.",
    verified: "2026-11-08",
    evidence: [
      {
        label: "Receipt review, recovery and CSV workflow",
        url: "https://github.com/syahmiharith/receipt-to-form/pull/23",
      },
      {
        label: "Unified receipt workflow",
        url: "https://github.com/syahmiharith/receipt-to-form/pull/24",
      },
      {
        label: "Interface states and release verification",
        url: "https://github.com/syahmiharith/receipt-to-form/pull/29",
      },
      {
        label: "Keyboard image-viewer improvement",
        url: "https://github.com/syahmiharith/receipt-to-form/pull/30",
      },
    ],
  },
  {
    slug: "inventory-request-system",
    seoTitle: "Inventory Request System: Case Study",
    seoDescription:
      "The design and engineering behind inventory requests, approvals, stock fulfillment, and a history that keeps quantities consistent.",
    updated: "2026-11-08",
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
