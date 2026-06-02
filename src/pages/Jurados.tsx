import { useState } from "react";
import { LinkedinIcon, X, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Judge {
  name: string;
  title: string;
  company: string;
  description: string;
  linkedin: string;
  image?: string;
}

const Jurados = () => {
  const [selectedJudge, setSelectedJudge] = useState<Judge | null>(null);

  const judges: Judge[] = [
    {
      name: "Sissi de la Peña",
      title: "Fundadora",
      company: "<strong>The DoT Network</strong>",
      description: "Por más de 20 años, ha estado en los espacios donde se redactan las reglas digitales para América Latina: desde la Presidencia de la República de México negociando el T-MEC, hasta representando a Google, Amazon y Meta en políticas públicas y regulación en LATAM, y recientemente como Tech Policy Fellow en la Universidad de California, Berkeley.\n\nSu trabajo se ubica en la intersección crítica donde la innovación tecnológica se encuentra con las políticas públicas. Ayuda a gobiernos y empresas a navegar la complejidad de la IA, la ciberseguridad y la transformación digital sin sacrificar el crecimiento económico ni los derechos fundamentales.\n\nHa liderado proyectos que definen el panorama digital: negociaciones de comercio digital en el T-MEC y en el acuerdo Unión Europea-México, el diseño del primer Sandbox Regulatorio de IA de México y la primera Estrategia Nacional de Ciberseguridad de México. Ha representado a México ante la OCDE, el G20 y la ONU, así como a las plataformas tecnológicas más grandes del mundo en 7 países de América Latina.\n\nActualmente, dirige capítulos estratégicos en la Global Anti-Scam Alliance y The DoT Network, orquestando alianzas público-privadas para combatir el fraude emergente y acelerar la adopción responsable de tecnología en sectores regulados. Fue reconocida como Women in AI Responsible Leader 2025.",
      linkedin: "https://www.linkedin.com/in/sissidelapena/",
      image: "/judges/sisi.png"
    },
    {
      name: "Héctor Arturo Gutiérrez Calderón",
      title: "Director Ejecutivo de Investigación e Innovación",
      company: "<strong>Agencia Digital de Innovación Pública</strong>",
      description: "Su labor principal consiste en brindar soporte técnico y administrativo para asegurar la estabilidad de la infraestructura digital que sostiene los servicios del Gobierno de la CDMX. Es una pieza clave en la continuidad operativa de plataformas ciudadanas esenciales, garantizando que los sistemas permanezcan funcionales para los usuarios.",
      linkedin: "https://www.linkedin.com/in/hector-gutierrez-48152917/",
      image: "/judges/hector_adip.png"
    },
    {
      name: "Max Alberto Diener Sala",
      title: "Abogado y Experto en Finanzas Públicas",
      company: "<strong>DLG Abogados</strong>",
      description: "Abogado con más de 25 años de experiencia en finanzas públicas, tributarias y financieras, y experto en derecho constitucional, administrativo, fiscal e internacional. Ha liderado equipos legales a nivel federal, desempeñándose como Procurador Fiscal de la Federación, Consejero Jurídico en la Secretaría de Relaciones Exteriores y Subsecretario de Asuntos Jurídicos en la Secretaría de Gobernación.\n\nEs egresado de la UNAM, con estudios de posgrado en el ITAM y la Academia Diplomática de Viena. Además, cuenta con una destacada trayectoria académica, habiendo impartido cátedra en instituciones de prestigio como el CIDE, ITAM, COLMEX y la UNAM.",
      linkedin: "https://www.linkedin.com/in/max-alberto-diener-sala-022888180/",
      image: "/judges/Max.jpeg"
    },
    {
      name: "Olivia Calderón",
      title: "Gerente de Emprendimiento",
      company: "<strong>Instituto de Emprendimiento Eugenio Garza Lagüera</strong>",
      description: "Ingeniera Industrial y de Sistemas por el Tecnológico de Monterrey y Maestra en Negocios por la Universidad de Mannheim, con experiencia académica en ESSEC (Francia) y Warwick Business School (Inglaterra).\n\nCuenta con más de 10 años de experiencia en desarrollo de nuevos negocios, innovación y tecnología, trabajando para empresas globales como IBM, Microsoft, Gartner y SAP en México y Alemania.\n\nSe desempeñó como Gerente de Innovación en Rotoplas y actualmente es Gerente de Emprendimiento en el Tecnológico de Monterrey Campus Ciudad de México.",
      linkedin: "https://www.linkedin.com/in/oliviacalderon/",
      image: "/judges/Oli.jpeg"
    },
    {
      name: "Uriel Salazar De Urquidi",
      title: "Gerente de Desarrollo de Plataformas e Inteligencia Artificial",
      company: "<strong>Iniciativa Ciudades</strong>",
      description: "Gerente de Desarrollo de Plataformas e Inteligencia Artificial en el Centro para el Futuro de las Ciudades. Uriel dirige el desarrollo de plataformas como SIUM y Atlas de Ciudades enfocadas en presentar problemáticas y soluciones al desarrollo actual de ciudades como Monterrey. Tuvo la oportunidad de hacer intercambio y posteriormente vivir en San Francisco trabajando por 2 años en Twitter, donde su principal labor fue la optimización de servidores, creación de herramientas y procesos para facilitar migraciones y pruebas de VMs.\n\nUriel es Ingeniero en Tecnologías Computacionales en el Tecnológico de Monterrey, graduado en el 2020.",
      linkedin: "https://www.linkedin.com/in/usu96/",
      image: "/judges/Uriel.jpg"
    },
    {
      name: "Eugenio Salas Iturriaga",
      title: "Jurado",
      company: "",
      description: "",
      linkedin: "https://www.linkedin.com/in/eugeniosalasi/",
      image: "/team/Eugenio.png",
    },
    {
      name: "Daniel Mancilla",
      title: "Jurado",
      company: "",
      description: "",
      linkedin: "https://www.linkedin.com/in/daniel-mancilla-13b347283/",
      image: "/team/danim.jpeg",
    }
  ];

  return (
    <div className="min-h-screen bg-background font-mono">
      <Header />

      <section className="py-24 bg-gradient-terminal relative pt-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="container relative z-10 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-16">
              <div className="inline-block font-mono text-primary text-sm mb-4">
                <span className="animate-blink">▶</span> ./judges.sh
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-mono mb-6">
                <span className="text-primary">&lt;</span>
                <span className="text-foreground">Jurados</span>
                <span className="text-primary">/&gt;</span>
              </h2>
              <p className="text-lg text-muted-foreground font-mono max-w-2xl mx-auto">
                Expertos que evaluarán tu innovación y ejecución
              </p>
            </div>

            {/* Judges Grid - Centered */}
            <div className="flex flex-wrap justify-center gap-8">
              {judges.map((judge, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedJudge(judge)}
                  className="group cursor-pointer bg-card border border-terminal-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-terminal w-full sm:w-64"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Photo placeholder */}
                  <div className="aspect-square bg-muted flex items-center justify-center relative overflow-hidden">
                    {judge.image ? (
                      <img
                        src={judge.image}
                        alt={judge.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center">
                        <Award className="w-24 h-24 text-primary/30" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300" />
                  </div>

                  {/* Info */}
                  <div className="p-6 text-center">
                    <h3 className="font-bold font-mono text-foreground text-xl mb-2">
                      {judge.name}
                    </h3>
                    <p className="text-sm text-primary font-mono mb-1 font-bold">
                      {judge.title}
                    </p>
                    <p
                      className="text-sm text-muted-foreground font-mono"
                      dangerouslySetInnerHTML={{ __html: judge.company }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal */}
        <Dialog open={!!selectedJudge} onOpenChange={() => setSelectedJudge(null)}>
          <DialogContent className="bg-card border-2 border-primary/30 max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="font-mono text-2xl text-foreground text-center">
                {selectedJudge?.name}
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-4">
              {/* Title and Company */}
              <div className="text-center pb-4 border-b border-terminal-border">
                <p className="text-lg text-primary font-mono font-bold">
                  {selectedJudge?.title}
                </p>
                <div
                  className="text-muted-foreground font-mono"
                  dangerouslySetInnerHTML={{ __html: selectedJudge?.company || "" }}
                />
              </div>

              {/* Description */}
              <div className="py-4">
                <p className="text-muted-foreground font-mono leading-relaxed text-sm whitespace-pre-line">
                  {selectedJudge?.description}
                </p>
              </div>

              {/* LinkedIn Link */}
              <div className="pt-4 border-t border-terminal-border text-center">
                <a
                  href={selectedJudge?.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-mono text-sm transition-colors"
                >
                  <LinkedinIcon className="w-5 h-5" />
                  Ver perfil en LinkedIn
                </a>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </section>

      <Footer />
    </div>
  );
};

export default Jurados;