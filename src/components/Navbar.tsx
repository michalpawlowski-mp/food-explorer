interface NavbarProps {
  onSearch: (query: string) => void;
}

export function Navbar({ onSearch }: NavbarProps) {
  return (
    <nav className="flex items-center gap-3 px-6 py-3 border-b border-gray-200 bg-white">
      <span className="text-lg font-medium">🍴 FoodExplorer</span>
      <input
        type="text"
        placeholder="Wyszukaj..."
        onChange={(e) => onSearch(e.target.value)}
        className="flex-1 px-4 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 outline-none focus:border-gray-400"
      />
    </nav>
  );
}
