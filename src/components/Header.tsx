import { useDarkMode } from "../hooks/useDarkMode";

export function Header() {
  const { dark, toggle } = useDarkMode();

  return (
    <header className="px-6 py-3 border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 text-center shadow-sm flex items-center justify-between">
      <div className="w-8" />
      <h1 className="text-2xl font-medium">
        🍴 <span className="text-green-800 dark:text-green-400">Food</span>
        <span className="text-yellow-500">Explorer</span>
      </h1>
      <button
        type="button"
        onClick={toggle}
        className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-sm transition-colors"
      >
        {dark ? "☀️" : "🌙"}
      </button>
    </header>
  );
}
