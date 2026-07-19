export function Footer() {
  return (
    <footer className="text-center text-sm text-gray-400 py-4 border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      Data provided by
      <a
        href="https://www.themealdb.com"
        target="_blank"
        rel="noreferrer noopener"
        className="text-blue-400 hover:underline px-1"
      >
        TheMealDB.
      </a>
      Created by Michał Pawłowski · {new Date().getFullYear()}
    </footer>
  );
}
