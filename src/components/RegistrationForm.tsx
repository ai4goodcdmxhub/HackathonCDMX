import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox"; // Import Checkbox
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import { UserPlus } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

// Helper function to generate a unique referral code
const generateReferralCode = (length = 8) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  // Add a timestamp component for better uniqueness (optional)
  result += Date.now().toString(36).slice(-4);
  return result;
};

const registrationSchema = z.object({
  name: z.string()
    .trim()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres" })
    .max(100, { message: "El nombre debe tener máximo 100 caracteres" }),
  email: z.string()
    .trim()
    .email({ message: "Email inválido" })
    .max(255, { message: "El email debe tener máximo 255 caracteres" }),
  phone: z.string()
    .trim()
    .min(10, { message: "Ingresa un número válido (mínimo 10 dígitos)" })
    .max(20, { message: "Número demasiado largo" })
    .regex(/^[0-9+\s()-]+$/, { message: "Formato de número inválido" }),
  portfolio: z.string()
    .trim()
    .max(500, { message: "La URL es demasiado larga" })
    .optional()
    .or(z.literal(""))
    .refine((val) => !val || /^https?:\/\/.+/.test(val), {
      message: "Debe ser una URL válida (incluye https://)",
    }),
  linkedin: z.string()
    .trim()
    .url({ message: "Debe ser una URL válida de LinkedIn (incluye https://)" })
    .max(500, { message: "La URL es demasiado larga" }),
  profileType: z.string()
    .min(1, { message: "Selecciona tu tipo de perfil" }),
  profileCluster: z.string()
    .min(1, { message: "Selecciona tu cluster de perfil" }),
  initialIdea: z.string()
    .trim()
    .min(20, { message: "Describe tu idea con al menos 20 caracteres" })
    .max(1000, { message: "La descripción debe tener máximo 1000 caracteres" }),
  whyYou: z.string()
    .trim()
    .min(20, { message: "Escribe al menos 20 caracteres sobre por qué deberías participar" })
    .max(1000, { message: "La respuesta debe tener máximo 1000 caracteres" }),
  referralCode: z.string().trim().max(50, { message: "Código demasiado largo" }).optional(), // Frontend name for the *input* field
  acceptJobOffers: z.boolean().default(false).optional(), // Frontend name for the checkbox
});

type RegistrationFormData = z.infer<typeof registrationSchema>;

