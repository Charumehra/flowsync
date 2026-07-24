import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Product", path: "/product" },
  { name: "Pricing", path: "/pricing" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6"
        aria-label="Main Navigation"
      >
        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold text-blue-600"
        >
          FlowSync
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `transition ${
                    isActive
                      ? "font-semibold text-blue-600"
                      : "text-slate-600 hover:text-blue-600"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#"
          className="hidden rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700 md:block"
        >
          Book Demo
        </a>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t bg-white md:hidden">
          <ul className="flex flex-col p-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-md px-2 py-3 ${
                      isActive
                        ? "bg-blue-50 font-semibold text-blue-600"
                        : "text-slate-700 hover:bg-slate-100"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}

            <button className="mt-4 rounded-lg bg-blue-600 py-3 text-white hover:bg-blue-700">
              Book Demo
            </button>
          </ul>
        </div>
      )}
    </header>
  );
}