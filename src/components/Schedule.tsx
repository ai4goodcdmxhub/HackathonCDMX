import { Calendar, Clock, Coffee, Lightbulb, Trophy, Users, Code2, MapPin } from "lucide-react";

interface ScheduleItem {
  time: string;
  title: string;
  icon: any;
  description: string;
  highlight?: boolean;
}

const Schedule = () => {
  const scheduleDay1: ScheduleItem[] = [
    {
      time: "08:00 a.m. – 09:30 a.m.",
      title: "Registro de participantes y networking de bienvenida",
      icon: Users,
      description: "",
    },
    {
      time: "09:30 a.m. – 10:00 a.m.",
      title: "Ceremonia de Apertura",
      icon: Users,
      description: "Representante de Young AI Leaders Mexico City Hub, Tecnológico de Monterrey y Agencia de Innovación Pública",
    },
    {
      time: "10:00 a.m. – 11:00 a.m.",
      title: "MasterClass de Apertura",
      icon: Lightbulb,
      description: "Leonardo Zubieta Angulo - Advisory AI & MLOps Technical Specialist y Quantum Ambassador, IBM",
    },
    {
      time: "11:00 a.m. – 12:00 p.m.",
      title: "Instrucciones del hackathon y formación de equipos",
      icon: Users,
      description: "",
    },
    {
      time: "12:00 p.m. – 01:30 p.m.",
      title: "Protectores del Futuro: Construyendo una IA bajo el marco de la Integridad Ética",
      icon: Lightbulb,
      description: "Paola Cicero Arenas – Oficial Nacional de Ciencias Sociales y Humanas, UNESCO México",
    },
    {
      time: "01:30 p.m. – 02:30 p.m.",
      title: "Mis datos, mi propiedad: El futuro del almacenamiento digital",
      icon: Lightbulb,
      description: "Jesse Wright – Solid",
    },
    {
      time: "02:30 p.m. – 03:30 p.m.",
      title: "Comida",
      icon: Coffee,
      description: "",
    },
    {
      time: "03:30 p.m. – 04:00 p.m.",
      title: "Comunica la Ciudad: Agenda Pública Urbana en tiempos de IA",
      icon: Lightbulb,
      description: "Jonás Vázquez Betancourt - Fundador, Comunica la Ciudad",
    },
    {
      time: "04:00 p.m. – 05:30 p.m.",
      title: "De Prompts a Agentes: Construyendo IA que Actúa",
      icon: Lightbulb,
      description: "Arnulfo Alejandro Cavazos Villarreal — Data and AI Technical Specialist, IBM",
    },
    {
      time: "05:30 p.m. – 06:30 p.m.",
      title: "Taller Creación de Pitch Deck",
      icon: Lightbulb,
      description: "Priscilla Vázquez, Speaker Tecnológico de Monterrey",
    },
    {
      time: "06:30 p.m. – 08:00 p.m.",
      title: "Sesión de ideación y cierre del primer día",
      icon: Lightbulb,
      description: "",
    },
  ];

  const scheduleDay2: ScheduleItem[] = [
    {
      time: "08:00 a.m. – 12:00 p.m.",
      title: "Sprint de Desarrollo Intensivo",
      icon: Code2,
      description: "Estudiantes y mentores",
    },
    {
      time: "12:00 p.m. – 01:30 p.m.",
      title: "Pitch Readiness & Subida de Proyectos",
      icon: Lightbulb,
      description: "",
    },
    {
      time: "01:30 p.m. – 02:30 p.m.",
      title: "Entrega de constancias",
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
              Jornada intensiva de co-creación, ética y soluciones urbanas
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
                    5 de Junio
                  </h3>
                </div>
                <p className="text-sm text-primary font-mono">Día 1 - ¡Comienza la aventura!</p>
                <div className="flex items-center justify-center gap-2 mt-3 text-muted-foreground font-mono text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-center">Tec de Monterrey Campus Ciudad de México<br/>Salón de Usos Múltiples en Aulas II</span>
                </div>
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
                    6 de Junio
                  </h3>
                </div>
                <p className="text-sm text-primary font-mono">Día 2 - ¡El gran final!</p>
                <div className="flex items-center justify-center gap-2 mt-3 text-muted-foreground font-mono text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-center">Tec de Monterrey Campus Ciudad de México<br/>CEDETEC</span>
                </div>
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