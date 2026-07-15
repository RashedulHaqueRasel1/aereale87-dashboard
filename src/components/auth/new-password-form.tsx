import { AuthShell } from "./auth-shell";
import { PasswordField } from "./password-field";
import Link from "next/link";

export function NewPasswordForm() {
  return (
    <AuthShell narrow>
      <h1 className="text-[30px] font-bold leading-[1.15] text-[var(--home-green-deep)]">
        New Password
      </h1>
      <p className="mt-2 text-[15px] leading-[1.45] text-[var(--home-muted)]">
        Please create your new password.
      </p>

      <form className="mt-8 space-y-5">
        <PasswordField
          id="new-password"
          label="Create a password"
          placeholder="••••••••"
        />
        <PasswordField
          id="new-password-confirm"
          label="Confirm Password"
          placeholder="••••••••"
        />
        <Link
          href="/"
          className="flex h-14 w-full items-center justify-center bg-[var(--home-gold)] px-6 text-[13px] font-bold uppercase tracking-[0.64px] text-white transition hover:bg-[var(--home-green)]"
        >
          Continue
        </Link>
      </form>
    </AuthShell>
  );
}
