import SEO from "../components/SEO";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <>
      <SEO
  title="Contact | FlowSync"
  description="Get in touch with the FlowSync team to learn how our workflow automation platform can help your business."
  url="https://flowsync-sandy.vercel.app/contact"
/>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-16 text-center">

            <h1 className="text-5xl font-bold">
              Let's Talk
            </h1>

            <p className="mt-5 text-lg text-slate-600">
              We'd love to learn more about your business and
              how FlowSync can help.
            </p>

          </div>

          <div className="grid gap-12 lg:grid-cols-2">

            {/* Left */}

            <div>

              <h2 className="text-3xl font-bold">
                Contact Information
              </h2>

              <div className="mt-8 space-y-6">

                <div>
                  <h3 className="font-semibold">
                    Email
                  </h3>

                  <p className="text-slate-600">
                    hello@flowsync.com
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">
                    Phone
                  </h3>

                  <p className="text-slate-600">
                    +1 (800) 123-4567
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">
                    Office
                  </h3>

                  <p className="text-slate-600">
                    123 Innovation Street
                    <br />
                    San Francisco, CA
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">
                    Business Hours
                  </h3>

                  <p className="text-slate-600">
                    Monday – Friday
                    <br />
                    9:00 AM – 6:00 PM
                  </p>
                </div>

              </div>

            </div>

            {/* Right */}

            <ContactForm />

          </div>

        </div>
      </section>
    </>
  );
}
