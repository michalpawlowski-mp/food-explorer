import type { MealGridProps } from "../types/props";

export function MealGrid({ meals, selected, onSelect }: MealGridProps) {
  return (
    <div className="flex-1 p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-y-auto content-start">
      {meals.map((meal) => (
        <div
          key={meal.idMeal}
          onClick={() => onSelect(meal.idMeal)}
          className={`bg-white border rounded-2xl overflow-hidden cursor-pointer transition-all hover:shadow-md ${
            selected?.idMeal === meal.idMeal
              ? "border-green-400 border-2 shadow-md"
              : "border-gray-100 hover:border-gray-300"
          }`}
        >
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="w-full h-28 object-cover"
          />
          <p className="text-sm font-medium p-3 leading-snug text-gray-700">
            {meal.strMeal}
          </p>
        </div>
      ))}
    </div>
  );
}
