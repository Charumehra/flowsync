const stats = [
  {
    value: "2,500+",
    label: "Businesses"
  },
  {
    value: "99.99%",
    label: "Uptime"
  },
  {
    value: "150M+",
    label: "Tasks Automated"
  },
  {
    value: "24/7",
    label: "Customer Support"
  }
];

export default function Stats() {
  return (
    <section className="bg-slate-50 py-20">

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-10 text-center md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item) => (

            <div key={item.label}>

              <h2 className="text-5xl font-bold text-blue-600">
                {item.value}
              </h2>

              <p className="mt-2 text-slate-600">
                {item.label}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}