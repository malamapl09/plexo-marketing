const highlights = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "All 9 modules included",
    desc: "Tasks, audits, campaigns, training, checklists, CAPA, gamification, visual merchandising, and issue tracking.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Native mobile apps",
    desc: "iOS and Android apps with offline support, push notifications, and photo capture.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Tailored to your chain",
    desc: "Custom onboarding, integrations, and configuration to match how your stores actually operate.",
  },
];

const included = [
  "Tasks & Assignments",
  "Checklists & SOPs",
  "Store Audits & Inspections",
  "Campaign Execution",
  "Training & LMS",
  "Corrective Actions (CAPA)",
  "Gamification & Leaderboards",
  "Visual Merchandising",
  "Issue Tracking",
  "Native Mobile App (iOS & Android)",
  "Real-time Dashboard & Analytics",
  "SSO / SAML Authentication",
  "API Access & Integrations",
  "Dedicated Account Manager",
  "Custom Onboarding & Training",
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide mb-3">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Plans built around your operation
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Every retail chain is different. We&apos;ll craft a plan that fits your
            number of stores, team size, and the modules you need.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="bg-white border border-slate-200 rounded-2xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mx-auto mb-4">
                {h.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{h.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>

        {/* Central CTA card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white border-2 border-indigo-600 rounded-2xl p-8 sm:p-10 shadow-xl shadow-indigo-600/10 text-center">
            <h3 className="text-2xl font-bold text-slate-900">
              See Plexo in action
            </h3>
            <p className="mt-3 text-slate-600 max-w-lg mx-auto">
              Book a 30-minute demo with our team. We&apos;ll walk you through the
              platform, answer your questions, and put together a personalized
              proposal for your chain.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/demo"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-600/25 transition-all"
              >
                Book a Demo
              </a>
              <a
                href="/demo"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-slate-700 bg-white border-2 border-slate-200 rounded-xl hover:border-indigo-300 hover:text-indigo-600 transition-all"
              >
                Request Pricing
              </a>
            </div>

            {/* What's included */}
            <div className="mt-10 pt-8 border-t border-slate-100">
              <p className="text-sm font-semibold text-slate-900 mb-4">
                Every plan includes:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-left max-w-lg mx-auto">
                {included.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-emerald-500 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
