window.automationWorkflowData = {
  meta: {
    brand: "Fahed AI Solutions",
    label: "Automation Demo · Sample Data",
    title: "Automation Workflow Demo",
    version: "Automation Workflow Demo v1",
    scope: "A sample workflow showing how a lead can move through checks, task creation, notifications, dashboard updates, and human review.",
    disclaimer: "Demo/sample data only. Not a real client workflow.",
    period: "Sample run: July 2026"
  },
  workflowSteps: [
    {
      title: "Lead received",
      status: "Received",
      detail: "A sample inquiry enters the workflow queue from a demo intake source.",
      owner: "Intake"
    },
    {
      title: "Data checked",
      status: "Checked",
      detail: "Required sample fields are reviewed before any next step is triggered.",
      owner: "Validation"
    },
    {
      title: "Task created",
      status: "Created",
      detail: "A follow-up task is created when the sample lead has enough information.",
      owner: "Operations"
    },
    {
      title: "Notification sent",
      status: "Sent",
      detail: "A sample internal notification is prepared for the responsible reviewer.",
      owner: "Team alert"
    },
    {
      title: "Dashboard updated",
      status: "Updated",
      detail: "The demo dashboard reflects the latest workflow status.",
      owner: "Reporting"
    },
    {
      title: "Human review",
      status: "Review",
      detail: "A person reviews the sample record before any business action is taken.",
      owner: "Founder review"
    }
  ],
  statusCards: [
    {
      label: "Sample Leads in Queue",
      value: "12",
      note: "Demo records awaiting workflow checks"
    },
    {
      label: "Records Checked",
      value: "12",
      note: "Sample records with required-field review"
    },
    {
      label: "Tasks Created",
      value: "8",
      note: "Demo follow-up tasks generated"
    },
    {
      label: "Notifications Sent",
      value: "8",
      note: "Sample internal alerts prepared"
    },
    {
      label: "Dashboard Updates",
      value: "6",
      note: "Demo status updates reflected"
    },
    {
      label: "Human Review Items",
      value: "4",
      note: "Sample items held for manual decision"
    }
  ],
  activityLog: [
    {
      time: "09:10",
      title: "Sample lead received",
      detail: "A demo inquiry was added to the automation queue.",
      type: "Intake"
    },
    {
      time: "09:12",
      title: "Required fields checked",
      detail: "Source, service interest, and contact channel were reviewed as sample fields.",
      type: "Check"
    },
    {
      time: "09:14",
      title: "Follow-up task created",
      detail: "The demo workflow created an internal task for review.",
      type: "Task"
    },
    {
      time: "09:16",
      title: "Internal notification prepared",
      detail: "A sample notification was queued for the responsible reviewer.",
      type: "Alert"
    },
    {
      time: "09:18",
      title: "Dashboard status updated",
      detail: "The sample record moved to the human review stage.",
      type: "Dashboard"
    }
  ],
  automationRules: [
    {
      rule: "If a sample lead enters from a form, create a demo intake record.",
      state: "Active"
    },
    {
      rule: "If required sample fields are missing, pause and mark for human review.",
      state: "Guardrail"
    },
    {
      rule: "If service interest is selected, create a follow-up task for review.",
      state: "Active"
    },
    {
      rule: "If priority is marked high, prepare an internal notification.",
      state: "Active"
    },
    {
      rule: "Update dashboard status after each approved workflow step.",
      state: "Active"
    },
    {
      rule: "Human review remains required before any external business action.",
      state: "Required"
    }
  ],
  sampleQueue: [
    {
      item: "DEMO-LEAD-024",
      source: "Website Form",
      stage: "Human review",
      priority: "High"
    },
    {
      item: "DEMO-LEAD-025",
      source: "WhatsApp",
      stage: "Task created",
      priority: "Medium"
    },
    {
      item: "DEMO-LEAD-026",
      source: "Referral",
      stage: "Data checked",
      priority: "Medium"
    },
    {
      item: "DEMO-LEAD-027",
      source: "LinkedIn",
      stage: "Lead received",
      priority: "Low"
    }
  ]
};
