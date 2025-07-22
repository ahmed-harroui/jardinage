import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Scissors, Sprout, TreePine, Droplets, Bug, Flower, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Scissors,
    title: "Taille et élagage",
    description: "Taille professionnelle de vos arbres, arbustes et haies pour une croissance optimale.",
    longDescription:
      "Notre service de taille et d'élagage assure la santé et la beauté de vos végétaux. Nous utilisons des techniques professionnelles pour stimuler la croissance, maintenir la forme et prévenir les maladies. Nos experts savent exactement quand et comment tailler chaque espèce pour des résultats optimaux.",
    price: "À partir de 50€",
    features: [
      "Taille de haies et arbustes",
      "Élagage d'arbres",
      "Taille de formation",
      "Taille d'entretien",
      "Taille fruitière",
      "Évacuation des déchets verts",
    ],
  },
  {
    icon: Sprout,
    title: "Plantation",
    description: "Conseil et plantation de végétaux adaptés à votre sol et exposition.",
    longDescription:
      "Notre service de plantation comprend le conseil, la sélection et la mise en terre de végétaux parfaitement adaptés à votre environnement. Nous analysons votre sol, l'exposition et vos préférences pour créer un jardin harmonieux qui s'épanouira au fil des saisons.",
    price: "À partir de 80€",
    features: [
      "Analyse du sol et de l'exposition",
      "Sélection des végétaux adaptés",
      "Préparation du terrain",
      "Plantation selon les règles de l'art",
      "Conseils d'entretien personnalisés",
      "Garantie de reprise",
    ],
  },
  {
    icon: TreePine,
    title: "Entretien pelouse",
    description: "Tonte, scarification, fertilisation pour une pelouse parfaite toute l'année.",
    longDescription:
      "Notre service d'entretien de pelouse assure la beauté et la santé de votre gazon tout au long de l'année. De la tonte régulière à la fertilisation saisonnière, nous prenons soin de chaque aspect pour vous offrir un tapis vert dense et résistant qui fera l'envie de votre voisinage.",
    price: "À partir de 40€",
    features: [
      "Tonte régulière",
      "Scarification",
      "Aération",
      "Fertilisation adaptée aux saisons",
      "Traitement contre les mousses",
      "Regarnissage des zones clairsemées",
    ],
  },
  {
    icon: Droplets,
    title: "Arrosage automatique",
    description: "Installation et maintenance de systèmes d'arrosage intelligents.",
    longDescription:
      "Notre service d'arrosage automatique vous permet d'économiser du temps et de l'eau tout en assurant une irrigation optimale de votre jardin. Nous concevons et installons des systèmes sur mesure, intelligents et économes, qui s'adaptent aux besoins spécifiques de vos plantes et aux conditions météorologiques.",
    price: "À partir de 200€",
    features: [
      "Étude personnalisée",
      "Installation professionnelle",
      "Programmation intelligente",
      "Systèmes économes en eau",
      "Maintenance et hivernage",
      "Garantie d'installation",
    ],
  },
  {
    icon: Bug,
    title: "Traitement bio",
    description: "Protection naturelle contre les parasites et maladies des plantes.",
    longDescription:
      "Notre service de traitement biologique offre une protection efficace et respectueuse de l'environnement contre les parasites et maladies qui peuvent affecter vos plantes. Nous utilisons exclusivement des méthodes naturelles et des produits biologiques pour préserver la biodiversité de votre jardin.",
    price: "À partir de 60€",
    features: [
      "Diagnostic des problèmes",
      "Traitements 100% biologiques",
      "Prévention naturelle",
      "Renforcement des défenses des plantes",
      "Conseils pour éviter les récidives",
      "Suivi personnalisé",
    ],
  },
  {
    icon: Flower,
    title: "Création massifs",
    description: "Conception et réalisation de massifs floraux selon vos goûts.",
    longDescription:
      "Notre service de création de massifs transforme les espaces vides en compositions florales éblouissantes. Nous concevons des arrangements harmonieux qui offrent une succession de floraisons tout au long de l'année, en tenant compte de vos préférences de couleurs, de styles et des conditions spécifiques de votre jardin.",
    price: "À partir de 100€",
    features: [
      "Conception personnalisée",
      "Sélection de plantes adaptées",
      "Préparation du sol",
      "Plantation artistique",
      "Paillage décoratif",
      "Plan d'entretien détaillé",
    ],
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* En-tête de page */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Nos services de jardinage</h1>
            <p className="text-xl text-gray-700">
              Découvrez notre gamme complète de services professionnels pour transformer et entretenir votre jardin
            </p>
          </div>
        </div>
      </section>

      {/* Liste des services détaillés */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-12">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-green p-8 text-white flex flex-col justify-center">
                    <div className="bg-white/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                    <p className="text-white/90 mb-6">{service.longDescription}</p>
                    <div className="mt-auto">
                      <p className="text-xl font-bold">{service.price}</p>
                    </div>
                  </div>

                  <CardContent className="p-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Ce service inclut :</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="bg-green-100 p-1 rounded-full">
                            <ArrowRight className="h-4 w-4 text-green-600" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8">
                      <Button className="w-full bg-green-600 hover:bg-green-700" size="lg" asChild>
                        <Link href="/#contact">Demander un devis</Link>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
