import { AuthorNotificationsPage } from "@/features/author-dashboard/notifications/components/author-notifications-page";
import { getAuthorNotifications } from "@/features/author-dashboard/notifications/api/get-author-notifications";

export default async function AuthorNotificationsRoute() {
  const data = await getAuthorNotifications();

  return <AuthorNotificationsPage data={data} />;
}
