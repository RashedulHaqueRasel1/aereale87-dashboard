"use client";

import { Eye, EyeOff, LockKeyhole } from "lucide-react";
import { useState } from "react";

import { AuthField } from "./auth-field";

type PasswordFieldProps = {
  id?: string;
  label: string;
  placeholder?: string;
};

export function PasswordField({ id, label, placeholder }: PasswordFieldProps) {
  const [visible, setVisible] = useState(false);

  return (
    <AuthField
      id={id}
      label={label}
      type={visible ? "text" : "password"}
      placeholder={placeholder}
      icon={<LockKeyhole className="size-4" />}
      action={
        <button
          type="button"
          onClick={() => setVisible((current) => !current)}
          className="cursor-pointer text-[var(--home-green)] transition hover:text-[var(--home-green-deep)]"
          aria-label={visible ? "Hide password" : "Show password"}
        >
          {visible ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
        </button>
      }
    />
  );
}
