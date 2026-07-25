import { Link } from "react-router-dom";

export default function Button({
  to,
  children,
  variant = "primary",
}) {
  const styles = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700",

    secondary:
      "border border-slate-300 hover:bg-slate-100",
  };

  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium transition ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}