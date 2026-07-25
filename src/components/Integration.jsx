const apps = [
  "Slack",
  "Microsoft Teams",
  "Google Drive",
  "Dropbox",
  "Notion",
  "Zapier",
  "GitHub",
  "Jira"
];

export default function Integration() {
  return (
    <section className="bg-slate-50 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <h2 className="text-4xl font-bold">
            Connect Your Favorite Tools
          </h2>

          <p className="mt-4 text-slate-600">
            Integrate seamlessly with the software your team
            already uses.
          </p>

        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">

          {apps.map((app) => (

            <div
              key={app}
              className="rounded-xl border bg-white p-8 text-center font-semibold shadow-sm"
            >
              {app}
            </div>

          ))}

        </div>

      </div>
    </section>
  );
}