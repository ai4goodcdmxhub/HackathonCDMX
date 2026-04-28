import { useEffect, useState } from "react";

// Definir los aliados y sponsors
const organizers = [
  { name: "Young AI Leaders Mexico City Hub", logo: "/sponsors/hubcdmx.png", url: "https://aiforgood.itu.int/young-ai-leaders-community/" },
  { name: "The DoT Network", logo: "/sponsors/tdn.png", url: "https://thedotnet.digital/" },
  { name: "Semantyk", logo: "/sponsors/smtk.png", url: "https://www.semantyk.com/" },
];

const strategicAllies = [
  { name: "Open Data Institute", logo: "/sponsors/ODI.png", url: "https://theodi.org/" },
  { name: "Agencia Digital de Innovación Pública", logo: "/sponsors/ADIP.png", url: "https://adip.cdmx.gob.mx/" },
  { name: "Tecnológico de Monterrey Escuela de Ingeniería y Ciencias", logo: "/sponsors/Ing.png", url: "https://eic.tec.mx/es" },
  { name: "Escuela de Ciencias Sociales y Gobierno", logo: "/sponsors/gob1.png", url: "https://egobiernoytp.tec.mx/es/escuela-de-ciencias-sociales-y-gobierno" },
];

const sponsors = [
  { name: "Consejo Latinoamericano de ética en tecnología", logo: "/sponsors/Cletec.png", url: "https://cletec.org/" },
  { name: "Lovable", logo: "/sponsors/lovable.png", url: "https://lovable.dev/" },
  { name: "Instituto de Emprendimiento Eugenio Garza Lagüera", logo: "/sponsors/emprendimiento.png", url: "https://emprendimiento.tec.mx/es" },
];

const SponsorsCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);

  const renderSponsorCard = (item, index, type) => {
    let imgClasses = "object-contain transition-all duration-500 group-hover:scale-105 ";

    // Tamaños estandarizados pero dando prioridad a gob1.png
    if (item.logo.includes('gob1.png')) {
      imgClasses += "w-full h-full max-h-64 scale-[1.35]"; // gob1.png mucho más grande (por si tiene márgenes internos)
    } else if (item.logo.includes('emprendimiento.png')) {
      imgClasses += "w-full h-full max-h-64 scale-[1.25]"; // emprendimiento.png más grande
    } else if (item.logo.includes('Ing.png')) {
      imgClasses += "w-full max-h-56 scale-110";
    } else if (item.logo.includes('Cletec.png') || item.logo.includes('wpi.png') || item.logo.includes('lovable.png')) {
      imgClasses += "w-4/5 max-h-40";
    } else {
      imgClasses += "w-3/4 max-h-32";
    }

    const cardContent = (
      <>
        <div className="flex-1 flex items-center justify-center w-full min-h-[200px] p-2 overflow-visible relative">
          <img
            src={item.logo}
            alt={item.name}
            className={imgClasses}
          />
        </div>
        {item.name && (
          <div className="h-14 flex items-end justify-center w-full mt-4">
            <p className="font-mono text-sm text-foreground/80 text-center line-clamp-2 group-hover:text-primary transition-colors duration-300">
              {item.name}
            </p>
          </div>
        )}
      </>
    );

    // Contenedor estandarizado y más estético
    const containerClasses = `bg-card/40 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center justify-between border border-white/5 hover:border-primary/50 hover:bg-card/60 shadow-lg hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)] transition-all duration-500 group w-full max-w-[340px] min-h-[340px]`;

    if (item.url) {
      return (
        <a
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className={containerClasses}
        >
          {cardContent}
        </a>
      );
    }

    return (
      <div key={index} className={containerClasses}>
        {cardContent}
      </div>
    );
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container px-4 relative z-10">
        <div className="max-w-7xl mx-auto space-y-24">

          {/* Organizadores */}
          <div>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-mono text-foreground mb-4">
                <span className="text-primary">&lt;</span>
                Organizadores
                <span className="text-primary">/&gt;</span>
              </h2>
            </div>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              {organizers.map((organizer, index) =>
                renderSponsorCard(organizer, index, "organizer")
              )}
            </div>
          </div>

          {/* Aliados Estratégicos */}
          <div>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-mono text-foreground mb-4">
                <span className="text-primary">&lt;</span>
                Aliados Estratégicos
                <span className="text-primary">/&gt;</span>
              </h2>
            </div>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              {strategicAllies.map((ally, index) =>
                renderSponsorCard(ally, index, "ally")
              )}
            </div>
          </div>

          {/* Patrocinadores */}
          <div>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-mono text-foreground mb-4">
                <span className="text-primary">&lt;</span>
                Nuestros Patrocinadores
                <span className="text-primary">/&gt;</span>
              </h2>
            </div>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              {sponsors.map((sponsor, index) =>
                renderSponsorCard(sponsor, index, "sponsor")
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SponsorsCarousel;