import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Leaf, Phone, Target, Heart, Zap } from "lucide-react"

const team = [
  {
    name: "Thomas Dubois",
    role: "Founder & Master Gardener",
    bio: "With over 15 years of experience, Thomas transforms ordinary spaces into extraordinary gardens.",
    image: "/placeholder.svg?height=400&width=400&text=Thomas+Dubois",
    specialties: ["Landscape Design", "Organic Gardening", "Sustainable Practices"],
  },
  {
    name: "Marie Laurent",
    role: "Plant Specialist",
    bio: "Marie's expertise in botany and plant care ensures every garden thrives year-round.",
    image: "/placeholder.svg?height=400&width=400&text=Marie+Laurent",
    specialties: ["Plant Selection", "Disease Management", "Seasonal Care"],
  },
  {
    name: "Jean-Pierre Martin",
    role: "Irrigation Expert",
    bio: "Jean-Pierre designs and installs smart irrigation systems that save water and time.",
    image: "/placeholder.svg?height=400&width=400&text=Jean+Pierre",
    specialties: ["Smart Irrigation", "Water Conservation", "System Maintenance"],
  },
]

const values = [
  {
    icon: Leaf,
    title: "Eco-Conscious",
    description: "We prioritize sustainable practices and organic solutions for a healthier planet.",
    color: "bg-green-500",
  },
  {
    icon: Heart,
    title: "Passionate Care",
    description: "Every project receives our full attention and dedication to excellence.",
    color: "bg-red-500",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We embrace cutting-edge techniques and smart technology for better results.",
    color: "bg-blue-500",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "We focus on delivering measurable outcomes that exceed expectations.",
    color: "bg-purple-500",
  },
]

export default function AboutUsPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <Badge className="bg-green-100 text-green-700 px-4 py-2 mb-6">Our Story</Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Cultivating
                <span className="block text-gradient">Beautiful Spaces</span>
                Since 2018
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                What started as a passion project has grown into a trusted partner for hundreds of garden enthusiasts.
                We believe every space has the potential to become a natural sanctuary.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-modern" asChild>
                  <Link href="/contact-us">Start Your Project</Link>
                </Button>
                <Button
                  variant="outline"
                  className="glass-card border-2 border-green-200 hover:bg-green-50 bg-transparent"
                  asChild
                >
                  <Link href="/store">Shop Our Products</Link>
                </Button>
              </div>
            </div>

            <div className="relative animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <div className="relative">
                <img
                  src="/placeholder.svg?height=600&width=700&text=Our+Team+at+Work"
                  alt="Our team transforming gardens"
                  className="rounded-3xl shadow-2xl w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
              </div>

              {/* Floating stats */}
              <div className="absolute -bottom-8 -left-8 glass-card p-6 rounded-2xl shadow-xl animate-pulse-glow">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">500+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
              </div>

              <div className="absolute -top-8 -right-8 glass-card p-4 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-2xl mb-2">🏆</div>
                  <div className="font-semibold text-green-700">Award Winner</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-700 px-4 py-2 mb-6">Our Values</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Drives Us Forward</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values shape every decision we make and every garden we create
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="card-ultra-modern text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div
                    className={`${value.color} p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6`}
                  >
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

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-700 px-4 py-2 mb-6">Meet Our Team</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Experts Behind Your Garden</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our passionate team brings decades of combined experience to every project
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="card-ultra-modern overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-80 object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-green-200">{member.role}</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{member.bio}</p>

                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-gray-700">Specialties:</p>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-modern text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto max-w-7xl px-4 relative">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Gardens Transformed", icon: "🌻" },
              { number: "98%", label: "Client Satisfaction", icon: "😊" },
              { number: "5+", label: "Years Experience", icon: "📅" },
              { number: "24/7", label: "Support Available", icon: "🛠️" },
            ].map((stat, index) => (
              <div
                key={index}
                className="glass-dark p-8 rounded-2xl animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Garden?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's work together to create the outdoor space you've always dreamed of
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-modern text-lg px-8 py-4" asChild>
              <Link href="/contact-us">
                <Phone className="mr-2 h-5 w-5" />
                Get Free Consultation
              </Link>
            </Button>
            <Button
              variant="outline"
              className="glass-card border-2 border-green-200 hover:bg-green-50 text-lg px-8 py-4 bg-transparent"
              asChild
            >
              <Link href="/store">Browse Our Store</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
