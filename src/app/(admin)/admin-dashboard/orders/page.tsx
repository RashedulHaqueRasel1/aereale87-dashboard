import { getAdminOrders } from "@/features/admin-dashboard/orders/api/get-admin-orders";
import { AdminOrdersPage } from "@/features/admin-dashboard/orders/components/admin-orders-page";

export default async function AdminOrdersRoute() {
  const data = await getAdminOrders();

  return <AdminOrdersPage data={data} />;
}
