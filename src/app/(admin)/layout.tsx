import { DashboardShell, type DashboardNavItem } from "@/components/dashboard/dashboard-shell";

const adminNavItems: DashboardNavItem[] = [
  {
    title: "Dashboard Overview",
    href: "/admin-dashboard",
    icon: "layout-dashboard",
  },
  {
    title: "Authors",
    href: "/admin-dashboard/authors",
    icon: "users",
    disabled: true,
  },
  {
    title: "Content Reviews",
    href: "/admin-dashboard/moderation",
    icon: "shield",
    disabled: true,
  },
  {
    title: "Orders",
    href: "/admin-dashboard/orders",
    icon: "shopping-cart",
    disabled: true,
  },
  {
    title: "Settings",
    href: "/admin-dashboard/settings",
    icon: "settings",
  },
];

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DashboardShell
      items={adminNavItems}
      sectionLabel="Admin dashboard"
      user={{
        name: "Olivia Carter",
        email: "olivia@example.com",
        role: "Super Admin",
      }}
    >
      {children}
    </DashboardShell>
  );
}
