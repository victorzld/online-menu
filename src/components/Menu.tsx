import { useState } from "react";
import { menuItems } from "@/data/menu";
import MenuFilter from "./MenuFilter";
import MenuItem from "./MenuItem";

type Category = "all" | "pizza" | "drink" | "dessert" | "portion";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section className="py-12 px-4" id="menu">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Nosso menu !</h2>

        <MenuFilter
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
