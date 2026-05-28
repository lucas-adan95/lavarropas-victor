import { MapPinIcon, ShieldCheckIcon, BadgeDollarSignIcon, AwardIcon } from "./icons"

const features = [
  {
    icon: MapPinIcon,
    title: "Servicio Local",
    description: "Atención en Morón y toda la Zona Oeste con respuesta rápida",
  },
  {
    icon: AwardIcon,
    title: "Experiencia",
    description: "Más de 20 años reparando lavarropas de todas las marcas",
  },
  {
    icon: ShieldCheckIcon,
    title: "Confiabilidad",
    description: "Trabajo garantizado con repuestos de calidad",
  },
  {
    icon: BadgeDollarSignIcon,
    title: "Precios Justos",
    description: "Presupuestos transparentes y sin sorpresas",
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-secondary px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            ¿Por qué elegirnos?
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
            Tu lavarropas en las mejores manos
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center rounded-2xl bg-card p-6 text-center shadow-sm"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-semibold text-card-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
