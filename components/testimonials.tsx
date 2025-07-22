import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Marie Dupont",
    role: "Propriétaire",
    content:
      "JardinPro a complètement transformé mon jardin. Leur équipe est professionnelle, ponctuelle et attentive aux détails. Je recommande vivement leurs services !",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Thomas Martin",
    role: "Gérant de copropriété",
    content:
      "Nous faisons appel à JardinPro pour l'entretien des espaces verts de notre résidence depuis 2 ans. Leur travail est impeccable et les résidents sont ravis.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Sophie Legrand",
    role: "Restauratrice",
    content:
      "L'aménagement de notre terrasse par JardinPro a été un vrai plus pour notre restaurant. Nos clients adorent l'ambiance créée par les plantes et les fleurs.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      {/* Formes décoratives */}
      <div className="relative">
        <div className="absolute top-0 left-0 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-70 -z-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-50 rounded-full blur-3xl -z-10"></div>

        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Ce que disent nos clients</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez les témoignages de nos clients satisfaits
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover-lift overflow-visible">
                <CardContent className="p-8 relative">
                  {/* Icône de citation */}
                  <div className="absolute -top-5 -left-2">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Quote className="h-5 w-5 text-green-600" />
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-green-100"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{testimonial.content}</p>

                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
