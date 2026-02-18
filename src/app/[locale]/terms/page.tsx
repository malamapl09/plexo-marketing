import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getAlternates } from "@/lib/seo";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "TermsPage" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: getAlternates("/terms", locale),
  };
}

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "TermsPage" });

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
            <p className="text-slate-600 leading-relaxed mb-4">{t("introP2")}</p>
            <p className="text-slate-600 leading-relaxed">
              <strong>{t("introP3")}</strong>
            </p>
          </section>

          {/* 1. Service Description */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{t("section1Heading")}</h2>
            <p className="text-slate-600 leading-relaxed mb-4">{t("section1Para")}</p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>{t("section1Item1")}</li>
              <li>{t("section1Item2")}</li>
              <li>{t("section1Item3")}</li>
              <li>{t("section1Item4")}</li>
              <li>{t("section1Item5")}</li>
              <li>{t("section1Item6")}</li>
            </ul>
          </section>

          {/* 2. Account Registration and Responsibility */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{t("section2Heading")}</h2>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t("section2Sub1Heading")}</h3>
              <p className="text-slate-600 leading-relaxed">{t("section2Sub1Para")}</p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t("section2Sub2Heading")}</h3>
              <p className="text-slate-600 leading-relaxed mb-4">{t("section2Sub2Para")}</p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>{t("section2Sub2Item1")}</li>
                <li>{t("section2Sub2Item2")}</li>
                <li>{t("section2Sub2Item3")}</li>
                <li>{t("section2Sub2Item4")}</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t("section2Sub3Heading")}</h3>
              <p className="text-slate-600 leading-relaxed">{t("section2Sub3Para")}</p>
            </div>
          </section>

          {/* 3. Acceptable Use Policy */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{t("section3Heading")}</h2>
            <p className="text-slate-600 leading-relaxed mb-4">{t("section3Para")}</p>
            <ul className="list-disc list-inside text-slate-600 space-y-3">
              <li>{t("section3Item1")}</li>
              <li>{t("section3Item2")}</li>
              <li>{t("section3Item3")}</li>
              <li>{t("section3Item4")}</li>
              <li>{t("section3Item5")}</li>
              <li>{t("section3Item6")}</li>
              <li>{t("section3Item7")}</li>
              <li>{t("section3Item8")}</li>
              <li>{t("section3Item9")}</li>
              <li>{t("section3Item10")}</li>
              <li>{t("section3Item11")}</li>
              <li>{t("section3Item12")}</li>
            </ul>
          </section>

          {/* 4. Intellectual Property Rights */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{t("section4Heading")}</h2>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t("section4Sub1Heading")}</h3>
              <p className="text-slate-600 leading-relaxed">{t("section4Sub1Para")}</p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t("section4Sub2Heading")}</h3>
              <p className="text-slate-600 leading-relaxed mb-4">{t("section4Sub2Para")}</p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>{t("section4Sub2Item1")}</li>
                <li>{t("section4Sub2Item2")}</li>
                <li>{t("section4Sub2Item3")}</li>
                <li>{t("section4Sub2Item4")}</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t("section4Sub3Heading")}</h3>
              <p className="text-slate-600 leading-relaxed">{t("section4Sub3Para")}</p>
            </div>
          </section>

          {/* 5. Payment Terms and Billing */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{t("section5Heading")}</h2>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t("section5Sub1Heading")}</h3>
              <p className="text-slate-600 leading-relaxed">{t("section5Sub1Para")}</p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t("section5Sub2Heading")}</h3>
              <p className="text-slate-600 leading-relaxed mb-4">{t("section5Sub2Para")}</p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>{t("section5Sub2Item1")}</li>
                <li>{t("section5Sub2Item2")}</li>
                <li>{t("section5Sub2Item3")}</li>
                <li>{t("section5Sub2Item4")}</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t("section5Sub3Heading")}</h3>
              <p className="text-slate-600 leading-relaxed">{t("section5Sub3Para")}</p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t("section5Sub4Heading")}</h3>
              <p className="text-slate-600 leading-relaxed">{t("section5Sub4Para")}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t("section5Sub5Heading")}</h3>
              <p className="text-slate-600 leading-relaxed">{t("section5Sub5Para")}</p>
            </div>
          </section>

          {/* 6. Service Availability and SLA */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{t("section6Heading")}</h2>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t("section6Sub1Heading")}</h3>
              <p className="text-slate-600 leading-relaxed">{t("section6Sub1Para")}</p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t("section6Sub2Heading")}</h3>
              <p className="text-slate-600 leading-relaxed">{t("section6Sub2Para")}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t("section6Sub3Heading")}</h3>
              <p className="text-slate-600 leading-relaxed">{t("section6Sub3Para")}</p>
            </div>
          </section>

          {/* 7. Limitation of Liability */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{t("section7Heading")}</h2>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t("section7Sub1Heading")}</h3>
              <p className="text-slate-600 leading-relaxed">
                <strong>{t("section7Sub1Para")}</strong>
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t("section7Sub2Heading")}</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                <strong>{t("section7Sub2Para")}</strong>
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>{t("section7Sub2Item1")}</li>
                <li>{t("section7Sub2Item2")}</li>
                <li>{t("section7Sub2Item3")}</li>
                <li>{t("section7Sub2Item4")}</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mt-4">{t("section7Sub2ParaBottom")}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t("section7Sub3Heading")}</h3>
              <p className="text-slate-600 leading-relaxed">{t("section7Sub3Para")}</p>
            </div>
          </section>

          {/* 8. Indemnification */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{t("section8Heading")}</h2>
            <p className="text-slate-600 leading-relaxed">{t("section8Para")}</p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 mt-4">
              <li>{t("section8Item1")}</li>
              <li>{t("section8Item2")}</li>
              <li>{t("section8Item3")}</li>
              <li>{t("section8Item4")}</li>
              <li>{t("section8Item5")}</li>
            </ul>
          </section>

          {/* 9. Termination */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{t("section9Heading")}</h2>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t("section9Sub1Heading")}</h3>
              <p className="text-slate-600 leading-relaxed">{t("section9Sub1Para")}</p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t("section9Sub2Heading")}</h3>
              <p className="text-slate-600 leading-relaxed">{t("section9Sub2Para")}</p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 mt-4">
                <li>{t("section9Sub2Item1")}</li>
                <li>{t("section9Sub2Item2")}</li>
                <li>{t("section9Sub2Item3")}</li>
                <li>{t("section9Sub2Item4")}</li>
                <li>{t("section9Sub2Item5")}</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t("section9Sub3Heading")}</h3>
              <p className="text-slate-600 leading-relaxed">{t("section9Sub3Para")}</p>
            </div>
          </section>

          {/* 10. Data and Content */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{t("section10Heading")}</h2>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t("section10Sub1Heading")}</h3>
              <p className="text-slate-600 leading-relaxed">{t("section10Sub1Para")}</p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t("section10Sub2Heading")}</h3>
              <p className="text-slate-600 leading-relaxed">{t("section10Sub2Para")}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t("section10Sub3Heading")}</h3>
              <p className="text-slate-600 leading-relaxed">{t("section10Sub3Para")}</p>
            </div>
          </section>

          {/* 11. Governing Law and Jurisdiction */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{t("section11Heading")}</h2>
            <p className="text-slate-600 leading-relaxed mb-4">{t("section11Para1")}</p>
            <p className="text-slate-600 leading-relaxed">{t("section11Para2")}</p>
          </section>

          {/* 12. Changes to Terms */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{t("section12Heading")}</h2>
            <p className="text-slate-600 leading-relaxed mb-4">{t("section12Para1")}</p>
            <p className="text-slate-600 leading-relaxed">{t("section12Para2")}</p>
          </section>

          {/* 13. Severability */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{t("section13Heading")}</h2>
            <p className="text-slate-600 leading-relaxed">{t("section13Para")}</p>
          </section>

          {/* 14. Entire Agreement */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{t("section14Heading")}</h2>
            <p className="text-slate-600 leading-relaxed">{t("section14Para")}</p>
          </section>

          {/* 15. Contact Us */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{t("section15Heading")}</h2>
            <p className="text-slate-600 leading-relaxed mb-4">{t("section15Para")}</p>
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
