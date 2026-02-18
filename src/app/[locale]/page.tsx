import { setRequestLocale } from "next-intl/server";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Problem from "../components/Problem";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import MobileShowcase from "../components/MobileShowcase";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import CTABanner from "../components/CTABanner";
import Footer from "../components/Footer";
import AnimateIn from "../components/AnimateIn";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <AnimateIn>
          <Problem />
        </AnimateIn>
        <AnimateIn>
          <Features />
        </AnimateIn>
        <AnimateIn>
          <HowItWorks />
        </AnimateIn>
        <AnimateIn>
          <MobileShowcase />
        </AnimateIn>
        <AnimateIn>
          <Pricing />
        </AnimateIn>
        <AnimateIn>
          <FAQ />
        </AnimateIn>
        <AnimateIn>
          <CTABanner />
        </AnimateIn>
      </main>
      <Footer />
    </>
  );
}
