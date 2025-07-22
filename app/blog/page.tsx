import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"

const articles = [
  {
    title: "Comment préparer son jardin pour le printemps",
    excerpt:
      "Découvrez les étapes essentielles pour préparer votre jardin à l'arrivée du printemps et assurer une belle floraison.",
    image: "/placeholder.svg?height=300&width=600",
    date: "15 février 2023",
    author: "Marie Dupont",
    category: "Conseils",
    slug: "preparer-jardin-printemps",
  },
  {
    title: "Les meilleures plantes pour un jardin à l'ombre",
    excerpt:
      "Vous avez un jardin ombragé ? Voici notre sélection de plantes qui s'épanouiront même avec peu de soleil direct.",
    image: "/placeholder.svg?height=300&width=600",
    date: "3 mars 2023",
    author: "Thomas Martin",
    category: "Plantes",
    slug: "plantes-jardin-ombre",
  },
  {
    title: "Comment créer un système d'arrosage automatique",
    excerpt: "Guide étape par étape pour installer un système d'arrosage automatique économe en eau pour votre jardin.",
    image: "/placeholder.svg?height=300&width=600",
    date: "21 avril 2023",
    author: "Sophie Legrand",
    category: "Tutoriel",
    slug: "systeme-arrosage-automatique",
  },
  {
    title: "Les erreurs à éviter lors de la taille des arbustes",
    excerpt:
      "Apprenez à reconnaître et éviter les erreurs courantes qui peuvent endommager vos arbustes lors de la taille.",
    image: "/placeholder.svg?height=300&width=600",
    date: "10 mai 2023",
    author: "Marie Dupont",
    category: "Conseils",
    slug: "erreurs-taille-arbustes",
  },
  {
    title: "Comment attirer les pollinisateurs dans votre jardin",
    excerpt:
      "Découvrez quelles plantes et aménagements favorisent la présence des abeilles et autres pollinisateurs essentiels.",
    image: "/placeholder.svg?height=300&width=600",
    date: "2 juin 2023",
    author: "Thomas Martin",
    category: "Biodiversité",
    slug: "attirer-pollinisateurs-jardin",
  },
  {
    title: "Créer un potager en carrés : guide complet",
    excerpt:
      "Tout ce que vous devez savoir pour créer et entretenir un potager en carrés productif, même dans un petit espace.",
    image: "/placeholder.svg?height=300&width=600",
    date: "18 juillet 2023",
    author: "Sophie Legrand",
    category: "Potager",
    slug: "potager-carres-guide",
  },
]

const categories = ["Tous", "Conseils", "Plantes", "Tutoriel", "Biodiversité", "Potager"]

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* En-tête de page */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog jardinage</h1>
            <p className="text-xl text-gray-700">Conseils, astuces et inspiration pour votre jardin</p>
          </div>
        </div>
      </section>

      {/* Filtres par catégorie */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Badge
                key={index}
                variant={category === "Tous" ? "default" : "outline"}
                className={`px-4 py-2 text-sm cursor-pointer ${
                  category === "Tous" ? "bg-green-600 hover:bg-green-700" : "hover:bg-green-50"
                }`}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Articles de blog */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden hover-lift">
                <div className="relative">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-green-600 hover:bg-green-700">{article.category}</Badge>
                </div>

                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{article.title}</h2>

                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {article.author}
                    </span>
                  </div>

                  <p className="text-gray-600 line-clamp-3 mb-4">{article.excerpt}</p>
                </CardContent>

                <CardFooter className="px-6 pb-6 pt-0">
                  <Link
                    href={`/blog/${article.slug}`}
                    className="text-green-600 font-medium flex items-center hover:text-green-700 transition-colors"
                  >
                    Lire l'article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-6">
              Vous souhaitez recevoir nos derniers articles directement dans votre boîte mail ?
            </p>
            <div className="max-w-md mx-auto flex gap-2">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-r-lg">S'abonner</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
