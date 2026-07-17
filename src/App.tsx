import { useApp } from "./hooks/useApp";
import { Category } from "./components/Category";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { MealGrid } from "./components/MealGrid";
import { MealDetail } from "./components/MealDetail";
import { EmptyState } from "./components/EmptyState";

export default function App() {
  const {
    categories,
    meals,
    selected,
    active,
    loading,
    setSelected,
    handleCategory,
    handleSearch,
    handleSelect,
  } = useApp();

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
