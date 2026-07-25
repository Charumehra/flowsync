import Hero from "../components/Hero";
import TrustedCompanies from "../components/TrustedCompanies";
import Features from "../components/Features";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <>
      <SEO
        title="FlowSync | AI Workflow Automation"
        description="Automate workflows and boost team productivity with FlowSync."
      />
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
