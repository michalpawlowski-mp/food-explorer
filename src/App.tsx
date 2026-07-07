import { useState, useEffect } from "react";
import { getCategories, getMealsByCategory, getMealById } from "./api/mealdb";
import type {
  Category as CategoryType,
  MealPreview,
  MealDetail as MealDetailType,
} from "./types/meal";
import { Category } from "./components/Category";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { MealGrid } from "./components/MealGrid";
import { MealDetail } from "./components/MealDetail";
import { EmptyState } from "./components/EmptyState";

export default function App() {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [meals, setMeals] = useState<MealPreview[]>([]);
  const [selected, setSelected] = useState<MealDetailType | null>(null);
  const [active, setActive] = useState("All");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCategories().then(setCategories);
    getMealsByCategory("Beef").then(setMeals);
  }, []);

  async function handleCategory(cat: string) {
    setSelected(null);
    setActive(cat);
    setLoading(true);
    const data = await getMealsByCategory(cat === "All" ? "Beef" : cat);
    setMeals(data ?? []);
    setLoading(false);
  }

  async function handleSearch(query: string) {
    if (!query) return;
    setSelected(null);
    setActive("All");
    const { searchMeals } = await import("./api/mealdb");
    const data = await searchMeals(query);
    setMeals(data ?? []);
  }

  async function handleSelect(id: string) {
    const meal = await getMealById(id);
    setSelected(meal);
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <Search onSearch={handleSearch} />
      <Category categories={categories} active={active} onSelect={handleCategory} />
      <div className="flex flex-1 overflow-hidden">
        {loading ? (
          <p className="p-4 text-sm text-gray-400">Loading...</p>
        ) : meals.length === 0 ? (
          <EmptyState />
        ) : (
          <MealGrid meals={meals} selected={selected} onSelect={handleSelect} />
        )}
        {selected && <MealDetail meal={selected} onClose={() => setSelected(null)} />}
      </div>
      <Footer />
    </div>
  );
}
