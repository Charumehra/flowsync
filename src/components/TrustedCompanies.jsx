export default function TrustedCompanies() {
  const companies = [
    "Microsoft",
    "Spotify",
    "Notion",
    "Slack",
    "Airbnb",
    "Stripe",
  ];

  return (
    <section className="border-y bg-white py-12">
      <div className="mx-auto max-w-7xl px-6">

        <p className="text-center text-sm font-semibold uppercase tracking-widest text-slate-500">
          Trusted by innovative teams worldwide
        </p>

        <div className="mt-8 grid grid-cols-2 gap-8 text-center md:grid-cols-3 lg:grid-cols-6">

          {companies.map((company) => (
            <span
              key={company}
              className="text-xl font-semibold text-slate-400"
            >
              {company}
            </span>
          ))}

        </div>

      </div>
    </section>
  );
}