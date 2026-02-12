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
  { name: "Consejo Latinoamericano de ética en tecnología", logo: "/sponsors/Cletec.png", url: "https://cletec.org/" },
];

const sponsors = [
  { name: "Tecnológico de Monterrey Escuela de Ingeniería y Ciencias", logo: "/sponsors/Ing.png", url: "https://eic.tec.mx/es" },
  { name: "Lovable", logo: "/sponsors/lovable.png", url: "https://lovable.dev/" },
];

const SponsorsCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);

  const renderSponsorCard = (item, index, type) => {
    let imgClasses = "object-contain transition-transform duration-300 group-hover:scale-110 ";

    if (item.logo.includes('Ing.png')) {
      imgClasses += "w-full max-h-80 scale-110";
    } else if (item.logo.includes('Cletec.png')) {
      imgClasses += "max-h-48 scale-110";
    } else {
      imgClasses += "max-h-32 w-auto";
    }

    const cardContent = (
      <>
        <div className="flex-1 flex items-center justify-center w-full">
          <img
            src={item.logo}
            alt={item.name}
            className={imgClasses}
          />
        </div>
        {item.name && (
          <p className="font-mono font-bold text-sm text-foreground text-center">
            {item.name}
          </p>
        )}
      </>
    );

    const containerClasses = `bg-card rounded-lg p-6 flex flex-col items-center justify-between border border-terminal-border hover:border-primary/50 transition-all duration-300 gap-4 group w-[400px] min-h-[300px]`;

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