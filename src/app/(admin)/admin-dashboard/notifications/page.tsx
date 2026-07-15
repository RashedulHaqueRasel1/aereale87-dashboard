import { AdminNotificationsPage } from "@/features/admin-dashboard/notifications/components/admin-notifications-page";
import { getAdminNotifications } from "@/features/admin-dashboard/notifications/api/get-admin-notifications";

export default async function AdminNotificationsRoute() {
  const data = await getAdminNotifications();

  return <AdminNotificationsPage data={data} />;
}
