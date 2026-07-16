import { getAdminModeration } from "@/features/admin-dashboard/moderation/api/get-admin-moderation";
import { AdminModerationPage } from "@/features/admin-dashboard/moderation/components/admin-moderation-page";

export default async function AdminModerationRoute() {
  const data = await getAdminModeration();

  return <AdminModerationPage data={data} />;
}
