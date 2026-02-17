import Header from "./components/Header";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import MobileShowcase from "./components/MobileShowcase";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";
import AnimateIn from "./components/AnimateIn";

export default function Home() {
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
