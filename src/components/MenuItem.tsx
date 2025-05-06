import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MenuItem as MenuItemType } from "@/types/menu";
import { useCart } from "@/context/CartContext";
import { useStore } from "@/context/StoreContext";
import { ShoppingCart } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface MenuItemProps {
  item: MenuItemType;
}

const MenuItem = ({ item }: MenuItemProps) => {
  const { addToCart } = useCart();
  const { isOpen } = useStore();
  const { toast } = useToast();

  const handleAddToCart = () => {
    if (!isOpen) {
      toast({
        title: "A loja está fechada!",
        description:
          "Você só pode fazer pedidos durante o horário de funcionamento (das 10h às 23h)",
        variant: "destructive",
      });
      return;
    }

    addToCart(item);
  };

  return (
    <Card className="group overflow-hidden border border-gray-200 h-full flex flex-col">
      <div className="h-48 overflow-hidden bg-gray-100">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
        />
      </div>
      <CardContent className="pt-6 pb-2 flex-grow">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-lg">{item.name}</h3>
          <span className="font-medium text-pizza-red">
            R$ {item.price.toFixed(2)?.replace(/[.]/, ",")}
          </span>
        </div>
        <p className="text-gray-600 text-sm mt-2">{item.description}</p>
      </CardContent>
      <CardFooter className="pt-2 pb-4">
        <Button
          onClick={handleAddToCart}
          className="w-full bg-green-700 hover:bg-green-800 transition duration-200"
        >
          <ShoppingCart className="h-4 w-4 mr-2 text-black" />
          Adicionar ao carrinho
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MenuItem;
