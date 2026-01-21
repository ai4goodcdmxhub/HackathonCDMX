import { Code2, Lightbulb, Rocket } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Code2,
      title: "Para Builders",
      description: "Programadores y cracks de producto que también ejecutan. Si construyes, este es tu lugar.",
    },
    {
      icon: Lightbulb,
      title: "Cambia el Mundo",
      description: "Buscamos productos con el potencial de cambiar las reglas del juego y crear impacto real.",
    },
    {
      icon: Rocket,
      title: "Mentores Expertos",
      description: "Tendrás acceso a mentores experimentados durante las 24 horas del evento.",
    },
  ];

  return (
    <section className="py-24 bg-background relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Organizer badge */}
          <div className="text-center mb-8">
            <div className="inline-block bg-card border border-primary/30 rounded-full px-6 py-2 animate-glow-pulse">
              <p className="font-mono text-sm">
                <span className="text-muted-foreground">Organizado por</span>{" "}
                <span className="text-primary font-bold">Young AI Leaders Bogotá</span>
              </p>
            </div>
          </div>

          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-block font-mono text-primary text-sm mb-4">
              <span className="animate-blink">▶</span> ./about.sh
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-mono mb-6">
              <span className="text-primary">&lt;</span>
              <span className="text-foreground">El Evento</span>
              <span className="text-primary">/&gt;</span>
            </h2>
            <p className="text-lg text-muted-foreground font-mono max-w-2xl mx-auto mb-4">
              Un hackathon intenso donde la innovación, ejecución técnica e impacto se encuentran.
            </p>
            <p className="text-xl text-primary font-mono font-bold max-w-2xl mx-auto">
              Haciendo de Bogotá el centro de la innovación con IA
            </p>
          </div>
          
          {/* Features grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-card border border-terminal-border rounded p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-terminal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-mono mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Key message */}
          <div className="bg-gradient-terminal border-2 border-primary/30 rounded-lg p-8 text-center animate-glow-pulse">
            <p className="text-2xl md:text-3xl font-bold font-mono text-foreground mb-4">
              Llega sin equipo
            </p>
            <p className="text-lg text-primary font-mono">
              Conoce y construye con personas increíbles que comparten tu pasión por crear.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
