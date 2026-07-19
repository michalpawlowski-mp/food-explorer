export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 gap-3 text-gray-400 dark:bg-gray-900 p-5">
      <span className="text-5xl">🍽️</span>
      <p className="text-base font-medium">No results found</p>
      <p className="text-sm">Try searching for something else.</p>
    </div>
  );
}
