import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { FloatingWhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        <Hero />
        
        <div id="servicios">
          <Services />
        </div>
        
        <WhyChooseUs />
        
        <Contact />
      </main>
      
      <Footer />
      
      <FloatingWhatsAppButton />
    </div>
  )
}
