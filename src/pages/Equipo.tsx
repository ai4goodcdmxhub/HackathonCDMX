import { LinkedinIcon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface TeamMember {
  name: string;
  linkedin?: string;
  image?: string;
}

const Equipo = () => {
  const team: TeamMember[] = [
    {
      name: "Isabella Palafox Limón",
      linkedin: "https://www.linkedin.com/in/isabella-sophia-palafox-lim%C3%B3n-781a44349/",
      image: "/team/Isa.jpeg",
    },
    {
      name: "Sissi de la Peña",
      linkedin: "https://www.linkedin.com/in/sissidelapena/",
      image: "/team/sisi.png",
    },
    {
      name: "Eugenio Salas Iturriaga",
      linkedin: "https://www.linkedin.com/in/eugeniosalasi/",
      image: "/team/Eugenio.png",
    },
    {
      name: "Daniel Bakas",
      linkedin: "https://www.linkedin.com/in/danielbakas/",
      image: "/team/bakas.png",
    },
    {
      name: "Juliho Castillo Colmenares",
      linkedin: "https://www.linkedin.com/in/julihocc/",
      image: "/team/juliho.jpg",
    },
    {
      name: "Sandro Reyna Schwartau",
      image: "/team/sandro.jpg",
    },
    {
      name: "Claudia Daniela Rosas Buitrón",
      image: "/team/claudia.jpg",
    },
    {
      name: "Ander Peralta Durón",
      image: "/team/ander.jpg",
    },
    {
      name: "Mariana Ramos García",
      image: "/team/mariana.jpg",
    },
    {
      name: "Karen Camila Zárate Bolaños",
      image: "/team/karen.jpg",
    },
    {
      name: "Jhonatan Sanchez",
      linkedin: "https://www.linkedin.com/in/jhonatan-sanchez-intellexia/?locale=es_ES",
      image: "/team/jhonatan.jpg",
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
                <span className="animate-blink">▶</span> ./team.sh
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-mono mb-6">
                <span className="text-primary">&lt;</span>
                <span className="text-foreground">Equipo Organizador</span>
                <span className="text-primary">/&gt;</span>
              </h2>
              <p className="text-lg text-muted-foreground font-mono max-w-2xl mx-auto">
                Las mentes detrás de la nueva generación de líderes en IA ética y privacidad de datos en la Ciudad de México.
              </p>
            </div>

            {/* Team Grid */}
            <div className="flex flex-wrap justify-center gap-6">
              {team.map((member, index) => (
                <a
                  key={index}
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group cursor-pointer bg-card border border-terminal-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-terminal w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)]"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {/* Photo placeholder */}
                  <div className="aspect-square bg-muted flex items-center justify-center relative overflow-hidden">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center">
                        <span className="text-6xl font-mono text-primary/30">
                          {member.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      {member.linkedin && <LinkedinIcon className="w-12 h-12 text-primary" />}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-4 text-center">
                    <h3 className="font-bold font-mono text-foreground text-lg mb-1">
                      {member.name}
                    </h3>
                    {member.linkedin && (
                      <p className="text-xs text-primary font-mono flex items-center justify-center gap-1">
                        <LinkedinIcon className="w-3 h-3" />
                        Perfil LinkedIn
                      </p>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Equipo;
