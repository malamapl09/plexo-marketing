const BASE_URL = "https://plexoapp.com";

export function getAlternates(path: string, locale: string = "en") {
  const cleanPath = path === "/" ? "" : path;
  const canonicalPath = locale === "en" ? cleanPath : `/${locale}${cleanPath}`;
  return {
    canonical: `${BASE_URL}${canonicalPath}`,
    languages: {
      en: `${BASE_URL}${cleanPath}`,
      es: `${BASE_URL}/es${cleanPath}`,
    },
  };
}
