"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How long does it take to get started?",
    a: "Most teams are up and running within a day. Add your stores, invite your team, and start creating tasks and checklists immediately. No complex setup or IT involvement required.",
  },
  {
    q: "Does Plexo work offline?",
    a: "Yes. The mobile app works offline and syncs automatically when your team reconnects. Perfect for stores with spotty connectivity or warehouse environments.",
  },
  {
    q: "Can I customize checklists and audit templates?",
    a: "Absolutely. Create unlimited custom checklists, audit forms, and task templates. Add scoring, photo requirements, conditional logic, and more.",
  },
  {
    q: "What kind of support do you offer?",
    a: "Starter plans include email support. Professional plans get priority support with faster response times. Enterprise plans include a dedicated account manager and onboarding assistance.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes — every plan comes with a 14-day free trial. No credit card required. You get full access to all features in your chosen plan.",
  },
  {
    q: "Can I integrate Plexo with other tools?",
    a: "Enterprise plans include full API access for custom integrations. We also support webhooks and are building native integrations with popular tools.",
  },
  {
    q: "How is pricing calculated?",
    a: "Pricing is per active user per month. You only pay for users who are active. Annual plans save 20% compared to monthly billing.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-slate-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="text-sm sm:text-base font-semibold text-slate-900 pr-4">
                  {faq.q}
                </span>
                <svg
                  className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div className="px-6 pb-4">
                  <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
