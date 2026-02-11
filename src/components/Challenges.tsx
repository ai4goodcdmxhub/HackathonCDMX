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
            problem: "Una crisis hídrica agravada por fugas invisibles, una distribución desigual del recurso y falta de transparencia en su gestión.",
            opportunity: "Aplicar IA para predecir pérdidas en la red, optimizar el reparto equitativo y asegurar que cada gota sea contabilizada con justicia.",
        },
        {
            icon: Bike,
            title: "Movilidad",
            problem: "Trayectos ineficientes y desconectados que roban tiempo de vida, sumados a una falta de datos precisos para integrar ciclovías y transporte público.",
            opportunity: "Analizar flujos urbanos con IA para sincronizar la ciudad, creando una movilidad multimodal que se adapte al ritmo real de las personas.",
        },
        {
            icon: Leaf,
            title: "Medio Ambiente",
            problem: "Infracciones ambientales que quedan impunes debido a errores técnicos en el reporte o falta de evidencia con validez legal.",
            opportunity: "Implementar sistemas inteligentes de monitoreo y trazabilidad que documenten daños ambientales de forma irrefutable y técnica.",
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
