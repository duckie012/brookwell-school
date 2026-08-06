import { Link } from "react-router-dom";

function Button({
  children,
  to,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-purple-700 text-white hover:bg-purple-800 focus:ring-purple-500",

    secondary:
      "bg-white text-purple-700 border border-purple-700 hover:bg-purple-700 hover:text-white focus:ring-purple-500",

    outline:
      "border border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white focus:ring-purple-500",

    ghost:
      "bg-transparent text-purple-700 hover:bg-purple-100 dark:hover:bg-gray-800",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseStyles} ${
    variants[variant] || variants.primary
  } ${sizes[size] || sizes.md} ${className}`;

  if (to) {
    return (
      <Link
        to={to}
        className={classes}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;