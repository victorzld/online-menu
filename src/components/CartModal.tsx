import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CartModal = () => {
  const {
    items,
    isOpen,
    setIsOpen,
    removeFromCart,
    updateQuantity,
    totalPrice,
  } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsOpen(false);
    // Scroll to top before navigation
    window.scrollTo(0, 0);
    navigate("/checkout");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Seu pedido:</DialogTitle>
        </DialogHeader>

        {items.length === 0 ? (
          <div className="py-6 text-center text-gray-500">
            Seu carrinho está vazio
          </div>
        ) : (
          <div className="max-h-[60vh] overflow-y-auto pr-1">
            {items.map((item) => (
              <div key={item.id} className="py-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500">
                      R$ {item.price.toFixed(2)?.replace(/[.]/, ",")}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <Separator />
              </div>
            ))}

            <div className="py-4">
              <div className="flex justify-between font-semibold text-lg">
                <span>Total:</span>
                <span>R$ {totalPrice.toFixed(2)?.replace(/[.]/, ",")}</span>
              </div>
            </div>
          </div>
        )}

        <DialogFooter>
          <Button
            onClick={() => setIsOpen(false)}
            variant="outline"
            className="w-full sm:w-auto"
          >
            Continuar pedido
          </Button>
          <Button
            onClick={handleCheckout}
            disabled={items.length === 0}
            className="w-full sm:w-auto bg-pizza-red hover:bg-pizza-red/90"
          >
            Finalizar pedido
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CartModal;
