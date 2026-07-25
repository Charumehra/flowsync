import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="bg-blue-600 py-24">

      <div className="mx-auto max-w-5xl px-6 text-center">

        <h2 className="text-5xl font-bold text-white">
          Ready to transform your workflow?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
          Join thousands of businesses using FlowSync to automate
          repetitive work and improve team productivity.
        </p>

        <div className="mt-10">

          <Link
            to="/pricing"
            className="rounded-lg bg-white px-8 py-4 font-semibold text-blue-600 transition hover:bg-slate-100"
          >
            Start Free Trial
          </Link>

        </div>

      </div>

    </section>
  );
}