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
      "From receipt images to editable expenses and spreadsheet-ready output. Designed, built and maintained by me.",
    role: "Product design · Full-stack engineering · Ongoing ownership",
    seoTitle: "Receipt-to-Form: Receipt to Spreadsheet Case Study",
    seoDescription:
      "How I designed and built Receipt-to-Form: editable expenses, resilient batch extraction, browser recovery, and CSV/JSON export.",
    status: "Live product",
    live: "https://receipt-to-form-syahmiharith.vercel.app/",
    code: "https://github.com/syahmiharith/receipt-to-form",
    media: "/images/receipt-to-form-workflow.jpg",
    alt: "Receipt-to-Form showing a synthetic receipt beside editable expense fields and the CSV/JSON export menu.",
    caption: "The live editor: source image, editable details and one export menu. Synthetic sample receipts.",
    verified: "2026-11-08",
    evidence: [
      {
        label: "Failed-only retry and correction preservation",
        url: "https://github.com/syahmiharith/receipt-to-form/pull/43",
      },
      {
        label: "Direct export and editable line items",
        url: "https://github.com/syahmiharith/receipt-to-form/pull/34",
      },
      {
        label: "Parallel extraction and recovery checks",
        url: "https://github.com/syahmiharith/receipt-to-form/pull/39",
      },
      {
        label: "Compact actions and accessible export menu",
        url: "https://github.com/syahmiharith/receipt-to-form/pull/42",
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
