import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users } from "lucide-react";
import { MessageSquare } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

const Hero = () => {
  const [registeredCount, setRegisteredCount] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Fetch registered count
    const fetchCount = async () => {
      const { count } = await supabase
        .from('registrations')
        .select('*', { count: 'exact', head: true });

      setRegisteredCount(count ?? 0);
    };

    fetchCount();

    // Countdown logic
    const calculateTimeLeft = () => {
      const eventDate = new Date('2026-03-21T10:00:00-06:00'); // Mexico City time (UTC-6)
      const now = new Date();
      const difference = eventDate.getTime() - now.getTime();

      let newTimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

      if (difference > 0) {
        newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return newTimeLeft;
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToRegistration = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("registro");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-terminal">
      {/* Grid background effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]" />

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Terminal-style header */}
          <div className="flex flex-col items-center justify-center gap-4 mb-4 animate-fade-in-up">
            <img
              src="/assets/Jaguar.png"
              alt="Concienc.ia Jaguar Logo"
              className="h-24 md:h-32 w-auto object-contain drop-shadow-[0_0_15px_rgba(138,43,226,0.5)]"
            />
            <div className="inline-block font-mono text-primary text-sm">
              <span className="animate-blink">▶</span> ./hackathon_mexico.sh
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold font-mono tracking-tight animate-fade-in-up">
            <span className="text-foreground">Concienc.<span className="text-primary">ia</span></span>
            <br />
            <span className="text-primary drop-shadow-glow">Hackathon</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground font-mono max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Construye productos que cambien las reglas del juego.
            <br />
            <span className="text-primary">Conéctate con visionarios que liderarán el futuro</span>
          </p>

          {/* Countdown */}
          <div className="flex flex-wrap justify-center gap-4 text-foreground font-mono animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">{String(timeLeft.days).padStart(2, '0')}</p>
              <p className="text-xs text-muted-foreground">DÍAS</p>
            </div>
            <div className="text-4xl font-bold text-primary">:</div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">{String(timeLeft.hours).padStart(2, '0')}</p>
              <p className="text-xs text-muted-foreground">HORAS</p>
            </div>
            <div className="text-4xl font-bold text-primary">:</div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">{String(timeLeft.minutes).padStart(2, '0')}</p>
              <p className="text-xs text-muted-foreground">MIN</p>
            </div>
            <div className="text-4xl font-bold text-primary">:</div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">{String(timeLeft.seconds).padStart(2, '0')}</p>
              <p className="text-xs text-muted-foreground">SEG</p>
            </div>
          </div>

          {/* Event details */}
          <div className="flex flex-wrap justify-center gap-6 text-foreground font-mono animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded border border-terminal-border">
              <Calendar className="w-5 h-5 text-primary" />
              <span>21-22 de Marzo</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded border border-terminal-border">
              <Clock className="w-5 h-5 text-primary" />
              <span>Presencial</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded border border-terminal-border">
              <Users className="w-5 h-5 text-primary" />
              <span>Tec de Monterrey Campus Ciudad de México</span>
            </div>
          </div>
          {/* CTA Button */}
          <div className="pt-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button
              asChild
              size="lg"
              className="font-mono text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow border-2 border-primary hover:shadow-[0_0_60px_hsl(190_100%_42%/0.4)] transition-all duration-300"
            >
              <a href="#registro" onClick={scrollToRegistration}>
                Inscríbete Ahora
              </a>
            </Button>
          </div>

          {/* WhatsApp Button */}
          <div className="text-center mt-8 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <h3 className="text-lg font-mono text-primary mb-4">
              ¿Quieres saber más?
            </h3>
            <Button
              asChild
              size="lg"
              className="font-mono text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow border-2 border-primary hover:shadow-[0_0_60px_hsl(190_100%_42%/0.4)] transition-all duration-300"
            >
              <a href="https://chat.whatsapp.com/Kh3ULtM548I44eOkrA6sWe?mode=gi_t" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="w-5 h-5 mr-2" />
                Únete al grupo en WhatsApp
              </a>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="pt-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="inline-block animate-bounce">
              <div className="w-6 h-10 border-2 border-primary/50 rounded-full p-1">
                <div className="w-1.5 h-3 bg-primary rounded-full mx-auto animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;