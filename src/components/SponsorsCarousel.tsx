import { useEffect, useState } from "react";

// Definir los sponsors por niveles
const sponsorsByTier = {
  tier1: [
    { name: "Young AI Leaders Mexico City Hub", logo: "/sponsors/hubcdmx.png", url: "https://aiforgood.itu.int/young-ai-leaders-community/" },
    { name: "Tecnológico de Monterrey Escuela de Ingeniería y Ciencias", logo: "/sponsors/Ing.png", url: "https://eic.tec.mx/es" },
    { name: "Open Data Institute", logo: "/sponsors/ODI.png", url: "https://theodi.org/" },
    { name: "The DoT Network", logo: "/sponsors/tdn.png", url: "https://thedotnet.digital/" },
    { name: "Agencia Digital de Innovación Pública", logo: "/sponsors/ADIP.png", url: "https://adip.cdmx.gob.mx/" },
    { name: "Semantyk", logo: "/sponsors/smtk.png", url: "https://www.semantyk.com/" },
    { name: "Consejo Latinoamericano de ética en tecnología", logo: "/sponsors/Cletec.png", url: "https://cletec.org/" },
  ],
  tier2: [],
  tier3: [],
  tier4: []
};

const SponsorsCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);

  const renderSponsorCard = (sponsor, index, tierClass) => {
    let imgClasses = "object-contain transition-transform duration-300 group-hover:scale-110 ";

    if (tierClass === "tier1") {
      if (sponsor.logo.includes('Ing.png')) {
        imgClasses += "w-full max-h-80 scale-110";
      } else if (sponsor.logo.includes('Cletec.png')) {
        imgClasses += "max-h-48 scale-110";
      } else {
        imgClasses += "max-h-32 w-auto";
      }
    } else if (tierClass === "tier2") {
      imgClasses += "max-h-24 w-auto";
    } else if (tierClass === "tier3") {
      imgClasses += "max-h-14 w-auto";
    } else if (tierClass === "tier4") {
      imgClasses += "max-h-10 w-auto";
    }

    const cardContent = (
      <>
        <div className="flex-1 flex items-center justify-center w-full">
          <img
            src={sponsor.logo}
            alt={sponsor.name}
            className={imgClasses}
          />
        </div>
        {sponsor.name && (
          <p className="font-mono font-bold text-sm text-foreground text-center">
            {sponsor.name}
          </p>
        )}
      </>
    );

    const cardStyles = {
      tier1: "w-[400px] min-h-[300px]",
      tier2: "w-[350px] min-h-[260px]",
      tier3: "w-[230px] h-[130px]",
      tier4: "w-[180px] h-[100px]"
    };

    const containerClasses = `bg-card rounded-lg p-6 flex flex-col items-center justify-between border border-terminal-border hover:border-primary/50 transition-all duration-300 gap-4 group ${cardStyles[tierClass]}`;

    if (sponsor.url) {
      return (
        <a
          key={index}
          href={sponsor.url}
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
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-foreground mb-4">
              <span className="text-primary">&lt;</span>
              Nuestros Aliados
              <span className="text-primary">/&gt;</span>
            </h2>
          </div>

          <div className="space-y-12">
            {/* Tier 1 */}
            <div className="flex justify-center items-center gap-8 flex-wrap">
              {sponsorsByTier.tier1.map((sponsor, index) =>
                renderSponsorCard(sponsor, index, "tier1")
              )}
            </div>

            {/* Tier 2 */}
            <div className="flex justify-center items-center gap-6 flex-wrap">
              {sponsorsByTier.tier2.map((sponsor, index) =>
                renderSponsorCard(sponsor, index, "tier2")
              )}
            </div>

            {/* Tier 3 */}
            <div className="flex justify-center items-center gap-4 flex-wrap">
              {sponsorsByTier.tier3.map((sponsor, index) =>
                renderSponsorCard(sponsor, index, "tier3")
              )}
            </div>

            {/* Tier 4 */}
            <div className="flex justify-center items-center gap-3 flex-wrap">
              {sponsorsByTier.tier4.map((sponsor, index) =>
                renderSponsorCard(sponsor, index, "tier4")
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsCarousel;