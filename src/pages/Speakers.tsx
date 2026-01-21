import { useState } from "react";
import { LinkedinIcon, Mic } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Speaker {
  name: string;
  title: string;
  company: string;
  description: string;
  linkedin: string;
  image?: string;
}

const Speakers = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  const speakers: Speaker[] = [
    {
      name: "Alexander Torrenegra",
      title: "Founder & CEO",
      company: "Torre",
      description: "Emprendedor serial y líder visionario en tecnología. Fundador de Torre, plataforma que revoluciona el reclutamiento con inteligencia artificial. Ha construido múltiples empresas exitosas y es reconocido como uno de los emprendedores más influyentes de América Latina en el sector tech.",
      linkedin: "https://www.linkedin.com/in/alextorrenegra/",
      image: "/speakers/alexander.png",
    },
    {
      name: "Gonzalo Aizpún",
      title: "CTO",
      company: "Laika",
      description: "Chief Technology Officer en Laika, liderando la transformación tecnológica de una de las plataformas de comercio electrónico de mascotas más importantes de América Latina. Experto en arquitectura de sistemas escalables y desarrollo de productos digitales de alto impacto.",
      linkedin: "https://www.linkedin.com/in/gonzaloaizpun/",
      image: "/speakers/gonzalo.png",
    },
    {
      name: "Camila Hernández",
      title: "Senior Systems Engineer",
      company: "EPAM Systems",
      description: "Ingeniera de Sistemas e Industrial de la Universidad de Los Andes. Senior Systems Engineer en EPAM Systems. Actualmente cursando maestría en Ingeniería Industrial con énfasis en Inteligencia Artificial. Especialista en implementación de sistemas de IA a nivel empresarial.",
      linkedin: "https://www.linkedin.com/in/maria-camila-hernandez-moya-4b6947180/",
      image: "/speakers/camila.png",
    },
    {
      name: "Julian Pira",
      title: "Growth & Product",
      company: "Nodi",
      description: "Software developer apasionado con experiencia en Golang, Python, Git y GitHub. Experto en bases de datos SQL y diseño de interfaces con Tailwind CSS. Líder colaborativo enfocado en aprendizaje continuo y crecimiento profesional en desarrollo de software.",
      linkedin: "https://www.linkedin.com/in/josejulianpiranaranjo/",
      image: "/speakers/julian.png",
    },
    {
      name: "Yindra Carolina Torres",
      title: "Especialista Cloud & AWS Educator",
      company: "User Group AWS Tolima y Cundinamarca",
      description: "Especialista Cloud en TIVIT LATAM con certificaciones AWS x2, OCI x2, Huawei, ITIL, SCRUM y CCNA. AWS Educator y FinOps Engineer. Lidera User Group AWS Tolima y Cundinamarca, promoviendo eventos y networking en FinOps, Machine Learning y Cloud.",
      linkedin: "https://www.linkedin.com/in/yindra-carolina-torres-guzman-4a8249134/",
      image: "/speakers/yindra.png",
    },
  ];

  return (
    <div className="min-h-screen bg-background font-mono">
      <Header />
      
      <section className="py-24 bg-background relative pt-32">
        <div className="absolute inset-0 bg-gradient-glow opacity-20" />
        
        <div className="container relative z-10 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-16">
              <div className="inline-block font-mono text-primary text-sm mb-4">
                <span className="animate-blink">▶</span> ./speakers.sh
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-mono mb-6">
                <span className="text-primary">&lt;</span>
                <span className="text-foreground">Speakers</span>
                <span className="text-primary">/&gt;</span>
              </h2>
              <p className="text-lg text-muted-foreground font-mono max-w-2xl mx-auto">
                Líderes que compartirán su visión sobre el futuro de la tecnología
              </p>
            </div>

            {/* Speakers Grid */}
            <div className="flex flex-wrap justify-center gap-6">
              {speakers.map((speaker, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedSpeaker(speaker)}
                  className="group cursor-pointer bg-card border border-terminal-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-terminal w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)]"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {/* Photo placeholder */}
                  <div className="aspect-square bg-muted flex items-center justify-center relative overflow-hidden">
                    {speaker.image ? (
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center">
                        <Mic className="w-16 h-16 text-primary/30" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300" />
                  </div>

                  {/* Info */}
                  <div className="p-4 text-center">
                    <h3 className="font-bold font-mono text-foreground text-lg mb-1">
                      {speaker.name}
                    </h3>
                    <p className="text-sm text-primary font-mono mb-1">
                      {speaker.title}
                    </p>
                    <p className="text-xs text-muted-foreground font-mono">
                      {speaker.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal */}
        <Dialog open={!!selectedSpeaker} onOpenChange={() => setSelectedSpeaker(null)}>
          <DialogContent className="bg-card border-2 border-primary/30 max-w-2xl">
            <DialogHeader>
              <DialogTitle className="font-mono text-2xl text-foreground text-center">
                {selectedSpeaker?.name}
              </DialogTitle>
            </DialogHeader>
            
            <div className="space-y-4">
              {/* Title and Company */}
              <div className="text-center pb-4 border-b border-terminal-border">
                <p className="text-lg text-primary font-mono font-bold">
                  {selectedSpeaker?.title}
                </p>
                <p className="text-muted-foreground font-mono">
                  {selectedSpeaker?.company}
                </p>
              </div>

              {/* Description */}
              <div className="py-4">
                <p className="text-muted-foreground font-mono leading-relaxed text-sm">
                  {selectedSpeaker?.description}
                </p>
              </div>

              {/* LinkedIn Link */}
              <div className="pt-4 border-t border-terminal-border text-center">
                <a
                  href={selectedSpeaker?.linkedin}
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

export default Speakers;
