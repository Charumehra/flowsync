import SEO from "../components/SEO";
import ProductHero from "../components/ProductHero";
import PlatformOverview from "../components/PlatformOverview";
import Integration from "../components/Integration";
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

      <Integration />

      <Security />

      <CTA />
    </>
  );
}