export type Project = {
  slug: string;
  number: string;
  title: string;
  summary: string;
  subtitle: string;
  status: string;
  role: string;
  focus: string;
  stack: readonly string[];
  tryThis: string;
  verification: string;
  seoTitle: string;
  seoDescription: string;
  updated: string;
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
    slug: "receipt-to-form",
    number: "01",
    title: "Receipt-to-Form",
    summary:
      "Turn receipt images into editable expenses and spreadsheet-ready CSV.",
    subtitle:
      "One workflow from receipt images to corrected, exportable expenses.",
    status: "Live product",
    role: "Product design, full-stack engineering and ongoing maintenance",
    focus: "Keep successful work when part of a batch fails.",
    stack: ["Next.js", "TypeScript", "Gemini", "IndexedDB"],
    tryThis:
      "Load sample receipts, correct an expense, then export the selected records.",
    verification:
      "Live editor and linked regression evidence reviewed 8 November 2026.",
    seoTitle: "Receipt-to-Form: Receipt Processing Case Study",
    seoDescription:
      "How I built a receipt-to-CSV workflow with editable expenses, failed-only retries, browser recovery and spreadsheet-safe export.",
    updated: "2026-11-08",
    verified: "2026-11-08",
    live: "https://receipt-to-form-syahmiharith.vercel.app/",
    code: "https://github.com/syahmiharith/receipt-to-form",
    media: "/images/receipt-to-form-workflow.jpg",
    alt: "Receipt-to-Form showing a synthetic receipt beside editable expense fields and the CSV/JSON export menu.",
    caption:
      "Source image, editable details and one export menu. Synthetic sample receipts.",
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
    number: "02",
    title: "Inventory Request System",
    summary:
      "Approve requests, recover shortages, and issue stock with a complete history.",
    subtitle:
      "Approval records demand. Issuance changes stock. A shortage should leave both understandable.",
    status: "Live demo · isolated visitor workspaces",
    role: "Workflow design, interface, backend safeguards and release operations",
    focus:
      "Keep approval separate from stock deduction, and recover safely from shortages.",
    stack: ["Next.js", "TypeScript", "Drizzle", "PostgreSQL"],
    tryThis:
      "Request two supplies, review the same request as admin, receive missing stock, then issue it.",
    verification:
      "Deployed workflow, isolation and release checks verified 8 November 2026.",
    seoTitle: "Inventory Requests: Approval to Stock Issuance",
    seoDescription:
      "How I developed an isolated inventory demo with multi-item requests, shortage recovery, atomic stock issuance and verified release checks.",
    updated: "2026-11-08",
    verified: "2026-11-08",
    live: "https://inventory-request-system-syahmiharith.vercel.app/",
    code: "https://github.com/syahmiharith/inventory-request-system",
    media: "/images/inventory-request-system-current.jpg",
    alt: "Current Inventory Request System dashboard with open-request workload, available stock by supply, and seven-day issuance activity.",
    caption:
      "The deployed dashboard: calculated workload and stock availability, with seeded demo data. Captured 8 November 2026.",
    evidence: [
      {
        label: "Atomic issuance, rollback and replay tests",
        url: "https://github.com/syahmiharith/inventory-request-system/blob/f61de054a9be5cbc45c28295adeeaa69c2c61dc2/tests/integration/fulfill-request.test.ts",
      },
      {
        label: "Independent session and mobile browser checks",
        url: "https://github.com/syahmiharith/inventory-request-system/blob/f61de054a9be5cbc45c28295adeeaa69c2c61dc2/tests/e2e/demo-isolation.spec.ts",
      },
      {
        label: "Separate preview database boundary",
        url: "https://github.com/syahmiharith/inventory-request-system/pull/13",
      },
      {
        label: "Custom forms, calendar and account-menu release",
        url: "https://github.com/syahmiharith/inventory-request-system/pull/17",
      },
      {
        label: "Cleanup, monitoring and backup/restore procedure",
        url: "https://github.com/syahmiharith/inventory-request-system/blob/f61de054a9be5cbc45c28295adeeaa69c2c61dc2/docs/demo-operations.md",
      },
    ],
  },
  {
    slug: "splitflow",
    number: "03",
    title: "SplitFlow",
    summary:
      "Review shared costs, changing shares, and payment claims before settlement.",
    subtitle: "Make agreement visible before anyone fronts a group expense.",
    status: "Interactive prototype",
    role: "Agreement workflow, calculation guards and regression tests",
    focus:
      "Treat a payment claim as something to review, not proof that money moved.",
    stack: ["Next.js", "TypeScript", "Domain logic", "Regression tests"],
    tryThis:
      "Open the seeded group and inspect the payment claim blocking settlement readiness.",
    verification:
      "Public prototype rechecked 8 November 2026; rule evidence linked below.",
    seoTitle: "SplitFlow: Shared Expenses & Group Agreement",
    seoDescription:
      "A product-engineering case study in deterministic expense splits, participant reconfirmation and payment-claim review before settlement.",
    updated: "2026-11-08",
    verified: "2026-11-08",
    live: "https://splitflow-xi.vercel.app/",
    code: "https://github.com/syahmiharith/splitflow",
    media: "/images/splitflow.jpg",
    alt: "SplitFlow prototype dashboard with a seeded group and an unconfirmed payment claim awaiting organizer review.",
    caption:
      "Seeded prototype data. Payment claims are reviewed by participants; no bank verification is performed.",
    evidence: [
      {
        label: "Payment checks and regression tests",
        url: "https://github.com/syahmiharith/splitflow/commit/929425f9242f78ff357c054bf807a614424d92b0",
      },
    ],
  },
];
export const linkedin = "https://www.linkedin.com/in/zsyhmizlkfli/";
export const github = "https://github.com/syahmiharith";
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://portfolio-syahmiharith.vercel.app"
).replace(/\/$/, "");
