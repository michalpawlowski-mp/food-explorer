interface SearchProps {
  onSearch: (query: string) => void;
}

export function Search({ onSearch }: SearchProps) {
  return (
    <div className="flex items-center justify-center bg-cover bg-center bg-[url(/bg-search.png)] h-[450px]">
      <div className="flex bg-white rounded-xl shadow-lg overflow-hidden">
        <input
          type="text"
          placeholder="Wyszukaj przepis (np. kurczak, pasta, burger)..."
          onChange={(e) => onSearch(e.target.value)}
          className="w-[380px] px-5 py-3 text-sm outline-none"
        />
        <button
          type="button"
          className="px-6 py-3 bg-green-500 hover:bg-green-400 text-white text-sm font-medium transition-colors"
        >
          Szukaj
        </button>
      </div>
    </div>
  );
}
