import { ShieldCheck } from "lucide-react";
import SecurityImage from "../assets/security.webp";

export default function Security() {
  return (
    <section className="py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 md:flex-row">
        <div className="flex-1">
          <ShieldCheck size={60} className="text-blue-600" />

          <h2 className="mt-6 text-4xl font-bold">Enterprise-grade Security</h2>

          <p className="mt-6 text-lg text-slate-600">
            Your business data is protected using encrypted storage, secure
            authentication, daily backups, and continuous monitoring.
          </p>
        </div>

        <div className="flex-1">
          <img
            src={SecurityImage}
            alt="Security dashboard"
            loading="lazy"
            width="700"
            height="450"
          />
        </div>
      </div>
    </section>
  );
}
