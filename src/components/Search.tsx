interface SearchProps {
  onSearch: (query: string) => void;
}

export function Search({ onSearch }: SearchProps) {
  return (
    <div className="px-50">
      <div className="flex gap-2 p-15 bg-[url(/bg-search.png)] h-[550px]">
        <div className="h-[50px] flex bg-white rounded-xl shadow mx-auto">
          <input
            type="text"
            placeholder="Wyszukaj przepis"
            onChange={(e) => onSearch(e.target.value)}
            className=" px-5 py-3 text-sm outline-none  "
          />
          <button
            type="button"
            className="px-5 py-3 bg-green-500 hover:bg-green-400 text-white text-sm rounded-xl transition-colors"
          >
            Szukaj
          </button>
        </div>
      </div>
    </div>
  );
}