const RegistrationForm = () => {
  const form = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      portfolio: "",
      linkedin: "",
      profileType: "",
      profileCluster: "",
      initialIdea: "",
      whyYou: "",
      referralCode: "", // Initialize frontend field
      acceptJobOffers: false, // Initialize frontend field
    },
  });

  const onSubmit = async (data: RegistrationFormData) => {
    try {
      // Generate the unique referral code for this user
      const generatedReferralCode = generateReferralCode();

      // Prepare data for Supabase, mapping frontend names to DB column names
      const submissionData = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        portfolio: data.portfolio,
        linkedin: data.linkedin,
        profileType: data.profileType, // Assuming DB name matches
        profileCluster: data.profileCluster, // Map the new cluster field
        initialIdea: data.initialIdea, // Assuming DB name matches
        whyYou: data.whyYou,           // Assuming DB name matches
        referralCodeU: data.referralCode || null, // Map form's referralCode input to DB's referralCodeU
        acceptJobOff: data.acceptJobOffers,       // Map form's acceptJobOffers to DB's acceptJobOff
        referralCode: generatedReferralCode,     // Map the generated code to DB's referralCode
      };


      const { error } = await supabase
        .from('registrations') // Make sure this is the name of your table in Supabase
        .insert([submissionData]); // Send the mapped data

      if (error) {
        console.error("Supabase error:", error);
        throw error;
      }

      toast({
        title: "¡Pre-inscripción exitosa!",
        description: (
          <div>
            <p>Te contactaremos pronto con más información sobre el hackathon.</p>
            <p className="font-mono mt-2 text-primary">Tu código de referido es: <strong>{generatedReferralCode}</strong></p>
            <p className="text-xs text-muted-foreground">¡Compártelo con tus amigos!</p>
          </div>
        ),
        duration: 10000, // Keep toast longer to show the code
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
    <section id="registro" className="py-24 bg-background relative scroll-mt-20">
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />

      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <div className="inline-block font-mono text-primary text-sm mb-4">
              <span className="animate-blink">▶</span> ./register.sh
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-mono mb-6">
              <span className="text-primary">&lt;</span>
              <span className="text-foreground">Pre-inscripción</span>
              <span className="text-primary">/&gt;</span>
            </h2>
            <p className="text-lg text-muted-foreground font-mono max-w-2xl mx-auto">
              Regístrate para asegurar tu lugar en el hackathon
            </p>
          </div>

          {/* Form */}
          <div className="bg-card border border-terminal-border rounded-lg p-8 shadow-terminal">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* --- Existing Fields --- */}
                {/* Name */}
                <FormField
                  control={form.control}
                  name="name"
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

                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-foreground">
                        Email *
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="tu@email.com"
                          className="font-mono bg-muted border-terminal-border focus:border-primary"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="font-mono text-xs" />
                    </FormItem>
                  )}
                />

                {/* Phone */}
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-foreground">
                        Celular *
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="+57 300 123 4567"
                          className="font-mono bg-muted border-terminal-border focus:border-primary"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="font-mono text-xs" />
                    </FormItem>
                  )}
                />

                {/* Portfolio/GitHub */}
                <FormField
                  control={form.control}
                  name="portfolio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-foreground">
                        Portafolio o GitHub (Opcional)
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="https://github.com/usuario o https://tuportafolio.com"
                          className="font-mono bg-muted border-terminal-border focus:border-primary"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription className="font-mono text-xs text-muted-foreground">
                        Muéstranos tu trabajo previo
                      </FormDescription>
                      <FormMessage className="font-mono text-xs" />
                    </FormItem>
                  )}
                />

                {/* LinkedIn */}
                <FormField
                  control={form.control}
                  name="linkedin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-foreground">
                        LinkedIn *
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="https://linkedin.com/in/usuario"
                          className="font-mono bg-muted border-terminal-border focus:border-primary"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="font-mono text-xs" />
                    </FormItem>
                  )}
                />

                {/* Profile Type */}
                <FormField
                  control={form.control}
                  name="profileType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-foreground">
                        Tipo de Perfil *
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="font-mono bg-muted border-terminal-border focus:border-primary">
                            <SelectValue placeholder="Selecciona tu perfil" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="font-mono bg-card border-terminal-border">
                          <SelectItem value="fullstack">Full-Stack Developer</SelectItem>
                          <SelectItem value="frontend">Frontend Developer</SelectItem>
                          <SelectItem value="backend">Backend Developer</SelectItem>
                          <SelectItem value="mobile">Mobile Developer</SelectItem>
                          <SelectItem value="data_ai">Data Scientist / AI Engineer</SelectItem>
                          <SelectItem value="devops">DevOps / Infrastructure</SelectItem>
                          <SelectItem value="legal_tech">Derecho Tecnológico / Legal Tech</SelectItem>
                          <SelectItem value="public_policy">Políticas Públicas y Gobierno</SelectItem>
                          <SelectItem value="economics">Economía y Finanzas</SelectItem>
                          <SelectItem value="bi_analytics">Business Intelligence & Data Analytics</SelectItem>
                          <SelectItem value="marketing">Marketing y Comunicación Estratégica</SelectItem>
                          <SelectItem value="ethics_philosophy">Ética y Filosofía</SelectItem>
                          <SelectItem value="social_sciences">Sociología / Antropología</SelectItem>
                          <SelectItem value="privacy">Privacidad y Protección de Datos</SelectItem>
                          <SelectItem value="ux_ui">UX/UI Designer</SelectItem>
                          <SelectItem value="product">Product Manager / Designer</SelectItem>
                          <SelectItem value="social_impact">Impacto Social y Sostenibilidad</SelectItem>
                          <SelectItem value="civic_tech">Civic Tech e Innovación Urbana</SelectItem>
                          <SelectItem value="growth">Growth & Estrategia de Mercado</SelectItem>
                          <SelectItem value="other">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage className="font-mono text-xs" />
                    </FormItem>
                  )}
                />

                {/* Profile Cluster */}
                <FormField
                  control={form.control}
                  name="profileCluster"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-foreground">
                        Cluster de Perfil *
                      </FormLabel>
                      <FormDescription className="font-mono text-xs text-muted-foreground mb-2">
                        Selecciona la categoría que mejor describa tu área de especialidad para facilitar la formación de equipos multidisciplinarios:
                      </FormDescription>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="font-mono bg-muted border-terminal-border focus:border-primary">
                            <SelectValue placeholder="Selecciona tu cluster" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="font-mono bg-card border-terminal-border">
                          <SelectItem value="builders">
                            <span className="font-bold">Técnicos (Builders):</span> Desarrollo de software, ingeniería de datos, IA e infraestructura.
                          </SelectItem>
                          <SelectItem value="protectors">
                            <span className="font-bold">Humanidades y Legal (Protectors):</span> Ética, derecho tecnológico, privacidad de datos y políticas públicas.
                          </SelectItem>
                          <SelectItem value="strategists">
                            <span className="font-bold">Estrategas (Strategists):</span> Economía, finanzas, marketing, sostenibilidad y BI.
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage className="font-mono text-xs" />
                    </FormItem>
                  )}
                />

                {/* Initial Idea */}
                <FormField
                  control={form.control}
                  name="initialIdea"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-foreground">
                        Idea Inicial que te gustaría desarrollar *
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe la idea que te gustaría desarrollar durante el hackathon..."
                          className="font-mono bg-muted border-terminal-border focus:border-primary min-h-[120px] resize-none"
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

                {/* Why You */}
                <FormField
                  control={form.control}
                  name="whyYou"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-foreground">
                        ¿Por qué deberías ser tú un participante? *
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Cuéntanos qué te hace un candidato ideal para este hackathon..."
                          className="font-mono bg-muted border-terminal-border focus:border-primary min-h-[120px] resize-none"
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

                {/* --- New Fields --- */}

                {/* Referral Code Input */}
                <FormField
                  control={form.control}
                  name="referralCode" // This is the INPUT field
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-foreground">
                        Código de Referido (Opcional)
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Si alguien te refirió, ingresa su código aquí"
                          className="font-mono bg-muted border-terminal-border focus:border-primary"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="font-mono text-xs" />
                    </FormItem>
                  )}
                />

                {/* Accept Job Offers Checkbox */}
                <FormField
                  control={form.control}
                  name="acceptJobOffers" // This is the CHECKBOX field
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-terminal-border p-4 bg-muted/50">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                          id="acceptJobOffers"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel
                          htmlFor="acceptJobOffers"
                          className="font-mono text-foreground cursor-pointer"
                        >
                          ¿Deseas recibir ofertas laborales de nuestros sponsors?
                        </FormLabel>
                        <FormDescription className="font-mono text-xs text-muted-foreground">
                          Podríamos compartir tu perfil con empresas aliadas que buscan talento.
                        </FormDescription>
                      </div>
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
                    disabled={form.formState.isSubmitting} // Disable button while submitting
                  >
                    <UserPlus className="w-5 h-5 mr-2" />
                    {form.formState.isSubmitting ? "Enviando..." : "Enviar Pre-inscripción"}
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground font-mono text-center pt-2">
                  * Campos requeridos. Al enviar, aceptas nuestros <a href="/terms" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">Términos</a> y <a href="/policy" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">Política de Privacidad</a>.
                </p>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;