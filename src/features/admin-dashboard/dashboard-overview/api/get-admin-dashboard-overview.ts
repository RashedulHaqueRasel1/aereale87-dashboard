import type { AdminDashboardOverviewData } from "../types";

export async function getAdminDashboardOverview(): Promise<AdminDashboardOverviewData> {
  return Promise.resolve({
    stats: [
      {
        title: "Pending reviews",
        value: "42",
        change: "+8",
        detail: "needs action today",
        icon: "reviews",
      },
      {
        title: "Orders today",
        value: "1,284",
        change: "+12.4%",
        detail: "vs yesterday",
        icon: "orders",
      },
      {
        title: "Active authors",
        value: "326",
        change: "+17",
        detail: "publishing this month",
        icon: "authors",
      },
      {
        title: "Revenue this month",
        value: "$84.2K",
        change: "+6.8%",
        detail: "projected close",
        icon: "revenue",
      },
    ],
    approvals: [
      { label: "Pending author approvals", value: "11", tone: "amber" },
      { label: "Flagged content reviews", value: "07", tone: "rose" },
      { label: "Refund requests in queue", value: "03", tone: "emerald" },
    ],
    spotlight: [
      {
        title: "Content reviews closed",
        value: "128",
        subtitle: "Completed by moderation team this week",
        trend: "+14%",
      },
      {
        title: "Orders fulfilled",
        value: "3,492",
        subtitle: "Successful payments and delivery-ready items",
        trend: "+9%",
      },
      {
        title: "Support response time",
        value: "18 min",
        subtitle: "Average first-response time across all tickets",
        trend: "-6 min",
      },
    ],
    activity: [
      {
        id: "activity-1",
        label: "Ops team approved the featured homepage collection refresh",
        meta: "12 minutes ago",
      },
      {
        id: "activity-2",
        label: "Three new author invitations were accepted and moved to onboarding",
        meta: "47 minutes ago",
      },
      {
        id: "activity-3",
        label: "Morning spam moderation queue was cleared with no escalations",
        meta: "1 hour ago",
      },
      {
        id: "activity-4",
        label: "Finance team confirmed payout batch for premium partners",
        meta: "2 hours ago",
      },
    ],
    authors: [
      {
        id: "author-1",
        name: "Rafiq Hasan",
        genre: "Thriller",
        status: "Verified",
        earnings: "$12.4K",
      },
      {
        id: "author-2",
        name: "Maliha Noor",
        genre: "Romance",
        status: "Reviewing",
        earnings: "$9.8K",
      },
      {
        id: "author-3",
        name: "Sabbir Alam",
        genre: "Self-help",
        status: "Verified",
        earnings: "$7.1K",
      },
      {
        id: "author-4",
        name: "Nusrat Jahan",
        genre: "Children",
        status: "Pending Docs",
        earnings: "$5.6K",
      },
    ],
  });
}
