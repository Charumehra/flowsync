import { Link } from "react-router-dom";
import DashboardImage from "../assets/dashboard.webp";

export default function Hero() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-between gap-12 px-6 py-20 md:flex-row">
        {/* Left */}
        <div className="max-w-xl">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Trusted by 2,000+ businesses
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900 md:text-6xl">
            Automate your workflow with AI.
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            FlowSync helps modern businesses automate repetitive work, manage
            projects, and improve team productivity from one intelligent
            dashboard.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/pricing"
              className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
            >
              Start Free Trial
            </Link>

            <Link
              to="/product"
              className="rounded-lg border border-slate-300 px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-100"
            >
              Explore Product
            </Link>
          </div>
        </div>

        {/* Right */}

        <div className="flex flex-1 justify-center">
          <img
            src={DashboardImage}
            alt="Workflow dashboard"
            loading="lazy"
            width="700"
            height="450"
          />
        </div>
      </div>
    </section>
  );
}
