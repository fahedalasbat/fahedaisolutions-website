window.dashboardData = {
  meta: {
    brand: "Fahed AI Solutions",
    label: "Demo Dashboard - Sample Data",
    title: "Business Operations Dashboard Demo",
    scope: "Static sample dashboard for portfolio, proposal, website, LinkedIn Featured, and presentation use.",
    disclaimer: "All values, activities, SKUs, tasks, and chart data are sample/demo data only.",
    lastUpdated: "Sample period: July 2026"
  },
  kpis: [
    {
      label: "Monthly Sales",
      value: "$18,450",
      note: "Sample total for current month"
    },
    {
      label: "New Leads",
      value: "38",
      note: "Sample inquiries across channels"
    },
    {
      label: "Completed Orders",
      value: "126",
      note: "Sample fulfilled orders"
    },
    {
      label: "Pending Follow-Ups",
      value: "14",
      note: "Sample leads needing contact"
    },
    {
      label: "Low Stock Items",
      value: "6",
      note: "Sample items below threshold"
    },
    {
      label: "Open Tasks",
      value: "9",
      note: "Sample operational tasks"
    }
  ],
  salesByWeek: [
    { label: "Week 1", value: 3200 },
    { label: "Week 2", value: 3900 },
    { label: "Week 3", value: 4200 },
    { label: "Week 4", value: 4750 },
    { label: "Week 5", value: 2400 }
  ],
  leadSources: [
    { label: "Website", value: 9 },
    { label: "WhatsApp", value: 8 },
    { label: "Referrals", value: 7 },
    { label: "Instagram", value: 6 },
    { label: "LinkedIn", value: 5 },
    { label: "Other", value: 3 }
  ],
  ordersByStatus: [
    { label: "Completed", value: 126, color: "#2fd5a6" },
    { label: "In Progress", value: 24, color: "#2f8cff" },
    { label: "Waiting Review", value: 10, color: "#f6c453" },
    { label: "Pending Pickup", value: 8, color: "#8b8dff" }
  ],
  recentActivity: [
    {
      time: "09:20",
      title: "Sample website inquiry added",
      detail: "New lead from a demo contact form entered the follow-up queue."
    },
    {
      time: "10:05",
      title: "Sample inventory check completed",
      detail: "Six demo stock items are below their review threshold."
    },
    {
      time: "11:30",
      title: "Sample order status updated",
      detail: "A demo order moved from in progress to completed."
    },
    {
      time: "13:15",
      title: "Sample follow-up scheduled",
      detail: "A demo lead was assigned for a follow-up message."
    }
  ],
  stockAlerts: [
    { sku: "SKU-DEMO-104", item: "A4 Paper Pack", current: 8, threshold: 15, status: "Review" },
    { sku: "SKU-DEMO-118", item: "Receipt Roll", current: 5, threshold: 12, status: "Low" },
    { sku: "SKU-DEMO-127", item: "Packaging Box M", current: 11, threshold: 20, status: "Review" },
    { sku: "SKU-DEMO-142", item: "Label Sticker", current: 4, threshold: 10, status: "Low" },
    { sku: "SKU-DEMO-156", item: "Courier Bag", current: 9, threshold: 18, status: "Review" },
    { sku: "SKU-DEMO-169", item: "Thermal Label", current: 6, threshold: 14, status: "Low" }
  ],
  openTasks: [
    { task: "Review pending follow-ups", owner: "Founder review", priority: "High" },
    { task: "Check low stock sample items", owner: "Operations", priority: "High" },
    { task: "Confirm demo order status list", owner: "Operations", priority: "Medium" },
    { task: "Prepare weekly dashboard snapshot", owner: "Founder review", priority: "Medium" },
    { task: "Review lead source labels", owner: "Marketing", priority: "Low" },
    { task: "Check delayed demo pickups", owner: "Operations", priority: "Medium" },
    { task: "Update sample inventory notes", owner: "Operations", priority: "Low" },
    { task: "Review inactive sample leads", owner: "Founder review", priority: "Medium" },
    { task: "Prepare client meeting dashboard view", owner: "Founder review", priority: "High" }
  ]
};
