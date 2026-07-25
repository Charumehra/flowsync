import { Link } from "react-router-dom";
import SecurityImage from "../assets/security.webp";  

export default function ProductHero() {
  return (
    <section className="bg-slate-900 py-24 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 md:flex-row">

        <div className="flex-1">

          <span className="rounded-full bg-blue-600 px-4 py-2 text-sm">
            AI Powered Platform
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight">
            Everything your team needs to work smarter.
          </h1>

          <p className="mt-6 text-lg text-slate-300">
            FlowSync centralizes tasks, automates repetitive work,
            and provides powerful analytics so your business can
            move faster.
          </p>

          <div className="mt-10 flex gap-4">

            <Link
              to="/pricing"
              className="rounded-lg bg-blue-600 px-6 py-3 hover:bg-blue-700"
            >
              View Pricing
            </Link>

            <Link
              to="/contact"
              className="rounded-lg border border-white px-6 py-3 hover:bg-white hover:text-slate-900"
            >
              Book Demo
            </Link>

          </div>

        </div>

        <div className="flex-1">
          <img
            src={SecurityImage}
                alt="FlowSync dashboard"
                loading="lazy"
                width="700"
                height="450"
          />
        </div>

      </div>
    </section>
  );
}