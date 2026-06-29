import { useState, useEffect } from "react";
import { getCategories } from "./api/mealdb";
import { Category } from "./components/Category";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Search } from "./components/Search";

export default function App() {
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState("Wszystkie");

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  function handleCategory(cat: string) {
    setActive(cat);
  }

  function handleSearch(query: string) {
    console.log(query);
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <Search onSearch={handleSearch} />
      <Category categories={categories} active={active} onSelect={handleCategory} />
      <Footer />
    </div>
  );
}
