export function MealDetail({ meal, onClose }) {
  const ingredients = Array.from({ length: 20 }, (_, i) => ({
    name: meal[`strIngredient${i + 1}`],
    measure: meal[`strMeasure${i + 1}`],
  })).filter((ing) => ing.name);

  return (
    <div className="w-[55%] border-l border-gray-200 bg-white p-4 overflow-y-auto">
      <button
        onClick={onClose}
        className="float-right text-gray-400 hover:text-gray-600 text-lg"
      >
        ✕
      </button>
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-36 object-cover rounded-xl mb-3"
      />
      <p className="text-base font-medium mb-1">{meal.strMeal}</p>
      <p className="text-xs text-gray-400 mb-4">
        {meal.strCategory} · {meal.strArea}
      </p>
      <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-2">
        Składniki
      </p>
      {ingredients.map((ing) => (
        <div
          key={ing.name}
          className="text-xs text-gray-700 px-3 py-2 bg-gray-50 rounded-lg mb-1"
        >
          {ing.measure} {ing.name}
        </div>
      ))}
      <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mt-4 mb-2">
        Instrukcje
      </p>
      <p className="text-xs text-gray-600 leading-relaxed">{meal.strInstructions}</p>
    </div>
  );
}
