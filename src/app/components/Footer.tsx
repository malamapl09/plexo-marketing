import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

export default function Footer() {
  const t = useTranslations("Footer");

  const footerLinks = [
    {
      headingKey: "productTitle",
      links: [
        { labelKey: "features", href: "/#features" },
        { labelKey: "howItWorks", href: "/#how-it-works" },
        { labelKey: "pricing", href: "/#pricing" },
        { labelKey: "faq", href: "/#faq" },
        { labelKey: "demo", href: "/demo" },
      ],
    },
    {
      headingKey: "legalTitle",
      links: [
        { labelKey: "privacy", href: "/privacy" },
        { labelKey: "terms", href: "/terms" },
        { labelKey: "cookies", href: "/cookies" },
      ],
    },
  ];

  return (
    <footer className="bg-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pb-12 border-b border-slate-800">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/logo.svg"
              alt="Plexo"
              width={130}
              height={34}
              className="brightness-0 invert"
            />
            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
              {t("brandDescription")}
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.headingKey}>
              <h4 className="text-sm font-semibold text-white mb-4">
                {t(group.headingKey as Parameters<typeof t>[0])}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.labelKey}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {t(link.labelKey as Parameters<typeof t>[0])}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Plexo. {t("copyright")}
          </p>
          <a
            href="mailto:sales@plexoapp.com"
            className="text-sm text-slate-500 hover:text-white transition-colors"
          >
            {t("contactEmail")}
          </a>
        </div>
      </div>
    </footer>
  );
}
