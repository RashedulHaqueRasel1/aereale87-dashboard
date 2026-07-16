export type AdminOrderStatus = "Completed" | "Cancelled";

export type AdminOrderTab = {
  id: string;
  label: string;
  active?: boolean;
};

export type AdminOrderSummary = {
  id: string;
  label: string;
  value: string;
};

export type AdminOrderRecord = {
  id: string;
  orderId: string;
  customer: string;
  products: string;
  amount: string;
  date: string;
  status: AdminOrderStatus;
};

export type AdminOrdersData = {
  summary: AdminOrderSummary[];
  tabs: AdminOrderTab[];
  tableTitle: string;
  searchPlaceholder: string;
  orders: AdminOrderRecord[];
  pagination: {
    showingLabel: string;
    pages: number[];
    currentPage: number;
  };
};
