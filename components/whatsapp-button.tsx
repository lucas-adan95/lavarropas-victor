import Link from "next/link"
import { WhatsAppIcon } from "./icons"

const WHATSAPP_NUMBER = "5491163560952"
const WHATSAPP_MESSAGE = encodeURIComponent("Hola! Me contacto desde su página web para consultar sobre el servicio técnico de lavarropas.")

export function WhatsAppButton({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <Link
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-base font-semibold text-whatsapp-foreground shadow-lg transition-all hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-whatsapp focus:ring-offset-2 ${className}`}
    >
      <WhatsAppIcon className="h-5 w-5" />
      {children || "Contactar por WhatsApp"}
    </Link>
  )
}

export function FloatingWhatsAppButton() {
  return (
    <Link
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg transition-all hover:scale-110 hover:shadow-xl md:hidden"
      aria-label="Contactar por WhatsApp"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </Link>
  )
}
