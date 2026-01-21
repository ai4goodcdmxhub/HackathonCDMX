import { LinkedinIcon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface TeamMember {
  name: string;
  linkedin: string;
  image?: string;
}

const Equipo = () => {
  const team: TeamMember[] = [
    {
      name: "Alejandra Rojas",
      linkedin: "https://www.linkedin.com/in/alejandra-rojas-garzon/",
      image: "/team/alejandra.png",
    },
    {
      name: "Valeria Soler",
      linkedin: "https://www.linkedin.com/in/valeriasoler/",
      image: "/team/valeria.png",
    },
    {
      name: "Laura Zuluaga",
      linkedin: "https://www.linkedin.com/in/laura-zuluaga-pineda/",
      image: "/team/laura.png",
    },
    {
      name: "Yuliet Montaña",
      linkedin: "https://www.linkedin.com/in/yulietmontana/",
      image: "/team/yuliet.png",
    },
    {
      name: "Esteban Castañeda",
      linkedin: "https://www.linkedin.com/in/jorge-esteban-castaneda-lopez/",
      image: "/team/esteban.png",
    },
    {
      name: "Daniel Gordillo",
      linkedin: "https://www.linkedin.com/in/daniel-gordillo-cristancho-59097315b/",
      image: "/team/daniel.png",
    },
    {
      name: "Cristina Chacón",
      linkedin: "https://www.linkedin.com/in/cristina-chac%C3%B3n-santa/",
      image: "/team/cris.png",
    },
    {
      name: "Natalia García",
      linkedin: "https://www.linkedin.com/in/nataliagarciaai/",
      image: "/team/nata.png",
    },
    {
      name: "María José Murillo",
      linkedin: "https://www.linkedin.com/in/maria-jose-m-/",
      image: "/team/mariajose.png",
    },
    {
      name: "Joan Escobar",
      linkedin: "https://www.linkedin.com/in/joan-s-escobar-r/",
      image: "/team/joan.png",
    },
    {
      name: "Sebastián Melo",
      linkedin: "https://www.linkedin.com/in/sebastianmelo03/",
      image: "/team/sebastian.png",
    },
    {
      name: "David Cuevas",
      linkedin: "https://www.linkedin.com/in/cuevasadavid/",
      image: "/team/david.png",
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
                El equipo detrás de las 24 horas más intensas de código
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
                      <LinkedinIcon className="w-12 h-12 text-primary" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-4 text-center">
                    <h3 className="font-bold font-mono text-foreground text-lg mb-1">
                      {member.name}
                    </h3>
                    <p className="text-xs text-primary font-mono flex items-center justify-center gap-1">
                      <LinkedinIcon className="w-3 h-3" />
                      Ver LinkedIn
                    </p>
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
