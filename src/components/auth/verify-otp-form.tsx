import Link from "next/link";

import { AuthShell } from "./auth-shell";

const otpDigits = [
  { id: "otp-1", value: "4" },
  { id: "otp-2", value: "2" },
  { id: "otp-3", value: "6" },
  { id: "otp-4", value: "" },
  { id: "otp-5", value: "" },
  { id: "otp-6", value: "" },
];

export function VerifyOtpForm() {
  return (
    <AuthShell narrow>
      <h1 className="text-[30px] font-bold leading-[1.15] text-[var(--home-green-deep)]">
        Enter OTP
      </h1>
      <p className="mt-2 text-[15px] leading-[1.45] text-[var(--home-muted)]">
        An OTP has been sent to your email address. Please verify it below.
      </p>

      <form className="mt-8">
        <div className="grid grid-cols-6 gap-3">
          {otpDigits.map((digit) => (
            <input
              key={digit.id}
              aria-label={`OTP digit ${digit.id.replace("otp-", "")}`}
              maxLength={1}
              defaultValue={digit.value}
              className="h-16 min-w-0 border border-[var(--home-border)] bg-[var(--home-paper)] text-center text-[24px] font-bold text-[var(--home-green-deep)] outline-none transition focus:border-[var(--home-gold)]"
            />
          ))}
        </div>
        <p className="mt-4 text-center text-[13px] text-[var(--home-muted)]">
          Didn&apos;t Receive OTP?{" "}
          <button
            type="button"
            className="font-semibold text-[var(--home-gold)] transition hover:text-[var(--home-green)]"
          >
            Resend OTP
          </button>
        </p>
        <Link
          href="/new-password"
          className="mt-6 flex h-14 w-full items-center justify-center bg-[var(--home-gold)] px-6 text-[13px] font-bold uppercase tracking-[0.64px] text-white transition hover:bg-[var(--home-green)]"
        >
          Verify
        </Link>
      </form>
    </AuthShell>
  );
}
