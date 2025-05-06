import { cn } from "@/lib/utils";

type Category = "all" | "pizza" | "drink" | "dessert" | "portion";

interface MenuFilterProps {
  activeCategory: Category;
  setActiveCategory: (category: Category) => void;
}

const categories: { value: Category; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "pizza", label: "Pizzas" },
  { value: "drink", label: "Bebidas" },
  { value: "portion", label: "Porções" },
  { value: "dessert", label: "Sobremesas" },
];

const MenuFilter = ({ activeCategory, setActiveCategory }: MenuFilterProps) => {
  return (
    <div className="flex overflow-x-auto scrollbar-none pb-2 mb-6">
      <div className="flex gap-2 mx-auto">
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => setActiveCategory(category.value)}
            className={cn(
              "px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors",
              activeCategory === category.value
                ? "bg-pizza-red hover:bg-red-600 text-white transition duration-150"
                : "bg-gray-200 hover:bg-gray-300 text-gray-700 transition duration-150"
            )}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MenuFilter;
