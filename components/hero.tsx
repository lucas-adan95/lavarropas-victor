import { WhatsAppButton } from "./whatsapp-button"
import { WashingMachineIcon } from "./icons"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary px-4 py-20 md:py-32">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/20" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent/10" />
      </div>
      
      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
          {/* Text Content */}
          <div className="max-w-2xl text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2 text-sm font-medium text-primary-foreground">
              <WashingMachineIcon className="h-4 w-4" />
              <span>Morón, Zona Oeste</span>
            </div>
            
            <h1 className="mb-6 text-balance text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
              Servicio Técnico Especializado de Lavarropas
            </h1>
            
            <p className="mb-8 text-pretty text-lg leading-relaxed text-primary-foreground/90 md:text-xl">
              Reparación multimarca y venta de equipos seleccionados en Morón. 
              Más de 20 años de experiencia a tu servicio.
            </p>
            
            <WhatsAppButton className="text-lg" />
          </div>
          
          {/* Visual Element */}
          <div className="hidden lg:block">
            <div className="relative h-80 w-80">
              <div className="absolute inset-0 flex items-center justify-center rounded-3xl bg-card/10 backdrop-blur-sm">
                <WashingMachineIcon className="h-40 w-40 text-primary-foreground/80" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
