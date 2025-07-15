import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProductsSection = () => {
  const products = [
    {
      image: "/lovable-uploads/ba92b21c-ddf9-46ce-b5e4-6f031862930b.png",
      title: "Interfone",
      description: "Interfone residencial com qualidade de áudio superior para comunicação segura."
    },
    {
      image: "/lovable-uploads/753db1ac-e8c3-4484-bb1e-9d3b09d8de0e.png",
      title: "Sistema de Alarme Inteligente",
      description: "Sistema de alarme com controle via aplicativo e tecnologia wireless."
    },
    {
      image: "/lovable-uploads/235d1914-fa82-473b-870b-749882e99ae4.png",
      title: "Cerca Elétrica",
      description: "Cerca elétrica para perímetro com sistema de proteção e desenergização."
    },
    {
      image: "/lovable-uploads/125dd831-0f64-4eff-811c-6b80bcf76729.png",
      title: "Fechadura Elétrica",
      description: "Fechadura eletrônica com múltiplas formas de acesso e alta segurança."
    },
    {
      image: "/lovable-uploads/5fade091-9bab-4f12-bda0-45f3f673e9aa.png",
      title: "Trava Elétrica",
      description: "Trava elétrica resistente para portões e portas com acionamento remoto."
    },
    {
      image: "/lovable-uploads/9640b0d9-861a-43b8-8d4f-21208d3f4210.png",
      title: "Kit Câmeras CFTV",
      description: "Kit completo de câmeras de segurança com DVR e acessórios para instalação."
    },
    {
      image: "/lovable-uploads/a809d1b0-f669-4072-a611-1990276bc528.png",
      title: "Motor deslizante",
      description: "Motor deslizante para portões com controles remotos e sistema de segurança."
    },
    {
      image: "/lovable-uploads/591290f8-f846-4433-abaf-da0bc036feb3.png",
      title: "Controle Remoto",
      description: "Controle remoto para automatização de portões com alcance estendido."
    },
    {
      image: "/lovable-uploads/5ea54f66-1c16-4243-b607-34addc12d3b4.png",
      title: "Motor Basculante",
      description: "Motor para portão basculante com sistema de segurança e controle automático."
    },
    {
      image: "/lovable-uploads/d91b7f7e-e6ad-4af0-bd30-863bca6bf110.png",
      title: "Vídeo Porteiro",
      description: "Vídeo porteiro com tela colorida e visão noturna para máxima segurança."
    },
    {
      image: "/lovable-uploads/98189a81-fee6-476d-ae0d-155998c3ee5a.png",
      title: "Instalação Elétrica",
      description: "Serviços de instalação elétrica predial e residencial com qualidade profissional."
    },
    {
      image: "/lovable-uploads/687649d6-610a-4c81-96cd-b5087d271840.png",
      title: "concertina",
      description: ""
    }
  ];

  return (
    <section id="produtos" className="py-20 bg-zener-gray-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossos Produtos
            </h2>
            <p className="text-xl text-zener-gray max-w-2xl mx-auto">
              Produtos de alta qualidade para segurança eletrônica e automação residencial
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                <CardHeader className="p-4">
                  <div className="aspect-square mb-4 bg-white rounded-lg p-4 flex items-center justify-center">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground text-center">
                    {product.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-zener-gray leading-relaxed text-sm text-center">
                    {product.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-primary p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">
                Interessado em nossos produtos?
              </h3>
              <p className="text-lg mb-6">
                Entre em contato para saber mais sobre preços e disponibilidade
              </p>
              <button
                onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Consultar Produtos
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;