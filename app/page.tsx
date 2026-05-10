export default function Home() {
  const faqs = [
    {
      q: "How does BurnoutRadar detect burnout?",
      a: "We analyze Git commit timestamps, frequency, message quality, and code churn to surface statistical anomalies that correlate with burnout — like late-night commits, declining PR quality, or sudden drop-offs."
    },
    {
      q: "Does it require access to our source code?",
      a: "No. BurnoutRadar only reads commit metadata via the GitHub or GitLab API — timestamps, author, message length, and diff stats. Your actual source code is never accessed or stored."
    },
    {
      q: "Who sees the burnout alerts?",
      a: "Only the managers or HR leads you designate. Individual developer data is aggregated and anonymized in team views, with full detail available only to authorized admins."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Early Warning System
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Detect Developer Burnout<br />
          <span className="text-[#58a6ff]">Before It Costs You</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          BurnoutRadar connects to GitHub &amp; GitLab to analyze commit patterns, work hours, and code quality — surfacing burnout signals weeks before attrition hits.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $15 / month
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required for 14-day trial. Cancel anytime.</p>

        {/* Signal cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          {[
            { icon: "🕐", label: "Commit Timing", desc: "Flags late-night and weekend overwork patterns" },
            { icon: "📉", label: "Quality Drift", desc: "Tracks declining PR size, message depth & review lag" },
            { icon: "🔔", label: "Manager Alerts", desc: "Slack & email alerts before burnout becomes attrition" }
          ].map((s) => (
            <div key={s.label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{s.icon}</div>
              <div className="font-semibold text-white mb-1">{s.label}</div>
              <div className="text-sm text-[#8b949e]">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] mb-6">per month · up to 25 developers</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "GitHub & GitLab integration",
              "Real-time burnout risk scores",
              "Weekly manager digest emails",
              "Slack alert integration",
              "Team & individual dashboards",
              "14-day free trial"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started Free
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{faq.q}</div>
              <div className="text-sm text-[#8b949e] leading-relaxed">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} BurnoutRadar. Built for engineering leaders who care.
      </footer>
    </main>
  );
}
