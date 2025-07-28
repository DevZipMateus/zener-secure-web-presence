
import { Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import NoTranslate from "@/components/ui/no-translate";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: "url('/lovable-uploads/5547635b-8eea-4387-8a51-d9b7c86eff71.png')"
      }} />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Background Pattern - keeping the original pattern as additional overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <Shield className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 text-white" />
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
            <NoTranslate as="span">ZENER</NoTranslate><br />
            <span className="text-zener-primary-light">Fortalecendo a Sua Segurança</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-white/90 leading-relaxed px-4">
            Empresa sólida especializada em controle de segurança eletrônica e elétrica<br className="hidden sm:block" />
            para indústrias, comércios, residências e condomínios em Bauru e região
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Button onClick={scrollToContact} size="lg" className="bg-zener-primary text-white hover:bg-zener-primary-dark font-semibold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg">
              Solicitar Orçamento
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            
            <Button variant="outline" size="lg" onClick={() => document.getElementById("servicos")?.scrollIntoView({
              behavior: "smooth"
            })} className="border-white text-white hover:text-zener-primary-dark font-semibold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg bg-green-600 hover:bg-green-500">
              Nossos Serviços
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
