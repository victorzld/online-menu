import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { CustomerInfo } from "@/types/menu";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const CheckoutForm = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    name: "",
    address: "",
    phone: "",
    notes: "",
    paymentMethod: "credito", // Default payment method
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

  const handlePaymentMethodChange = (
    value: "credito" | "debito" | "pix" | "dinheiro"
  ) => {
    setCustomerInfo((prev) => ({
      ...prev,
      paymentMethod: value,
    }));
  };

  const formatOrderForWhatsApp = () => {
    const whatsappNumber = "";
    let message = `*Novo Pedido*\n\n`;
    message += `*Informações sobre o pedido:*\n`;
    message += `Nome: ${customerInfo.name}\n`;
    message += `Endereço: ${customerInfo.address}\n`;
    message += `Celular: ${customerInfo.phone}\n`;
    message += `Método de Pagamento: ${customerInfo.paymentMethod}\n`;

    if (customerInfo.notes) {
      message += `Informações adicionais : ${customerInfo.notes}\n`;
    }

    message += `\n*Pedido:*\n\n`;

    items.forEach((item) => {
      message += `${item.quantity}x ${item.name} - R$${(
        item.price * item.quantity
      ).toFixed(2)}\n`;
    });

    message += `\n*Total: R$${totalPrice.toFixed(2)}*`;

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
      title: "Pedido Enviado!",
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

      <div className="space-y-3">
        <Label className="font-semibold">Método de Pagamento:</Label>
        <RadioGroup
          defaultValue="credito"
          value={customerInfo.paymentMethod}
          onValueChange={handlePaymentMethodChange}
          className="flex flex-col space-y-2"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="credito" id="credito" />
            <Label htmlFor="credito">Cartão de Crédito</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="debito" id="debito" />
            <Label htmlFor="debito">Cartão de Débito</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="pix" id="pix" />
            <Label htmlFor="pix">PIX</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="dinheiro" id="dinheiro" />
            <Label htmlFor="dinheiro">Dinheiro</Label>
          </div>
        </RadioGroup>
        <p className="text-sm font-light text-zinc-800">
          · O pagamento é feito na entrega ·
        </p>
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
