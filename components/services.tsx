import { WrenchIcon, WashingMachineIcon, WhatsAppIcon } from "./icons"

export function Services() {
  return (
    <section className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Nuestros Servicios
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
            Soluciones completas para tu lavarropas con garantía y profesionalismo
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          {/* Service Card 1 */}
          <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-md">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <WrenchIcon className="h-7 w-7" />
            </div>
            
            <h3 className="mb-3 text-xl font-semibold text-card-foreground">
              Servicio Técnico Multimarca
            </h3>
            
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                <span>Reparación de todas las marcas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                <span>Repuestos originales y de calidad</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                <span>Trabajo con garantía</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                <span>Diagnóstico profesional</span>
              </li>
            </ul>
          </div>
          
          {/* Service Card 2 */}
          <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-md">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <WashingMachineIcon className="h-7 w-7" />
            </div>
            
            <h3 className="mb-3 text-xl font-semibold text-card-foreground">
              Venta de Lavarropas Usados
            </h3>
            
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                <span>Equipos reacondicionados</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                <span>Completamente testeados</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                <span>Excelente estado y funcionamiento</span>
              </li>
            </ul>
            
            {/* Note */}
            <div className="mt-6 rounded-xl bg-secondary p-4">
              <div className="flex items-start gap-3">
                <WhatsAppIcon className="h-5 w-5 flex-shrink-0 text-whatsapp" />
                <p className="text-sm leading-relaxed text-secondary-foreground">
                  <span className="font-medium">Consultá el catálogo actual</span> de forma presencial o por WhatsApp. Sin carrito de compras online.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
