export type AuthorStatus = "Founding" | "Active" | "Pending" | "Suspended";

export type AdminAuthorRecord = {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  books: number;
  audiobooks: number;
  readers: string;
  joinDate: string;
  status: AuthorStatus;
  bio: string;
};

export type AdminAuthorsData = {
  summary: {
    totalAuthors: number;
    activeAuthors: number;
    foundingAuthors: number;
    foundingAuthorsLimit: number;
    pendingApprovals: number;
  };
  filters: {
    allAuthors: number;
    foundingAuthors: number;
    pendingAuthors: number;
    suspendedAuthors: number;
  };
  authors: AdminAuthorRecord[];
};
