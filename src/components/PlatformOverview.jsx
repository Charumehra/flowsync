import {
  Workflow,
  Bot,
  BarChart3,
} from "lucide-react";

const items = [
  {
    title: "Workflow Automation",
    description:
      "Create custom workflows that automate repetitive tasks.",
    icon: <Workflow size={42} />
  },
  {
    title: "AI Assistant",
    description:
      "Let AI organize projects and suggest improvements.",
    icon: <Bot size={42} />
  },
  {
    title: "Analytics Dashboard",
    description:
      "Track productivity and team performance in real time.",
    icon: <BarChart3 size={42} />
  }
];

export default function PlatformOverview() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <h2 className="text-4xl font-bold">
            One Platform. Endless Possibilities.
          </h2>

          <p className="mt-4 text-slate-600">
            Built for modern businesses that need speed,
            collaboration, and automation.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {items.map((item) => (

            <article
              key={item.title}
              className="rounded-xl border p-8 shadow-sm"
            >

              <div className="text-blue-600">
                {item.icon}
              </div>

              <h3 className="mt-6 text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-4 text-slate-600">
                {item.description}
              </p>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}