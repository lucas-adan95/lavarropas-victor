import Link from "next/link"
import { WashingMachineIcon, WhatsAppIcon } from "./icons"

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/50 bg-background/95 px-4 py-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <div className="flex items-center gap-2">
          <WashingMachineIcon className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold text-foreground">Victor</span>
        </div>
        
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="#servicios"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Servicios
          </Link>
          <Link
            href="#contacto"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Contacto
          </Link>
        </nav>
        
        <Link
          href="https://wa.me/5491163560952"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-sm font-medium text-whatsapp-foreground transition-all hover:scale-105 md:inline-flex"
        >
          <WhatsAppIcon className="h-4 w-4" />
          <span>WhatsApp</span>
        </Link>
      </div>
    </header>
  )
}
