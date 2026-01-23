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

  const judges: Judge[] = [];

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
                    <p className="text-sm text-muted-foreground font-mono">
                      {judge.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal */}
        <Dialog open={!!selectedJudge} onOpenChange={() => setSelectedJudge(null)}>
          <DialogContent className="bg-card border-2 border-primary/30 max-w-2xl">
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
                <p className="text-muted-foreground font-mono">
                  {selectedJudge?.company}
                </p>
              </div>

              {/* Description */}
              <div className="py-4">
                <p className="text-muted-foreground font-mono leading-relaxed text-sm">
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