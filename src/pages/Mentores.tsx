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
      name: "Jesús Gutiérrez Franco",
      title: "Fundador",
      company: "Paradiqma",
      description: "",
      linkedin: "https://www.linkedin.com/in/jesusgtzfranco/?locale=es",
      image: "/mentors/jesus.jpeg",
    },
    {
      name: "Lisnet Xatziri Molina Ruiz",
      title: "Experta en Gobierno de Datos",
      company: "",
      description: "Lisnet Molina es experta en Gobierno de Datos con más de 10 años de experiencia liderando estrategias, programas y equipos de gestión de datos en organizaciones líderes. Ha implementado programas de Gobierno de Datos desde cero en empresas como ADO, Xcaret, Procesar y Vesta, impulsando capacidades organizacionales para generar valor a través de los datos de manera ética y responsable.\n\nCuenta con certificaciones internacionales en Gobierno y Gestión de Datos, como Certified Data Management Professional (CDMP Associate), así como certificaciones en calidad de datos, protección de datos, gestión del cambio, metodologías ágiles y tecnologías de datos, además de formación en alta dirección y especialización continua en Gobierno de IA. Apasionada de la mentoría y del desarrollo de talento, promueve una visión en la que las personas son el centro de las estrategias de datos e inteligencia artificial para impulsar una innovación responsable.",
      linkedin: "https://www.linkedin.com/in/lisnet-xatziri-molina-ruiz-1105131a8/",
      image: "/mentors/lis.jpeg",
    },
    {
      name: "Juan Díaz",
      title: "Ingeniero en Ciencias Computacionales",
      company: "Tecnológico de Monterrey",
      description: "I am a Computer Science Engineer from Tecnológico de Monterrey, with a strong focus on Geospatial Data and a broad interest in Data Science. My passion for social and political issues has driven me to collaborate in the development of analytical tools, particularly through the creation of data-driven dashboards aimed at addressing these challenges.",
      linkedin: "https://www.linkedin.com/in/jedn/",
      image: "/mentors/juan.jpeg",
    },
    {
      name: "Eugen Resendiz",
      title: "Profesora Investigadora",
      company: "Escuela de Arquitectura, Arte y Diseño",
      description: "Profesora Investigadora en la Escuela de Arquitectura, Arte y Diseño y Fellow en el Centro para el Futuro de las Ciudades. Investiga la intersección entre políticas públicas, diseño urbano y salud pública para reducir desigualdades. Forma parte del Observatorio Global de Ciudades Saludables y Sostenibles. Eugen es Doctora en Ciencias de la Salud Pública por la Universidad de Washington en St. Louis.\n\nÁreas de enfoque/interés: Salud urbana; planeación urbana; política pública.",
      linkedin: "https://www.linkedin.com/in/eugen-resendiz/",
      image: "/mentors/Eugen.jpg",
    },
    {
      name: "Jésica Tapia",
      title: "Mentora",
      company: "",
      description: "",
      linkedin: "https://www.linkedin.com/in/jesicatapiareyes/",
      image: "/mentors/jesica.jpeg",
    },
    {
      name: "David Saavedra Ponce",
      title: "Solo Founder",
      company: "DS Intelligence",
      description: "David Saavedra Ponce es el fundador de DS Intelligence y creador del INTELLI PCD-1, el primer hardware de IA portátil, offline y multimodal del mundo. Con más de una década de experiencia en desarrollo de software y una sólida formación financiera, David, a sus 22 años, se ha propuesto democratizar la Inteligencia Artificial de forma privada, soberana y rentable para las empresas en Latinoamérica. Ha sido reconocido como uno de los 100 mejores emprendedores de México y se desempeña como Mentor en el Centro de Excelencia de Base Tecnológica del Tec de Monterrey, impulsando a los jóvenes a construir alternativas tecnológicas hechas en y para LATAM.",
      linkedin: "https://www.linkedin.com/in/saavedradavid/",
      image: "/mentors/david.png",
    },
    {
      name: "José Manuel Compeán González",
      title: "Tech Lead Engineer",
      company: "Capgemini",
      description: "",
      linkedin: "https://www.linkedin.com/in/manuel-compean-gonzalez-i-am-dev/",
      image: "/mentors/manuel.jpeg",
    },
    {
      name: "Alfonso Rivera-Illingworth",
      title: "Senior Program Manager & ICT Policy Specialist",
      company: "",
      description: "Senior program manager and Information and Communication Technologies (ICT) policy specialist focusing on data-intensive projects including design, implementation, and evaluation of public policies and programs. Extensive management experience in public and the private sectors, including leadership of top-level multidisciplinary teams. Close collaboration with policy makers, government officers, and other stakeholders in almost a dozen countries. I believe in the use of data and technology for improving wellbeing.\n\nMy current research focuses on understanding the intersection between two phenomena: the digital divide and big data. In my project I am seeking to identify new data sources that could be used for measuring divides, either complementing or substituting traditional measurements. Examining social media data, crowdsourced data, and other big data sources, the research provides evidence on the opportunities and limitations of using alternative measurements.",
      linkedin: "https://www.linkedin.com/in/riveralfonso/",
      image: "/mentors/Alfonso.jpeg",
    },
    {
      name: "Eliseo Ocampo Jaramillo",
      title: "Director de la Carrera de Derecho en CCM",
      company: "Tecnológico de Monterrey",
      description: "",
      linkedin: "https://www.linkedin.com/in/eliseo-ocampo-jaramillo-43a00114/",
      image: "/judges/eliseo.jpeg",
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
                Expertos con visión humanista para potenciar soluciones de IA responsable.
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
                        className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-300"
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