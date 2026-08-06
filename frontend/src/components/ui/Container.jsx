import clsx from "clsx";

const Container = ({
  children,
  className = "",
  size = "default",
}) => {
  const sizes = {
    sm: "max-w-5xl",
    default: "max-w-7xl",
    full: "max-w-full",
  };

  return (
    <div
      className={clsx(
        "w-full mx-auto px-4 sm:px-6 lg:px-8",
        sizes[size],
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;