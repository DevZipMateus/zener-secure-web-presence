
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3 sm:py-4">
          <div className="flex items-center space-x-2 min-w-0">
            <img 
              src="/lovable-uploads/81025338-ee79-42d7-b5ad-e298125ef00d.png" 
              alt="ZENER Segurança Eletrônica"
              className="h-6 sm:h-8 flex-shrink-0"
            />
            <span className="text-lg sm:text-xl font-bold text-primary truncate">ZENER</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-sm xl:text-base text-foreground hover:text-primary transition-colors whitespace-nowrap"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-sm xl:text-base text-foreground hover:text-primary transition-colors whitespace-nowrap"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-sm xl:text-base text-foreground hover:text-primary transition-colors whitespace-nowrap"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("produtos")}
              className="text-sm xl:text-base text-foreground hover:text-primary transition-colors whitespace-nowrap"
            >
              Produtos
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="text-sm xl:text-base text-foreground hover:text-primary transition-colors whitespace-nowrap"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection("localizacao")}
              className="text-sm xl:text-base text-foreground hover:text-primary transition-colors whitespace-nowrap"
            >
              Localização
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-sm xl:text-base text-foreground hover:text-primary transition-colors whitespace-nowrap"
            >
              Contato
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden h-8 w-8 sm:h-10 sm:w-10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t border-border mt-2">
            <div className="flex flex-col space-y-2 pt-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-left py-2 px-2 text-foreground hover:text-primary transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-left py-2 px-2 text-foreground hover:text-primary transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-left py-2 px-2 text-foreground hover:text-primary transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("produtos")}
                className="text-left py-2 px-2 text-foreground hover:text-primary transition-colors"
              >
                Produtos
              </button>
              <button
                onClick={() => scrollToSection("depoimentos")}
                className="text-left py-2 px-2 text-foreground hover:text-primary transition-colors"
              >
                Depoimentos
              </button>
              <button
                onClick={() => scrollToSection("localizacao")}
                className="text-left py-2 px-2 text-foreground hover:text-primary transition-colors"
              >
                Localização
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-left py-2 px-2 text-foreground hover:text-primary transition-colors"
              >
                Contato
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
