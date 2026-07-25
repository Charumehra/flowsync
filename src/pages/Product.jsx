import SEO from "../components/SEO";
import ProductHero from "../components/ProductHero";
import PlatformOverview from "../components/PlatformOverview";
import Integrations from "../components/Integrations";
import Security from "../components/Security";
import CTA from "../components/CTA";

export default function Product() {
  return (
    <>
      <SEO
        title="Product | FlowSync"
        description="Discover how FlowSync helps businesses automate workflows and improve productivity."
      />

      <ProductHero />

      <PlatformOverview />

      <Integrations />

      <Security />

      <CTA />
    </>
  );
}