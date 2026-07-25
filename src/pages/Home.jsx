import Hero from "../components/Hero";
import TrustedCompanies from "../components/TrustedCompanies";
import Features from "../components/Features";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedCompanies />
      <Features />
      <Stats />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}