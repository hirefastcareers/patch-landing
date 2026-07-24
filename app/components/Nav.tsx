const SIGN_UP_URL = "https://chambers-valley-tracker.vercel.app/sign-up";
const SIGN_IN_URL = "https://chambers-valley-tracker.vercel.app/sign-in";

export function Nav() {
  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-[#e5e5e5] bg-white"
      style={{ position: "sticky", top: 0, zIndex: 50 }}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <span className="text-lg font-bold text-[#0a0a0a]">Patch</span>
        <div className="flex items-center gap-5">
          <a
            href={SIGN_IN_URL}
            className="text-[15px] text-[#0a0a0a] transition-colors hover:text-[#737373]"
          >
            Sign in
          </a>
          <a
            href={SIGN_UP_URL}
            className="rounded-lg bg-[#0a0a0a] px-[18px] py-2 text-[15px] font-medium text-white transition-opacity hover:opacity-90"
          >
            Start free trial
          </a>
        </div>
      </nav>
    </header>
  );
}
