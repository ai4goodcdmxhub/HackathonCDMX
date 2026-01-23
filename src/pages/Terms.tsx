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
            <p className="text-muted-foreground mt-4">24h - Hackathon México 2025</p>
          </div>

          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-primary font-mono mb-4">
                1. Proceso de Preinscripción y Selección
              </h2>
              <p>
                Evaluaremos los perfiles de todos los preinscritos. Se seleccionarán los perfiles más interesantes, con las propuestas más innovadoras y que demuestren habilidades relevantes para el evento.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary font-mono mb-4">
                2. Comunicación y Formación de Equipos
              </h2>
              <p>
                Nos contactaremos con los elegidos a través de los datos proporcionados. Se creará un grupo de comunicación donde los participantes podrán interactuar y formar sus equipos. Los equipos deberán tener un mínimo de 3 y un máximo de 5 personas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary font-mono mb-4">
                3. Desarrollo del Evento
              </h2>
              <p className="mb-4">
                El evento se desarrollará de manera presencial en Ciudad de México, y la ubicación exacta será compartida únicamente con los participantes seleccionados.
              </p>
              <p className="mb-4">
                Será una jornada continua de 24 horas, desde las 10:00 a.m. del sábado 21 de Marzo hasta la 1:00 p.m. del domingo 22 de Marzo de 2026. Se brindará alimentación básica durante todo el evento, pero cada participante deberá llevar los elementos personales y técnicos que considere necesarios para trabajar cómodamente, incluyendo:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 pl-4">
                <li>Su computador portátil (de uso obligatorio).</li>
                <li>Cargadores, extensiones eléctricas y adaptadores que pueda requerir.</li>
                <li>Snacks, bebidas u otros artículos personales que le ayuden a mantenerse cómodo/a durante la jornada.</li>
              </ul>
              <p>
                El espacio estará habilitado para el trabajo colaborativo continuo, por lo que se recomienda a los participantes prepararse para una experiencia intensa, creativa y de aprendizaje inmersivo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary font-mono mb-4">
                4. Reglas del Proyecto
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Todos los proyectos deben ser desarrollados íntegramente durante el tiempo de la hackathon.</li>
                <li>Los equipos que presenten trabajo previamente desarrollado serán descalificados inmediatamente.</li>
                <li>Se permite el uso de librerías y frameworks de código abierto.</li>
                <li>El uso de herramientas de Inteligencia Artificial para asistir en la codificación está permitido, pero el proyecto final debe ser de autoría del equipo.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary font-mono mb-4">
                5. Código de Conducta
              </h2>
              <h3 className="text-xl font-bold text-foreground font-mono mt-6 mb-2">Comportamientos Esperados</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Sé Respetuoso y Considerado:</strong> Trata a todas las personas con respeto. Valora la diversidad de opiniones, perspectivas y experiencias. Sé amable y constructivo en tus comunicaciones.</li>
                <li><strong>Sé Inclusivo:</strong> Ayuda a crear un ambiente donde todas las personas se sientan bienvenidas y cómodas para participar plenamente.</li>
                <li><strong>Sé Colaborativo:</strong> Fomenta un espíritu de colaboración. Si bien es una competencia, compartir conocimientos (cuando sea apropiado) y ayudarse mutuamente enriquece la experiencia de todos.</li>
                <li><strong>Sé Consciente del Lenguaje:</strong> Utiliza un lenguaje acogedor e inclusivo. Evita comentarios o chistes ofensivos, discriminatorios o excluyentes.</li>
                <li><strong>Respeta la Originalidad y la Propiedad Intelectual:</strong> Presenta trabajos que sean sustancialmente tuyos o de tu equipo, desarrollados principalmente durante el período del hackathon. Si utilizas código abierto, librerías o activos preexistentes, asegúrate de cumplir con sus licencias y da el crédito adecuado.</li>
                <li><strong>Enfócate en el Espíritu del Evento:</strong> Participa con la intención de aprender, construir algo innovador y resolver problemas reales utilizando IA.</li>
              </ul>

              <h3 className="text-xl font-bold text-foreground font-mono mt-6 mb-2">Comportamientos Inaceptables</h3>
              <p className="mb-2">Los siguientes comportamientos son inaceptables y constituyen violaciones de este Código de Conducta:</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Acoso:</strong> Incluye comentarios ofensivos, intimidación deliberada, acecho, seguimiento, fotografía o grabación acosadora, interrupción sostenida de charlas u otros eventos, contacto físico inapropiado y atención sexual no deseada.</li>
                <li><strong>Discriminación:</strong> Cualquier forma de trato injusto basado en características personales.</li>
                <li><strong>Lenguaje o Imágenes Inapropiadas:</strong> Usar lenguaje o imágenes sexuales, violentas u ofensivas en los espacios del evento.</li>
                <li><strong>Comportamiento Disruptivo:</strong> Cualquier acción que perturbe el buen desarrollo del evento o cree un ambiente inseguro o intimidante.</li>
                <li><strong>Plagio o Infracción de Propiedad Intelectual:</strong> Presentar el trabajo de otros como propio.</li>
                <li><strong>Spam o Publicidad No Solicitada:</strong> Enviar mensajes no deseados o promocionales en los canales de comunicación oficiales.</li>
              </ul>

              <h3 className="text-xl font-bold text-foreground font-mono mt-6 mb-2">Consecuencias</h3>
              <p>
                Cualquier participante que viole este Código de Conducta puede ser sancionado o expulsado del hackathon a discreción de los organizadores. Las sanciones pueden ir desde una advertencia hasta la expulsión inmediata y prohibición de participar en futuros eventos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary font-mono mb-4">
                6. Preguntas Frecuentes (FAQ)
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground font-mono mb-2">¿Qué cosas necesito llevar?</h3>
                  <p>Recuerda que esto es un evento de 24 horas. Vamos a tener comida, agua, café y todo lo que puedas necesitar, pero igual recuerda llevar ropa cómoda, tu computador y el cargador. Si quieres llevar snacks extra, dale sin problema.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground font-mono mb-2">¿Puedo traer código ya desarrollado?</h3>
                  <p>No, solo puedes traer la idea. Los jueces evaluarán únicamente el trabajo realizado durante las 24 horas del evento.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground font-mono mb-2">¿De quién son los derechos de propiedad intelectual?</h3>
                  <p>Los participantes retienen la titularidad completa de todos los derechos de propiedad intelectual sobre sus desarrollos. Ni los organizadores ni los patrocinadores del hackathon adquieren ningún derecho sobre las creaciones de los participantes. Para efectos de evaluación, se requiere que los proyectos sean de acceso público durante el evento (código, documentación y materiales). Esta visibilidad es exclusivamente para permitir la valoración del jurado y no implica transferencia alguna de derechos.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;