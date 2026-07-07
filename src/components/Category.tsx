import type { Category } from "../types/meal";

interface CategoryProps {
  categories: Category[];
  active: string;
  onSelect: (category: string) => void;
}

export function Category({ categories, active, onSelect }: CategoryProps) {
  return (
    <div className="px-6 py-4 border-b border-gray-200 bg-white">
      <span className="text-sm font-medium text-gray-400 uppercase tracking-wide">
        Lista kategorii
      </span>
      <div className="flex gap-3 mt-3 overflow-x-auto pb-1">
        <button
          type="button"
          onClick={() => onSelect("All")}
          className={`flex flex-col items-center gap-1 shrink-0 ${active === "All" ? "opacity-100" : "opacity-60 hover:opacity-100"} transition-opacity`}
        >
          <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-xl">
            🍽️
          </div>
          <span className="text-xs text-gray-600 whitespace-nowrap">All</span>
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
            <span className="text-xs text-gray-600 whitespace-nowrap">
              {cat.strCategory}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
