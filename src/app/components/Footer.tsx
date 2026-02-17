import Image from "next/image";

const footerLinks = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Pricing", href: "/#pricing" },
      { label: "How It Works", href: "/#how-it-works" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },
];

export default function Footer() {
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
              Retail operations platform for modern chains. Your stores,
              perfectly in sync.
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.heading}>
              <h4 className="text-sm font-semibold text-white mb-4">
                {group.heading}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Plexo. All rights reserved.
          </p>
          <a
            href="mailto:sales@plexoapp.com"
            className="text-sm text-slate-500 hover:text-white transition-colors"
          >
            sales@plexoapp.com
          </a>
        </div>
      </div>
    </footer>
  );
}
