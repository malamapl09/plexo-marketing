"use client";

import { useState } from "react";

const tiers = [
  {
    name: "Starter",
    monthlyPrice: 3,
    annualPrice: 2.4,
    desc: "For small teams getting started with structured operations.",
    features: [
      "Tasks & Assignments",
      "Checklists & SOPs",
      "Issue Tracking",
      "Mobile App (iOS & Android)",
      "50 audits / month",
      "Email support",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    monthlyPrice: 6,
    annualPrice: 4.8,
    desc: "For growing chains that need full operational control.",
    features: [
      "Everything in Starter",
      "Store Audits & Inspections",
      "Campaign Execution",
      "Training & LMS",
      "Corrective Actions (CAPA)",
      "Gamification & Leaderboards",
      "Visual Merchandising",
      "200 audits / month",
      "Priority support",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: null,
    annualPrice: null,
    desc: "For large retailers with custom requirements.",
    features: [
      "Everything in Professional",
      "Unlimited audits",
      "SSO / SAML authentication",
      "API access & integrations",
      "Dedicated account manager",
      "Custom onboarding & training",
      "SLA guarantee",
    ],
    cta: "Talk to Sales",
    popular: false,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide mb-3">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            14-day free trial on all plans. No credit card required.
          </p>

          {/* Toggle */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className={`text-sm font-medium ${!annual ? "text-slate-900" : "text-slate-500"}`}>
              Monthly
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                annual ? "bg-indigo-600" : "bg-slate-300"
              }`}
              aria-label="Toggle annual pricing"
            >
              <div
                className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                  annual ? "translate-x-6" : "translate-x-0.5"
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${annual ? "text-slate-900" : "text-slate-500"}`}>
              Annual
            </span>
            {annual && (
              <span className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            )}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative bg-white rounded-2xl p-8 ${
                tier.popular
                  ? "border-2 border-indigo-600 shadow-xl shadow-indigo-600/10 scale-105"
                  : "border border-slate-200"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-lg font-bold text-slate-900">{tier.name}</h3>
              <p className="text-sm text-slate-500 mt-1">{tier.desc}</p>

              <div className="mt-6 mb-6">
                {tier.monthlyPrice !== null ? (
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-slate-900">
                      ${annual ? tier.annualPrice : tier.monthlyPrice}
                    </span>
                    <span className="text-slate-500">/user/month</span>
                  </div>
                ) : (
                  <div className="flex items-baseline">
                    <span className="text-4xl font-extrabold text-slate-900">Custom</span>
                  </div>
                )}
              </div>

              <a
                href={tier.name === "Enterprise" ? "mailto:sales@plexoapp.com" : "#pricing"}
                className={`block w-full text-center px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                  tier.popular
                    ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-600/25"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {tier.cta}
              </a>

              <ul className="mt-8 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        tier.popular ? "text-indigo-600" : "text-emerald-500"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
