import FeatureCard from "./FeatureCard";
import { features } from "../data/features";

export default function Features() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <h2 className="text-4xl font-bold">
            Everything your team needs
          </h2>

          <p className="mt-4 text-slate-600">
            Powerful tools designed for growing businesses.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              {...feature}
            />
          ))}

        </div>

      </div>

    </section>
  );
}