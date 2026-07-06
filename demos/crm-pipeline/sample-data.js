window.crmDemoData = {
  meta: {
    brand: "Fahed AI Solutions",
    label: "CRM Demo · Sample Data",
    title: "CRM Pipeline Demo",
    version: "CRM Demo v1",
    scope: "Sample CRM interface for tracking leads, follow-ups, proposals, and owner review actions.",
    disclaimer: "Demo/sample data only. Not a real client CRM.",
    period: "Sample CRM view: July 2026"
  },
  kpis: [
    {
      label: "Total Leads",
      value: "11",
      note: "Visible sample records"
    },
    {
      label: "Active Opportunities",
      value: "9",
      note: "Open sample pipeline items"
    },
    {
      label: "Follow-Ups Due",
      value: "4",
      note: "Visible demo tasks"
    },
    {
      label: "Proposals Sent",
      value: "2",
      note: "Sample proposal stage"
    },
    {
      label: "Closed Won",
      value: "1",
      note: "Visible demo closed status"
    }
  ],
  pipeline: [
    {
      stage: "New Lead",
      cards: [
        {
          id: "Demo Lead 001",
          type: "Clinic",
          need: "Appointment tracking",
          source: "Website",
          owner: "Founder review",
          priority: "High"
        },
        {
          id: "Demo Lead 002",
          type: "Restaurant",
          need: "Order follow-up workflow",
          source: "Instagram",
          owner: "Review queue",
          priority: "Medium"
        },
        {
          id: "Demo Lead 003",
          type: "Service Business",
          need: "Lead intake dashboard",
          source: "Referral",
          owner: "Review queue",
          priority: "Low"
        }
      ]
    },
    {
      stage: "Contacted",
      cards: [
        {
          id: "Demo Lead 004",
          type: "E-commerce",
          need: "Customer follow-up CRM",
          source: "WhatsApp",
          owner: "Founder review",
          priority: "High"
        },
        {
          id: "Demo Lead 005",
          type: "Agency",
          need: "Client request tracker",
          source: "LinkedIn",
          owner: "Review queue",
          priority: "Medium"
        }
      ]
    },
    {
      stage: "Proposal Sent",
      cards: [
        {
          id: "Demo Lead 006",
          type: "Logistics",
          need: "Shipment inquiry CRM",
          source: "Website",
          owner: "Founder review",
          priority: "High"
        },
        {
          id: "Demo Lead 007",
          type: "SME",
          need: "Sales activity tracking",
          source: "Referral",
          owner: "Review queue",
          priority: "Medium"
        }
      ]
    },
    {
      stage: "Follow-Up",
      cards: [
        {
          id: "Demo Lead 008",
          type: "Clinic",
          need: "Patient inquiry pipeline",
          source: "WhatsApp",
          owner: "Founder review",
          priority: "High"
        },
        {
          id: "Demo Lead 009",
          type: "Restaurant",
          need: "Catering inquiry tracker",
          source: "Instagram",
          owner: "Review queue",
          priority: "Medium"
        }
      ]
    },
    {
      stage: "Won",
      cards: [
        {
          id: "Demo Lead 010",
          type: "Service Business",
          need: "Internal request CRM",
          source: "Referral",
          owner: "Closed sample",
          priority: "Medium"
        }
      ]
    },
    {
      stage: "Lost",
      cards: [
        {
          id: "Demo Lead 011",
          type: "Startup",
          need: "CRM discovery",
          source: "LinkedIn",
          owner: "Closed sample",
          priority: "Low"
        }
      ]
    }
  ],
  followUps: [
    {
      item: "Demo Lead 004",
      action: "Review discovery notes",
      due: "Today",
      owner: "Founder review",
      priority: "High"
    },
    {
      item: "Demo Lead 006",
      action: "Prepare proposal clarification",
      due: "Today",
      owner: "Founder review",
      priority: "High"
    },
    {
      item: "Demo Lead 008",
      action: "Send follow-up message draft",
      due: "Tomorrow",
      owner: "Founder review",
      priority: "Medium"
    },
    {
      item: "Demo Lead 009",
      action: "Confirm sample requirements",
      due: "This week",
      owner: "Review queue",
      priority: "Medium"
    }
  ],
  sources: [
    { label: "Website", value: 2 },
    { label: "WhatsApp", value: 2 },
    { label: "Referral", value: 3 },
    { label: "Instagram", value: 2 },
    { label: "LinkedIn", value: 2 }
  ],
  activity: [
    {
      time: "09:05",
      title: "Sample lead added",
      detail: "Demo Lead 001 entered the New Lead stage.",
      type: "Lead"
    },
    {
      time: "09:30",
      title: "Follow-up task created",
      detail: "Demo Lead 004 was marked for founder review.",
      type: "Task"
    },
    {
      time: "10:15",
      title: "Proposal stage updated",
      detail: "Demo Lead 006 moved to Proposal Sent.",
      type: "Pipeline"
    },
    {
      time: "11:20",
      title: "Owner action requested",
      detail: "Demo Lead 008 requires manual review before next action.",
      type: "Review"
    }
  ],
  ownerActions: [
    {
      label: "Review high-priority follow-ups",
      detail: "Check sample notes before any outreach action.",
      status: "Required"
    },
    {
      label: "Approve proposal wording",
      detail: "Confirm scope language before sending a demo proposal.",
      status: "Review"
    },
    {
      label: "Clean duplicate sample records",
      detail: "Merge demo entries only after human confirmation.",
      status: "Queued"
    },
    {
      label: "Check inactive pipeline items",
      detail: "Decide whether to keep, pause, or close sample leads.",
      status: "Queued"
    }
  ]
};
