import Link from "next/link"
import { Leaf, Mail, Phone, MapPin, Instagram, Facebook, Twitter, ShoppingBag } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 relative overflow-hidden">
      {/* Vague décorative moderne */}
      <div className="bg-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="fill-gray-900">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>

      {/* Formes décoratives */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/5 organic-shape blur-3xl"></div>
      <div
        className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-400/5 organic-shape blur-2xl"
        style={{ animationDelay: "3s" }}
      ></div>

      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo et description */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-modern p-3 rounded-2xl">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <div>
                <span className="font-bold text-2xl text-white">JardinPro</span>
                <p className="text-sm text-green-400">Garden Expert</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transform your outdoor space into a beautiful sanctuary with our professional gardening services and
              premium products.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="glass-dark p-3 rounded-full text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="glass-dark p-3 rounded-full text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="glass-dark p-3 rounded-full text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation rapide */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Blog", href: "/blog" },
                { name: "About Us", href: "/about-us" },
                { name: "Store", href: "/store" },
                { name: "Contact Us", href: "/contact-us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              Our Services
            </h3>
            <ul className="space-y-3">
              {["Garden Design", "Maintenance", "Landscaping", "Irrigation Systems", "Plant Care", "Consultation"].map(
                (service, index) => (
                  <li key={index}>
                    <Link
                      href="/contact-us"
                      className="text-gray-400 hover:text-green-400 transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {service}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              Get In Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="glass-dark p-2 rounded-lg group-hover:bg-green-500/20 transition-all duration-300">
                  <Phone className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <span className="text-white font-medium">+33 6 12 34 56 78</span>
                  <p className="text-sm text-gray-500">Mon-Sat: 8AM-6PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="glass-dark p-2 rounded-lg group-hover:bg-green-500/20 transition-all duration-300">
                  <Mail className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <span className="text-white font-medium">hello@jardinpro.fr</span>
                  <p className="text-sm text-gray-500">24h response time</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="glass-dark p-2 rounded-lg group-hover:bg-green-500/20 transition-all duration-300">
                  <MapPin className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <span className="text-white font-medium">Paris & Surrounding</span>
                  <p className="text-sm text-gray-500">30km radius coverage</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} JardinPro. All rights reserved. Made with 💚 for garden lovers.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <Link href="/privacy" className="hover:text-green-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-green-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/store" className="flex items-center gap-2 hover:text-green-400 transition-colors">
                <ShoppingBag className="h-4 w-4" />
                Shop
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
