export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "pizza" | "drink" | "dessert" | "portion";
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface CustomerInfo {
  name: string;
  address: string;
  phone: string;
  notes?: string;
}
