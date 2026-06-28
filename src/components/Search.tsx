export function Search() {
  return (
    <div className="flex w-full max-w-xl gap-2 p-15 bg-[url(/bg-search.png)]">
      <input
        type="text"
        placeholder="Wyszukaj przepis"
        // onChange={(e) => onSearch(e.target.value)}
        className="flex-1 px-5 py-3 rounded-xl text-sm bg-white outline-none shadow"
      />
      <button className="px-5 py-3 bg-green-500 hover:bg-green-400 text-white text-sm rounded-xl transition-colors">
        Szukaj
      </button>
    </div>
  );
}
