import { useState } from "react";
import { LinkedinIcon, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Mentor {
  name: string;
  title: string;
  company: string;
  description: string;
  linkedin: string;
  image?: string;
}

const Mentores = () => {
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);

  const mentors: Mentor[] = [];

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
                <span className="animate-blink">▶</span> ./mentors.sh
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-mono mb-6">
                <span className="text-primary">&lt;</span>
                <span className="text-foreground">Mentores</span>
                <span className="text-primary">/&gt;</span>
              </h2>
              <p className="text-lg text-muted-foreground font-mono max-w-2xl mx-auto">
                Techies con experiencia construyendo productos desde cero
              </p>
            </div>

            {/* Mentors Grid */}
            <div className="flex flex-wrap justify-center gap-6">
              {mentors.map((mentor, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedMentor(mentor)}
                  className="group cursor-pointer bg-card border border-terminal-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-terminal w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)]"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {/* Photo placeholder */}
                  <div className="aspect-square bg-muted flex items-center justify-center relative overflow-hidden">
                    {mentor.image ? (
                      <img
                        src={mentor.image}
                        alt={mentor.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center">
                        <span className="text-6xl font-mono text-primary/30">
                          {mentor.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300" />
                  </div>

                  {/* Info */}
                  <div className="p-4 text-center">
                    <h3 className="font-bold font-mono text-foreground text-lg mb-1">
                      {mentor.name}
                    </h3>
                    <p className="text-sm text-primary font-mono mb-1">
                      {mentor.title}
                    </p>
                    <p className="text-xs text-muted-foreground font-mono">
                      {mentor.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal */}
        <Dialog open={!!selectedMentor} onOpenChange={() => setSelectedMentor(null)}>
          <DialogContent className="bg-card border-2 border-primary/30 max-w-2xl">
            <DialogHeader>
              <DialogTitle className="font-mono text-2xl text-foreground text-center">
                {selectedMentor?.name}
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-4">
              {/* Title and Company */}
              <div className="text-center pb-4 border-b border-terminal-border">
                <p className="text-lg text-primary font-mono font-bold">
                  {selectedMentor?.title}
                </p>
                <p className="text-muted-foreground font-mono">
                  {selectedMentor?.company}
                </p>
              </div>

              {/* Description */}
              <div className="py-4">
                <p className="text-muted-foreground font-mono leading-relaxed text-sm">
                  {selectedMentor?.description}
                </p>
              </div>

              {/* LinkedIn Link */}
              <div className="pt-4 border-t border-terminal-border text-center">
                <a
                  href={selectedMentor?.linkedin}
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

export default Mentores;