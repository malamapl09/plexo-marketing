import Header from "./components/Header";
import Footer from "./components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-[60vh] flex items-center justify-center pt-[72px]">
        <div className="text-center px-4">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide mb-4">
            404
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
            Page not found
          </h1>
          <p className="text-lg text-slate-600 max-w-md mx-auto mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <a
            href="/"
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-600/25 transition-all"
          >
            Back to Homepage
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
