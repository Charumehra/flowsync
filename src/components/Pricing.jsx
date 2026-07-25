import SEO from "../components/SEO";
import PricingCard from "../components/PricingCard";
import CTA from "../components/CTA";
import { pricingPlans } from "../data/pricing";

export default function Pricing() {
  return (
    <>
      <SEO
        title="Pricing | FlowSync"
        description="Choose the perfect pricing plan for your business."
      />

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <h1 className="text-5xl font-bold">
              Simple, Transparent Pricing
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
              Flexible pricing plans designed for startups,
              growing businesses, and enterprises.
            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">

            {pricingPlans.map((plan) => (
              <PricingCard key={plan.name} plan={plan} />
            ))}

          </div>

        </div>
      </section>

      <CTA />
    </>
  );
}