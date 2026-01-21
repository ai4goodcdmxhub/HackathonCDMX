import { useState } from "react";
import { LinkedinIcon, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Mentor {
  name: string;
  title: string;
  company: string;
  description: string;
  linkedin: string;
  image?: string;
}

const Mentores = () => {
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);

  const mentors: Mentor[] = [
    {
      name: "Natalia García",
      image: "/mentors/nata.png",
      title: "CEO & Co-founder",
      company: "Insighty AI",
      description: "CEO y cofundadora de Insighty AI, una startup que construye productos de IA desde Latinoamérica. Data Ambassador de LSE y parte del AI Hub for Young Leaders. Representa a una nueva generación de creadoras que demuestran que la IA es un espacio abierto para jóvenes latinoamericanos.",
      linkedin: "https://www.linkedin.com/in/nataliagarciaai/",
    },
    {
      name: "Cristina Santa",
      image: "/mentors/cris.png",
      title: "Founder",
      company: "Aura Studio",
      description: "Fundadora de Aura, studio de pensamiento estratégico que impulsa productividad y creatividad con tecnologías emergentes. 7 años de experiencia en marketing, 5 años en tech marketing. Ha trabajado para Rappi, Bancolombia, Ripio, Arkangel AI.",
      linkedin: "https://www.linkedin.com/in/cristina-chac%C3%B3n-santa/",
    },
    {
      name: "Gonzalo Díaz",
      image: "/mentors/gonzalo.png",
      title: "Co-founder",
      company: "Bistart Consultoría",
      description: "Cofundador de Bistart Consultoría, consultor en estrategia, operaciones e innovación para startups y proyectos de tecnología en Norteamérica, Europa y LatAm.",
      linkedin: "https://www.linkedin.com/in/gonzalodiazdel/",
    },
    {
      name: "David Triana",
      image: "/mentors/david.png",
      title: "CEO & Co-founder",
      company: "Edupleia",
      description: "Emprendedor con más de 10 años creando soluciones tecnológicas. CEO de Eduplei, startup edtech que ayuda a instituciones educativas con big data, IA y ML. Creador de CIMA Comunidad, acompaña a emprendedores a diseñar planes de vida ejecutables.",
      linkedin: "https://www.linkedin.com/in/davidtrianaagudelo/",
    },
    {
      name: "Henry Bravo",
      image: "/mentors/henry.png",
      title: "Co-Founder",
      company: "Seika.ai",
      description: "Co-Founder @ Seika.ai. Ayuda a empresas B2B a escalar con IA Generativa e Infraestructura Agéntica. Ingeniero Informático con más de 15 años de experiencia, desde escribir código hasta liderar estrategias tecnológicas como CTO.",
      linkedin: "https://www.linkedin.com/in/henrygbc/",
    },
    {
      name: "Fabián Hernández",
      image: "/mentors/fabian.png",
      title: "CEO & Co-founder",
      company: "Monolegal",
      description: "CEO de Monolegal, primer app para abogados en México (2013) aplicando IA desde 2017. Empresa pionera de Industria 4.0, reconocida por Innpulsa, Fundación Bavaria. Certificada por Wayra España y acelerada en Aticco Lab Barcelona.",
      linkedin: "https://www.linkedin.com/in/fabianhernandezespinel/",
    },
    {
      name: "Iván Hernández",
      image: "/mentors/ivan.png",
      title: "CGO & Co-founder",
      company: "Monolegal",
      description: "Ingeniero de Telecomunicaciones y emprendedor desde 2008. Llevó a Monolegal a ser #1 en apps para abogados. Mentor experto del MinTIC en Apps.co. Experto en cognitive services de Microsoft y Amazon, automatización avanzada con Python.",
      linkedin: "https://www.linkedin.com/in/ivan-felipe-hernandez-espinel-72141629/",
    },
    {
      name: "Julio César Rojas",
      image: "/mentors/julio.png",
      title: "Co-founder",
      company: "Bistart Consultoría",
      description: "Cofundador de Bistart Consultoría. Experto en Desarrollo Organizacional y planificación estratégica con más de 20 años en empresas de entretenimiento. Fuerte vocación por estructuración de procesos e innovación en el ecosistema musical de México y LatAm.",
      linkedin: "https://www.linkedin.com/in/julio-cesar-rojas-b/",
    },
    {
      name: "Sebastián Caicedo",
      image: "/mentors/sebas.png",
      title: "CEO & Co-founder",
      company: "Expendly",
      description: "Emprendedor con más de 15 años liderando transformación digital en Europa y LatAm. CEO de Expendly, plataforma que optimiza gasto en software. Ha liderado proyectos de cambio organizacional y adopción de CRM globales. Basado en París, Francia.",
      linkedin: "https://www.linkedin.com/in/sebastian-c-11165239/",
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
                <span className="animate-blink">▶</span> ./mentors.sh
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-mono mb-6">
                <span className="text-primary">&lt;</span>
                <span className="text-foreground">Mentores</span>
                <span className="text-primary">/&gt;</span>
              </h2>
              <p className="text-lg text-muted-foreground font-mono max-w-2xl mx-auto">
                Techies con experiencia construyendo productos desde cero
              </p>
            </div>

            {/* Mentors Grid */}
            <div className="flex flex-wrap justify-center gap-6">
              {mentors.map((mentor, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedMentor(mentor)}
                  className="group cursor-pointer bg-card border border-terminal-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-terminal w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)]"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {/* Photo placeholder */}
                  <div className="aspect-square bg-muted flex items-center justify-center relative overflow-hidden">
                    {mentor.image ? (
                      <img
                        src={mentor.image}
                        alt={mentor.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center">
                        <span className="text-6xl font-mono text-primary/30">
                          {mentor.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300" />
                  </div>

                  {/* Info */}
                  <div className="p-4 text-center">
                    <h3 className="font-bold font-mono text-foreground text-lg mb-1">
                      {mentor.name}
                    </h3>
                    <p className="text-sm text-primary font-mono mb-1">
                      {mentor.title}
                    </p>
                    <p className="text-xs text-muted-foreground font-mono">
                      {mentor.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal */}
        <Dialog open={!!selectedMentor} onOpenChange={() => setSelectedMentor(null)}>
          <DialogContent className="bg-card border-2 border-primary/30 max-w-2xl">
            <DialogHeader>
              <DialogTitle className="font-mono text-2xl text-foreground text-center">
                {selectedMentor?.name}
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-4">
              {/* Title and Company */}
              <div className="text-center pb-4 border-b border-terminal-border">
                <p className="text-lg text-primary font-mono font-bold">
                  {selectedMentor?.title}
                </p>
                <p className="text-muted-foreground font-mono">
                  {selectedMentor?.company}
                </p>
              </div>

              {/* Description */}
              <div className="py-4">
                <p className="text-muted-foreground font-mono leading-relaxed text-sm">
                  {selectedMentor?.description}
                </p>
              </div>

              {/* LinkedIn Link */}
              <div className="pt-4 border-t border-terminal-border text-center">
                <a
                  href={selectedMentor?.linkedin}
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

export default Mentores;