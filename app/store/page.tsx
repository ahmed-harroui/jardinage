import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Heart, Filter, Search } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Premium Garden Tool Set",
    price: 89.99,
    originalPrice: 129.99,
    rating: 4.8,
    reviews: 124,
    image: "/placeholder.svg?height=300&width=300&text=Garden+Tools",
    category: "Tools",
    badge: "Best Seller",
    description: "Professional-grade gardening tools for all your garden needs",
  },
  {
    id: 2,
    name: "Organic Fertilizer Mix",
    price: 24.99,
    originalPrice: null,
    rating: 4.9,
    reviews: 89,
    image: "/placeholder.svg?height=300&width=300&text=Organic+Fertilizer",
    category: "Fertilizers",
    badge: "Eco-Friendly",
    description: "100% organic fertilizer for healthy plant growth",
  },
  {
    id: 3,
    name: "Smart Irrigation System",
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.7,
    reviews: 67,
    image: "/placeholder.svg?height=300&width=300&text=Irrigation+System",
    category: "Irrigation",
    badge: "Smart Tech",
    description: "Automated watering system with smartphone control",
  },
  {
    id: 4,
    name: "Heirloom Seed Collection",
    price: 34.99,
    originalPrice: null,
    rating: 4.6,
    reviews: 156,
    image: "/placeholder.svg?height=300&width=300&text=Seeds+Collection",
    category: "Seeds",
    badge: "New",
    description: "Rare heirloom varieties for unique garden experiences",
  },
  {
    id: 5,
    name: "Professional Pruning Shears",
    price: 45.99,
    originalPrice: 59.99,
    rating: 4.9,
    reviews: 203,
    image: "/placeholder.svg?height=300&width=300&text=Pruning+Shears",
    category: "Tools",
    badge: "Pro Choice",
    description: "Japanese steel pruning shears for precision cutting",
  },
  {
    id: 6,
    name: "Decorative Plant Pots Set",
    price: 67.99,
    originalPrice: null,
    rating: 4.5,
    reviews: 78,
    image: "/placeholder.svg?height=300&width=300&text=Plant+Pots",
    category: "Pots",
    badge: "Trending",
    description: "Stylish ceramic pots perfect for indoor and outdoor plants",
  },
]

const categories = ["All", "Tools", "Seeds", "Fertilizers", "Irrigation", "Pots", "Accessories"]

export default function StorePage() {
  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center max-w-4xl mx-auto animate-slide-up">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient">Garden Store</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">Premium gardening products and tools for passionate gardeners</p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="glass-card rounded-2xl p-2 flex items-center gap-4">
                <Search className="h-6 w-6 text-gray-400 ml-4" />
                <input
                  type="text"
                  placeholder="Search for plants, tools, accessories..."
                  className="flex-1 bg-transparent border-0 outline-none text-lg py-3"
                />
                <Button className="btn-modern rounded-xl">Search</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white/50 backdrop-blur-sm border-y border-gray-200">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <span className="font-medium text-gray-700">Categories:</span>
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <Badge
                    key={index}
                    variant={category === "All" ? "default" : "outline"}
                    className={`px-4 py-2 cursor-pointer transition-all duration-300 ${
                      category === "All"
                        ? "bg-gradient-modern text-white hover:opacity-90"
                        : "hover:bg-green-50 hover:border-green-300"
                    }`}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">Sort by:</span>
              <select className="glass-card border-0 rounded-lg px-4 py-2 text-sm">
                <option>Popular</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
                <option>Rating</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <Card
                key={product.id}
                className="card-ultra-modern group cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Badge */}
                    <Badge
                      className={`absolute top-4 left-4 ${
                        product.badge === "Best Seller"
                          ? "bg-red-500"
                          : product.badge === "Eco-Friendly"
                            ? "bg-green-500"
                            : product.badge === "Smart Tech"
                              ? "bg-blue-500"
                              : product.badge === "New"
                                ? "bg-purple-500"
                                : product.badge === "Pro Choice"
                                  ? "bg-orange-500"
                                  : "bg-pink-500"
                      } text-white`}
                    >
                      {product.badge}
                    </Badge>

                    {/* Wishlist */}
                    <button className="absolute top-4 right-4 glass-card p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
                      <Heart className="h-5 w-5 text-gray-600 hover:text-red-500" />
                    </button>

                    {/* Quick Add */}
                    <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <Button className="w-full btn-modern text-sm">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Quick Add
                      </Button>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">
                        {product.category}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-sm font-medium">{product.rating}</span>
                        <span className="text-xs text-gray-500">({product.reviews})</span>
                      </div>
                    </div>

                    <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                      {product.name}
                    </h3>

                    <p className="text-sm text-gray-600 mb-4">{product.description}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-green-600">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="glass-card border-2 border-green-200 hover:bg-green-50 px-8 py-4 bg-transparent"
            >
              Load More Products
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-modern text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto max-w-4xl px-4 relative">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated with New Products</h2>
            <p className="text-xl text-white/90 mb-8">
              Get exclusive access to new arrivals, special offers, and gardening tips
            </p>

            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 glass-dark rounded-xl px-6 py-4 text-white placeholder-white/70 border-0 outline-none"
              />
              <Button className="bg-white text-green-700 hover:bg-white/90 px-8 py-4 rounded-xl font-semibold">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
