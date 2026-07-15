export function GoogleButton() {
  return (
    <button
      type="button"
      className="flex h-14 w-full items-center justify-center gap-3 border border-[var(--home-border)] bg-white px-6 text-[13px] font-semibold text-[var(--home-green-deep)] transition hover:border-[var(--home-gold)] hover:bg-[var(--home-paper)]"
    >
      <span className="relative size-5">
        <span className="absolute inset-x-0 top-0 h-[45%] rounded-t-full border-[2.5px] border-b-0 border-[#ea4335]" />
        <span className="absolute inset-y-[27%] right-0 w-[48%] border-t-[2.5px] border-[#4285f4]" />
        <span className="absolute inset-y-[27%] left-0 h-[46%] w-[46%] rounded-bl-full border-b-[2.5px] border-l-[2.5px] border-[#34a853]" />
        <span className="absolute bottom-0 right-[15%] h-[46%] w-[46%] rounded-br-full border-b-[2.5px] border-r-[2.5px] border-[#fbbc05]" />
      </span>
      Continue with Google
    </button>
  );
}
