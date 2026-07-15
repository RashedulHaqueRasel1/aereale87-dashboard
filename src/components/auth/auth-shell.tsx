import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type AuthShellProps = {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
};

export function AuthShell({ children, className, narrow = false }: AuthShellProps) {
  return (
    <main className="flex min-h-screen items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(249,236,193,0.6),_transparent_38%),linear-gradient(180deg,#f9f4e8_0%,#f3ecdc_100%)] px-4 py-12 sm:px-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(39,69,59,0.04)_0,rgba(39,69,59,0.04)_1px,transparent_1px,transparent_18px)] [background-size:18px_18px]"
      />
      <div
        className={cn(
          "relative w-full border border-[var(--home-border)] bg-white/95 px-6 py-8 shadow-[0_32px_80px_-44px_rgba(70,54,14,0.42)] backdrop-blur sm:px-8 sm:py-10",
          narrow ? "max-w-[480px]" : "max-w-[560px]",
          className
        )}
      >
        {children}
      </div>
    </main>
  );
}
