import { Calendar, Clock, Coffee, Lightbulb, Trophy, Users } from "lucide-react";

const Schedule = () => {
  const scheduleDay1 = [
    {
      time: "9:00 a.m.",
      title: "Apertura de puertas y registro de participantes",
      icon: Users,
      description: "",
    },
    {
      time: "9:20 a.m.",
      title: "Bienvenida general",
      icon: Lightbulb,
      description: 'Mensaje de apertura, propósito del evento ("Why now?"), agradecimiento a los sponsors principales y presentación del jurado',
    },
    {
      time: "9:25 a.m.",
      title: "Pendiente por definir charla",
      icon: Lightbulb,
      description: "",
    },
    {
      time: "9:40 a.m.",
      title: "Pendiente por definir charla",
      icon: Lightbulb,
      description: "",
    },
    {
      time: "10:10 a.m.",
      title: "Pendiente por definir charla",
      icon: Lightbulb,
      description: "",
    },
    {
      time: "10:40 a.m.",
      title: "Pendiente por definir charla",
      icon: Lightbulb,
      description: "",
    },
    {
      time: "11:10 a.m.",
      title: "Pendiente por definir charla",
      icon: Lightbulb,
      description: "",
    },
    {
      time: "11:30 a.m.",
      title: "Inicio oficial de la hackathon",
      icon: Clock,
      description: "",
      highlight: true,
    },
    {
      time: "11:50 a.m.",
      title: "Primera ronda de mentorías",
      icon: Users,
      description: "",
    },
    {
      time: "1:00 p.m.",
      title: "Almuerzo",
      icon: Coffee,
      description: "",
    },
    {
      time: "8:00 p.m.",
      title: "Cena",
      icon: Coffee,
      description: "",
    },
  ];

  const scheduleDay2 = [
    {
      time: "3:00 a.m.",
      title: "Snacks",
      icon: Coffee,
      description: "",
    },
    {
      time: "7:00 a.m.",
      title: "Desayuno",
      icon: Coffee,
      description: "",
    },
    {
      time: "10:00 a.m.",
      title: "Apertura de la plataforma para subir proyectos",
      icon: Clock,
      description: "",
    },
    {
      time: "11:30 a.m.",
      title: "Cierre del período de subida de proyectos",
      icon: Clock,
      description: "",
      highlight: true,
    },
    {
      time: "12:00 p.m.",
      title: "Almuerzo",
      icon: Coffee,
      description: "",
    },
    {
      time: "1:00 p.m.",
      title: "Charlas de cierre y mensajes finales, Mini speak de jurados y agradecimientos a sponsors",
      icon: Users,
      description: "",
    },
    {
      time: "1:20 p.m.",
      title: "Pendiente por definir charla",
      icon: Lightbulb,
      description: "",
    },
    {
      time: "1:30 p.m.",
      title: "Presentación de finalistas",
      icon: Trophy,
      description: "",
      highlight: true,
    },
    {
      time: "2:00 p.m.",
      title: "Deliberación",
      icon: Users,
      description: "",
    },
    {
      time: "2:30 p.m.",
      title: "Premiación y cierre oficial del evento",
      icon: Trophy,
      description: "",
      highlight: true,
    },
  ];

  return (
    <section className="py-24 bg-background relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />

      <div className="container relative z-10 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-block font-mono text-primary text-sm mb-4">
              <span className="animate-blink">▶</span> ./schedule.sh
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-mono mb-6">
              <span className="text-primary">&lt;</span>
              <span className="text-foreground">Calendario del Evento</span>
              <span className="text-primary">/&gt;</span>
            </h2>
            <p className="text-lg text-muted-foreground font-mono max-w-2xl mx-auto">
              24 horas intensas de innovación, código y construcción
            </p>
          </div>

          {/* Schedule Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Día 1 */}
            <div className="space-y-4">
              <div className="bg-gradient-terminal border-2 border-primary/50 rounded-lg p-6 text-center mb-6">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Calendar className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-bold font-mono text-foreground">
                    Sábado de Marzo
                  </h3>
                </div>
                <p className="text-sm text-primary font-mono">Día 1 - ¡Comienza la aventura!</p>
              </div>

              {scheduleDay1.map((item, index) => (
                <div
                  key={index}
                  className={`group bg-card border rounded-lg p-5 transition-all duration-300 hover:shadow-terminal ${item.highlight
                    ? 'border-primary/50 bg-primary/5 hover:border-primary'
                    : 'border-terminal-border hover:border-primary/30'
                    }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex gap-4">
                    <div className={`w-12 h-12 rounded flex items-center justify-center flex-shrink-0 ${item.highlight ? 'bg-primary/20' : 'bg-primary/10'
                      } group-hover:bg-primary/20 transition-colors`}>
                      <item.icon className={`w-6 h-6 ${item.highlight ? 'text-primary' : 'text-primary'}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <p className={`text-sm font-mono ${item.highlight ? 'text-primary font-bold' : 'text-muted-foreground'
                          }`}>
                          {item.time}
                        </p>
                      </div>
                      <h4 className="text-lg font-bold font-mono text-foreground mb-1">
                        {item.title}
                      </h4>
                      {item.description && (
                        <p className="text-sm text-muted-foreground font-mono leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Día 2 */}
            <div className="space-y-4">
              <div className="bg-gradient-terminal border-2 border-primary/50 rounded-lg p-6 text-center mb-6">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Calendar className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-bold font-mono text-foreground">
                    Domingo de Marzo
                  </h3>
                </div>
                <p className="text-sm text-primary font-mono">Día 2 - ¡El gran final!</p>
              </div>

              {scheduleDay2.map((item, index) => (
                <div
                  key={index}
                  className={`group bg-card border rounded-lg p-5 transition-all duration-300 hover:shadow-terminal ${item.highlight
                    ? 'border-primary/50 bg-primary/5 hover:border-primary'
                    : 'border-terminal-border hover:border-primary/30'
                    }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex gap-4">
                    <div className={`w-12 h-12 rounded flex items-center justify-center flex-shrink-0 ${item.highlight ? 'bg-primary/20' : 'bg-primary/10'
                      } group-hover:bg-primary/20 transition-colors`}>
                      <item.icon className={`w-6 h-6 ${item.highlight ? 'text-primary' : 'text-primary'}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <p className={`text-sm font-mono ${item.highlight ? 'text-primary font-bold' : 'text-muted-foreground'
                          }`}>
                          {item.time}
                        </p>
                      </div>
                      <h4 className="text-lg font-bold font-mono text-foreground mb-1">
                        {item.title}
                      </h4>
                      {item.description && (
                        <p className="text-sm text-muted-foreground font-mono leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Note */}
          <div className="mt-12 bg-card border border-primary/30 rounded-lg p-6 text-center">
            <p className="text-sm text-muted-foreground font-mono">
              <span className="text-primary font-bold">Nota:</span> Los horarios pueden estar sujetos a ajustes menores.
              Mantente atento a las comunicaciones oficiales del evento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;