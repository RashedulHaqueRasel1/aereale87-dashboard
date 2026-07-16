import { AdminAuthorsPage } from "@/features/admin-dashboard/authors/components/admin-authors-page";
import { getAdminAuthors } from "@/features/admin-dashboard/authors/api/get-admin-authors";

export default async function AdminAuthorsDashboardPage() {
  const data = await getAdminAuthors();

  return <AdminAuthorsPage data={data} />;
}
