window.invoicePaymentTrackerData = {
  meta: {
    label: "Invoice & Payment Tracker Demo - Sample Data",
    title: "Invoice & Payment Tracker Demo",
    scope: "Sample invoice operations dashboard for tracking paid, unpaid, overdue, and follow-up payments.",
    period: "Sample view: July 2026",
    summaryTitle: "Invoice visibility and payment follow-up view",
    disclaimer: "Demo/sample data only. Not real client financial data.",
    safetyNote: "Demo/sample data only. No real client financial data. No payment is processed from this demo.",
    version: "Invoice & Payment Tracker Demo v1"
  },
  kpis: [
    { label: "Total Invoices", value: "42", note: "Sample invoice records" },
    { label: "Paid Invoices", value: "28", note: "Sample paid status" },
    { label: "Unpaid Invoices", value: "9", note: "Sample unpaid status" },
    { label: "Overdue Invoices", value: "5", note: "Needs owner review" },
    { label: "Outstanding Amount", value: "$12,850", note: "Sample open balance" },
    { label: "Collected This Month", value: "$18,400", note: "Sample collected amount" }
  ],
  statusOverview: [
    { label: "Paid", count: 28, unit: "invoices", amount: "$18,400", tone: "paid" },
    { label: "Unpaid", count: 9, unit: "invoices", amount: "$9,100", tone: "unpaid" },
    { label: "Overdue", count: 5, unit: "invoices", amount: "$3,750", tone: "overdue" },
    { label: "Review Items", count: 4, unit: "review flags", amount: "Subset flag", tone: "review" }
  ],
  invoices: [
    {
      id: "INV-DEMO-001",
      customer: "Service Business",
      amount: "$1,800",
      status: "Paid",
      dueDate: "July 04, 2026",
      followUp: "Closed"
    },
    {
      id: "INV-DEMO-002",
      customer: "Clinic",
      amount: "$4,250",
      status: "Unpaid",
      dueDate: "July 16, 2026",
      followUp: "Draft reminder"
    },
    {
      id: "INV-DEMO-003",
      customer: "Restaurant",
      amount: "$950",
      status: "Overdue",
      dueDate: "June 22, 2026",
      followUp: "Owner review"
    },
    {
      id: "INV-DEMO-004",
      customer: "Agency",
      amount: "$2,600",
      status: "Review",
      dueDate: "July 12, 2026",
      followUp: "Check duplicate"
    },
    {
      id: "INV-DEMO-005",
      customer: "E-commerce",
      amount: "$3,250",
      status: "Unpaid",
      dueDate: "July 19, 2026",
      followUp: "Queued"
    },
    {
      id: "INV-DEMO-006",
      customer: "Logistics",
      amount: "$5,100",
      status: "Paid",
      dueDate: "July 02, 2026",
      followUp: "Closed"
    }
  ],
  agingBuckets: [
    { label: "0-15 days", count: 6, amount: "$6,100" },
    { label: "16-30 days", count: 3, amount: "$3,000" },
    { label: "31-60 days", count: 4, amount: "$2,800" },
    { label: "60+ days", count: 1, amount: "$950" }
  ],
  followQueue: [
    { task: "Send payment reminder draft", status: "Draft", detail: "Prepared for owner review before sending." },
    { task: "Review overdue invoice", status: "Review", detail: "Check invoice notes and follow-up history." },
    { task: "Confirm payment received", status: "Queued", detail: "Verify sample payment status manually." },
    { task: "Update customer note", status: "Human review", detail: "Add internal note after owner decision." },
    { task: "Prepare account summary", status: "Draft", detail: "Create a sample summary for review." }
  ],
  activity: [
    { time: "09:15", title: "Invoice marked paid", detail: "A sample invoice was moved to paid after manual confirmation." },
    { time: "10:20", title: "Reminder draft prepared", detail: "A payment reminder draft was prepared for review." },
    { time: "11:05", title: "Overdue invoice reviewed", detail: "A sample overdue invoice was flagged for owner action." },
    { time: "13:40", title: "Customer note updated", detail: "A sample internal note was added to the invoice record." }
  ],
  ownerActions: [
    { label: "Review overdue invoice", status: "Review", detail: "Confirm context before any external follow-up." },
    { label: "Approve reminder wording", status: "Human review", detail: "Owner approves the reminder draft manually." },
    { label: "Confirm payment status", status: "Queued", detail: "Check whether the sample invoice should be marked paid." },
    { label: "Check duplicate invoice", status: "Review", detail: "Review invoice ID and customer type before updating." }
  ]
};
