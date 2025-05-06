import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useStore } from "@/context/StoreContext";
import { useToast } from "@/components/ui/use-toast";

const CartButton = () => {
  const { setIsOpen, totalItems } = useCart();
  const { isOpen: storeIsOpen } = useStore();
  const { toast } = useToast();

  const handleOpenCart = () => {
    if (!storeIsOpen) {
      toast({
        title: "A loja está fechada no momento",
        description:
          "Você só pode fazer pedidos durante o horário de funcionamento (das 10h às 23h)",
        variant: "destructive",
      });
      return;
    }

    setIsOpen(true);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleOpenCart}
        size="lg"
        className="h-14 w-14 rounded-full bg-pizza-red hover:bg-red-700/90 shadow-lg"
      >
        <ShoppingCart className="h-6 w-6" />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-slate-300/90 text-pizza-red h-6 w-6 rounded-full flex items-center justify-center text-sm font-bold">
            {totalItems}
          </span>
        )}
      </Button>
    </div>
  );
};

export default CartButton;
