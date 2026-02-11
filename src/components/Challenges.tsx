import { Shield, Users, TrafficCone, HelpCircle } from "lucide-react";

const Challenges = () => {
    const challenges = [
        {
            icon: Shield,
            title: "Protección de Datos y Privacidad",
            description: "Desarrollar soluciones de IA que utilicen datos públicos o privados de manera ética, garantizando el anonimato y la seguridad de la información de los ciudadanos de la CDMX.",
        },
        {
            icon: Users,
            title: "Servicios Ciudadanos y Gobierno Digital",
            description: "Mejorar la eficiencia y accesibilidad de los trámites y servicios gubernamentales mediante IA, reduciendo la brecha digital y fomentando la inclusión social.",
        },
        {
            icon: TrafficCone,
            title: "Movilidad y Desarrollo Urbano Sostenible",
            description: "Optimizar el transporte público, la gestión de tráfico o el desarrollo de infraestructura urbana utilizando modelos predictivos que respeten los derechos de los habitantes.",
        },
        {
            icon: HelpCircle,
            title: "Ética y Transparencia en Algoritmos",
            description: "Crear herramientas que permitan auditar o explicar las decisiones tomadas por sistemas de IA aplicados en contextos públicos para evitar sesgos y discriminación.",
        },
    ];

    return (
        <section id="retos" className="py-24 bg-gradient-terminal relative">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            <div className="container relative z-10 px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Section header */}
                    <div className="text-center mb-16">
                        <div className="inline-block font-mono text-primary text-sm mb-4">
                            <span className="animate-blink">▶</span> ./challenges.sh
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold font-mono mb-6">
                            <span className="text-primary">&lt;</span>
                            <span className="text-foreground">Los Retos</span>
                            <span className="text-primary">/&gt;</span>
                        </h2>
                        <p className="text-lg text-muted-foreground font-mono max-w-2xl mx-auto">
                            Elige una categoría y desarrolla una solución que transforme la Ciudad de México con Concienc.ia
                        </p>
                    </div>

                    {/* Challenges Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {challenges.map((challenge, index) => (
                            <div
                                key={index}
                                className="group bg-card border border-terminal-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-terminal flex flex-col gap-4"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <challenge.icon className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold font-mono text-foreground group-hover:text-primary transition-colors">
                                    {challenge.title}
                                </h3>
                                <p className="text-muted-foreground font-mono leading-relaxed">
                                    {challenge.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Challenges;
