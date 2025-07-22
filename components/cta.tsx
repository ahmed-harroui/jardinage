import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 bg-gradient-green text-white relative overflow-hidden">
      {/* Formes décoratives */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">Prêt à transformer votre jardin ?</h2>
            <p className="text-xl text-white/90">
              Contactez-nous dès aujourd'hui pour un devis gratuit et sans engagement. Notre équipe est impatiente de
              vous aider à créer l'espace vert de vos rêves.
            </p>
            <Button
              size="lg"
              className="bg-white text-green-700 hover:bg-white/90 rounded-full px-8 py-6 text-lg"
              asChild
            >
              <Link href="#contact">
                Demander un devis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="relative">
            <img
              src="/placeholder.jpg?height=400&width=500"
              alt="Jardinier professionnel au travail"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />

            {/* Badge flottant */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="text-center">
                <p className="font-bold text-2xl text-green-700">100%</p>
                <p className="text-sm text-gray-600">Satisfaction client</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
