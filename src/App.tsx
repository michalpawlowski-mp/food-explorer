import { useState } from "react";

const categories = [
  "Wszystkie",
  "Beef",
  "Chicken",
  "Seafood",
  "Pasta",
  "Dessert",
  "Vegetarian",
];

const meals = [
  {
    id: "1",
    name: "Spaghetti Bolognese",
    category: "Pasta",
  },
  {
    id: "2",
    name: "Chicken Tikka",
    category: "Chicken",
  },
  {
    id: "3",
    name: "Beef Stew",
    category: "Beef",
  },
  {
    id: "4",
    name: "Salmon Teriyaki",
    category: "Seafood",
  },
  {
    id: "5",
    name: "Tiramisu",
    category: "Dessert",
  },
  {
    id: "6",
    name: "Pad Thai",
    category: "Pasta",
  },
  {
    id: "7",
    name: "Beef Rendang",
    category: "Beef",
  },
  {
    id: "8",
    name: "Fish Pie",
    category: "Seafood",
  },
];

export function App() {
  const [active, setActive] = useState("Wszystkie");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = meals.filter((m) => {
    const matchCat = active === "Wszystkie" || m.category === active;
    const matchSearch = m.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <div className="flex items-center gap-3 px-6 py-3 bg-white border-b border-gray-200">
        <span className="text-base font-medium">🍴 FoodExplorer</span>
        <input
          type="text"
          placeholder="Szukaj przepisu..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-4 py-1.5 text-sm border border-gray-200 rounded-lg bg-gray-50 outline-none focus:border-gray-400"
        />
      </div>

      <div className="flex gap-2 px-6 py-3 overflow-x-auto bg-white border-b border-gray-200">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap border transition-colors ${
              active === cat
                ? "bg-blue-50 text-blue-600 border-blue-200"
                : "bg-gray-50 text-gray-500 border-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div
          className={`${selected ? "w-[45%]" : "w-full"} transition-all duration-300 overflow-y-auto p-4 grid gap-3`}
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))",
            alignContent: "start",
          }}
        >
          {filtered.map((meal) => (
            <div
              key={meal.id}
              onClick={() => setSelected(meal)}
              className={`bg-white border rounded-xl overflow-hidden cursor-pointer transition-colors ${
                selected?.id === meal.id
                  ? "border-blue-400 border-[1.5px]"
                  : "border-gray-200 hover:border-gray-400"
              }`}
            >
              <p className="text-xs font-medium p-2 leading-snug">{meal.name}</p>
            </div>
          ))}
        </div>

        {selected && (
          <div className="w-[55%] border-l border-gray-200 bg-white p-4 overflow-y-auto transition-all duration-300">
            <button
              onClick={() => setSelected(null)}
              className="float-right text-gray-400 hover:text-gray-600 text-lg"
            >
              ✕
            </button>
            <img
              src={selected.thumb}
              alt={selected.name}
              className="w-full h-36 object-cover rounded-xl mb-3"
            />
            <p className="text-base font-medium mb-1">{selected.name}</p>
            <p className="text-xs text-gray-400 mb-4">{selected.category}</p>
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-2">
              Składniki
            </p>
            {[
              "Lorem ipsum 200g",
              "Dolor sit 3 szt.",
              "Amet consectetur 1 łyżka",
              "Adipiscing elit 100ml",
              "Sed do eiusmod 2 ząbki",
            ].map((ing) => (
              <div
                key={ing}
                className="text-xs text-gray-700 px-3 py-2 bg-gray-50 rounded-lg mb-1"
              >
                {ing}
              </div>
            ))}
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mt-4 mb-2">
              Instrukcje
            </p>
            <p className="text-xs text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        )}
      </div>

      <div className="text-center text-xs text-gray-400 py-3 border-t border-gray-200 bg-white">
        Dane z{" "}
        <a
          href="https://www.themealdb.com"
          className="text-blue-400 hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          TheMealDB
        </a>{" "}
        · Michał Pawłowski · {new Date().getFullYear()}
      </div>
    </div>
  );
}

export default App;
