import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { Handshake } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const aliadoSchema = z.object({
  nombre: z.string()
    .trim()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres" })
    .max(100, { message: "El nombre debe tener máximo 100 caracteres" }),
  empresa: z.string()
    .trim()
    .min(2, { message: "El nombre de la empresa debe tener al menos 2 caracteres" })
    .max(100, { message: "El nombre de la empresa debe tener máximo 100 caracteres" }),
  correo: z.string()
    .trim()
    .email({ message: "Email inválido" })
    .max(255, { message: "El email debe tener máximo 255 caracteres" }),
  telefono: z.string()
    .trim()
    .min(10, { message: "Ingresa un número válido con indicativo de país (mínimo 10 dígitos)" })
    .max(20, { message: "Número demasiado largo" })
    .regex(/^[0-9+\s()-]+$/, { message: "Formato de número inválido. Incluye el indicativo del país (ej: +52)" }),
  comoSumar: z.string()
    .trim()
    .min(20, { message: "Describe cómo quieres sumar con al menos 20 caracteres" })
    .max(1000, { message: "La descripción debe tener máximo 1000 caracteres" }),
});

type AliadoFormData = z.infer<typeof aliadoSchema>;

const Aliados = () => {
  const form = useForm<AliadoFormData>({
    resolver: zodResolver(aliadoSchema),
    defaultValues: {
      nombre: "",
      empresa: "",
      correo: "",
      telefono: "",
      comoSumar: "",
    },
  });

  const onSubmit = async (data: AliadoFormData) => {
    try {
      const { error } = await supabase
        .from('aliados')
        .insert([{
          nombre: data.nombre,
          empresa: data.empresa,
          correo: data.correo,
          telefono: data.telefono,
          como_sumar: data.comoSumar,
        }]);

      if (error) {
        console.error("Supabase error:", error);
        throw error;
      }

      toast({
        title: "¡Solicitud enviada exitosamente!",
        description: "Nos pondremos en contacto contigo pronto para hablar sobre la alianza.",
      });

      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error al enviar",
        description: "Hubo un problema al registrar tus datos. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background font-mono">
      <Header />

      <section className="py-24 bg-background relative pt-32">
        <div className="absolute inset-0 bg-gradient-glow opacity-20" />

        <div className="container px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-12">
              <div className="inline-block font-mono text-primary text-sm mb-4">
                <span className="animate-blink">▶</span> ./aliados_form.sh
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-mono mb-6">
                <span className="text-primary">&lt;</span>
                <span className="text-foreground">Conviértete en Aliado</span>
                <span className="text-primary">/&gt;</span>
              </h2>
              <p className="text-lg text-muted-foreground font-mono max-w-2xl mx-auto">
                Únete a nosotros y sé parte del hackathon más innovador de México
              </p>
            </div>

            {/* Form */}
            <div className="bg-card border border-terminal-border rounded-lg p-8 shadow-terminal">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Nombre */}
                  <FormField
                    control={form.control}
                    name="nombre"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono text-foreground">
                          Nombre Completo *
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Tu nombre completo"
                            className="font-mono bg-muted border-terminal-border focus:border-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="font-mono text-xs" />
                      </FormItem>
                    )}
                  />

                  {/* Empresa */}
                  <FormField
                    control={form.control}
                    name="empresa"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono text-foreground">
                          Empresa *
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Nombre de tu empresa"
                            className="font-mono bg-muted border-terminal-border focus:border-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="font-mono text-xs" />
                      </FormItem>
                    )}
                  />

                  {/* Correo */}
                  <FormField
                    control={form.control}
                    name="correo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono text-foreground">
                          Correo Electrónico *
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="tu@empresa.com"
                            className="font-mono bg-muted border-terminal-border focus:border-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="font-mono text-xs" />
                      </FormItem>
                    )}
                  />

                  {/* Teléfono */}
                  <FormField
                    control={form.control}
                    name="telefono"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono text-foreground">
                          Teléfono (con indicativo de país) *
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="+52 55 1234 5678"
                            className="font-mono bg-muted border-terminal-border focus:border-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription className="font-mono text-xs text-muted-foreground">
                          Incluye el indicativo de tu país (ej: +52 para México)
                        </FormDescription>
                        <FormMessage className="font-mono text-xs" />
                      </FormItem>
                    )}
                  />

                  {/* Cómo quieres sumar */}
                  <FormField
                    control={form.control}
                    name="comoSumar"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono text-foreground">
                          ¿Cómo quieres sumar? *
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Cuéntanos cómo te gustaría contribuir al evento (patrocinio, premios, mentoría, recursos, etc.)"
                            className="font-mono bg-muted border-terminal-border focus:border-primary min-h-[150px] resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription className="font-mono text-xs text-muted-foreground">
                          {field.value?.length || 0}/1000 caracteres
                        </FormDescription>
                        <FormMessage className="font-mono text-xs" />
                      </FormItem>
                    )}
                  />

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button
                      type="submit"
                      className="w-full font-mono text-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-terminal border-2 border-primary hover:shadow-glow transition-all duration-300"
                      size="lg"
                      disabled={form.formState.isSubmitting}
                    >
                      <Handshake className="w-5 h-5 mr-2" />
                      {form.formState.isSubmitting ? "Enviando..." : "Enviar Solicitud"}
                    </Button>
                  </div>

                  <p className="text-xs text-muted-foreground font-mono text-center pt-2">
                    * Campos requeridos. Al enviar, aceptas que nos pongamos en contacto contigo.
                  </p>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Aliados;