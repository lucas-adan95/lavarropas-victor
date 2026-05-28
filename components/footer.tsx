export function Footer() {
  return (
    <footer className="border-t border-border bg-card px-4 py-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="font-semibold text-card-foreground">
            Víctor - Servicio Técnico de Lavarropas
          </p>
          
          <p className="max-w-md text-sm text-muted-foreground">
            Las ventas se realizan únicamente de forma presencial o a través de WhatsApp. 
            No contamos con carrito de compras online.
          </p>
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Víctor Servicio Técnico. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
