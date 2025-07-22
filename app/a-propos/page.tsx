import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Award, Users, Leaf, MapPin, Phone, Mail } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* En-tête de page */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">À propos de nous</h1>
            <p className="text-xl text-gray-700">
              Découvrez notre histoire, notre équipe et notre passion pour le jardinage
            </p>
          </div>
        </div>
      </section>

      {/* Notre histoire */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Notre équipe de jardiniers professionnels"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>

            <div className="space-y-6">
              <Badge variant="secondary" className="bg-green-100 text-green-700 px-4 py-2">
                Notre histoire
              </Badge>

              <h2 className="text-3xl font-bold text-gray-900">Une passion pour le jardinage depuis 2018</h2>

              <p className="text-lg text-gray-700">
                JardinPro est né d'une passion pour la nature et d'une volonté de créer des espaces verts harmonieux et
                durables. Fondée en 2018 par Thomas Dubois, notre entreprise s'est rapidement développée grâce à notre
                engagement envers la qualité et la satisfaction client.
              </p>

              <p className="text-lg text-gray-700">
                Aujourd'hui, notre équipe de jardiniers passionnés intervient dans toute la région parisienne pour
                transformer et entretenir les jardins de particuliers et de professionnels. Notre approche combine
                expertise technique, créativité et respect de l'environnement.
              </p>

              <div className="pt-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
                  <Link href="/#contact">Contactez-nous</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="bg-green-100 text-green-700 px-4 py-2 mb-4">
              Nos valeurs
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900">Ce qui nous guide au quotidien</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: "Respect de l'environnement",
                description:
                  "Nous privilégions les méthodes naturelles et les produits biologiques pour préserver la biodiversité et limiter notre impact écologique.",
              },
              {
                icon: Users,
                title: "Satisfaction client",
                description:
                  "Votre satisfaction est notre priorité. Nous travaillons en étroite collaboration avec vous pour réaliser vos projets et répondre à vos attentes.",
              },
              {
                icon: Award,
                title: "Excellence",
                description:
                  "Nous visons l'excellence dans chaque projet, avec une attention particulière aux détails et un engagement pour la qualité du travail bien fait.",
              },
            ].map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover-lift">
                <CardContent className="p-8 text-center">
                  <div className="mx-auto bg-gradient-green p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Notre équipe */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="bg-green-100 text-green-700 px-4 py-2 mb-4">
              Notre équipe
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900">Des professionnels passionnés</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Thomas Dubois",
                role: "Fondateur & Paysagiste",
                bio: "Diplômé en horticulture et passionné de jardinage depuis l'enfance, Thomas a fondé JardinPro avec la vision de créer des espaces verts durables et harmonieux.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Julie Martin",
                role: "Horticultrice",
                bio: "Spécialiste des plantes et des fleurs, Julie apporte son expertise pour sélectionner les végétaux les mieux adaptés à chaque environnement et créer des compositions harmonieuses.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Marc Leroy",
                role: "Technicien paysagiste",
                bio: "Expert en systèmes d'arrosage et en aménagement technique, Marc assure la réalisation des installations complexes et la maintenance des équipements.",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover-lift overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-green-600 font-medium mb-4">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contactez-nous */}
      <section className="py-16 bg-gradient-green text-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Prêt à transformer votre jardin ?</h2>
              <p className="text-xl text-white/90">
                Contactez-nous dès aujourd'hui pour discuter de votre projet. Notre équipe est à votre disposition pour
                répondre à toutes vos questions.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-lg">06 12 34 56 78</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-lg">contact@jardinpro.fr</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-lg">Paris et banlieue (rayon de 30km)</span>
                </div>
              </div>

              <div className="pt-4">
                <Button size="lg" className="bg-white text-green-700 hover:bg-white/90" asChild>
                  <Link href="/#contact">Demander un devis</Link>
                </Button>
              </div>
            </div>

            <div>
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Consultation avec un client"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
