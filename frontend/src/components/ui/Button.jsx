import { Link } from "react-router-dom";

function Button({
  to,
  children,
  variant = "primary",
}) {
  const styles = {
    primary:
      "bg-purple-700 hover:bg-purple-800 text-white",

    secondary:
      "border-2 border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white",
  };

  return (
    <Link
      to={to}
      className={`${styles[variant]} px-7 py-3 rounded-xl font-semibold transition duration-300`}
    >
      {children}
    </Link>
  );
}

export default Button;