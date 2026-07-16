export type SupportCenterIssueRecord = {
  id: string;
  date: string;
  name: string;
  email: string;
  userType: "Author" | "User";
  issueSubject: string;
  issueDescription: string;
  attachments: Array<{
    id: string;
    name: string;
    size: string;
    type: "image" | "pdf";
  }>;
};

export type AdminSupportCenterData = {
  title: string;
  issues: SupportCenterIssueRecord[];
  pagination: {
    showingLabel: string;
    pages: number[];
    currentPage: number;
  };
};
