import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 pt-32 pb-16">
        <h1 className="text-6xl font-extrabold text-slate-900 mb-4">{t("badge")}</h1>
        <p className="text-xl text-slate-600 mb-8">{t("subtitle")}</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-indigo-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-indigo-700 transition-colors"
        >
          {t("backToHomepage")}
        </Link>
      </main>
      <Footer />
    </>
  );
}
