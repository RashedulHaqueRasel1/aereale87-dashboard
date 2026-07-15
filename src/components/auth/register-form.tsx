import Image from "next/image";
import Link from "next/link";
import { LockKeyhole, Mail, User } from "lucide-react";

import { AuthField } from "./auth-field";
import { AuthShell } from "./auth-shell";

export function RegisterForm() {
  return (
    <AuthShell>
      <div className="text-center">
        <Image
          src="/logo.svg"
          alt="The Wonder Emporium logo"
          width={250}
          height={150}
          priority
          className="mx-auto h-auto w-[210px] sm:w-[250px]"
        />
        <h1 className="mt-8 text-[30px] font-bold leading-[1.15] text-[var(--home-green-deep)] sm:text-[34px]">
          Create Account
        </h1>
        <p className="mt-3 text-[15px] text-[var(--home-muted)]">
          Start your journey with a new account.
        </p>
      </div>

      <form className="mt-8 space-y-5">
        <AuthField
          id="register-name"
          label="Full Name"
          type="text"
          placeholder="Your full name"
          icon={<User className="size-4" />}
        />
        <AuthField
          id="register-email"
          label="Email Address"
          type="email"
          placeholder="you@example.com"
          icon={<Mail className="size-4" />}
        />
        <AuthField
          id="register-password"
          label="Password"
          type="password"
          placeholder="••••••••"
          icon={<LockKeyhole className="size-4" />}
        />
        <Link
          href="/author-dashboard"
          className="flex h-14 w-full items-center justify-center bg-[var(--home-gold)] px-6 text-[13px] font-bold uppercase tracking-[0.64px] text-white transition hover:bg-[var(--home-green)]"
        >
          Create Account
        </Link>
      </form>

      <p className="mt-6 text-center text-[13px] text-[var(--home-muted)]">
        Already have an account?{" "}
        <Link
          href="/"
          className="font-semibold text-[var(--home-gold)] transition hover:text-[var(--home-green)]"
        >
          Sign In
        </Link>
      </p>
    </AuthShell>
  );
}
