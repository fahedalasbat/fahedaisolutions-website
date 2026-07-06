window.adSpendRoasTrackerData = {
  meta: {
    label: "Ad Spend Demo · Sample Data",
    title: "Ad Spend & ROAS Tracker Demo",
    scope: "Sample marketing operations dashboard for tracking ad spend, campaign results, ROAS, leads, purchases, and budget visibility.",
    period: "Sample view: July 2026",
    summaryTitle: "Marketing performance and budget visibility view",
    disclaimer: "Demo/sample data only. Not real ad account data.",
    safetyNote: "Demo/sample data only. Not real ad account data. No ad platform is connected in this demo. No advertising results are guaranteed.",
    version: "Ad Spend & ROAS Tracker Demo v1"
  },
  kpis: [
    { label: "Total Ad Spend", value: "$12,850", note: "Sample monthly spend" },
    { label: "Conversion Value", value: "$48,600", note: "Sample tracked value" },
    { label: "ROAS", value: "3.8x", note: "Sample blended ratio" },
    { label: "Leads", value: "742", note: "Sample lead count" },
    { label: "Purchases", value: "186", note: "Sample purchase count" },
    { label: "Cost per Lead", value: "$17.32", note: "Spend divided by leads" },
    { label: "Cost per Purchase", value: "$69.09", note: "Spend divided by purchases" },
    { label: "Budget Remaining", value: "$2,150", note: "Sample budget view" }
  ],
  weeklyPerformance: [
    { label: "Week 1", spend: 2100, conversionValue: 7800, roas: 3.7 },
    { label: "Week 2", spend: 2450, conversionValue: 9200, roas: 3.8 },
    { label: "Week 3", spend: 3000, conversionValue: 11800, roas: 3.9 },
    { label: "Week 4", spend: 2800, conversionValue: 10200, roas: 3.6 },
    { label: "Week 5", spend: 2500, conversionValue: 9600, roas: 3.8 }
  ],
  campaigns: [
    {
      campaign: "Summer Offer Campaign",
      platform: "Meta Ads",
      spend: "$2,400",
      budget: "$3,000",
      leads: "180",
      purchases: "42",
      conversionValue: "$9,840",
      roas: "4.1x",
      status: "Active",
      action: "Scale"
    },
    {
      campaign: "Clinic Leads Campaign",
      platform: "Instagram",
      spend: "$1,250",
      budget: "$1,800",
      leads: "210",
      purchases: "18",
      conversionValue: "$4,600",
      roas: "3.6x",
      status: "Active",
      action: "Monitor"
    },
    {
      campaign: "Restaurant Weekend Promo",
      platform: "Meta Ads",
      spend: "$980",
      budget: "$1,200",
      leads: "94",
      purchases: "12",
      conversionValue: "$2,100",
      roas: "2.1x",
      status: "Review",
      action: "Improve creative"
    },
    {
      campaign: "Google Search Leads",
      platform: "Google Ads",
      spend: "$1,650",
      budget: "$2,100",
      leads: "85",
      purchases: "26",
      conversionValue: "$6,980",
      roas: "4.2x",
      status: "Active",
      action: "Keep"
    },
    {
      campaign: "Retargeting Campaign",
      platform: "Meta Ads",
      spend: "$720",
      budget: "$900",
      leads: "64",
      purchases: "20",
      conversionValue: "$5,400",
      roas: "7.5x",
      status: "Strong",
      action: "Scale"
    },
    {
      campaign: "Awareness Campaign",
      platform: "TikTok Ads",
      spend: "$1,100",
      budget: "$1,500",
      leads: "109",
      purchases: "6",
      conversionValue: "$1,200",
      roas: "1.1x",
      status: "Review",
      action: "Check audience"
    }
  ],
  platforms: [
    { name: "Meta Ads", spend: "$3,840", leads: "268", purchases: "74", roas: "4.5x", share: 30 },
    { name: "Instagram", spend: "$1,850", leads: "236", purchases: "24", roas: "3.2x", share: 14 },
    { name: "Google Ads", spend: "$3,350", leads: "118", purchases: "46", roas: "4.0x", share: 26 },
    { name: "TikTok Ads", spend: "$2,100", leads: "89", purchases: "18", roas: "1.8x", share: 16 },
    { name: "LinkedIn Ads", spend: "$1,710", leads: "31", purchases: "24", roas: "2.6x", share: 14 }
  ],
  budget: {
    monthlyBudget: "$15,000",
    spent: "$12,850",
    remaining: "$2,150",
    pacing: "On track",
    daysRemaining: "8",
    progress: 86
  },
  ownerActions: [
    { label: "Review low ROAS campaign", status: "Review", detail: "Check audience, creative, and landing page before changing spend." },
    { label: "Scale strong retargeting campaign", status: "Scale", detail: "Prepare a sample budget adjustment for owner review." },
    { label: "Check tracking setup", status: "Tracking", detail: "Confirm sample events and reporting labels are mapped correctly." },
    { label: "Prepare weekly ads report", status: "Report", detail: "Summarize sample spend, leads, purchases, and review items." },
    { label: "Confirm lead quality with sales team", status: "Human review", detail: "Owner or team reviews lead quality before campaign decisions." }
  ],
  activity: [
    { time: "09:10", title: "Campaign spend imported", detail: "Sample spend values were added to the dashboard view." },
    { time: "10:00", title: "Conversion value reviewed", detail: "Sample conversion value was checked before reporting." },
    { time: "11:25", title: "Low ROAS campaign flagged", detail: "A sample campaign was marked for owner review." },
    { time: "13:40", title: "Weekly summary prepared", detail: "A sample marketing summary was prepared for review." }
  ]
};
