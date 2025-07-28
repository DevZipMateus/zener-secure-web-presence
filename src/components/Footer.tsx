
import { Shield, Phone, Mail } from "lucide-react";
import NoTranslate from "@/components/ui/no-translate";

const Footer = () => {
  return (
    <footer className="bg-zener-primary-dark text-white py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Company Info */}
            <div className="col-span-1 sm:col-span-2">
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                <span className="text-xl sm:text-2xl font-bold">
                  <NoTranslate as="span">ZENER</NoTranslate>
                </span>
              </div>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6">
                A <NoTranslate as="span">ZENER</NoTranslate> é uma empresa sólida que atua no controle de segurança eletrônica e elétrica 
                para indústrias, comércios, residências e condomínios em <NoTranslate as="span">Bauru</NoTranslate> e região. 
                Nosso objetivo é promover soluções integradas com produtos inovadores.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Links Rápidos</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <button
                    onClick={() => document.getElementById("inicio")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors"
                  >
                    Início
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors"
                  >
                    Sobre
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors"
                  >
                    Serviços
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors"
                  >
                    Contato
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Contato</h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-gray-300 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-300">
                    <NoTranslate as="span">(14) 99833-2104</NoTranslate>
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-4 h-4 text-gray-300 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-300 break-all">
                    <NoTranslate as="span">zener_segurancaeletronica@hotmail.com</NoTranslate>
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-4 h-4 mt-0.5 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-gray-300">
                    <NoTranslate as="span">Rua Antonio Hojas, 1-105</NoTranslate><br />
                    <NoTranslate as="span">Jardim Helena - Bauru/SP</NoTranslate>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
            <p className="text-sm sm:text-base text-gray-300">
              © 2024 <NoTranslate as="span">ZENER</NoTranslate> Segurança Eletrônica. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
