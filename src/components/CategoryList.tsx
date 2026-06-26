import type { Category } from "../types/meal";

interface CategoryListProps {
  categories: Category[];
  active: string;
  onSelect: (category: string) => void;
}

export function CategoryList({ categories, active, onSelect }: CategoryListProps) {
  return (
    <div className="flex gap-2 px-6 py-3 overflow-x-auto border-b border-gray-200">
      <button
        onClick={() => onSelect("All")}
        className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap border transition-colors ${
          active === "All"
            ? "bg-blue-50 text-blue-600 border-blue-200"
            : "bg-gray-50 text-gray-500 border-gray-200"
        }`}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat.idCategory}
          onClick={() => onSelect(cat.strCategory)}
          className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap border transition-colors ${
            active === cat.strCategory
              ? "bg-blue-50 text-blue-600 border-blue-200"
              : "bg-gray-50 text-gray-500 border-gray-200"
          }`}
        >
          {cat.strCategory}
        </button>
      ))}
    </div>
  );
}
