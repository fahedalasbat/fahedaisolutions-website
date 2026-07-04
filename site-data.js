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
      subtitle: "Fahed AI Solutions builds dashboards, automation, CRM workflows, AI assistants, web applications, and business operations systems for teams that need clear tools.",
      proof: ["Dashboards", "Automation", "CRM", "AI Assistants", "Web Applications", "Operations Systems"]
    },
    services: [
      {
        title: "Dashboards",
        label: "Operations visibility",
        description: "Focused dashboard interfaces for tracking work, reviewing activity, and giving teams a clearer command center.",
        includes: ["KPI cards", "Tables", "Charts", "Review states"],
        mockup: { type: "dashboard", values: ["24", "08", "16"] },
        tone: "blue"
      },
      {
        title: "Automation",
        label: "Workflow systems",
        description: "Structured automation flows that connect repeatable tasks, handoffs, alerts, and review checkpoints.",
        includes: ["Triggers", "Task routing", "Status logs", "Human review"],
        mockup: { type: "automation", steps: ["Trigger", "Route", "Review", "Done"] },
        tone: "green"
      },
      {
        title: "CRM",
        label: "Pipeline clarity",
        description: "Custom CRM surfaces for inquiries, follow-ups, pipeline stages, notes, and relationship workflows.",
        includes: ["Lead cards", "Stages", "Follow-ups", "Contact notes"],
        mockup: { type: "crm", stages: ["New", "Discovery", "Proposal"] },
        tone: "amber"
      },
      {
        title: "AI Assistants",
        label: "Assisted workflows",
        description: "AI-assisted interfaces for drafting, sorting, summarizing, and guiding business workflows with clear review boundaries.",
        includes: ["Prompt intake", "Draft outputs", "Review queues", "Knowledge flows"],
        mockup: { type: "assistant", messages: ["Sample request", "Draft ready for review"] },
        tone: "violet"
      },
      {
        title: "Web Applications",
        label: "Product interfaces",
        description: "Responsive web applications with polished UI, practical data models, and reusable component foundations.",
        includes: ["Frontends", "Forms", "Navigation", "Stateful UI"],
        mockup: { type: "webapp", tabs: ["Home", "Data", "Review"] },
        tone: "blue"
      },
      {
        title: "Business Operations Systems",
        label: "End-to-end tooling",
        description: "Operational systems that combine dashboards, workflows, CRM surfaces, and internal tools into one practical workspace.",
        includes: ["System maps", "Admin views", "Data tables", "Reusable patterns"],
        mockup: { type: "system", modules: ["Dashboard", "CRM", "Automation", "Assistant"] },
        tone: "green"
      }
    ],
    portfolio: [
      {
        title: "Business Operations Dashboard Demo",
        type: "Dashboard",
        description: "A sample operations dashboard showing KPI cards, chart panels, operational tables, and task views.",
        href: "./demos/business-operations-dashboard/index.html?capture=1",
        label: "Demo / Sample Data",
        tone: "blue"
      },
      {
        title: "Automation Workflow Demo",
        type: "Automation",
        description: "A sample workflow interface for triggers, actions, status tracking, and operational review.",
        href: "./demos/automation-workflow/index.html?capture=1",
        label: "Demo / Sample Data",
        tone: "green"
      },
      {
        title: "CRM Pipeline Demo",
        type: "CRM",
        description: "A sample CRM pipeline surface for stages, follow-ups, records, and relationship management.",
        href: "./demos/crm-pipeline/index.html?capture=1",
        label: "Demo / Sample Data",
        tone: "amber"
      },
      {
        title: "Business AI Assistant Demo",
        type: "AI Assistant",
        description: "A sample assistant interface for intake, draft support, guided responses, and human review.",
        href: "./demos/ai-assistant/index.html?capture=1",
        label: "Demo / Sample Data",
        tone: "violet"
      }
    ],
    process: [
      {
        step: "01",
        title: "Map the workflow",
        description: "Clarify the business flow, users, inputs, outputs, constraints, and review points before shaping the interface."
      },
      {
        step: "02",
        title: "Define data",
        description: "Identify the fields, statuses, tables, rules, and sample data needed to make the system understandable."
      },
      {
        step: "03",
        title: "Build",
        description: "Turn the direction into a working interface that can be opened, tested, reviewed, and refined."
      },
      {
        step: "04",
        title: "Review",
        description: "Check the workflow, visual clarity, responsive behavior, sample-data labels, and edge cases before handoff."
      },
      {
        step: "05",
        title: "Launch",
        description: "Prepare the asset or system for practical use with clear structure, contact paths, and reusable components."
      },
      {
        step: "06",
        title: "Improve",
        description: "Refine the interface after feedback, new workflow needs, and real operating constraints are understood."
      }
    ],
    about: {
      text: "Fahed AI Solutions is a founder-led software company focused on practical tools for business operations. The work centers on clear interfaces, reusable system patterns, and software that organizes workflows without unnecessary complexity.",
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
      projectTypes: ["Dashboard", "Automation", "CRM", "AI Assistant", "Web Application", "Business Operations System"],
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
