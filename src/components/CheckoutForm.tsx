import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { CustomerInfo } from "@/types/menu";

const CheckoutForm = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    name: "",
    address: "",
    phone: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCustomerInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formatOrderForWhatsApp = () => {
    const whatsappNumber = "";
    let message = `*New Order*\n\n`;
    message += `*Customer Information:*\n`;
    message += `Name: ${customerInfo.name}\n`;
    message += `Address: ${customerInfo.address}\n`;
    message += `Phone: ${customerInfo.phone}\n`;

    if (customerInfo.notes) {
      message += `Notes: ${customerInfo.notes}\n`;
    }

    message += `\n*Order Details:*\n\n`;

    items.forEach((item) => {
      message += `${item.quantity}x ${item.name} - $${(
        item.price * item.quantity
      ).toFixed(2)}\n`;
    });

    message += `\n*Total: $${totalPrice.toFixed(2)}*`;

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!customerInfo.name || !customerInfo.address || !customerInfo.phone) {
      toast({
        title: "Está faltando informações",
        description: "Preencha todos os campos obrigatórios",
        variant: "destructive",
      });
      return;
    }
    window.open(formatOrderForWhatsApp(), "_blank");

    clearCart();
    toast({
      title: "Order sent!",
      description: "Seu pedido foi enviado via WhatsApp para nosso número!",
    });

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
      <div className="space-y-2">
        <Label htmlFor="name">Nome</Label>
        <Input
          id="name"
          name="name"
          placeholder="Seu nome completo"
          value={customerInfo.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="address">Endereço de entrega</Label>
        <Input
          id="address"
          name="address"
          placeholder="Endereço, apt/suite, cidade"
          value={customerInfo.address}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Número de telefone</Label>
        <Input
          id="phone"
          name="phone"
          placeholder="Seu número de telefone"
          value={customerInfo.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes">Informações adicionais (opcional)</Label>
        <Textarea
          id="notes"
          name="notes"
          placeholder="Instruções especiais para seu pedido ou entrega"
          value={customerInfo.notes}
          onChange={handleChange}
          rows={3}
        />
      </div>

      <div className="pt-4">
        <Button
          type="submit"
          className="w-full bg-pizza-red hover:bg-red-700/90"
        >
          Finalize o seu pedido
        </Button>
      </div>
    </form>
  );
};

export default CheckoutForm;
