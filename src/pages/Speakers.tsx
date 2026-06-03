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
  objectPosition?: string;
}

const Speakers = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  const speakers: Speaker[] = [
    {
      name: "Jónas Vázquez Betancourt",
      title: "Fundador",
      company: "Comunica la Ciudad",
      description: "Especialista con 16 años de experiencia en estrategia de comunicación urbana, políticas públicas y movilidad. Ha colaborado con los tres niveles de gobierno en México y con organismos internacionales como el Banco Mundial y el BID, liderando proyectos de impacto nacional como la Estrategia Nacional de Movilidad.",
      linkedin: "https://www.linkedin.com/in/jon%C3%A1s-v%C3%A1zquez-betancourt-a0728862/?originalSubdomain=mx",
      image: "/speakers/jonas.jpeg"
    },
    {
      name: "Matthieu Bosquet",
      title: "Head of Technology",
      company: "Open Data Institute (ODI)",
      description: "Matthieu Bosquet is Head of Technology for the Open Data Institute (ODI).\n\nI started my career as a creative web developer in 2006, focusing on content creation, data modeling and accessible front end development; I then took every chance to learn and gathered experience with everything that would help me better understand and build information systems, from server administration to developer tooling, through UX/DevX design and running standardisation processes.\n\nI finally discovered and instantly fell in love with Semantic Web technologies in 2017, as part of the team that built a knowledge graph and an Open Data Platform for UK Parliament. In 2020, I joined the Solid standardisation effort and became the editor of the ACP specification. I joined the ODI in August 2025. My passion for Open Linked Data and championing collective intelligence through better distributed information systems is still growing.",
      linkedin: "",
      image: "/speakers/Mat.jpeg"
    },
    {
      name: "Roberto S.K. Breitman",
      title: "Community Manager for Solid",
      company: "Open Data Institute (ODI)",
      description: "Roberto Sequerra Koogan Breitman is the Open Data Institute’s Community Manager for Solid, an open protocol developed by Sir Tim Berners-Lee to facilitate federated data ownership on the web.\n\nHe has a background in both Computer Science and Political Science. He joined the ODI after three years as part of the Go to Market team at Inrupt, a start-up founded by Tim Berners-Lee, where his work focused on Solid’s role in public policy, and developing Solid projects in government, industry, and NGOs.\n\nHe holds a bachelor's degree in Computer Science and International Relations from Tufts University, and a Master's degree in the Transnational Governance of Technology from the European University Institute. Roberto was born and raised in Rio de Janeiro, Brazil.",
      linkedin: "",
      image: "/speakers/Roberto.jpeg"
    },
    {
      name: "Priscilla Vázquez",
      title: "Speaker & Conferencista",
      company: "Tecnológico de Monterrey",
      description: "Creadora de experiencias, facilitadora y conferencista en temas de comunicación, negocios y emprendimiento con propósito, desarrollo de talento creativo, diseñado con energía, pasión y enfoque práctico.\n\nLicenciada en Estrategia y Transformación de Negocios con enfoque al desarrollo de talento, Profesora en el Tecnológico de Monterrey y mentora en el Instituto de Emprendimiento del Tecnológico de Monterrey.",
      linkedin: "https://www.linkedin.com/in/priscilla-vazquez-4587981a6/",
      image: "/speakers/pris.jpeg",
      objectPosition: "center 20%",
    },
    {
      name: "Leonardo Zubieta Angulo",
      title: "",
      company: "IBM",
      description: "",
      linkedin: "https://www.linkedin.com/in/leonardo-zubieta-angulo-11818168/",
      image: "/speakers/leo.jpeg",
    },
    {
      name: "Paola Cicero Arenas",
      title: "Oficial Nacional de Ciencias Sociales y Humanas",
      company: "UNESCO México",
      description: "Abogada por el ITAM y Maestra en Estudios Legales Internacionales por la Universidad de Nueva York (NYU). Cuenta con estudios de especialización en Inteligencia Artificial y transformación digital por el MIT, de regulación de telecomunicaciones por la Universidad Carnegie Mellon y de Inteligencia Artificial y ciudadanía digital.\n\nExperta en políticas públicas, derecho y tecnología, con más de 17 años en el ámbito público. Durante casi una década se desempeñó como Directora General en el Instituto Federal de Telecomunicaciones y desde abril 2025 se incorporó a UNESCO México como Oficial Nacional del Sector de Ciencias Sociales y Humanas, donde es responsable de temas como ética de la inteligencia artificial, tecnologías emergentes, inclusión, deporte y juventudes.\n\nInteresada en temas y problemas de impacto general que requieren visión estratégica, multidisciplinaria y de género para su estudio, como la inteligencia artificial y la transformación digital.",
      linkedin: "https://www.linkedin.com/in/paola-cicero-arenas/",
      image: "/speakers/PaolaCi.jpeg",
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
                  {/* Photo area */}
                  <div className="aspect-square bg-muted relative overflow-hidden">
                    {speaker.image ? (
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                        style={{ objectPosition: speaker.objectPosition || "center" }}
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
                    <h3 className="font-bold font-mono text-foreground text-lg mb-1 line-clamp-2 min-h-[3.5rem] flex items-center justify-center">
                      {speaker.name}
                    </h3>
                    <p className="text-sm text-primary font-mono mb-1 line-clamp-1">
                      {speaker.title}
                    </p>
                    <p className="text-xs text-muted-foreground font-mono line-clamp-1">
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
          <DialogContent className="bg-card border-2 border-primary/30 max-w-3xl overflow-hidden p-0 gap-0">
            <div className="grid md:grid-cols-2">
              <div className="aspect-[4/5] md:aspect-auto h-full bg-muted">
                {selectedSpeaker?.image && (
                  <img
                    src={selectedSpeaker.image}
                    alt={selectedSpeaker.name}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="p-8 space-y-6 flex flex-col justify-center">
                <DialogHeader>
                  <DialogTitle className="font-mono text-3xl text-foreground text-left">
                    {selectedSpeaker?.name}
                  </DialogTitle>
                </DialogHeader>

                <div className="space-y-4">
                  <div>
                    <p className="text-lg text-primary font-mono font-bold uppercase tracking-tight">
                      {selectedSpeaker?.title}
                    </p>
                    <p className="text-muted-foreground font-mono font-bold text-sm">
                      {selectedSpeaker?.company}
                    </p>
                  </div>

                  <div className="py-4 border-y border-terminal-border">
                    <p className="text-muted-foreground font-mono leading-relaxed text-sm">
                      {selectedSpeaker?.description}
                    </p>
                  </div>

                  <div className="pt-2">
                    <a
                      href={selectedSpeaker?.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-mono text-sm transition-colors group"
                    >
                      <LinkedinIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      ./view_profile.sh
                    </a>
                  </div>
                </div>
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
