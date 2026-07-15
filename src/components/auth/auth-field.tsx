import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type AuthFieldProps = {
  id?: string;
  label: string;
  icon?: ReactNode;
  action?: ReactNode;
  type?: string;
  placeholder?: string;
  className?: string;
};

export function AuthField({
  id,
  label,
  icon,
  action,
  type = "text",
  placeholder,
  className,
}: AuthFieldProps) {
  return (
    <label htmlFor={id} className={cn("block space-y-2", className)}>
      <span className="block text-[13px] font-semibold text-[var(--home-green-deep)]">{label}</span>
      <span className="flex h-14 items-center border border-[var(--home-border)] bg-[var(--home-paper)] px-4 text-[var(--home-muted)] transition focus-within:border-[var(--home-gold)]">
        {icon ? <span className="mr-3 inline-flex size-4 shrink-0 items-center justify-center">{icon}</span> : null}
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className="h-full flex-1 bg-transparent text-[15px] text-[var(--home-green-deep)] outline-none placeholder:text-[var(--home-muted)]"
        />
        {action ? <span className="ml-3 inline-flex items-center">{action}</span> : null}
      </span>
    </label>
  );
}
