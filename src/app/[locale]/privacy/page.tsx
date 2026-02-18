import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getAlternates } from "@/lib/seo";
import { Link } from "@/i18n/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "PrivacyPage" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: getAlternates("/privacy", locale),
  };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "PrivacyPage" });

  return (
    <>
      <Header />
      <main className="pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">{t("pageTitle")}</h1>
            <p className="text-slate-600">{t("lastUpdated")}</p>
          </div>

          {/* Introduction */}
          <section className="mb-10">
            <p className="text-slate-600 leading-relaxed mb-4">{t("introP1")}</p>
            <p className="text-slate-600 leading-relaxed">{t("introP2")}</p>
          </section>

          {/* 1. Information We Collect */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{t("section1Heading")}</h2>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t("section1Sub1Heading")}</h3>
              <p className="text-slate-600 leading-relaxed mb-4">{t("section1Sub1Para")}</p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
                <li>{t("section1Sub1Item1")}</li>
                <li>{t("section1Sub1Item2")}</li>
                <li>{t("section1Sub1Item3")}</li>
                <li>{t("section1Sub1Item4")}</li>
                <li>{t("section1Sub1Item5")}</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t("section1Sub2Heading")}</h3>
              <p className="text-slate-600 leading-relaxed mb-4">{t("section1Sub2Para")}</p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
                <li>{t("section1Sub2Item1")}</li>
                <li>{t("section1Sub2Item2")}</li>
                <li>{t("section1Sub2Item3")}</li>
                <li>{t("section1Sub2Item4")}</li>
                <li>{t("section1Sub2Item5")}</li>
                <li>{t("section1Sub2Item6")}</li>
                <li>{t("section1Sub2Item7")}</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t("section1Sub3Heading")}</h3>
              <p className="text-slate-600 leading-relaxed mb-4">{t("section1Sub3Para")}</p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
                <li>{t("section1Sub3Item1")}</li>
                <li>{t("section1Sub3Item2")}</li>
                <li>{t("section1Sub3Item3")}</li>
                <li>{t("section1Sub3Item4")}</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t("section1Sub4Heading")}</h3>
              <p className="text-slate-600 leading-relaxed">{t("section1Sub4Para")}</p>
            </div>
          </section>

          {/* 2. How We Use Your Information */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{t("section2Heading")}</h2>
            <p className="text-slate-600 leading-relaxed mb-4">{t("section2Para")}</p>
            <ul className="list-disc list-inside text-slate-600 space-y-3">
              <li><strong>{t("section2Item1Label")}</strong> {t("section2Item1Text")}</li>
              <li><strong>{t("section2Item2Label")}</strong> {t("section2Item2Text")}</li>
              <li><strong>{t("section2Item3Label")}</strong> {t("section2Item3Text")}</li>
              <li><strong>{t("section2Item4Label")}</strong> {t("section2Item4Text")}</li>
              <li><strong>{t("section2Item5Label")}</strong> {t("section2Item5Text")}</li>
              <li><strong>{t("section2Item6Label")}</strong> {t("section2Item6Text")}</li>
              <li><strong>{t("section2Item7Label")}</strong> {t("section2Item7Text")}</li>
              <li><strong>{t("section2Item8Label")}</strong> {t("section2Item8Text")}</li>
            </ul>
          </section>

          {/* 3. How We Share Your Information */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{t("section3Heading")}</h2>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t("section3Sub1Heading")}</h3>
              <p className="text-slate-600 leading-relaxed">{t("section3Sub1Para1")}</p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 mt-4">
                <li>{t("section3Sub1Item1")}</li>
                <li>{t("section3Sub1Item2")}</li>
                <li>{t("section3Sub1Item3")}</li>
                <li>{t("section3Sub1Item4")}</li>
                <li>{t("section3Sub1Item5")}</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mt-4">{t("section3Sub1Para2")}</p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t("section3Sub2Heading")}</h3>
              <p className="text-slate-600 leading-relaxed">{t("section3Sub2Para")}</p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 mt-4">
                <li>{t("section3Sub2Item1")}</li>
                <li>{t("section3Sub2Item2")}</li>
                <li>{t("section3Sub2Item3")}</li>
                <li>{t("section3Sub2Item4")}</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t("section3Sub3Heading")}</h3>
              <p className="text-slate-600 leading-relaxed">{t("section3Sub3Para")}</p>
            </div>
          </section>

          {/* 4. Data Retention */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{t("section4Heading")}</h2>
            <p className="text-slate-600 leading-relaxed mb-4">{t("section4Para1")}</p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
              <li><strong>{t("section4Item1Label")}</strong> {t("section4Item1Text")}</li>
              <li><strong>{t("section4Item2Label")}</strong> {t("section4Item2Text")}</li>
              <li><strong>{t("section4Item3Label")}</strong> {t("section4Item3Text")}</li>
              <li><strong>{t("section4Item4Label")}</strong> {t("section4Item4Text")}</li>
            </ul>
            <p className="text-slate-600 leading-relaxed">{t("section4Para2")}</p>
          </section>

          {/* 5. Your Privacy Rights */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{t("section5Heading")}</h2>
            <p className="text-slate-600 leading-relaxed mb-4">{t("section5Para")}</p>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t("section5Sub1Heading")}</h3>
              <p className="text-slate-600 leading-relaxed">{t("section5Sub1Para")}</p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t("section5Sub2Heading")}</h3>
              <p className="text-slate-600 leading-relaxed">{t("section5Sub2Para")}</p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t("section5Sub3Heading")}</h3>
              <p className="text-slate-600 leading-relaxed">{t("section5Sub3Para")}</p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t("section5Sub4Heading")}</h3>
              <p className="text-slate-600 leading-relaxed">{t("section5Sub4Para")}</p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t("section5Sub5Heading")}</h3>
              <p className="text-slate-600 leading-relaxed">{t("section5Sub5Para")}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t("section5Sub6Heading")}</h3>
              <p className="text-slate-600 leading-relaxed">
                {t("section5Sub6ParaBefore")}{" "}
                <a href="mailto:privacy@plexoapp.com" className="text-indigo-600 hover:text-indigo-700 font-medium">
                  privacy@plexoapp.com
                </a>
                {t("section5Sub6ParaAfter")}
              </p>
            </div>
          </section>

          {/* 6. Data Security */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{t("section6Heading")}</h2>
            <p className="text-slate-600 leading-relaxed mb-4">{t("section6Para1")}</p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
              <li>{t("section6Item1")}</li>
              <li>{t("section6Item2")}</li>
              <li>{t("section6Item3")}</li>
              <li>{t("section6Item4")}</li>
              <li>{t("section6Item5")}</li>
              <li>{t("section6Item6")}</li>
              <li>{t("section6Item7")}</li>
              <li>{t("section6Item8")}</li>
            </ul>
            <p className="text-slate-600 leading-relaxed">
              {t("section6Para2Before")}{" "}
              <a href="mailto:privacy@plexoapp.com" className="text-indigo-600 hover:text-indigo-700 font-medium">
                privacy@plexoapp.com
              </a>
              {t("section6Para2After")}
            </p>
          </section>

          {/* 7. Children's Privacy */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{t("section7Heading")}</h2>
            <p className="text-slate-600 leading-relaxed">
              {t("section7ParaBefore")}{" "}
              <a href="mailto:privacy@plexoapp.com" className="text-indigo-600 hover:text-indigo-700 font-medium">
                privacy@plexoapp.com
              </a>
              {t("section7ParaAfter")}
            </p>
          </section>

          {/* 8. International Data Transfers */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{t("section8Heading")}</h2>
            <p className="text-slate-600 leading-relaxed mb-4">{t("section8Para1")}</p>
            <p className="text-slate-600 leading-relaxed">{t("section8Para2")}</p>
          </section>

          {/* 9. Third-Party Links */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{t("section9Heading")}</h2>
            <p className="text-slate-600 leading-relaxed">{t("section9Para")}</p>
          </section>

          {/* 10. Cookies and Tracking */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{t("section10Heading")}</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              {t("section10Para1Before")}{" "}
              <Link href="/cookies" className="text-indigo-600 hover:text-indigo-700 font-medium">
                {t("section10CookieLinkText")}
              </Link>
              {t("section10Para1After")}
            </p>
            <p className="text-slate-600 leading-relaxed">{t("section10Para2")}</p>
          </section>

          {/* 11. Changes to This Privacy Policy */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{t("section11Heading")}</h2>
            <p className="text-slate-600 leading-relaxed">{t("section11Para")}</p>
          </section>

          {/* 12. Contact Us */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{t("section12Heading")}</h2>
            <p className="text-slate-600 leading-relaxed mb-4">{t("section12Para")}</p>
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <p className="text-slate-900 font-semibold mb-3">{t("contactCompany")}</p>
              <p className="text-slate-600 mb-2">
                <strong>{t("contactEmailLabel")}</strong>{" "}
                <a href="mailto:privacy@plexoapp.com" className="text-indigo-600 hover:text-indigo-700">
                  privacy@plexoapp.com
                </a>
              </p>
              <p className="text-slate-600 mb-2">
                <strong>{t("contactWebsiteLabel")}</strong>{" "}
                <a href="https://plexoapp.com" className="text-indigo-600 hover:text-indigo-700">
                  plexoapp.com
                </a>
              </p>
              <p className="text-slate-600">
                <strong>{t("contactLocationLabel")}</strong> {t("contactLocationValue")}
              </p>
            </div>
            <p className="text-slate-600 leading-relaxed mt-6">{t("section12ParaBottom")}</p>
          </section>

          {/* Legal Disclaimer */}
          <section className="mt-12 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-500 italic">{t("legalDisclaimer")}</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
