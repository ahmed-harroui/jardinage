import { Card, CardContent } from "@/components/ui/card"
import { ClipboardCheck, Phone, Calendar, Leaf } from "lucide-react"

const steps = [
  {
    icon: Phone,
    title: "Contact initial",
    description: "Contactez-nous via le formulaire ou par téléphone pour nous expliquer vos besoins.",
  },
  {
    icon: ClipboardCheck,
    title: "Devis gratuit",
    description: "Nous vous proposons un devis détaillé et personnalisé sous 24h.",
  },
  {
    icon: Calendar,
    title: "Planification",
    description: "Nous convenons ensemble d'une date d'intervention adaptée à vos disponibilités.",
  },
  {
    icon: Leaf,
    title: "Réalisation",
    description: "Notre équipe intervient avec professionnalisme pour transformer votre jardin.",
  },
]

export function Process() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Comment ça marche ?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un processus simple et efficace pour prendre soin de votre jardin
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="border-0 shadow-md hover-lift">
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  {/* Numéro d'étape */}
                  <div className="absolute -top-4 -right-4 bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>

                  {/* Icône */}
                  <div className="mx-auto bg-gradient-green p-4 rounded-full w-16 h-16 flex items-center justify-center">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Ligne de connexion */}
        <div className="hidden lg:flex justify-center mt-8">
          <div className="h-1 bg-gradient-to-r from-transparent via-green-200 to-transparent w-3/4"></div>
        </div>
      </div>
    </section>
  )
}
