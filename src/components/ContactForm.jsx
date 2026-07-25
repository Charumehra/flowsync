export default function ContactForm() {
  return (
    <form className="space-y-6">

      <div>
        <label
          htmlFor="name"
          className="mb-2 block font-medium"
        >
          Full Name
        </label>

        <input
          id="name"
          type="text"
          required
          autoComplete="name"
          placeholder="John Doe"
          className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block font-medium"
        >
          Email Address
        </label>

        <input
          id="email"
          type="email"
          required
          autoComplete="email"
          placeholder="john@example.com"
          className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
        />
      </div>

      <div>
        <label
          htmlFor="company"
          className="mb-2 block font-medium"
        >
          Company
        </label>

        <input
          id="company"
          type="text"
          placeholder="ABC Pvt Ltd"
          required
          autoComplete="organization"
          className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block font-medium"
        >
          Message
        </label>

        <textarea
          id="message"
          rows="5"
          placeholder="Tell us about your project..."
          className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
        />
      </div>

      <button
        type="submit"
        className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        Send Message
      </button>

    </form>
  );
}