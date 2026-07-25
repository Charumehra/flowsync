import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "../data/faq";

export default function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-4xl px-6">

        <div className="text-center">

          <h2 className="text-4xl font-bold">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-slate-600">
            Everything you need to know.
          </p>

        </div>

        <div className="mt-12 space-y-4">

          {faqs.map((faq, index) => (

            <article
              key={faq.question}
              className="rounded-xl border bg-white"
            >

              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left font-semibold"
                aria-expanded={active === index}
              >
                {faq.question}

                <ChevronDown
                  className={`transition ${
                    active === index ? "rotate-180" : ""
                  }`}
                />

              </button>

              {active === index && (

                <div className="border-t px-6 py-5 text-slate-600">

                  {faq.answer}

                </div>

              )}

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}