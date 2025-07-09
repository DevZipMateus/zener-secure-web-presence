import { Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="inicio" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zener-primary-light to-zener-primary-dark text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <Shield className="w-20 h-20 mx-auto mb-6 text-white/90" />
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Proteção Total para<br />
            <span className="text-zener-primary-light">Seu Patrimônio</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            Mais de 20 anos oferecendo soluções completas em segurança eletrônica
            para residências e empresas em São Paulo
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-white text-zener-primary-dark hover:bg-white/90 font-semibold px-8 py-6 text-lg"
            >
              Solicitar Orçamento
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-zener-primary-dark font-semibold px-8 py-6 text-lg"
              onClick={() => document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })}
            >
              Nossos Serviços
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;