import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Pizzaria & Cia.</h3>
            <p className="text-gray-600">
              Servindo as melhores pizzas italianas da cidade desde 2020.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Entre em contato:</h3>
            <address className="text-gray-600 not-italic">
              <p>Vitoria ─ ES</p>
              <p>Rua David Teixeira,</p>
              <p className="mt-2">(27) 123-4567</p>
              <p>info@contato.com</p>
            </address>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Horário de funcionamento</h3>
            <p className="text-gray-600">
              Segunda - Sábado: 10:00 AM - 11:00 PM
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Pizzaria & Cia. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
