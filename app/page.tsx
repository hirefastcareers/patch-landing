const SIGN_UP_URL = "https://chambers-valley-tracker.vercel.app/sign-up";
const SIGN_IN_URL = "https://chambers-valley-tracker.vercel.app/sign-in";

const features = [
  {
    emoji: "📅",
    title: "Your week at a glance",
    description:
      "See every upcoming job in date order the moment you open the app. No digging through a notebook or scrolling through texts.",
  },
  {
    emoji: "💷",
    title: "Know what you'll earn",
    description:
      "Track quoted and completed jobs, see your weekly earnings target, and know exactly what's outstanding — so January never catches you off guard.",
  },
  {
    emoji: "🗺️",
    title: "See where you're going",
    description:
      "An interactive map shows all your jobs for the week so you can plan your route, spot gaps, and say yes to new customers in areas you're already visiting.",
  },
];

const steps = [
  {
    title: "Create your account",
    description: "Sign up with your email. Takes 30 seconds.",
  },
  {
    title: "Add your customers",
    description: "Name, address, phone. Google fills in the address for you.",
  },
  {
    title: "Log your jobs",
    description: "Add what you did, what you charged, before and after photos.",
  },
  {
    title: "Open the app each morning",
    description:
      "See today's jobs, this week's earnings, and any follow-ups waiting.",
  },
];

const includedFeatures = [
  "Customer management with WhatsApp quick-link",
  "Job history with before & after photos",
  "Weekly earnings tracker with tax estimate",
  "Interactive map of your jobs",
  "Follow-up reminders so nothing gets forgotten",
  "Recurring job reminders for regular customers",
  "Quote generator — share via WhatsApp or PDF",
  "Mileage tracker for your tax return",
  "Morning push notifications",
  "Works on iPhone and Android — add to home screen",
];

const pricingFeatures = [
  "Your week at a glance",
  "Weekly earnings tracker",
  "Interactive job map",
  "Customer & job management",
  "Quote generator & mileage tracker",
];

function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <span className="text-lg font-bold text-[#0a0a0a]">Patch</span>
        <div className="flex items-center gap-5">
          <a
            href={SIGN_IN_URL}
            className="text-[15px] text-[#0a0a0a] transition-colors hover:text-muted"
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
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="bg-surface px-6 py-20 md:py-28">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <h1 className="text-[36px] font-bold leading-tight text-[#0a0a0a] md:text-[52px]">
          The job tracker built for gardeners
        </h1>
        <p className="mt-5 max-w-[600px] text-xl text-muted">
          Know your week ahead, track what you earn, and see where your jobs are
          — all in one place.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={SIGN_UP_URL}
            className="rounded-lg bg-[#0a0a0a] px-6 py-3 text-[15px] font-medium text-white transition-opacity hover:opacity-90"
          >
            Start your free trial
          </a>
          <a
            href="#features"
            className="rounded-lg border border-[#0a0a0a] bg-transparent px-6 py-3 text-[15px] font-medium text-[#0a0a0a] transition-colors hover:bg-white"
          >
            See how it works
          </a>
        </div>
        <p className="mt-5 text-sm text-muted">
          14-day free trial · No card required · £4.99/month after
        </p>
      </div>
    </section>
  );
}

function FeatureCards() {
  return (
    <section id="features" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-center text-[28px] font-semibold text-[#0a0a0a] md:text-[32px]">
          Everything you need to run your round
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-border bg-white p-7"
            >
              <span className="text-4xl" role="img" aria-hidden="true">
                {feature.emoji}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-[#0a0a0a]">
                {feature.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="bg-surface px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-12 text-center text-[28px] font-semibold text-[#0a0a0a] md:text-[32px]">
          Up and running in minutes
        </h2>
        <ol className="flex flex-col gap-6">
          {steps.map((step, index) => (
            <li key={step.title} className="flex items-start gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0a0a0a] text-sm font-semibold text-white">
                {index + 1}
              </span>
              <div>
                <p className="font-semibold text-[#0a0a0a]">{step.title}</p>
                <p className="mt-1 text-[15px] text-muted">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function FeatureList() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-12 text-center text-[28px] font-semibold text-[#0a0a0a] md:text-[32px]">
          What&apos;s included
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          {includedFeatures.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5">
              <span className="mt-0.5 shrink-0 text-tick" aria-hidden="true">
                ✓
              </span>
              <span className="text-[15px] text-[#0a0a0a]">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="bg-surface px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-center text-[28px] font-semibold text-[#0a0a0a] md:text-[32px]">
          Simple pricing
        </h2>
        <div className="mx-auto max-w-[400px] rounded-2xl border-2 border-[#0a0a0a] bg-white p-8">
          <p className="text-[48px] font-bold leading-none text-[#0a0a0a]">
            £4.99
            <span className="text-2xl font-bold">/month</span>
          </p>
          <p className="mt-2 text-[15px] text-muted">after your free trial</p>
          <hr className="my-6 border-border" />
          <ul className="mb-8 flex flex-col gap-3">
            {pricingFeatures.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5">
                <span className="mt-0.5 shrink-0 text-tick" aria-hidden="true">
                  ✓
                </span>
                <span className="text-[15px] text-[#0a0a0a]">{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={SIGN_UP_URL}
            className="block w-full rounded-lg bg-[#0a0a0a] py-3 text-center text-[15px] font-medium text-white transition-opacity hover:opacity-90"
          >
            Start 14-day free trial
          </a>
          <p className="mt-4 text-center text-sm text-muted">
            Cancel anytime. No commitment.
          </p>
        </div>
        <p className="mt-8 text-center text-[15px] text-muted">
          Built by a gardener, for gardeners. Used every day in Sheffield.
        </p>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-[#0a0a0a] px-6 py-20">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <h2 className="text-[28px] font-bold text-white md:text-[36px]">
          Ready to get your patch organised?
        </h2>
        <p className="mt-4 text-lg text-[#a3a3a3]">
          Join gardeners already using Patch to stay on top of their round.
        </p>
        <a
          href={SIGN_UP_URL}
          className="mt-8 rounded-lg bg-white px-6 py-3 text-[15px] font-medium text-[#0a0a0a] transition-opacity hover:opacity-90"
        >
          Start free trial
        </a>
        <p className="mt-5 text-sm text-[#737373]">
          14 days free · £4.99/month after · Cancel anytime
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-6 py-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 text-[13px] text-muted sm:flex-row">
        <span>© 2026 Patch</span>
        <span>Built for gardeners 🌿</span>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <FeatureCards />
        <HowItWorks />
        <FeatureList />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
