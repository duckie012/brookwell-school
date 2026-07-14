import { FaMoon, FaSun } from "react-icons/fa";
import useTheme from "../../hooks/useTheme";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full p-2 transition hover:bg-purple-100 dark:hover:bg-gray-700"
    >
      {theme === "light" ? <FaMoon size={18} /> : <FaSun size={18} />}
    </button>
  );
}

export default ThemeToggle;