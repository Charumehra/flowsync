import { ShieldCheck } from "lucide-react";

export default function Security() {
  return (
    <section className="py-24">

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 md:flex-row">

        <div className="flex-1">

          <ShieldCheck
            size={60}
            className="text-blue-600"
          />

          <h2 className="mt-6 text-4xl font-bold">
            Enterprise-grade Security
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Your business data is protected using encrypted
            storage, secure authentication, daily backups,
            and continuous monitoring.
          </p>

        </div>

        <div className="flex-1">
          <img
            src="https://placehold.co/600x400"
            alt="Security dashboard"
            className="rounded-xl shadow-xl"
          />
        </div>

      </div>
    </section>
  );
}