import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import Link from "next/link"

const pricingPlans = [
  {
    name: "Entretien Essentiel",
    price: "80€",
    period: "par visite",
    description: "Idéal pour l'entretien régulier d'un petit jardin",
    features: [
      "Tonte de pelouse",
      "Taille de haies",
      "Désherbage",
      "Nettoyage des allées",
      "Évacuation des déchets verts",
    ],
    recommended: false,
    details: "Jusqu'à 200m²",
  },
  {
    name: "Entretien Premium",
    price: "150€",
    period: "par visite",
    description: "Solution complète pour un jardin de taille moyenne",
    features: [
      "Tonte de pelouse",
      "Taille de haies et arbustes",
      "Désherbage complet",
      "Nettoyage des allées et terrasses",
      "Traitement préventif bio",
      "Fertilisation saisonnière",
      "Évacuation des déchets verts",
    ],
    recommended: true,
    details: "Jusqu'à 500m²",
  },
  {
    name: "Entretien Prestige",
    price: "Sur devis",
    period: "",
    description: "Pour les grands jardins nécessitant une attention particulière",
    features: [
      "Tonte de pelouse",
      "Taille de haies, arbustes et arbres",
      "Désherbage complet",
      "Nettoyage des allées, terrasses et bassins",
      "Traitement préventif et curatif bio",
      "Fertilisation personnalisée",
      "Conseils d'aménagement",
      "Évacuation des déchets verts",
    ],
    recommended: false,
    details: "Plus de 500m²",
  },
]

const additionalServices = [
  { name: "Taille de haie", price: "25€/ml", details: "Prix au mètre linéaire" },
  { name: "Tonte de pelouse", price: "40€", details: "Jusqu'à 200m²" },
  { name: "Désherbage", price: "35€/h", details: "Tarif horaire" },
  { name: "Plantation arbuste", price: "15€", details: "Hors prix de la plante" },
  { name: "Évacuation déchets", price: "30€", details: "Par m³" },
  { name: "Scarification", price: "60€", details: "Jusqu'à 200m²" },
]

export default function TarifsPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* En-tête de page */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Nos tarifs</h1>
            <p className="text-xl text-gray-700">Des formules adaptées à tous les budgets et à tous les jardins</p>
          </div>
        </div>
      </section>

      {/* Formules d'entretien */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Formules d'entretien régulier</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`border-0 shadow-lg overflow-hidden hover-lift ${plan.recommended ? "ring-2 ring-green-500" : ""}`}
              >
                {plan.recommended && (
                  <div className="bg-green-600 text-white text-center py-2 text-sm font-medium">Recommandé</div>
                )}

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4 mb-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-500 ml-1">{plan.period}</span>
                  </div>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                </CardHeader>

                <CardContent className="pb-4">
                  <p className="text-sm text-center text-gray-500 mb-6">{plan.details}</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="bg-green-100 p-1 rounded-full">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button
                    className={`w-full ${plan.recommended ? "bg-green-600 hover:bg-green-700" : ""}`}
                    variant={plan.recommended ? "default" : "outline"}
                    asChild
                  >
                    <Link href="/#contact">Demander un devis</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500">
              Tous nos tarifs sont TTC. Des réductions sont possibles pour un engagement annuel.
            </p>
          </div>
        </div>
      </section>

      {/* Services additionnels */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Services additionnels</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-lg">{service.name}</h3>
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      {service.price}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">{service.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-6">
              Vous ne trouvez pas ce que vous cherchez ? Contactez-nous pour un devis personnalisé.
            </p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
              <Link href="/#contact">Demander un devis personnalisé</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
