import { useEffect, useState } from "react";

// Definir los sponsors por niveles
const sponsorsByTier = {
  tier1: [
    { name: "Young AI Leaders Mexico City Hub", logo: "/sponsors/hubcdmx.png" },
    { name: "Tecnológico de Monterrey Escuela de Ingeniería y Ciencias", logo: "/sponsors/Ing.png" },
    { name: "Open Data Institute", logo: "/sponsors/ODI.png" },
    { name: "The DoT Network", logo: "/sponsors/tdn.png" },
    { name: "Agencia Digital de Innovación Pública", logo: "/sponsors/ADIP.png" },
    { name: "Semantyk", logo: "/sponsors/smtk.png" },
  ],
  tier2: [],
  tier3: [],
  tier4: []
};

const SponsorsCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);

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
            {/* Tier 1 - Logos Principales (CORREGIDO) */}
            {/* Se agregó gap-8 y flex-wrap para que se acomoden lado a lado */}
            <div className="flex justify-center items-center gap-8 flex-wrap">
              {sponsorsByTier.tier1.map((sponsor, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg p-6 flex flex-col items-center justify-between border border-terminal-border hover:border-primary/50 transition-all duration-300 gap-4"
                  style={{ width: '400px', minHeight: '300px' }}
                >
                  <div className="flex-1 flex items-center justify-center w-full">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className={`${sponsor.logo.includes('Ing.png') ? 'max-h-64' : 'max-h-32'} w-auto object-contain`}
                    />
                  </div>
                  <p className="font-mono font-bold text-sm text-foreground text-center">
                    {sponsor.name}
                  </p>
                </div>
              ))}
            </div>

            {/* Tier 2 - Logos Grandes */}
            <div className="flex justify-center items-center gap-6 flex-wrap">
              {sponsorsByTier.tier2.map((sponsor, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg p-6 flex items-center justify-center border border-terminal-border hover:border-primary/50 transition-all duration-300"
                  style={{ width: '300px', height: '160px' }}
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-h-20 w-auto object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Tier 3 - Logos Medianos */}
            <div className="flex justify-center items-center gap-4 flex-wrap">
              {sponsorsByTier.tier3.map((sponsor, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg p-4 flex items-center justify-center border border-terminal-border hover:border-primary/50 transition-all duration-300"
                  style={{ width: '230px', height: '130px' }}
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-h-14 w-auto object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Tier 4 - Logos Pequeños */}
            <div className="flex justify-center items-center gap-3 flex-wrap">
              {sponsorsByTier.tier4.map((sponsor, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg p-3 flex items-center justify-center border border-terminal-border hover:border-primary/50 transition-all duration-300"
                  style={{ width: '180px', height: '100px' }}
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-h-10 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsCarousel;