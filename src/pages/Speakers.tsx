import { useState } from "react";
import { LinkedinIcon, Mic } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Speaker {
  name: string;
  title: string;
  company: string;
  description: string;
  linkedin: string;
  image?: string;
}

const Speakers = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  const speakers: Speaker[] = [
    {
      name: "Bernice Gaytan",
      title: "Directora de Marketing y Conferencista TEDx",
      company: "GMC360",
      description: "Bernice es Directora de Marketing en GMC360 y una destacada conferencista TEDx. Como embajadora de la Global Peace Chain y consejera en Girl Up, lidera iniciativas de impacto social y sostenibilidad. Su trayectoria destaca por impulsar la Agenda 2030 y el uso de la tecnología y el deporte como motores de cambio y disciplina.",
      linkedin: "https://www.linkedin.com/in/berfuentes/",
      image: "/speakers/bernice.jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-mono">
      <Header />

      <section className="py-24 bg-background relative pt-32">
        <div className="absolute inset-0 bg-gradient-glow opacity-20" />

        <div className="container relative z-10 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-16">
              <div className="inline-block font-mono text-primary text-sm mb-4">
                <span className="animate-blink">▶</span> ./speakers.sh
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-mono mb-6">
                <span className="text-primary">&lt;</span>
                <span className="text-foreground">Speakers</span>
                <span className="text-primary">/&gt;</span>
              </h2>
              <p className="text-lg text-muted-foreground font-mono max-w-2xl mx-auto">
                Líderes que compartirán su visión sobre el futuro de la tecnología
              </p>
            </div>

            {/* Speakers Grid */}
            <div className="flex flex-wrap justify-center gap-8">
              {speakers.map((speaker, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedSpeaker(speaker)}
                  className="group cursor-pointer bg-card border border-terminal-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-terminal w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)]"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {/* Photo area */}
                  <div className="aspect-[4/5] bg-muted flex items-center justify-center relative overflow-hidden">
                    {speaker.image ? (
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center">
                        <Mic className="w-16 h-16 text-primary/30" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-all duration-300" />
                  </div>

                  {/* Info */}
                  <div className="p-6 text-center border-t border-terminal-border">
                    <h3 className="font-bold font-mono text-foreground text-xl mb-2">
                      {speaker.name}
                    </h3>
                    <p className="text-sm text-primary font-mono mb-2 uppercase tracking-wider">
                      {speaker.title}
                    </p>
                    <p className="text-xs text-muted-foreground font-mono">
                      {speaker.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal */}
        <Dialog open={!!selectedSpeaker} onOpenChange={() => setSelectedSpeaker(null)}>
          <DialogContent className="bg-card border-2 border-primary/30 max-w-3xl overflow-hidden p-0 gap-0">
            <div className="grid md:grid-cols-2">
              <div className="aspect-[4/5] md:aspect-auto h-full bg-muted">
                {selectedSpeaker?.image && (
                  <img
                    src={selectedSpeaker.image}
                    alt={selectedSpeaker.name}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="p-8 space-y-6 flex flex-col justify-center">
                <DialogHeader>
                  <DialogTitle className="font-mono text-3xl text-foreground text-left">
                    {selectedSpeaker?.name}
                  </DialogTitle>
                </DialogHeader>

                <div className="space-y-4">
                  <div>
                    <p className="text-lg text-primary font-mono font-bold uppercase tracking-tight">
                      {selectedSpeaker?.title}
                    </p>
                    <p className="text-muted-foreground font-mono font-bold text-sm">
                      {selectedSpeaker?.company}
                    </p>
                  </div>

                  <div className="py-4 border-y border-terminal-border">
                    <p className="text-muted-foreground font-mono leading-relaxed text-sm">
                      {selectedSpeaker?.description}
                    </p>
                  </div>

                  <div className="pt-2">
                    <a
                      href={selectedSpeaker?.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-mono text-sm transition-colors group"
                    >
                      <LinkedinIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      ./view_profile.sh
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </section>

      <Footer />
    </div>
  );
};

export default Speakers;
