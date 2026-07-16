export type ModerationSummaryCard = {
  title: string;
  currentValue: string;
  periodLabel: string;
  previousValue: string;
};

export type ModerationReviewRecord = {
  id: string;
  bookName: string;
  authorName: string;
  authorInitials: string;
  category: string;
  format: string;
  contentType: string;
  submittedAt: string;
  status: "Pending";
  description: string;
  priorityNote: string;
  checklist: Array<{
    id: string;
    title: string;
    detail?: string;
    checked: boolean;
  }>;
};

export type AdminModerationData = {
  summaryCards: ModerationSummaryCard[];
  searchPlaceholder: string;
  tableTitle: string;
  reviews: ModerationReviewRecord[];
  pagination: {
    showingLabel: string;
    pages: number[];
    currentPage: number;
  };
};
