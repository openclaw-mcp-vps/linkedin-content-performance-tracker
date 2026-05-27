export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          LinkedIn ROI Analytics
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
          Track which LinkedIn posts<br />
          <span className="text-[#58a6ff]">drive actual business results</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Connect LinkedIn analytics to HubSpot or Salesforce. See exactly which posts generate leads, pipeline, and revenue — not just likes.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Tracking — $15/mo
        </a>
        <p className="text-[#8b949e] text-xs mt-3">Cancel anytime. No credit card required to try.</p>

        <div className="grid grid-cols-3 gap-4 mt-14 text-center">
          {[
            ["LinkedIn API", "Native integration"],
            ["HubSpot & Salesforce", "CRM sync"],
            ["Real ROI", "Not vanity metrics"]
          ].map(([title, sub]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <div className="text-white font-semibold text-sm">{title}</div>
              <div className="text-[#8b949e] text-xs mt-1">{sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "LinkedIn post analytics",
              "HubSpot & Salesforce sync",
              "Lead attribution per post",
              "Revenue & pipeline reports",
              "Webhook integrations",
              "Email support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg text-sm transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "How does LinkedIn attribution work?",
              "We use LinkedIn's API to pull post engagement data, then match profile visits and form fills to your CRM contacts via webhook events — giving you a clear line from post to pipeline."
            ],
            [
              "Which CRMs are supported?",
              "HubSpot and Salesforce are fully supported out of the box. Additional CRM integrations are on the roadmap."
            ],
            [
              "Can I cancel anytime?",
              "Yes. Cancel from your account dashboard at any time. You keep access until the end of your billing period."
            ]
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <div className="text-white font-semibold text-sm mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} LinkedIn Content Performance Tracker. All rights reserved.
      </footer>
    </main>
  );
}
