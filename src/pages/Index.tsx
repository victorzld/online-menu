import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import CartButton from "@/components/CartButton";
import CartModal from "@/components/CartModal";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-300/80">
      <Hero />
      <Menu />
      <CartButton />
      <CartModal />
      <Footer />
    </div>
  );
};

export default Index;
