import { useEffect, useState } from "react";

// Definir los sponsors por niveles
const sponsorsByTier = {
  tier1: [
    { name: "Hub CDMX", logo: "/sponsors/hubcdmx.png" },
    { name: "TDN", logo: "/sponsors/tdn.png" }
  ],
  tier2: [
    { name: "Nodi", logo: "/sponsors/nodi.png" }
  ],
  tier3: [
    { name: "Lovable", logo: "/sponsors/lovable.png" }
  ],
  tier4: [
    { name: "Kinoia", logo: "/sponsors/kinoia.png" },

  ]
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
                  className="bg-card rounded-lg p-8 flex items-center justify-center border border-terminal-border hover:border-primary/50 transition-all duration-300"
                  style={{ width: '400px', height: '200px' }}
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-h-32 w-auto object-contain"
                  />
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