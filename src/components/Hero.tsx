import { useStore } from "@/context/StoreContext";

const Hero = () => {
  const { isOpen, openingTime, closingTime } = useStore();

  return (
    <section className="bg-bar bg-cover bg-center relative bg-pizza-dark text-white py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Pizzaria & Cia.</h1>
        <p className="text-lg md:text-xl mb-6">
          Pizzas italianas autênticas feitas com ingredientes frescos
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
          <p className="text-sm md:text-base">
            <span className="font-semibold">Endereço:</span> Rua David Teixeira,
            Vitoria ─ ES
          </p>
          <div className="hidden md:block h-4 w-0.5 bg-white/30 mx-2"></div>
          <p className="text-sm md:text-base">
            <span className="font-semibold">Contato:</span> (27) 123-4567
          </p>
        </div>

        <div className="inline-block rounded-full px-4 py-2 border border-white/20 bg-white/10 backdrop-blur">
          <span className="mr-2 text-sm md:text-base">
            Horário de funcionamento:
          </span>
          <span
            className={`font-medium py-1 px-3 rounded-full text-sm md:text-base ${
              isOpen
                ? "bg-green-500/20 text-green-400"
                : "bg-red-500/20 text-red-400"
            }`}
          >
            {isOpen ? "Estamos abertos" : "Loja fechada"} ({openingTime} -{" "}
            {closingTime})
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
