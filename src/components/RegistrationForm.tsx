const RegistrationForm = () => {
  return (
    <section id="registro" className="py-24 bg-background relative scroll-mt-20">
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />

      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <div className="inline-block font-mono text-primary text-sm mb-4">
              <span className="animate-blink">▶</span> ./register.sh
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-mono mb-6">
              <span className="text-primary">&lt;</span>
              <span className="text-foreground">Pre-inscripción</span>
              <span className="text-primary">/&gt;</span>
            </h2>
            <p className="text-lg text-muted-foreground font-mono max-w-2xl mx-auto">
              El registro ha cerrado. ¡Gracias por tu interés!
            </p>
          </div>

          {/* Closed Message */}
          <div className="bg-card border border-terminal-border rounded-lg p-8 shadow-terminal text-center">
            <p className="text-xl text-foreground font-mono mb-4">
              Las inscripciones para el hackathon han finalizado.
            </p>
            <p className="text-md text-muted-foreground font-mono">
              Mantente al tanto de nuestras redes sociales para próximos eventos y novedades.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;