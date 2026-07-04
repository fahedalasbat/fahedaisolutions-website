window.aiAssistantDemoData = {
  meta: {
    brand: "Fahed AI Solutions",
    label: "AI Assistant Demo - Sample Data",
    title: "Business AI Assistant Demo",
    version: "AI Assistant Demo v1",
    scope: "Safe sample interface for drafting replies, reviewing business context, and preparing owner-approved actions.",
    disclaimer: "Demo/sample data only. Not a real client AI system.",
    period: "Sample assistant view: July 2026"
  },
  kpis: [
    {
      label: "Sample Queries",
      value: "18",
      note: "Demo questions reviewed"
    },
    {
      label: "Draft Replies",
      value: "9",
      note: "Prepared for review"
    },
    {
      label: "Items for Review",
      value: "5",
      note: "Awaiting human approval"
    },
    {
      label: "Approved Actions",
      value: "4",
      note: "Sample approved items"
    }
  ],
  chat: [
    {
      role: "user",
      label: "Sample User",
      message: "Can you draft a follow-up reply for Demo Lead 014 about a CRM request?"
    },
    {
      role: "assistant",
      label: "AI Assistant Draft",
      message: "Draft prepared for human review: Thank you for sharing the CRM request. I can help review the workflow, required fields, follow-up stages, and reporting needs before preparing a scoped proposal."
    },
    {
      role: "user",
      label: "Sample User",
      message: "Which sample documents did you use?"
    },
    {
      role: "assistant",
      label: "AI Assistant Draft",
      message: "I referenced the sample CRM field guide, demo service notes, and sample response policy. No private or real client documents are included in this demo."
    },
    {
      role: "user",
      label: "Sample User",
      message: "Can this be sent automatically?"
    },
    {
      role: "assistant",
      label: "AI Assistant Draft",
      message: "This demo keeps external messages in human review. The assistant can prepare drafts, but a person should approve content before sending."
    }
  ],
  knowledgeSources: [
    {
      title: "Sample CRM Field Guide",
      type: "Demo document",
      status: "Sample only",
      detail: "Example fields for stage, source, priority, owner, and follow-up date."
    },
    {
      title: "Demo Service Notes",
      type: "Demo notes",
      status: "Sample only",
      detail: "General service descriptions for dashboards, automation, CRM, and web apps."
    },
    {
      title: "Sample Response Policy",
      type: "Demo policy",
      status: "Review required",
      detail: "Draft replies require human approval before external use."
    },
    {
      title: "Sample FAQ Library",
      type: "Demo FAQ",
      status: "Sample only",
      detail: "Example answers for scope, timeline discussion, and next steps."
    }
  ],
  suggestedActions: [
    {
      title: "Prepare follow-up draft",
      detail: "Create a concise message for Demo Lead 014.",
      state: "Draft"
    },
    {
      title: "Create review task",
      detail: "Ask the owner to approve wording before sending.",
      state: "Review"
    },
    {
      title: "Update sample CRM note",
      detail: "Log that a draft reply was prepared.",
      state: "Queued"
    },
    {
      title: "Request missing details",
      detail: "Ask for required fields before any proposal language.",
      state: "Draft"
    }
  ],
  reviewItems: [
    {
      label: "Draft reply approval",
      detail: "Check tone, scope, and missing assumptions before sending.",
      status: "Required"
    },
    {
      label: "Knowledge source check",
      detail: "Confirm the draft references only approved sample material.",
      status: "Review"
    },
    {
      label: "External action approval",
      detail: "No external message is sent from this demo without human approval.",
      status: "Required"
    }
  ],
  safetyLimits: [
    {
      title: "Human approval required",
      detail: "The assistant prepares drafts; a person reviews important actions."
    },
    {
      title: "No private data",
      detail: "This demo uses sample records and sample documents only."
    },
    {
      title: "No accuracy promise",
      detail: "Outputs should be checked against business context before use."
    },
    {
      title: "No human replacement claim",
      detail: "The interface supports review workflows; it does not replace decision makers."
    }
  ],
  activity: [
    {
      time: "09:05",
      title: "Sample query received",
      detail: "Demo Lead 014 CRM follow-up question entered the assistant panel.",
      type: "Query"
    },
    {
      time: "09:07",
      title: "Draft reply prepared",
      detail: "A sample response was created and marked for review.",
      type: "Draft"
    },
    {
      time: "09:09",
      title: "Source panel checked",
      detail: "Sample documents were listed for visibility.",
      type: "Source"
    },
    {
      time: "09:12",
      title: "Human approval required",
      detail: "The demo action remains paused until a person reviews it.",
      type: "Review"
    }
  ]
};
