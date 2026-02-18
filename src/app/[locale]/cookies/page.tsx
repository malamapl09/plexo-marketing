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
  const t = await getTranslations({ locale, namespace: "CookiesPage" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: getAlternates("/cookies", locale),
  };
}

export default async function CookiesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "CookiesPage" });

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
            <p className="text-slate-600 leading-relaxed">
              {t("introP2Before")}{" "}
              <Link href="/privacy" className="text-indigo-600 hover:text-indigo-700 font-medium">
                {t("introPrivacyLinkText")}
              </Link>{" "}
              {t("introP2And")}{" "}
              <Link href="/terms" className="text-indigo-600 hover:text-indigo-700 font-medium">
                {t("introTermsLinkText")}
              </Link>
              {t("introP2After")}
            </p>
          </section>

          {/* 1. What Are Cookies? */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{t("section1Heading")}</h2>
            <p className="text-slate-600 leading-relaxed mb-4">{t("section1Para1")}</p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
              <li>{t("section1Item1")}</li>
              <li>{t("section1Item2")}</li>
              <li>{t("section1Item3")}</li>
              <li>{t("section1Item4")}</li>
            </ul>
            <p className="text-slate-600 leading-relaxed">{t("section1Para2")}</p>
          </section>

          {/* 2. Types of Cookies We Use */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{t("section2Heading")}</h2>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t("section2Sub1Heading")}</h3>
              <p className="text-slate-600 leading-relaxed mb-3">{t("section2Sub1Para")}</p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
                <li>{t("section2Sub1Item1")}</li>
                <li>{t("section2Sub1Item2")}</li>
                <li>{t("section2Sub1Item3")}</li>
                <li>{t("section2Sub1Item4")}</li>
                <li>{t("section2Sub1Item5")}</li>
              </ul>
              <p className="text-slate-600 leading-relaxed text-sm bg-slate-50 p-4 rounded">
                <strong>{t("section2Sub1NoteLabel")}</strong> {t("section2Sub1NoteText")}
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t("section2Sub2Heading")}</h3>
              <p className="text-slate-600 leading-relaxed mb-3">{t("section2Sub2Para")}</p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
                <li>{t("section2Sub2Item1")}</li>
                <li>{t("section2Sub2Item2")}</li>
                <li>{t("section2Sub2Item3")}</li>
                <li>{t("section2Sub2Item4")}</li>
                <li>{t("section2Sub2Item5")}</li>
              </ul>
              <p className="text-slate-600 leading-relaxed">
                <strong>{t("section2Sub2ToolsLabel")}</strong> {t("section2Sub2ToolsText")}
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t("section2Sub3Heading")}</h3>
              <p className="text-slate-600 leading-relaxed mb-3">{t("section2Sub3Para")}</p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
                <li>{t("section2Sub3Item1")}</li>
                <li>{t("section2Sub3Item2")}</li>
                <li>{t("section2Sub3Item3")}</li>
                <li>{t("section2Sub3Item4")}</li>
                <li>{t("section2Sub3Item5")}</li>
              </ul>
              <p className="text-slate-600 leading-relaxed">{t("section2Sub3ParaBottom")}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t("section2Sub4Heading")}</h3>
              <p className="text-slate-600 leading-relaxed mb-3">{t("section2Sub4Para")}</p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
                <li>{t("section2Sub4Item1")}</li>
                <li>{t("section2Sub4Item2")}</li>
                <li>{t("section2Sub4Item3")}</li>
                <li>{t("section2Sub4Item4")}</li>
              </ul>
              <p className="text-slate-600 leading-relaxed">
                <strong>{t("section2Sub4NoteLabel")}</strong> {t("section2Sub4NoteText")}
              </p>
            </div>
          </section>

          {/* 3. Third-Party Cookies */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{t("section3Heading")}</h2>
            <p className="text-slate-600 leading-relaxed mb-4">{t("section3Para")}</p>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t("section3Sub1Heading")}</h3>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>
                  <strong>{t("section3Sub1Item1Label")}</strong>{" "}
                  {t("section3Sub1Item1Text")}{" "}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700">
                    {t("section3Sub1Item1Link")}
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t("section3Sub2Heading")}</h3>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>
                  <strong>{t("section3Sub2Item1Label")}</strong>{" "}
                  {t("section3Sub2Item1Text")}{" "}
                  <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700">
                    {t("section3Sub2Item1Link")}
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t("section3Sub3Heading")}</h3>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>
                  <strong>{t("section3Sub3Item1Label")}</strong>{" "}
                  {t("section3Sub3Item1Text")}{" "}
                  <a href="https://sendgrid.com/policies/privacy/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700">
                    {t("section3Sub3Item1Link")}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t("section3Sub4Heading")}</h3>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>
                  <strong>{t("section3Sub4Item1Label")}</strong>{" "}
                  {t("section3Sub4Item1Text")}{" "}
                  <a href="https://www.facebook.com/privacy/explanation" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700">
                    {t("section3Sub4Item1Link")}
                  </a>
                </li>
                <li>
                  <strong>{t("section3Sub4Item2Label")}</strong>{" "}
                  {t("section3Sub4Item2Text")}{" "}
                  <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700">
                    {t("section3Sub4Item2Link")}
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* 4. Similar Tracking Technologies */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{t("section4Heading")}</h2>
            <p className="text-slate-600 leading-relaxed mb-4">{t("section4Para")}</p>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t("section4Sub1Heading")}</h3>
              <p className="text-slate-600 leading-relaxed">{t("section4Sub1Para")}</p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t("section4Sub2Heading")}</h3>
              <p className="text-slate-600 leading-relaxed">{t("section4Sub2Para")}</p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t("section4Sub3Heading")}</h3>
              <p className="text-slate-600 leading-relaxed">{t("section4Sub3Para")}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t("section4Sub4Heading")}</h3>
              <p className="text-slate-600 leading-relaxed">{t("section4Sub4Para")}</p>
            </div>
          </section>

          {/* 5. How to Manage Cookies */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{t("section5Heading")}</h2>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t("section5Sub1Heading")}</h3>
              <p className="text-slate-600 leading-relaxed mb-4">{t("section5Sub1Para")}</p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
                <li>{t("section5Sub1Item1")}</li>
                <li>{t("section5Sub1Item2")}</li>
                <li>{t("section5Sub1Item3")}</li>
                <li>{t("section5Sub1Item4")}</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mb-2">{t("section5Sub1ParaLinks")}</p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>
                  <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700">
                    {t("section5Sub1BrowserChrome")}
                  </a>
                </li>
                <li>
                  <a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700">
                    {t("section5Sub1BrowserFirefox")}
                  </a>
                </li>
                <li>
                  <a href="https://support.apple.com/en-us/HT201265" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700">
                    {t("section5Sub1BrowserSafari")}
                  </a>
                </li>
                <li>
                  <a href="https://support.microsoft.com/en-us/windows/delete-cookies-in-microsoft-edge-63947406" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700">
                    {t("section5Sub1BrowserEdge")}
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t("section5Sub2Heading")}</h3>
              <p className="text-slate-600 leading-relaxed">{t("section5Sub2Para")}</p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t("section5Sub3Heading")}</h3>
              <p className="text-slate-600 leading-relaxed mb-4">{t("section5Sub3Para")}</p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>
                  <a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700">
                    {t("section5Sub3Link1")}
                  </a>
                </li>
                <li>
                  <a href="https://www.networkadvertising.org/managing/opt_out.asp" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700">
                    {t("section5Sub3Link2")}
                  </a>
                </li>
                <li>
                  <a href="https://www.youradchoices.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700">
                    {t("section5Sub3Link3")}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t("section5Sub4Heading")}</h3>
              <p className="text-slate-600 leading-relaxed">{t("section5Sub4Para")}</p>
            </div>
          </section>

          {/* 6. Cookies by Jurisdiction */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{t("section6Heading")}</h2>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t("section6Sub1Heading")}</h3>
              <p className="text-slate-600 leading-relaxed mb-4">{t("section6Sub1Para")}</p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>{t("section6Sub1Item1")}</li>
                <li>{t("section6Sub1Item2")}</li>
                <li>{t("section6Sub1Item3")}</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mt-4">{t("section6Sub1ParaBottom")}</p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t("section6Sub2Heading")}</h3>
              <p className="text-slate-600 leading-relaxed">
                {t("section6Sub2ParaBefore")}{" "}
                <a href="mailto:privacy@plexoapp.com" className="text-indigo-600 hover:text-indigo-700">
                  privacy@plexoapp.com
                </a>
                {t("section6Sub2ParaAfter")}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t("section6Sub3Heading")}</h3>
              <p className="text-slate-600 leading-relaxed">
                {t("section6Sub3ParaBefore")}{" "}
                <Link href="/privacy" className="text-indigo-600 hover:text-indigo-700 font-medium">
                  {t("section6Sub3PrivacyLinkText")}
                </Link>{" "}
                {t("section6Sub3ParaAfter")}
              </p>
            </div>
          </section>

          {/* 7. Security of Cookie Data */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{t("section7Heading")}</h2>
            <p className="text-slate-600 leading-relaxed mb-4">{t("section7Para")}</p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>{t("section7Item1")}</li>
              <li>{t("section7Item2")}</li>
              <li>{t("section7Item3")}</li>
              <li>{t("section7Item4")}</li>
            </ul>
          </section>

          {/* 8. Retention of Cookie Data */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{t("section8Heading")}</h2>
            <p className="text-slate-600 leading-relaxed mb-4">{t("section8Para")}</p>
            <ul className="list-disc list-inside text-slate-600 space-y-3">
              <li><strong>{t("section8Item1Label")}</strong> {t("section8Item1Text")}</li>
              <li><strong>{t("section8Item2Label")}</strong> {t("section8Item2Text")}</li>
              <li><strong>{t("section8Item3Label")}</strong> {t("section8Item3Text")}</li>
              <li><strong>{t("section8Item4Label")}</strong> {t("section8Item4Text")}</li>
              <li><strong>{t("section8Item5Label")}</strong> {t("section8Item5Text")}</li>
            </ul>
          </section>

          {/* 9. Updates to This Cookie Policy */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{t("section9Heading")}</h2>
            <p className="text-slate-600 leading-relaxed mb-4">{t("section9Para1")}</p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
              <li>{t("section9Item1")}</li>
              <li>{t("section9Item2")}</li>
              <li>{t("section9Item3")}</li>
            </ul>
            <p className="text-slate-600 leading-relaxed">{t("section9Para2")}</p>
          </section>

          {/* 10. Contact Us */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{t("section10Heading")}</h2>
            <p className="text-slate-600 leading-relaxed mb-4">{t("section10Para")}</p>
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
            <p className="text-slate-600 leading-relaxed mt-6">{t("section10ParaBottom")}</p>
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
