"use client";

import { useEffect, useState } from "react";
import { LogOut } from "lucide-react";

import { cn } from "@/lib/utils";

type LogoutButtonProps = {
  className?: string;
  iconClassName?: string;
  label?: string;
  fullWidth?: boolean;
};

export function LogoutButton({
  className,
  iconClassName,
  label = "Log out",
  fullWidth = true,
}: LogoutButtonProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "flex h-12 items-center justify-center gap-2 rounded-md border border-[#ef4444] px-2 py-1.5 text-lg font-medium text-[#ef4444] transition-colors hover:bg-white/5",
          fullWidth && "w-full",
          className
        )}
      >
        <LogOut className={cn("size-5", iconClassName)} />
        <span>{label}</span>
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/55 px-4"
          onClick={() => setOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="logout-modal-title"
            className="w-full max-w-md border border-stone-300 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.28)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="space-y-3">
              <h2 id="logout-modal-title" className="text-2xl font-bold text-neutral-800">
                Log out?
              </h2>
              <p className="text-sm leading-6 text-neutral-500">
                You are about to leave the dashboard. Confirm if you want to log out now.
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="border border-stone-300 px-5 py-3 text-sm font-medium text-neutral-800 transition-colors hover:bg-stone-100"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="bg-[#ef4444] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#dc2626]"
              >
                Confirm Logout
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
