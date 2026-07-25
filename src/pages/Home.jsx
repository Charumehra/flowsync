import Hero from "../components/Hero";
import TrustedCompanies from "../components/TrustedCompanies";
import Features from "../components/Features";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import SEO from "../components/SEO";
import OrganizationSchema from "../components/OrganizationSchema";
import SoftwareSchema from "../components/SoftwareSchema";
import FAQSchema from "../components/FAQSchema";

export default function Home() {
  return (
    <>
      <SEO
  title="FlowSync | AI Workflow Automation"
  description="Automate workflows, improve collaboration, and increase productivity with FlowSync."
  url="https://flowsync-sandy.vercel.app/"
/>
    <OrganizationSchema />
    <SoftwareSchema />
    <FAQSchema />
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
