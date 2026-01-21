import { Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Sponsors = () => {
  return (
    <section className="py-24 bg-gradient-terminal relative">
      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section header */}
          <div className="mb-12">
            <div className="inline-block font-mono text-primary text-sm mb-4">
              <span className="animate-blink">▶</span> ./sponsors.sh
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-mono mb-6">
              <span className="text-primary">&lt;</span>
              <span className="text-foreground">Alianzas y Patrocinadores</span>
              <span className="text-primary">/&gt;</span>
            </h2>
          </div>

          {/* Sponsorship card */}
          <div className="relative bg-card border-2 border-primary/30 rounded-lg p-12 animate-glow-pulse">
            <div className="flex flex-col items-center gap-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Handshake className="w-8 h-8 text-primary" />
              </div>

              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-bold font-mono text-foreground">
                  ¿Quieres estar presente en el evento más top?
                </h3>
                <p className="text-xl text-primary font-mono">
                  Escríbenos a{" "}
                  <a
                    href="mailto:mexicocityhub@youngaileaders.info"
                    className="underline hover:text-primary/80"
                  >
                    mexicocityhub@youngaileaders.info
                  </a>
                </p>

                {/* Nuevo botón */}
                <div className="pt-6">
                  <Button
                    asChild
                    size="lg"
                    className="font-mono text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow border-2 border-primary hover:shadow-[0_0_60px_hsl(123_100%_50%/0.4)] transition-all duration-300"
                  >
                    <Link to="/aliados">
                      ¡Quieres sumarte?
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;