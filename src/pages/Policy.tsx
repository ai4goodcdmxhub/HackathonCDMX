import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background font-mono text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-24 pt-32">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-mono">
              <span className="text-primary">&lt;</span>
              Términos y Condiciones
              <span className="text-primary">/&gt;</span>
            </h1>
            <p className="text-muted-foreground mt-4">Hackathon AI for Good Ciudad de México 2025</p>
            <p className="text-sm text-muted-foreground mt-2">Organiza: Fundación Young AI Leaders México</p>
            <p className="text-sm text-muted-foreground">Marzo 21 y 22, 2026 | Ciudad de México, México</p>
          </div>

          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-primary font-mono mb-4">
                1. Objeto y propósito del evento
              </h2>
              <p>
                La Hackathon AI for Good Ciudad de México 2025, organizada por la Fundación Young AI Leaders México, es un evento de innovación tecnológica, colaborativa y educativa enfocado en el desarrollo de soluciones basadas en Inteligencia Artificial (IA) con propósito social. El objetivo principal es fomentar el aprendizaje, la creatividad y la aplicación ética de la IA para resolver desafíos relacionados con los Objetivos de Desarrollo Sostenible (ODS) en México.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary font-mono mb-4">
                2. Proceso de inscripción y participación
              </h2>
              <p>
                Los interesados deberán diligenciar el formulario de preinscripción disponible en los canales oficiales de la Fundación. La selección de los participantes se realizará según criterios de diversidad, motivación, habilidades y pertinencia de las ideas propuestas. La Fundación se reserva el derecho de aceptar o rechazar postulaciones según el cumplimiento de los requisitos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary font-mono mb-4">
                3. Formación de equipos y roles
              </h2>
              <p>
                Los equipos estarán conformados por un mínimo de tres (3) y un máximo de cinco (5) personas. Durante la etapa inicial se fomentará la integración interdisciplinaria. Cada equipo elegirá un líder responsable de la comunicación con la organización.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary font-mono mb-4">
                4. Desarrollo del evento y reglas técnicas
              </h2>
              <p className="mb-4">
                El evento se realizará de manera presencial en Ciudad de México. Tendrá una duración continua, iniciando a las 10:00 a.m. del sábado 21 de Marzo de 2026 y finalizando a la 1:00 p.m. del domingo 22 de Marzo de 2026. Se proporcionará alimentación básica y zonas de descanso. Cada participante será responsable de llevar su computador portátil, cargadores, adaptadores y elementos personales necesarios.
              </p>
              <p>
                Todos los proyectos deberán desarrollarse íntegramente durante la hackathon. No se permitirá el uso de código o proyectos previos. El uso de herramientas de IA generativa será permitido siempre que el resultado final sea de autoría del equipo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary font-mono mb-4">
                5. Código de conducta y principios de ética en IA
              </h2>
              <p>
                La Fundación promueve un ambiente inclusivo, respetuoso y colaborativo. Se prohíbe toda forma de acoso, discriminación o comportamiento inapropiado. Los participantes deben actuar conforme a los valores de integridad, transparencia y respeto por la diversidad. El uso de la IA deberá alinearse con los principios de ética, equidad y no discriminación.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary font-mono mb-4">
                6. Propiedad intelectual y derechos de uso
              </h2>
              <p>
                Los derechos de propiedad intelectual sobre los proyectos desarrollados durante la hackathon pertenecen íntegramente a sus autores. La Fundación Young AI Leaders México no reclama la titularidad de los productos o prototipos creados. No obstante, los equipos autorizan a la Fundación a difundir públicamente los proyectos, imágenes, nombres y resultados con fines educativos, comunicativos y de promoción del evento.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary font-mono mb-4">
                7. Tratamiento y protección de datos personales
              </h2>
              <p>
                La Fundación Young AI Leaders México actuará como responsable del tratamiento de los datos personales recolectados durante el proceso de inscripción, participación y evaluación del evento. La información será tratada conforme a normativas aplicables sobre protección de datos personales en México. Los datos se utilizarán exclusivamente para fines de gestión del evento, comunicación institucional, estadísticas y seguimiento de impacto. Los participantes podrán ejercer sus derechos de acceso, rectificación, actualización y supresión mediante solicitud al correo: mexicocityhub@youngaileaders.info.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary font-mono mb-4">
                8. Uso de imagen, grabaciones y difusión
              </h2>
              <p>
                Durante el evento se podrán tomar fotografías, grabaciones de video y entrevistas. Al inscribirse, los participantes autorizan el uso gratuito y sin límite temporal de su imagen, voz y nombre en materiales de comunicación y divulgación de la Fundación Young AI Leaders México y sus aliados.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary font-mono mb-4">
                9. Inclusión, diversidad y equidad
              </h2>
              <p>
                La Fundación garantiza un entorno libre de discriminación por género, orientación sexual, etnia, discapacidad, religión o condición social. Se promoverá la participación equitativa de mujeres, jóvenes y grupos minoritarios en todas las fases del evento.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary font-mono mb-4">
                10. Seguridad, salud y responsabilidad personal
              </h2>
              <p>
                Cada participante es responsable de su bienestar físico y mental durante la jornada. La Fundación dispondrá de medidas básicas de seguridad y acompañamiento, pero no asume responsabilidad por accidentes, pérdidas de pertenencias o incidentes fuera de su control.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary font-mono mb-4">
                11. Premios, reconocimientos y compromisos posteriores
              </h2>
              <p>
                Los equipos ganadores recibirán reconocimientos, acompañamiento técnico y oportunidades de incubación. Los premios no son transferibles ni canjeables por dinero en efectivo. Los participantes se comprometen a mantener informada a la Fundación sobre el progreso de sus proyectos después del evento.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary font-mono mb-4">
                12. Cláusula de confidencialidad
              </h2>
              <p>
                Los participantes se comprometen a no divulgar información confidencial compartida por los organizadores o patrocinadores. Cualquier material o dato sensible obtenido durante la hackathon deberá usarse exclusivamente para el desarrollo del proyecto.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary font-mono mb-4">
                13. Fuerza mayor y exoneración de responsabilidad
              </h2>
              <p>
                La Fundación no será responsable por la cancelación o modificación del evento debido a causas de fuerza mayor, incluyendo desastres naturales, problemas técnicos, situaciones de orden público o restricciones gubernamentales. En tales casos, la organización podrá reprogramar el evento o adoptar modalidades alternativas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary font-mono mb-4">
                14. Disposiciones finales
              </h2>
              <p className="mb-4">
                La participación en la Hackathon AI for Good Ciudad de México 2025 implica la aceptación íntegra de estos Términos y Condiciones. Cualquier situación no prevista será resuelta por el comité organizador conforme a los principios de transparencia y equidad.
              </p>
              <p className="text-sm">
                Contacto oficial: <a href="mailto:mexicocityhub@youngaileaders.info" className="text-primary hover:underline">mexicocityhub@youngaileaders.info</a>
              </p>
              <p className="text-sm mt-2">
                © Fundación Young AI Leaders México - Todos los derechos reservados.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;