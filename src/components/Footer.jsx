export default function Footer() {
  return (
    <footer className="border-t bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid gap-10 md:grid-cols-4">

          <div>
            <h2 className="text-xl font-bold">FlowSync</h2>
            <p className="mt-3 text-slate-400">
              AI workflow automation platform built for modern teams.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Company</h3>

            <ul className="mt-4 space-y-2 text-slate-400">
              <li>About</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Resources</h3>

            <ul className="mt-4 space-y-2 text-slate-400">
              <li>Help Center</li>
              <li>Documentation</li>
              <li>Support</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Contact</h3>

            <p className="mt-4 text-slate-400">
              hello@flowsync.com
            </p>

            <p className="text-slate-400">
              +1 (800) 123-4567
            </p>
          </div>

        </div>

        <div className="mt-10 border-t border-slate-700 pt-6 text-center text-sm text-slate-400">

          © 2026 FlowSync. All rights reserved.

          <br />

          Built for{" "}
          <a
            href="https://digitalheroesco.com"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:underline"
          >
            Digital Heroes Training Task
          </a>

        </div>
      </div>
    </footer>
  );
}