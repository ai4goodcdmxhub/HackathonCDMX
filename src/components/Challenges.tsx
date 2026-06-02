import { Shield, Droplets, Bike, Leaf } from "lucide-react";

const Challenges = () => {
    const challenges = [
        {
            icon: Shield,
            title: "Seguridad",
            problem: "La vulnerabilidad ciudadana ante riesgos físicos en el espacio público y amenazas digitales que comprometen la identidad, la economía y la tranquilidad de las familias.",
            opportunity: "Utilizar la IA para crear entornos más seguros, detectando riesgos preventivamente y blindando la confianza del ciudadano tanto en las calles como en sus interacciones digitales.",
        },
        {
            icon: Droplets,
            title: "Gestión del Agua",
            problem: "Las inundaciones urbanas generan impactos severos, pero la evaluación del riesgo está limitada por la escasez y fragmentación de datos hidrometeorológicos y de vulnerabilidad.",
            opportunity: "Desarrollar soluciones con IA para inferir datos faltantes, predecir escenarios de inundación y fortalecer gemelos digitales para la toma de decisiones y resiliencia urbana.",
        },
        {
            icon: Bike,
            title: "Movilidad",
            problem: "Las zonas universitarias enfrentan congestión severa y conflictos viales por la desconexión entre la información de movilidad, la infraestructura y las necesidades reales de los estudiantes.",
            opportunity: "Diseñar soluciones preventivas con IA y datos urbanos para garantizar una movilidad multimodal, sustentable y segura en entornos escolares.",
        },
        {
            icon: Leaf,
            title: "Medio Ambiente",
            problem: "Los eventos masivos generan toneladas de residuos mal gestionados debido a la falta de sistemas estructurados para capturar, ordenar y analizar sus flujos.",
            opportunity: "Utilizar IA para estimar y estructurar el flujo de residuos, evaluando su impacto ambiental para impulsar estrategias de economía circular y políticas públicas.",
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
                                className="group bg-card border border-terminal-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-terminal flex flex-col gap-6"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                        <challenge.icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-2xl font-bold font-mono text-foreground group-hover:text-primary transition-colors">
                                        {challenge.title}
                                    </h3>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <p className="text-primary font-mono text-xs font-bold uppercase tracking-wider mb-2">
                                            [!] El Problema
                                        </p>
                                        <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                                            {challenge.problem}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-accent font-mono text-xs font-bold uppercase tracking-wider mb-2 text-primary">
                                            [*] La Oportunidad
                                        </p>
                                        <p className="text-foreground font-mono text-sm leading-relaxed">
                                            {challenge.opportunity}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Challenges;
