import { ContactForm } from "@/components/contact-form"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Testimonials } from "@/components/testimonials"
import { Process } from "@/components/process"
import { CTA } from "@/components/cta"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Process />
      <About />
      <Testimonials />
      <CTA />
      <ContactForm />
    </main>
  )
}
