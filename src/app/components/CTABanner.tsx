export default function CTABanner() {
  return (
    <section className="py-20 sm:py-28 bg-indigo-600 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-800/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
          Ready to streamline your operations?
        </h2>
        <p className="mt-4 text-lg text-indigo-100 max-w-2xl mx-auto">
          See how Plexo can bring clarity to your retail operations.
          Book a personalized demo with our team.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:sales@plexoapp.com?subject=Demo%20Request%20%E2%80%93%20Plexo"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-indigo-600 bg-white rounded-xl hover:bg-indigo-50 shadow-lg transition-all"
          >
            Book a Demo
          </a>
          <a
            href="mailto:sales@plexoapp.com?subject=Pricing%20Inquiry%20%E2%80%93%20Plexo"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all"
          >
            Request Pricing
          </a>
        </div>
      </div>
    </section>
  );
}
