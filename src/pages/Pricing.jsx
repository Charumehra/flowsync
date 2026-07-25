import { useState } from "react";
import SEO from "../components/SEO";
import PricingCard from "../components/PricingCard";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import { pricingPlans } from "../data/pricing";

const comparison = [
  {
    feature: "Unlimited projects",
    starter: true,
    professional: true,
    enterprise: true,
  },
  {
    feature: "Team members",
    starter: "5",
    professional: "25",
    enterprise: "Unlimited",
  },
  {
    feature: "Analytics",
    starter: "Basic",
    professional: "Advanced",
    enterprise: "Advanced",
  },
  {
    feature: "Workflow automation",
    starter: false,
    professional: true,
    enterprise: true,
  },
  {
    feature: "API access",
    starter: false,
    professional: true,
    enterprise: true,
  },
  {
    feature: "SSO",
    starter: false,
    professional: false,
    enterprise: true,
  },
  {
    feature: "Dedicated support",
    starter: false,
    professional: false,
    enterprise: true,
  },
];

function ComparisonValue({ value }) {
  if (value === true) {
    return (
      <span
        className="font-semibold text-green-600"
        aria-label="Included"
      >
        ✓
      </span>
    );
  }

  if (value === false) {
    return (
      <span
        className="text-slate-300"
        aria-label="Not included"
      >
        —
      </span>
    );
  }

  return <span>{value}</span>;
}

export default function Pricing() {
  const [billing, setBilling] = useState("monthly");

  return (
    <>
      <SEO
  title="Pricing | FlowSync"
  description="Choose a FlowSync plan that fits your team and scale your business with powerful workflow automation."
  url="https://flowsync-sandy.vercel.app/pricing"
/>
      

      {/* Hero */}
      <section className="bg-slate-50 px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Simple & transparent
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Plans that grow with your business
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Start small, automate more, and scale without
            complicated pricing. Every plan includes a 14-day
            free trial.
          </p>

          {/* Billing Toggle */}
          <div
            className="mx-auto mt-10 inline-flex rounded-full border border-slate-200 bg-white p-1 shadow-sm"
            aria-label="Billing frequency"
          >
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              aria-pressed={billing === "monthly"}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                billing === "monthly"
                  ? "bg-slate-900 text-white"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Monthly
            </button>

            <button
              type="button"
              onClick={() => setBilling("yearly")}
              aria-pressed={billing === "yearly"}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                billing === "yearly"
                  ? "bg-slate-900 text-white"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Yearly
              <span className="ml-2 text-green-500">
                Save 20%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="bg-slate-50 px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              billing={billing}
            />
          ))}
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Compare plans
            </h2>

            <p className="mt-4 text-slate-600">
              Choose the features your team needs today and
              scale when you're ready.
            </p>
          </div>

          <div className="mt-12 overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full min-w-[700px] border-collapse text-left">
              <caption className="sr-only">
                FlowSync pricing plan feature comparison
              </caption>

              <thead>
                <tr className="bg-slate-50">
                  <th
                    scope="col"
                    className="px-6 py-5 font-semibold text-slate-900"
                  >
                    Feature
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-5 text-center font-semibold text-slate-900"
                  >
                    Starter
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-5 text-center font-semibold text-blue-600"
                  >
                    Professional
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-5 text-center font-semibold text-slate-900"
                  >
                    Enterprise
                  </th>
                </tr>
              </thead>

              <tbody>
                {comparison.map((row) => (
                  <tr
                    key={row.feature}
                    className="border-t border-slate-200"
                  >
                    <th
                      scope="row"
                      className="px-6 py-5 font-medium text-slate-700"
                    >
                      {row.feature}
                    </th>

                    <td className="px-6 py-5 text-center text-slate-600">
                      <ComparisonValue value={row.starter} />
                    </td>

                    <td className="px-6 py-5 text-center text-slate-600">
                      <ComparisonValue value={row.professional} />
                    </td>

                    <td className="px-6 py-5 text-center text-slate-600">
                      <ComparisonValue value={row.enterprise} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* CTA */}
      <CTA />
    </>
  );
}
