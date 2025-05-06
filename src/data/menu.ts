import { MenuItem } from "@/types/menu";

export const menuItems: MenuItem[] = [
  // Pizzas
  {
    id: "p1",
    name: "Margherita",
    description: "Molho de tomate clássico, mussarela e manjericão fresco.",
    price: 49.99,
    image: "/menu/pizzas/margherita.jpg",
    category: "pizza",
  },
  {
    id: "p2",
    name: "Pepperoni",
    description: "Molho de tomate, mussarela e fatias de pepperoni.",
    price: 54.99,
    image: "/menu/pizzas/pepperoni.png",
    category: "pizza",
  },
  {
    id: "p3",
    name: "Vegetariano",
    description:
      "Molho de tomate, mussarela, pimentões, cogumelos e azeitonas.",
    price: 39.99,
    image: "/menu/pizzas/vegetarian.jpeg",
    category: "pizza",
  },
  {
    id: "p4",
    name: "Quatro queijos",
    description: "Molho de tomate, mussarela, gorgonzola, parmesão e ricota.",
    price: 54.99,
    image: "/menu/pizzas/four-cheese.jpeg",
    category: "pizza",
  },
  {
    id: "p5",
    name: "Frango e Catupiry",
    description:
      "Franco coberto por catupiry, mussarela, molho de tomate e mais.",
    price: 45.99,
    image: "/menu/pizzas/frango-catupiry.jpg",
    category: "pizza",
  },

  // Drinks
  {
    id: "d1",
    name: "Coca-Cola",
    description: "Coca-Cola Lata (350ml)",
    price: 9.99,
    image: "/menu/drinks/drink1.jpeg",
    category: "drink",
  },
  {
    id: "d2",
    name: "Pepsi",
    description: "Pepsi Lata (350ml)",
    price: 9.99,
    image: "/menu/drinks/drink2.png",
    category: "drink",
  },
  {
    id: "d3",
    name: "Heineken",
    description: "Heineken long Neck (330ml)",
    price: 19.99,
    image: "/menu/drinks/drink3.png",
    category: "drink",
  },
  {
    id: "d4",
    name: "Água",
    description: "Garrafa d'água (500ml)",
    price: 5.99,
    image: "/menu/drinks/drink4.jpeg",
    category: "drink",
  },

  // Desserts
  {
    id: "de1",
    name: "Brownie de Chocolate",
    description: "Delicioso brownie de chocolate",
    price: 15.99,
    image: "/menu/desserts/dessert1.jpg",
    category: "dessert",
  },
  {
    id: "de2",
    name: "Petit Gâteau",
    description: "Petit gâteau de chocolate com sorvete de baunilha",
    price: 21.99,
    image: "/menu/desserts/dessert2.jpeg",
    category: "dessert",
  },
  {
    id: "de3",
    name: "Torta de Limão",
    description: "Torta de limão com massa de biscoito e Rum",
    price: 12.99,
    image: "/menu/desserts/dessert3.jpg",
    category: "dessert",
  },

  // Portions
  {
    id: "po1",
    name: "Porção de Frango",
    description: "Frango à passarinha, acompanhado de molho da casa (600g)",
    price: 39.99,
    image: "/menu/portions/portion1.jpg",
    category: "portion",
  },
  {
    id: "po2",
    name: "Porção de Fritas",
    description:
      "Batata frita com cheedar e bacon, acompanhado de molho da casa (500g)",
    price: 34.99,
    image: "/menu/portions/portion2.jpg",
    category: "portion",
  },
  {
    id: "po3",
    name: "Bolinho de Bacalhau",
    description:
      "Porção com 20 deliciosos bolinhos de bacalhay, acompanhado de molho da casa",
    price: 47.99,
    image: "/menu/portions/portion3.jpeg",
    category: "portion",
  },
  {
    id: "po4",
    name: "Filé com Onion Rings",
    description:
      "Porção de picanha fatiada, 200g de Onion Rings e acompanhado de molho da casa (750g)",
    price: 54.99,
    image: "/menu/portions/portion4.jpg",
    category: "portion",
  },
];
