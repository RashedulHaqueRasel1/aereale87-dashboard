export type AdminOverviewStat = {
  title: string;
  value: string;
  change: string;
  detail: string;
  icon: "reviews" | "orders" | "authors" | "revenue";
};

export type AdminActivity = {
  id: string;
  label: string;
  meta: string;
};

export type AdminDashboardOverviewData = {
  stats: AdminOverviewStat[];
  approvals: {
    label: string;
    value: string;
    tone: "amber" | "rose" | "emerald";
  }[];
  spotlight: {
    title: string;
    value: string;
    subtitle: string;
    trend: string;
  }[];
  activity: AdminActivity[];
  authors: {
    id: string;
    name: string;
    genre: string;
    status: string;
    earnings: string;
  }[];
};
