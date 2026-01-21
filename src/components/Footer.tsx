import { Code2, LinkedinIcon, Mail, MapPin, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-terminal-border py-12">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Code2 className="w-6 h-6 text-primary" />
                <span className="text-xl font-bold font-mono text-foreground">
                  24h - Hackathon México
                </span>
              </div>
              <p className="text-muted-foreground font-mono text-sm mb-3">
                24 horas construyendo el futuro
              </p>
              <div className="bg-card border border-primary/30 rounded px-3 py-2 inline-block">
                <p className="text-xs font-mono text-muted-foreground">Organizado por</p>
                <p className="text-sm font-mono text-primary font-bold">Young AI Leaders Ciudad de México</p>
              </div>
            </div>

            {/* Event Details */}
            <div>
              <h3 className="text-foreground font-mono font-bold mb-4">Evento</h3>
              <div className="space-y-2 text-sm font-mono">
                <div className="flex items-start gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Ciudad de México, México</span>
                </div>
                <div className="text-muted-foreground">
                  Marzo 2026
                </div>
                <div className="text-muted-foreground">
                  24 horas presenciales
                </div>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-foreground font-mono font-bold mb-4">Contacto</h3>
              <div className="space-y-2 text-sm font-mono">
                <p className="text-muted-foreground mt-4">
                  ¿Preguntas? Escríbenos
                </p>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <PhoneCall className="w-4 h-4 text-primary" />
                  <span>+52 55 1231-5690</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="w-4 h-4 text-primary" />
                  <a href="mailto:mexicocityhub@youngaileaders.info" className="hover:text-primary transition-colors">
                    mexicocityhub@youngaileaders.info
                  </a>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <a href="https://www.linkedin.com/company/bogota-hub-young-ai-leaders-community/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <LinkedinIcon className="w-4 h-4 text-primary" />
                    <span>Síguenos en LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-terminal-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-muted-foreground font-mono text-sm">
                <span className="text-primary">&copy;</span> 24h - Hackathon México. Construyendo el futuro.
              </p>
              <div className="flex gap-6 text-sm font-mono">
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Términos y condiciones
                </Link>
              </div>
              <div className="flex gap-6 text-sm font-mono">
                <Link to="/policy" className="text-muted-foreground hover:text-primary transition-colors">
                  Política de privacidad
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;