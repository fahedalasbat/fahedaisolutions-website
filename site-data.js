(function () {
  const siteData = {
    meta: {
      brand: "Fahed AI Solutions",
      founder: "Fahed Al Asbat",
      role: "AI & Software Engineer",
      location: "Lebanon | Remote",
      label: "Demo / Sample Data",
      email: "fahed.sbat@icloud.com",
      whatsapp: "+961 81 908 355",
      linkedin: "https://www.linkedin.com/in/fahed-al-asbat-6b540341b",
      github: "https://github.com/fahedalasbat",
      disclaimer: "Demo/sample assets only. Not real client work."
    },
    hero: {
      kicker: "Founder-led software systems",
      title: "Practical AI and software systems for business operations.",
      subtitle: "Fahed AI Solutions builds dashboards, automation, CRM workflows, AI assistants, web applications, and operations systems for clearer daily work.",
      proof: ["Dashboards", "Automation", "CRM", "AI Assistants", "Web Applications", "Operations Systems"]
    },
    services: [
      {
        title: "Dashboards",
        label: "Operations visibility",
        description: "Focused dashboard interfaces for tracking work, reviewing activity, and seeing priorities clearly.",
        includes: ["KPI cards", "Tables", "Charts", "Review states"],
        mockup: { type: "dashboard", values: ["24", "08", "16"] },
        tone: "blue"
      },
      {
        title: "Automation",
        label: "Workflow systems",
        description: "Structured automation flows for repeatable tasks, handoffs, alerts, and review points.",
        includes: ["Triggers", "Task routing", "Status logs", "Human review"],
        mockup: { type: "automation", steps: ["Trigger", "Route", "Review", "Done"] },
        tone: "green"
      },
      {
        title: "CRM",
        label: "Pipeline clarity",
        description: "Custom CRM surfaces for inquiries, follow-ups, pipeline stages, notes, and relationship work.",
        includes: ["Lead cards", "Stages", "Follow-ups", "Contact notes"],
        mockup: { type: "crm", stages: ["New", "Discovery", "Proposal"] },
        tone: "amber"
      },
      {
        title: "AI Assistants",
        label: "Assisted workflows",
        description: "AI-assisted interfaces for drafting, sorting, and summarizing with clear human review.",
        includes: ["Prompt intake", "Draft outputs", "Review queues", "Knowledge flows"],
        mockup: { type: "assistant", messages: ["Sample request", "Draft ready for review"] },
        tone: "violet"
      },
      {
        title: "Web Applications",
        label: "Product interfaces",
        description: "Responsive web applications with polished UI, practical data models, and reusable patterns.",
        includes: ["Frontends", "Forms", "Navigation", "Stateful UI"],
        mockup: { type: "webapp", tabs: ["Home", "Data", "Review"] },
        tone: "blue"
      },
      {
        title: "Business Operations Systems",
        label: "End-to-end tooling",
        description: "Operational systems that combine dashboards, workflows, CRM surfaces, and internal tools.",
        includes: ["System maps", "Admin views", "Data tables", "Reusable patterns"],
        mockup: { type: "system", modules: ["Dashboard", "CRM", "Automation", "Assistant"] },
        tone: "green"
      }
    ],
    portfolio: [
      {
        title: "Business Operations Dashboard Demo",
        type: "Dashboard",
        description: "A sample operations dashboard with KPI cards, charts, tables, and task views.",
        href: "./demos/business-operations-dashboard/index.html?capture=1",
        label: "Demo / Sample Data",
        tone: "blue"
      },
      {
        title: "Automation Workflow Demo",
        type: "Automation",
        description: "A sample workflow interface for triggers, actions, status, and review.",
        href: "./demos/automation-workflow/index.html?capture=1",
        label: "Demo / Sample Data",
        tone: "green"
      },
      {
        title: "CRM Pipeline Demo",
        type: "CRM",
        description: "A sample CRM pipeline for stages, follow-ups, records, and relationship work.",
        href: "./demos/crm-pipeline/index.html?capture=1",
        label: "Demo / Sample Data",
        tone: "amber"
      },
      {
        title: "Business AI Assistant Demo",
        type: "AI Assistant",
        description: "A sample assistant interface for intake, draft support, responses, and review.",
        href: "demos/ai-assistant/index.html?v=ai-motion-2",
        label: "Demo / Sample Data",
        tone: "violet"
      },
      {
        title: "Invoice & Payment Tracker Demo",
        type: "Finance Operations",
        description: "A sample invoice tracking interface for paid, unpaid, overdue, and follow-up payment visibility.",
        href: "demos/invoice-payment-tracker/index.html",
        label: "Demo / Sample Data",
        tone: "blue"
      }
    ],
    process: [
      {
        step: "01",
        title: "Map the workflow",
        description: "Clarify the workflow, users, inputs, outputs, constraints, and review points."
      },
      {
        step: "02",
        title: "Define data",
        description: "Identify the fields, statuses, tables, rules, and sample data needed."
      },
      {
        step: "03",
        title: "Build",
        description: "Turn the direction into a working interface for testing and refinement."
      },
      {
        step: "04",
        title: "Review",
        description: "Check workflow clarity, responsive behavior, labels, and edge cases."
      },
      {
        step: "05",
        title: "Launch",
        description: "Prepare the asset or system with clear structure and reusable components."
      },
      {
        step: "06",
        title: "Improve",
        description: "Refine the interface after feedback, workflow changes, and constraints."
      }
    ],
    about: {
      text: "Fahed AI Solutions is a founder-led software company focused on practical tools for business operations: clear interfaces, reusable patterns, and systems that organize work without unnecessary complexity.",
      systems: [
        "Business dashboards",
        "Automation workflows",
        "CRM pipeline tools",
        "AI assistant interfaces",
        "Responsive web applications",
        "Operations command centers"
      ]
    },
    contact: {
      links: [
        { label: "Email", value: "fahed.sbat@icloud.com", href: "mailto:fahed.sbat@icloud.com", tone: "blue" },
        { label: "WhatsApp", value: "+961 81 908 355", href: "https://wa.me/96181908355", tone: "green" },
        { label: "LinkedIn", value: "Fahed Al Asbat", href: "https://www.linkedin.com/in/fahed-al-asbat-6b540341b", tone: "blue" },
        { label: "GitHub", value: "fahedalasbat", href: "https://github.com/fahedalasbat", tone: "neutral" }
      ]
    }
  };

  window.FahedSiteData = siteData;
})();
