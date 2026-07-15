import { AdminSettingsPage } from "@/features/admin-dashboard/settings/components/admin-settings-page";
import { getAdminSettings } from "@/features/admin-dashboard/settings/api/get-admin-settings";

export default async function AdminSettingsRoute() {
  const data = await getAdminSettings();

  return <AdminSettingsPage data={data} />;
}
