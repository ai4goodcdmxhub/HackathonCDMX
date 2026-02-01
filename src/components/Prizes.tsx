import { Trophy, Gift, Star } from "lucide-react";

const Prizes = () => {
  return (
    <section className="py-24 bg-gradient-terminal relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section header */}
          <div className="mb-12">
            <div className="inline-block font-mono text-primary text-sm mb-4">
              <span className="animate-blink">▶</span> ./rewards.sh
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-mono mb-6">
              <span className="text-primary">&lt;</span>
              <span className="text-foreground">Premios</span>
              <span className="text-primary">/&gt;</span>
            </h2>
          </div>

          {/* Coming soon card */}
          <div className="relative bg-card border-2 border-primary/30 rounded-lg p-12 animate-glow-pulse">
            <div className="flex flex-col items-center gap-6">
              {/* Icons */}
              <div className="flex gap-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Trophy className="w-8 h-8 text-primary" />
                </div>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Gift className="w-8 h-8 text-primary" />
                </div>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Star className="w-8 h-8 text-primary" />
                </div>
              </div>

              {/* Text */}
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-bold font-mono text-foreground">
                  Estamos preparando algo muy especial para ti
                </h3>
                <p className="text-muted-foreground font-mono max-w-xl mx-auto mt-4">
                  Pronto revelaremos los incentivos que impulsarán tu camino como líder en ética y privacidad.
                </p>
              </div>

              {/* Decorative elements */}
              <div className="flex gap-2 mt-4">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
