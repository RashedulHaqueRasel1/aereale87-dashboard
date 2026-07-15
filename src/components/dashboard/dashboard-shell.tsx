import { MobileSidebar } from "@/components/dashboard/mobile-sidebar";
import { Sidebar } from "@/components/dashboard/sidebar";
import { SupportWidget } from "@/components/dashboard/support-widget";
import { Topbar } from "@/components/dashboard/topbar";

export type DashboardNavItem = {
  title: string;
  href: string;
  icon:
    | "layout-dashboard"
    | "book-open-text"
    | "pen-square"
    | "message-square"
    | "shield"
    | "users"
    | "bar-chart-3"
    | "upload"
    | "wallet"
    | "shopping-cart"
    | "settings";
  disabled?: boolean;
};

type DashboardShellProps = {
  children: React.ReactNode;
  items: DashboardNavItem[];
  sectionLabel: string;
  showSupportWidget?: boolean;
  user: {
    name: string;
    email: string;
    role: string;
  };
};

export function DashboardShell({
  children,
  items,
  sectionLabel,
  showSupportWidget = false,
  user,
}: DashboardShellProps) {
  return (
    <div className="min-h-screen bg-[#fcfbf7]">
      <div className="mx-auto flex min-h-screen w-full">
        <Sidebar items={items} sectionLabel={sectionLabel} />
        <div className="flex min-h-screen min-w-0 flex-1 flex-col lg:pl-64">
          <Topbar
            user={user}
            mobileSidebar={<MobileSidebar items={items} sectionLabel={sectionLabel} />}
          />
          <main className="flex-1 px-4 py-4 md:px-6 md:py-6 lg:px-6">{children}</main>
          {showSupportWidget ? <SupportWidget /> : null}
        </div>
      </div>
    </div>
  );
}
