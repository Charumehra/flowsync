export default function FeatureCard({
  title,
  description,
  icon,
}) {
  return (
    <article className="rounded-xl border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-lg">

      <div className="mb-5 text-blue-600">
        {icon}
      </div>

      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-slate-600">
        {description}
      </p>

    </article>
  );
}