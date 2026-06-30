export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 gap-3 text-gray-400">
      <span className="text-5xl">🍽️</span>
      <p className="text-base font-medium">Brak wyników</p>
      <p className="text-sm">Spróbuj wyszukać coś innego</p>
    </div>
  );
}
