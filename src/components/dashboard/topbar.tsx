"use client";

import type { ReactNode } from "react";
import { Bell } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Breadcrumbs } from "@/components/dashboard/breadcrumbs";
import { UserNav } from "@/components/dashboard/user-nav";

type TopbarProps = {
  user: {
    name: string;
    email: string;
    role: string;
  };
  mobileSidebar: ReactNode;
};

export function Topbar({ user, mobileSidebar }: TopbarProps) {
  const pathname = usePathname();
  const isAdminDashboard = pathname.startsWith("/admin-dashboard");
  const notificationsHref = isAdminDashboard
    ? "/admin-dashboard/notifications"
    : "/author-dashboard/notifications";
  const title = isAdminDashboard ? "Dashboard Overview" : "Dashboard";
  const subtitle = isAdminDashboard
    ? "Admin control room"
    : user.role;

  return (
    <header className="sticky top-0 z-30 overflow-hidden border-b border-black/5 bg-[#5d6d63] text-white shadow-[0_10px_35px_-30px_rgba(0,0,0,0.9)]">
      <div className="flex h-24 items-center justify-between px-4 md:px-6 lg:pl-7 lg:pr-11">
        <div className="flex min-w-0 items-center gap-3">
          {mobileSidebar}
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d9d0bd]">
              {subtitle}
            </p>
            <p className="mt-1 text-xl font-bold tracking-tight text-[#f5f5f4]">
              {title}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <Link
            href={notificationsHref}
            aria-label="View notifications"
            className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 hover:text-white/85"
          >
            <Bell className="size-4" />
          </Link>
          <UserNav user={user} />
        </div>
      </div>
      <div className="sr-only">
        <Breadcrumbs />
      </div>
    </header>
  );
}
