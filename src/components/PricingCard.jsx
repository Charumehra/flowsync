import { Check } from "lucide-react";
import { Link } from "react-router-dom";

export default function PricingCard({ plan, billing }) {
  const price =
    billing === "monthly"
      ? plan.monthlyPrice
      : plan.yearlyPrice;

  return (
    <article
      className={`relative flex h-full flex-col rounded-2xl border bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
        plan.popular
          ? "border-blue-600 ring-2 ring-blue-100"
          : "border-slate-200"
      }`}
    >
      {plan.popular && (
        <span className="absolute right-6 top-6 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
          Most Popular
        </span>
      )}

      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          {plan.name}
        </h2>

        <p className="mt-3 min-h-[48px] text-sm leading-6 text-slate-600">
          {plan.description}
        </p>
      </div>

      <div className="mt-8">
        {price ? (
          <div className="flex items-end gap-1">
            <span className="text-5xl font-bold tracking-tight text-slate-900">
              ${price}
            </span>

            <span className="mb-1 text-sm text-slate-500">
              /month
            </span>
          </div>
        ) : (
          <span className="text-4xl font-bold text-slate-900">
            Custom
          </span>
        )}

        {billing === "yearly" && price && (
          <p className="mt-2 text-sm font-medium text-green-600">
            Save 20% with annual billing
          </p>
        )}
      </div>

      <Link
        to="/contact"
        className={`mt-8 rounded-lg px-5 py-3 text-center font-semibold transition ${
          plan.popular
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "border border-slate-300 text-slate-800 hover:bg-slate-50"
        }`}
      >
        {plan.name === "Enterprise"
          ? "Talk to Sales"
          : "Start Free Trial"}
      </Link>

      <div className="my-8 border-t border-slate-200" />

      <p className="text-sm font-semibold text-slate-900">
        What's included
      </p>

      <ul className="mt-5 space-y-4">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-3 text-sm text-slate-600"
          >
            <Check
              size={18}
              className="mt-0.5 shrink-0 text-green-600"
              aria-hidden="true"
            />

            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}