import type { MealDetailProps } from "../types/props";

export function MealDetail({ meal, onClose }: MealDetailProps) {
  const meal2 = meal as unknown as Record<string, string>;

  const ingredients = Array.from({ length: 20 }, (_, i) => ({
    name: meal2[`strIngredient${i + 1}`],
    measure: meal2[`strMeasure${i + 1}`],
  })).filter((ing) => ing.name);

  return (
    <div className="w-[380px] shrink-0 border-l border-gray-100 bg-white overflow-y-auto">
      <div className="relative">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full h-52 object-cover"
        />
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-500 hover:text-gray-800 shadow transition-colors"
        >
          ✕
        </button>
      </div>
      <div className="p-5">
        <p className="text-base font-semibold text-gray-800 mb-1">
          {meal.strMeal}
        </p>
        <p className="text-xs text-gray-400 mb-5">
          {meal.strCategory} · {meal.strArea}
        </p>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
          Ingredients
        </p>
        <div className="flex flex-col gap-1 mb-5">
          {ingredients.map((ing) => (
            <div
              key={ing.name}
              className="flex justify-between text-xs px-3 py-2 bg-gray-50 rounded-lg"
            >
              <span className="text-gray-700 font-medium">{ing.name}</span>
              <span className="text-gray-400">{ing.measure}</span>
            </div>
          ))}
        </div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
          Instructions
        </p>
        <p className="text-xs text-gray-500 leading-relaxed">
          {meal.strInstructions}
        </p>
      </div>
    </div>
  );
}
