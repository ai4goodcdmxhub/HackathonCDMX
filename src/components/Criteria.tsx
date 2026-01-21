import { BarChart3, Sparkles, Heart, Presentation, TrendingUp } from "lucide-react";

const Criteria = () => {
  const criteria = [
    {
      icon: BarChart3,
      title: "Ejecución Técnica",
      percentage: 30,
      description: "Calidad del código, arquitectura, y uso de tecnologías",
    },
    {
      icon: Heart,
      title: "Impacto Social/Ambiental",
      percentage: 25,
      description: "Potencial de generar cambio positivo en el mundo",
    },
    {
      icon: Sparkles,
      title: "Innovación",
      percentage: 20,
      description: "Creatividad y originalidad de la solución propuesta",
    },
    {
      icon: TrendingUp,
      title: "Viabilidad",
      percentage: 15,
      description: "Factibilidad de implementación y escalabilidad",
    },
    {
      icon: Presentation,
      title: "Pitch y UX",
      percentage: 10,
      description: "Presentación del proyecto y experiencia de usuario",
    },
  ];

  return (
    <section className="py-24 bg-background relative">
      <div className="container px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-block font-mono text-primary text-sm mb-4">
              <span className="animate-blink">▶</span> ./evaluation_criteria.sh
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-mono mb-6">
              <span className="text-primary">&lt;</span>
              <span className="text-foreground">Criterios de Evaluación</span>
              <span className="text-primary">/&gt;</span>
            </h2>
            <p className="text-lg text-muted-foreground font-mono max-w-2xl mx-auto">
              Tu proyecto será evaluado bajo estos criterios clave
            </p>
          </div>

          {/* Criteria list */}
          <div className="space-y-6">
            {criteria.map((criterion, index) => (
              <div
                key={index}
                className="group bg-card border border-terminal-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-terminal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  {/* Icon and title */}
                  <div className="flex items-start gap-4 md:w-1/3">
                    <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <criterion.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-mono text-foreground mb-1">
                        {criterion.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-mono">
                        {criterion.description}
                      </p>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="md:w-2/3 flex items-center gap-4">
                    <div className="flex-1 bg-muted rounded-full h-3 overflow-hidden border border-terminal-border">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out relative overflow-hidden"
                        style={{ width: `${criterion.percentage}%` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold font-mono text-primary min-w-[4rem] text-right">
                      {criterion.percentage}%
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="mt-8 text-center">
            <div className="inline-block bg-gradient-terminal border-2 border-primary/50 rounded-lg px-8 py-4">
              <p className="text-sm text-muted-foreground font-mono mb-1">Total</p>
              <p className="text-4xl font-bold font-mono text-primary">100%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Criteria;
