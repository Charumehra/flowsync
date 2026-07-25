const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Operations Manager",
    company: "TechNova",
    quote:
      "FlowSync reduced our manual work by over 60% in the first month."
  },
  {
    name: "David Lee",
    role: "Founder",
    company: "BrightLabs",
    quote:
      "Our team collaborates faster and manages projects effortlessly."
  },
  {
    name: "Emily Carter",
    role: "Product Lead",
    company: "CloudCore",
    quote:
      "The clean interface and automation features saved us countless hours."
  }
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <h2 className="text-4xl font-bold">
            Loved by growing businesses
          </h2>

          <p className="mt-4 text-slate-600">
            See what our customers say.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {testimonials.map((item) => (

            <article
              key={item.name}
              className="rounded-xl border bg-white p-8 shadow-sm"
            >

              <p className="italic text-slate-600">
                "{item.quote}"
              </p>

              <div className="mt-8">

                <h3 className="font-semibold">
                  {item.name}
                </h3>

                <p className="text-sm text-slate-500">
                  {item.role}
                </p>

                <p className="text-sm text-blue-600">
                  {item.company}
                </p>

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}