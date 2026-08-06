import { useTheme } from "../../context/ThemeContext";

function ThemeToggle() {
  const themeContext = useTheme();

  if (!themeContext) return null;

  const { theme, toggleTheme } = themeContext;
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      aria-pressed={isDark}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:bg-purple-50 dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-gray-800"
    >
      {isDark ? (
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 3v2M12 19v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M3 12h2M19 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" strokeLinecap="round" />
          <circle cx="12" cy="12" r="3.5" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-purple-700" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M20 15.5A8.5 8.5 0 1 1 8.5 4a7 7 0 1 0 11.5 11.5Z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  );
}

export default ThemeToggle;