import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface Capability {
  title: string;
  desc: string;
  icon: ReactNode;
}

interface FeaturePageLayoutProps {
  badge: string;
  title: string;
  subtitle: string;
  capabilities: Capability[];
  mockup: ReactNode;
  mobileMockup?: ReactNode;
}

export default function FeaturePageLayout({
  badge,
  title,
  subtitle,
  capabilities,
  mockup,
  mobileMockup,
}: FeaturePageLayoutProps) {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 via-violet-500/5 to-transparent" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block text-sm font-semibold text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full uppercase tracking-wide mb-6">
              {badge}
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 max-w-3xl mx-auto">
              {title}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
            <div className="mt-10">
              <a
                href="/demo"
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-600/25 transition-all"
              >
                See It in Action
              </a>
            </div>
          </div>
        </section>

        {/* Dashboard Mockup */}
        <section className="pb-16 sm:pb-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-800 rounded-t-2xl p-2 pt-6 relative">
              <div className="absolute top-2 left-4 flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
              </div>
              <div className="bg-slate-50 rounded-lg p-4 sm:p-6">
                {mockup}
              </div>
            </div>
            <div className="bg-slate-700 h-4 rounded-b-lg mx-16" />
            <div className="bg-slate-600 h-2 rounded-b-xl mx-24" />
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-16 sm:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Key capabilities
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {capabilities.map((cap) => (
                <div
                  key={cap.title}
                  className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-600/5 transition-all"
                >
                  <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-4">
                    {cap.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mobile Mockup (optional) */}
        {mobileMockup && (
          <section className="py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide mb-3">
                    Works on mobile
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                    Everything your field team needs, in their pocket.
                  </h2>
                  <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                    Your team doesn&apos;t sit at a desk — they&apos;re on the floor, in the
                    aisles, and behind the counter. Plexo&apos;s native mobile app gives
                    them full access to this module offline and on the go.
                  </p>
                </div>
                <div className="flex justify-center lg:justify-end">
                  {mobileMockup}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16 sm:py-24 bg-indigo-600 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-800/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Ready to see this in your stores?
            </h2>
            <p className="mt-4 text-lg text-indigo-100 max-w-2xl mx-auto">
              Book a personalized demo and we&apos;ll show you exactly how this works
              for your operation.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/demo"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-indigo-600 bg-white rounded-xl hover:bg-indigo-50 shadow-lg transition-all"
              >
                Book a Demo
              </a>
              <a
                href="/#features"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all"
              >
                Explore All Features
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
