import Image from "next/image";

import { LogoutButton } from "./logout-button";
import { SidebarItem } from "./sidebar-item";
import type { DashboardNavItem } from "./dashboard-shell";

type SidebarProps = {
  items: DashboardNavItem[];
  sectionLabel: string;
};

export function Sidebar({ items, sectionLabel }: SidebarProps) {
  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 shrink-0 flex-col justify-between overflow-hidden bg-[#5d6d63] pb-6 lg:flex">
      <div className="absolute left-0 top-[71px] h-12 w-64 rounded-full bg-white/80 blur-[50px]" />

      <div className="flex flex-1 flex-col justify-between">
        <div className="self-stretch py-6">
          <div className="flex flex-col items-center gap-12">
            <Image
              src="/logo.svg"
              alt="Wonder Emporium Logo"
              width={144}
              height={96}
              className="h-24 w-36 object-contain"
              priority
            />

            <div className="w-full pl-4">
              <p className="sr-only">{sectionLabel}</p>
              <nav className="flex flex-col gap-6">
                {items.map((item) => (
                  <SidebarItem key={item.href} item={item} />
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className="self-stretch px-6">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="flex size-11 items-center justify-center overflow-hidden rounded-full bg-[#223128] text-sm font-semibold text-white ring-1 ring-white/10">
                  OC
                </div>
                <div className="flex-1">
                  <p className="line-clamp-1 text-base font-bold leading-4 text-[#f5f5f4]">
                    Olivia Carter
                  </p>
                  <p className="mt-1 line-clamp-1 text-sm leading-4 text-[#d6d0bf]">
                    Super Admin
                  </p>
                </div>
              </div>
            </div>

            <LogoutButton className="gap-1" />
          </div>
        </div>
      </div>
    </aside>
  );
}
