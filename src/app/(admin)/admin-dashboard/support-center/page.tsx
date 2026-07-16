import { getAdminSupportCenter } from "@/features/admin-dashboard/support-center/api/get-admin-support-center";
import { AdminSupportCenterPage } from "@/features/admin-dashboard/support-center/components/admin-support-center-page";

export default async function AdminSupportCenterRoute() {
  const data = await getAdminSupportCenter();

  return <AdminSupportCenterPage data={data} />;
}
