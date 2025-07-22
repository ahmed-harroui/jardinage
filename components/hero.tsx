import { Button } from "@/components/ui/button"
import { Leaf, Phone, ArrowRight, Sparkles, Star } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Arrière-plan avec mesh gradient */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-90"></div>

      {/* Formes organiques animées */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-green-400/20 organic-shape blur-3xl"></div>
      <div
        className="absolute bottom-20 left-10 w-80 h-80 bg-emerald-300/30 organic-shape blur-2xl"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-lime-200/20 organic-shape blur-3xl"
        style={{ animationDelay: "4s" }}
      ></div>

      <div className="container mx-auto max-w-7xl px-4 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 animate-slide-up">
            {/* Badge premium */}
            <div className="inline-flex items-center gap-3 glass-card px-6 py-3 rounded-full">
              <Sparkles className="h-5 w-5 text-yellow-400" />
              <span className="text-sm font-semibold text-gray-700">Premium Garden Services</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Transform Your
                <span className="block text-gradient animate-gradient">Garden Dreams</span>
                <span className="block text-gray-800">Into Reality</span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                Professional gardening services that bring nature's beauty to your doorstep.
                <span className="text-green-600 font-semibold">One click</span> is all it takes to start your garden
                transformation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button
                size="lg"
                className="btn-modern text-white text-lg px-10 py-6 shadow-2xl hover:shadow-green-500/25"
                asChild
              >
                <Link href="/contact-us">
                  <Phone className="mr-3 h-6 w-6" />
                  Get Free Quote
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="glass-card border-2 border-green-200 text-green-700 hover:bg-green-50 px-10 py-6 text-lg rounded-full hover-glow bg-transparent"
                asChild
              >
                <Link href="/store">
                  Explore Store
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </Button>
            </div>

            {/* Stats modernes */}
            <div className="flex gap-8 pt-8">
              {[
                { number: "500+", label: "Happy Clients" },
                { number: "1000+", label: "Gardens Transformed" },
                { number: "5★", label: "Average Rating" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-green-600">{stat.number}</div>
                  <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative animate-float">
              {/* Image principale */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/placeholder.jpg?height=600&width=700&text=Beautiful+Garden+Transformation"
                  alt="Beautiful garden transformation"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Cartes flottantes */}
              <div className="absolute -bottom-8 -left-8 glass-card p-6 rounded-2xl shadow-xl animate-pulse-glow">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-modern p-3 rounded-full">
                    <Leaf className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-2xl text-gray-800">500+</p>
                    <p className="text-sm text-gray-600">Gardens Completed</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-8 -right-8 glass-card p-4 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-3xl mb-2">🌱</div>
                  <p className="font-semibold text-green-700">Eco-Friendly</p>
                  <p className="text-xs text-gray-500">100% Organic</p>
                </div>
              </div>
            </div>

            {/* Éléments décoratifs */}
            <div className="absolute -z-10 -top-10 -right-10 w-40 h-40 bg-yellow-200/30 rounded-full blur-2xl animate-pulse"></div>
            <div
              className="absolute -z-10 -bottom-10 -left-10 w-32 h-32 bg-pink-200/30 rounded-full blur-xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
