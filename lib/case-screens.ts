export const caseScreens = {
  "receipt-correction": { width: 1024, height: 561, alt: "Editable merchant, amount and date beside the Sample cafe receipt image.", caption: "Correct in place. The source stays beside the expense fields." },
  "receipt-batch": { width: 1024, height: 300, alt: "Two selected sample receipts, each marked Ready, above the shared batch toolbar.", caption: "A status for each receipt, with selection and export in one batch toolbar." },
  "receipt-export": { width: 1024, height: 310, alt: "CSV and JSON options in the Export menu below the selected sample receipts.", caption: "One export menu for the selected records, with CSV and JSON formats." },
  "inventory-approval": { width: 440, height: 664, alt: "REQ-DEMO-2 marked Approved and one item short. Issue is disabled and stock received is available.", caption: "Approved demand can still be short. Issuance remains unavailable." },
  "inventory-receive": { width: 425, height: 600, alt: "Record stock received form for Blue Ballpoint Pens with quantity 2 and a demo delivery reference.", caption: "The delivery form stays inside the same request. These fields have not been submitted." },
  "inventory-impact": { width: 425, height: 322, alt: "Paper has twelve available and three requested. Pens have one available, three requested and a shortage of two.", caption: "Availability is visible per line before the transaction can issue any stock." },
  "splitflow-readiness": { width: 420, height: 720, alt: "SplitFlow review panel showing Needs review, an unconfirmed payment claim, and Confirm claim or Dispute claim actions.", caption: "A claimed payment is a review task. It is not bank-verified money." },
  "splitflow-shares": { width: 360, height: 240, alt: "Participant shares showing Syahmi's calculated share, included items, fronted amount and net balance.", caption: "Each share explains the included costs, fronted amount and net balance." },
  "splitflow-overview": { width: 940, height: 540, alt: "Group overview with agreement states including Reconfirmation and a settlement readiness panel requiring human review.", caption: "Agreement states remain separate from settlement readiness." },
} as const;

export type CaseScreen = keyof typeof caseScreens;
