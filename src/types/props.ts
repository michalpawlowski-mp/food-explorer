import type { Category, MealPreview, MealDetail } from "./meal";

export interface CategoryProps {
  categories: Category[];
  active: string;
  onSelect: (category: string) => void;
}

export interface MealGridProps {
  meals: MealPreview[];
  selected: MealDetail | null;
  onSelect: (id: string) => void;
}

export interface MealDetailProps {
  meal: MealDetail;
  onClose: () => void;
}

export interface SearchProps {
  onSearch: (query: string) => void;
}
