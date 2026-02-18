"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const nextLocale = locale === "en" ? "es" : "en";

  function handleSwitch() {
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <button
      onClick={handleSwitch}
      className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors px-2 py-1 rounded-md hover:bg-slate-100"
      aria-label={`Switch to ${nextLocale === "es" ? "Spanish" : "English"}`}
    >
      {nextLocale.toUpperCase()}
    </button>
  );
}
