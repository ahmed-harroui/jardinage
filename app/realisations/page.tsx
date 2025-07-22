import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Jardin contemporain",
    location: "Paris 16e",
    description: "Création d'un jardin contemporain avec terrasse en bois, massifs structurés et éclairage d'ambiance.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Création", "Design", "Terrasse"],
    before: "/placeholder.svg?height=300&width=400",
    after: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Jardin méditerranéen",
    location: "Neuilly-sur-Seine",
    description:
      "Aménagement d'un jardin sec inspiré du style méditerranéen avec oliviers, lavandes et système d'arrosage automatique.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Plantation", "Arrosage", "Méditerranéen"],
    before: "/placeholder.svg?height=300&width=400",
    after: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Potager surélevé",
    location: "Versailles",
    description:
      "Installation de bacs potagers surélevés en bois avec système d'irrigation goutte-à-goutte et sélection de plantes aromatiques et légumes.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Potager", "Bio", "Irrigation"],
    before: "/placeholder.svg?height=300&width=400",
    after: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Rénovation complète",
    location: "Saint-Cloud",
    description:
      "Rénovation complète d'un jardin abandonné avec nouvelle pelouse, plantation d'arbres fruitiers et création d'une allée en pierre naturelle.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Rénovation", "Pelouse", "Plantation"],
    before: "/placeholder.svg?height=300&width=400",
    after: "/placeholder.svg?height=300&width=400",
  },
]

export default function RealisationsPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* En-tête de page */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Nos réalisations</h1>
            <p className="text-xl text-gray-700">
              Découvrez quelques-uns de nos projets récents et transformations de jardins
            </p>
          </div>
        </div>
      </section>

      {/* Galerie de projets */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-12">
            {projects.map((project, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden hover-lift">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2">
                    <div className="relative">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover aspect-square md:aspect-auto"
                      />
                      <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                        {project.tags.map((tag, i) => (
                          <Badge key={i} className="bg-green-600 hover:bg-green-700">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="p-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h2>
                      <p className="text-green-600 font-medium mb-4">{project.location}</p>
                      <p className="text-gray-700 mb-6">{project.description}</p>

                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Avant / Après</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500 mb-2">Avant</p>
                          <img
                            src={project.before || "/placeholder.svg"}
                            alt={`${project.title} avant`}
                            className="w-full h-auto rounded-lg"
                          />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-2">Après</p>
                          <img
                            src={project.after || "/placeholder.svg"}
                            alt={`${project.title} après`}
                            className="w-full h-auto rounded-lg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
