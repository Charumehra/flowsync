import { Check } from "lucide-react";
import { Link } from "react-router-dom";

export default function PricingCard({ plan }) {
  return (
    <article
      className={`relative rounded-2xl border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl ${
        plan.popular ? "border-blue-600" : ""
      }`}
    >
      {plan.popular && (
        <span className="absolute right-6 top-6 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
          Most Popular
        </span>
      )}

      <h3 className="text-2xl font-bold">{plan.name}</h3>

      <p className="mt-2 text-slate-600">{plan.description}</p>

      <p className="mt-8 text-5xl font-bold">
        {plan.price}
        {plan.price !== "Custom" && (
          <span className="text-lg font-normal text-slate-500">/month</span>
        )}
      </p>

      <ul className="mt-8 space-y-4">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <Check className="text-green-600" size={18} />
            {feature}
          </li>
        ))}
      </ul>

      <Link
        to="/contact"
        className={`mt-10 block rounded-lg px-6 py-3 text-center font-medium ${
          plan.popular
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "border border-slate-300 hover:bg-slate-100"
        }`}
      >
        Get Started
      </Link>
    </article>
  );
}