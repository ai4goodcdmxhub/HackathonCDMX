import { useState } from "react";
import { LinkedinIcon, X, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Judge {
  name: string;
  title: string;
  company: string;
  description: string;
  linkedin: string;
  image?: string;
}

const Jurados = () => {
  const [selectedJudge, setSelectedJudge] = useState<Judge | null>(null);

  const judges: Judge[] = [
    {
      name: "Héctor Arturo Gutiérrez Calderón",
      title: "Director Ejecutivo de Investigación e Innovación",
      company: "<strong>Agencia Digital de Innovación Pública</strong>",
      description: "Su labor principal consiste en brindar soporte técnico y administrativo para asegurar la estabilidad de la infraestructura digital que sostiene los servicios del Gobierno de la CDMX. Es una pieza clave en la continuidad operativa de plataformas ciudadanas esenciales, garantizando que los sistemas permanezcan funcionales para los usuarios.",
      linkedin: "https://www.linkedin.com/in/hector-gutierrez-48152917/",
      image: "/judges/hector_adip.png"
    },
    {
      name: "Max Alberto Diener Sala",
      title: "Abogado y Experto en Finanzas Públicas",
      company: "<strong>Gobierno Federal Mexicano</strong>",
      description: "Soy abogado con más de 25 años de experiencia profesional en el Gobierno Federal Mexicano. He tenido el privilegio de liderar equipos legales en diversos ministerios responsables de la política financiera y tributaria del Estado mexicano, así como de la política interna y externa de México. El énfasis de mi carrera profesional se ha desarrollado en los sectores de finanzas públicas, tributarias y financieras, donde he profundizado mis conocimientos en derecho constitucional, administrativo, fiscal e internacional. Además, poseo excelentes habilidades de liderazgo, negociación y coordinación con equipos altamente calificados en materia legal.\n\nMINISTERIO DE FINANZAS Y CRÉDITO PÚBLICO FIDEICOMISO DE LA FEDERACIÓN (2015-2018)\nFunción: es el abogado general de la secretaría para asuntos de asesoría legal; legislación presupuestaria y tributaria, económica y financiera; litigios administrativos y amparo, y enjuiciamiento de delitos tributarios y financieros.\n\nMINISTERIO DE ASUNTOS EXTERIORES (2012-2015)\nFunción: el Consejero Jurídico de México es el abogado del Estado mexicano en el extranjero para la negociación de tratados y acuerdos internacionales, litigios en el extranjero y participación en conferencias globales.\n\nMINISTERIO DEL INTERIOR (2012)\nFunción: el Subsecretario de Asuntos Jurídicos y Derechos Humanos es responsable de todos los litigios, procesos legislativos y asesoría legal; así como de tratar todos los casos de violaciones de derechos humanos ante cortes y foros internacionales.\n\nMINISTERIO DE FINANZAS Y CRÉDITO PÚBLICO SUBPROCURADOR GENERAL DE LA FEDERACIÓN (2010-2011)\nFunción: el Subprocurador de Asuntos Jurídicos es responsable de la legislación del sector de tesorería como la asesoría legal de todos los sujetos del sector de tesorería.\n\nMINISTERIO DE FINANZAS Y CRÉDITO PÚBLICO Director General Jurídico (1998-2011) de la Subsecretaría de Gastos es responsable de emitir el reglamento en materia presupuestaria y asistir a consultas legales.\n\nPROFESIONAL\nDIPLOMATISCHE AKADEMIE WIEN, AUSTRIA, DA\nEstudios de posgrado. Especialización en Derecho Internacional y Finanzas\nINSTITUTO TECNOLOGICO AUTONOMO DE MEXICO, ITAM\nEstudios de posgrado\nUNIVERSIDAD NACIONAL AUTONOMA DE MEXICO, UNAM\nEstudios de Derecho Título de abogado; Premio Honorífico: Mención Honorífica\n\nACTIVIDADES ACADÉMICAS\nProfesor de Derecho:\nCENTRO DE INVESTIGACIÓN Y DOCENCIA EN ECONOMÍA, CIDE\nDerecho Administrativo, Tributario y de Finanzas Públicas, Desde 2004\nINSTITUTO TECNOLÓGICO AUTÓNOMO DE MÉXICO, ITAM\nCENTRO DE ESTUDIOS E INVESTIGACIÓN DE POSGRADO\nDerecho Administrativo, Tributario, de Finanzas Públicas y de Comercio Internacional 11/2008-2011\nCOLEGIO DE MÉXICO, COLMEX\nDerecho Presupuestario y Administración Pública 1998-2004\nUNIVERSIDAD NACIONAL AUTÓNOMA DE MÉXICO, UNAM\nESTUDIOS DE POSGRADO, FACULTAD DE DERECHO\nDerecho de Comercio Internacional y Tratados de Libre Comercio.",
      linkedin: "https://www.linkedin.com/in/max-alberto-diener-sala-022888180/",
      image: "/judges/Max.jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-mono">
      <Header />

      <section className="py-24 bg-gradient-terminal relative pt-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="container relative z-10 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-16">
              <div className="inline-block font-mono text-primary text-sm mb-4">
                <span className="animate-blink">▶</span> ./judges.sh
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-mono mb-6">
                <span className="text-primary">&lt;</span>
                <span className="text-foreground">Jurados</span>
                <span className="text-primary">/&gt;</span>
              </h2>
              <p className="text-lg text-muted-foreground font-mono max-w-2xl mx-auto">
                Expertos que evaluarán tu innovación y ejecución
              </p>
            </div>

            {/* Judges Grid - Centered */}
            <div className="flex flex-wrap justify-center gap-8">
              {judges.map((judge, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedJudge(judge)}
                  className="group cursor-pointer bg-card border border-terminal-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-terminal w-full sm:w-64"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Photo placeholder */}
                  <div className="aspect-square bg-muted flex items-center justify-center relative overflow-hidden">
                    {judge.image ? (
                      <img
                        src={judge.image}
                        alt={judge.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center">
                        <Award className="w-24 h-24 text-primary/30" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300" />
                  </div>

                  {/* Info */}
                  <div className="p-6 text-center">
                    <h3 className="font-bold font-mono text-foreground text-xl mb-2">
                      {judge.name}
                    </h3>
                    <p className="text-sm text-primary font-mono mb-1 font-bold">
                      {judge.title}
                    </p>
                    <p
                      className="text-sm text-muted-foreground font-mono"
                      dangerouslySetInnerHTML={{ __html: judge.company }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal */}
        <Dialog open={!!selectedJudge} onOpenChange={() => setSelectedJudge(null)}>
          <DialogContent className="bg-card border-2 border-primary/30 max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="font-mono text-2xl text-foreground text-center">
                {selectedJudge?.name}
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-4">
              {/* Title and Company */}
              <div className="text-center pb-4 border-b border-terminal-border">
                <p className="text-lg text-primary font-mono font-bold">
                  {selectedJudge?.title}
                </p>
                <div
                  className="text-muted-foreground font-mono"
                  dangerouslySetInnerHTML={{ __html: selectedJudge?.company || "" }}
                />
              </div>

              {/* Description */}
              <div className="py-4">
                <p className="text-muted-foreground font-mono leading-relaxed text-sm whitespace-pre-line">
                  {selectedJudge?.description}
                </p>
              </div>

              {/* LinkedIn Link */}
              <div className="pt-4 border-t border-terminal-border text-center">
                <a
                  href={selectedJudge?.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-mono text-sm transition-colors"
                >
                  <LinkedinIcon className="w-5 h-5" />
                  Ver perfil en LinkedIn
                </a>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </section>

      <Footer />
    </div>
  );
};

export default Jurados;