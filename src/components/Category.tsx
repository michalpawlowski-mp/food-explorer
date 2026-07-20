import type { CategoryProps } from "../types/props";

export function Category({ categories, active, onSelect }: CategoryProps) {
  return (
    <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 bg-white">
      <span className="text-sm font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wide">
        Categories
      </span>
      <div className="flex gap-3 mt-3 overflow-x-auto pb-1">
        <button
          type="button"
          onClick={() => onSelect("All")}
          className={`flex flex-col items-center gap-1 shrink-0 ${active === "All" ? "opacity-100" : "opacity-60 hover:opacity-100"} transition-opacity`}
        >
          <div className="w-14 h-14 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-xl">
            🍽️
          </div>
          <span
            className={`text-xs whitespace-nowrap ${active === "All" ? "text-green-600 font-medium" : "text-gray-600 dark:text-gray-400"}`}
          >
            All
          </span>
        </button>
        {categories.map((cat) => (
          <button
            type="button"
            key={cat.idCategory}
            onClick={() => onSelect(cat.strCategory)}
            className={`flex flex-col items-center gap-1 shrink-0 ${active === cat.strCategory ? "opacity-100" : "opacity-60 hover:opacity-100"} transition-opacity`}
          >
            <img
              src={cat.strCategoryThumb}
              alt={cat.strCategory}
              className={`w-14 h-14 rounded-full object-cover border-2 ${active === cat.strCategory ? "border-green-500" : "border-transparent"}`}
            />
            <span
              className={`text-xs whitespace-nowrap ${active === cat.strCategory ? "text-green-600 font-medium" : "text-gray-600 dark:text-gray-400"}`}
            >
              {cat.strCategory}
            </span>
          </button>
        ))}
        <button
          type="button"
          onClick={() => onSelect("Favorites")}
          className={`flex flex-col items-center gap-1 shrink-0 ${active === "Favorites" ? "opacity-100" : "opacity-60 hover:opacity-100"} transition-opacity`}
        >
          <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center text-xl">
            ❤️
          </div>
          <span
            className={`text-xs whitespace-nowrap ${active === "Favorites" ? "text-red-500 font-medium" : "text-gray-600 dark:text-gray-400"}`}
          >
            Favorites
          </span>
        </button>
      </div>
    </div>
  );
}
