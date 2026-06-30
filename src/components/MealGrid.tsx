export function MealGrid({ meals, selected, onSelect }) {
  return (
    <div className="w-full p-4 grid gap-3">
      {meals.map((meal) => (
        <div
          key={meal.idMeal}
          onClick={() => onSelect(meal.idMeal)}
          className={`bg-white border rounded-xl overflow-hidden cursor-pointer transition-colors ${
            selected?.idMeal === meal.idMeal
              ? "border-green-400 border-[1.5px]"
              : "border-gray-200 hover:border-gray-400"
          }`}
        >
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="w-full h-20 object-cover"
          />
          <p className="text-xs font-medium p-2 leading-snug">{meal.strMeal}</p>
        </div>
      ))}
    </div>
  );
}
