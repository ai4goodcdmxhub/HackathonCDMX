import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Policy = () => {
  return (
    <div className="min-h-screen bg-background font-mono text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-24 pt-32">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-mono">
              <span className="text-primary">&lt;</span>
              Aviso de Privacidad
              <span className="text-primary">/&gt;</span>
            </h1>
            <p className="text-muted-foreground mt-4">Concienc.ia Hackathon</p>
            <p className="text-sm text-muted-foreground mt-2">Organiza: Young AI Leaders México</p>
            <p className="text-sm text-muted-foreground">Última actualización: Febrero 2026</p>
          </div>

          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-primary font-mono mb-4">
                1. Responsable del Tratamiento
              </h2>
              <p>
                Young AI Leaders (YAIL) Mexico City Hub, con domicilio para oír y recibir notificaciones el correo oficial mexicocityhub@youngaileaders.info, es el responsable del tratamiento de sus datos personales, en cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (México).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary font-mono mb-4">
                2. Datos Personales Recabados
              </h2>
              <p className="mb-4">
                Para los fines del evento Concienc.ia Hackathon, recabamos los siguientes datos personales:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Nombre completo</li>
                <li>Correo electrónico</li>
                <li>Número de teléfono celular</li>
                <li>Perfiles profesionales (LinkedIn, GitHub, Portafolio)</li>
                <li>Información académica y profesional (Tipo de perfil, especialidad)</li>
                <li>Ideas y propuestas de proyecto desarrolladas para el evento</li>
                <li>Imagen y voz (mediante grabaciones o fotografías durante el evento)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary font-mono mb-4">
                3. Finalidades del Tratamiento
              </h2>
              <p className="mb-4">
                Sus datos serán utilizados para las siguientes finalidades primarias:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Gestionar su proceso de inscripción y selección para el hackathon.</li>
                <li>Facilitar la formación de equipos y la comunicación entre participantes.</li>
                <li>Coordinar la logística del evento presencial los días 13 y 14 de marzo de 2026.</li>
                <li>Evaluar los proyectos presentados por parte del jurado.</li>
                <li>Registro de asistencia y medidas de seguridad en las instalaciones del Tec de Monterrey.</li>
              </ul>
              <p className="mt-4 mb-4">
                Finalidades secundarias:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Difusión de resultados y promoción de futuras ediciones del evento.</li>
                <li>Uso de imagen y voz en materiales de comunicación y redes sociales del Hub.</li>
                <li>Envío de ofertas laborales o información de patrocinadores (solo si usted marcó la casilla de consentimiento en el formulario).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary font-mono mb-4">
                4. Transferencia de Datos
              </h2>
              <p>
                Le informamos que sus datos personales podrán ser compartidos con nuestros patrocinadores y aliados estratégicos únicamente con fines de reclutamiento y vinculación profesional, siempre y cuando usted haya otorgado su consentimiento explícito en el formulario de registro. Fuera de estos casos, no realizaremos transferencias de sus datos a terceros sin su permiso, salvo las excepciones previstas en ley.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary font-mono mb-4">
                5. Derechos ARCO
              </h2>
              <p>
                Usted tiene derecho a conocer qué datos tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición). Estos se conocen como derechos ARCO.
              </p>
              <p className="mt-4">
                Para el ejercicio de cualquiera de los derechos ARCO, usted deberá enviar una solicitud al correo electrónico: <a href="mailto:mexicocityhub@youngaileaders.info" className="text-primary hover:underline">mexicocityhub@youngaileaders.info</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary font-mono mb-4">
                6. Uso de Cookies
              </h2>
              <p>
                Este sitio web puede utilizar cookies para mejorar la experiencia del usuario y analizar el tráfico de forma anónima. Usted puede desactivar las cookies desde la configuración de su navegador.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary font-mono mb-4">
                7. Cambios al Aviso de Privacidad
              </h2>
              <p>
                El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales o de nuestras propias necesidades por los servicios que ofrecemos. Nos comprometemos a mantenerlo informado sobre los cambios que pueda sufrir el presente aviso de privacidad, a través de nuestra página web oficial.
              </p>
            </section>

            <section className="pt-8 border-t border-terminal-border">
              <p className="text-sm">
                Si tiene alguna duda sobre el tratamiento de sus datos, por favor contáctenos en: <a href="mailto:mexicocityhub@youngaileaders.info" className="text-primary hover:underline">mexicocityhub@youngaileaders.info</a>
              </p>
              <p className="text-sm mt-4">
                © Young AI Leaders Mexico City Hub - Concienc.ia Hackathon 2026.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Policy;