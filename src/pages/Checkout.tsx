import CheckoutForm from "@/components/CheckoutForm";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

const Checkout = () => {
  const { items, totalPrice } = useCart();

  // Add effect to scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b border-gray-200 py-4 px-4 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-xl font-bold">
            Pizzaria & Cia.
          </Link>
          <Button variant="ghost" asChild>
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar ao menu
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-grow py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-10">
            Finalizar pedido
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="order-2 md:order-1">
              <h2 className="text-xl font-semibold mb-6">
                Informações de entrega
              </h2>
              <CheckoutForm />
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 order-1 md:order-2">
              <h2 className="text-xl font-semibold mb-6">Resumo do pedido</h2>

              {items.length === 0 ? (
                <div className="text-center py-6 text-gray-500">
                  Seu carrinho está vazio
                </div>
              ) : (
                <>
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div key={item.id} className="flex justify-between">
                        <span>
                          {item.quantity} × {item.name}
                        </span>
                        <span className="font-medium">
                          R${" "}
                          {(item.price * item.quantity)
                            .toFixed(2)
                            ?.replace(/[.]/, ",")}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Separator className="my-6" />

                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>R$ {totalPrice.toFixed(2)?.replace(/[.]/, ",")}</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
