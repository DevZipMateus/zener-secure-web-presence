import { Shield, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-zener-blue-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="w-8 h-8 text-white" />
                <span className="text-2xl font-bold">ZENER</span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Mais de 20 anos protegendo residências e empresas em São Paulo com 
                soluções completas em segurança eletrônica. Tecnologia de ponta, 
                atendimento personalizado e suporte 24 horas.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Links Rápidos</h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => document.getElementById("inicio")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Início
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Sobre
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Serviços
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Contato
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Contato</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-gray-300" />
                  <span className="text-gray-300">(11) 99999-9999</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-gray-300" />
                  <span className="text-gray-300">contato@zenerseguranca.com.br</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-gray-300 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">
                    Rua Exemplo, 123<br />
                    São Paulo - SP
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              © 2024 ZENER Segurança Eletrônica. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;