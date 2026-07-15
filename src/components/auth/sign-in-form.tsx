import Image from "next/image";
import Link from "next/link";
import { LockKeyhole, Mail } from "lucide-react";

import { AuthField } from "./auth-field";
import { AuthShell } from "./auth-shell";
import { GoogleButton } from "./google-button";

export function SignInForm() {
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
          Welcome Back
        </h1>
        <p className="mt-3 text-[15px] text-[var(--home-muted)]">
          Sign in to continue your journey.
        </p>
      </div>

      <form className="mt-8 space-y-5">
        <AuthField
          id="login-email"
          label="Email Address"
          type="email"
          placeholder="you@example.com"
          icon={<Mail className="size-4" />}
        />
        <AuthField
          id="login-password"
          label="Password"
          type="password"
          placeholder="••••••••"
          icon={<LockKeyhole className="size-4" />}
        />
        <div className="flex items-center justify-between gap-4 text-[13px]">
          <label className="flex items-center gap-2 text-[var(--home-green-deep)]">
            <input
              type="checkbox"
              className="size-3 accent-[var(--home-gold)]"
            />
            Remember me
          </label>
          <Link
            href="/forgot-password"
            className="text-[var(--home-gold)] transition hover:text-[var(--home-green)]"
          >
            Forgot password?
          </Link>
        </div>
        <p className="text-center text-[13px] text-[var(--home-muted)]">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-[var(--home-gold)] transition hover:text-[var(--home-green)]"
          >
            Register Now
          </Link>
        </p>
        <Link
          href="/author-dashboard"
          className="flex h-14 w-full items-center justify-center bg-[var(--home-gold)] px-6 text-[13px] font-bold uppercase tracking-[0.64px] text-white transition hover:bg-[var(--home-green)]"
        >
          Sign In
        </Link>
      </form>

      <div className="my-6 flex items-center gap-4 text-[12px] uppercase text-[var(--home-muted)]">
        <span className="h-px flex-1 bg-[var(--home-border)]" />
        Or
        <span className="h-px flex-1 bg-[var(--home-border)]" />
      </div>
      <GoogleButton />
    </AuthShell>
  );
}
