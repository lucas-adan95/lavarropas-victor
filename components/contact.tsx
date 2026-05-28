import { MapPinIcon, ClockIcon, MailIcon, PhoneIcon } from "./icons"
import { WhatsAppButton } from "./whatsapp-button"

const contactInfo = [
  {
    icon: MapPinIcon,
    label: "Ubicación",
    value: "Morón, Zona Oeste",
    href: null,
  },
  {
    icon: ClockIcon,
    label: "Horario de Atención",
    value: "Lunes a Viernes de 08:00 a 18:00 hs",
    href: null,
  },
  {
    icon: MailIcon,
    label: "Email",
    value: "victoradan63@gmail.com",
    href: "mailto:victoradan63@gmail.com",
  },
  {
    icon: PhoneIcon,
    label: "WhatsApp",
    value: "11 6356-0952",
    href: "https://wa.me/5491163560952",
  },
]

export function Contact() {
  return (
    <section id="contacto" className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Contacto
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
            Estamos listos para ayudarte con tu lavarropas
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <h3 className="mb-6 text-xl font-semibold text-card-foreground">
              Información de Contacto
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-card-foreground hover:text-accent"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-card-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA Card */}
          <div className="flex flex-col justify-center rounded-2xl bg-primary p-8 text-center">
            <h3 className="mb-4 text-2xl font-bold text-primary-foreground">
              ¿Tenés un problema con tu lavarropas?
            </h3>
            <p className="mb-8 text-pretty text-primary-foreground/90">
              Escribinos por WhatsApp y te respondemos a la brevedad. 
              Sin compromiso.
            </p>
            <div className="flex justify-center">
              <WhatsAppButton className="bg-card text-card-foreground hover:bg-card/90" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
