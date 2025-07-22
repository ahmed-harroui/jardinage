import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Award, Users, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

const stats = [
  { icon: Users, value: "200+", label: "Clients satisfaits" },
  { icon: Award, value: "5 ans", label: "D'expérience" },
  { icon: CheckCircle, value: "100%", label: "Travail garanti" },
  { icon: Clock, value: "24h", label: "Réponse rapide" },
]

export function About() {
  return (
    <section className="py-20 px-4 bg-gray-50 relative overflow-hidden">
      {/* Formes décoratives */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-50 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-50 -z-10"></div>

      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-green-100 text-green-700 px-4 py-2">
                À propos de nous
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Votre partenaire jardinage de confiance</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Passionné de jardinage depuis plus de 5 ans, je mets mon expertise au service de votre espace vert.
                Chaque jardin est unique et mérite une attention particulière.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Pourquoi nous choisir ?</h3>
              <ul className="space-y-3">
                {[
                  "Intervention rapide sous 48h",
                  "Devis gratuit et sans engagement",
                  "Matériel professionnel de qualité",
                  "Respect de l'environnement",
                  "Tarifs transparents et compétitifs",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="bg-green-100 p-1.5 rounded-full">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Button className="bg-green-600 hover:bg-green-700" asChild>
                <Link href="/a-propos">
                  En savoir plus sur nous
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="space-y-8">
            <div className="relative">
              <img
                src="/placeholder.jpg?height=400&width=500"
                alt="Jardinier professionnel au travail"
                className="rounded-2xl shadow-xl w-full h-auto"
              />

              {/* Élément décoratif */}
              <div className="absolute -z-10 -bottom-5 -right-5 w-32 h-32 bg-green-200/50 rounded-full blur-xl"></div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover-lift">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <stat.icon className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
