import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Scissors, Sprout, TreePine, Droplets, Bug, Flower, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Scissors,
    title: "Taille et élagage",
    description: "Taille professionnelle de vos arbres, arbustes et haies pour une croissance optimale.",
  },
  {
    icon: Sprout,
    title: "Plantation",
    description: "Conseil et plantation de végétaux adaptés à votre sol et exposition.",
  },
  {
    icon: TreePine,
    title: "Entretien pelouse",
    description: "Tonte, scarification, fertilisation pour une pelouse parfaite toute l'année.",
  },
  {
    icon: Droplets,
    title: "Arrosage automatique",
    description: "Installation et maintenance de systèmes d'arrosage intelligents.",
  },
  {
    icon: Bug,
    title: "Traitement bio",
    description: "Protection naturelle contre les parasites et maladies des plantes.",
  },
  {
    icon: Flower,
    title: "Création massifs",
    description: "Conception et réalisation de massifs floraux selon vos goûts.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Formes décoratives */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-green-50 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-green-50 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Nos services de jardinage</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une gamme complète de services pour transformer et entretenir votre jardin
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover-lift overflow-hidden">
              <CardContent className="p-8">
                <div className="bg-gradient-green p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  href="/services"
                  className="text-green-600 font-medium flex items-center hover:text-green-700 transition-colors"
                >
                  En savoir plus
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-green-600 hover:bg-green-700 rounded-full" asChild>
            <Link href="/services">
              Voir tous nos services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
