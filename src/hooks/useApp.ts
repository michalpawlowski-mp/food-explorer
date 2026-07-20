import { useState, useEffect } from "react";
import {
  getCategories,
  getMealsByCategory,
  getMealById,
  searchMeals,
} from "../api/mealdb";
import type { Category, MealPreview, MealDetail } from "../types/meal";

export function useApp(favorites: string[]) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [meals, setMeals] = useState<MealPreview[]>([]);
  const [selected, setSelected] = useState<MealDetail | null>(null);
  const [active, setActive] = useState("All");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCategories().then(setCategories);
    getMealsByCategory("Beef").then(setMeals);
  }, []);

  async function handleCategory(cat: string) {
    setSelected(null);
    setActive(cat);
    if (cat === "Favorites") {
      const data = await Promise.all(favorites.map((id) => getMealById(id)));
      setMeals(
        data.map((m) => ({
          idMeal: m.idMeal,
          strMeal: m.strMeal,
          strMealThumb: m.strMealThumb,
        })),
      );
      setLoading(false);
      return;
    }
    setLoading(true);
    const data = await getMealsByCategory(cat === "All" ? "Beef" : cat);
    setMeals(data ?? []);
    setLoading(false);
  }

  async function handleSearch(query: string) {
    if (!query) {
      const data = await getMealsByCategory("Chicken");
      setMeals(data ?? []);
      setActive("All");
      return;
    }
    setSelected(null);
    setActive("All");
    const data = await searchMeals(query);
    setMeals(data ?? []);
  }

  async function handleSelect(id: string) {
    const meal = await getMealById(id);
    setSelected(meal);
  }

  return {
    categories,
    meals,
    selected,
    active,
    loading,
    setSelected,
    handleCategory,
    handleSearch,
    handleSelect,
  };
}
