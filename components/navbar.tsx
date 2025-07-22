"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Leaf, Menu, X, Phone, ShoppingBag } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const navLinks = [
    { name: "Hme", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "About Us", href: "/about-us" },
    { name: "Store", href: "/store" },
    { name: "Contact Us", href: "/contact-us" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "bg-white/80 backdrop-blur-2xl shadow-lg border-b border-white/20 py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo ultra-moderne */}
          <Link href="/" className="flex items-center gap-3 z-50 group">
            <div
              className={cn(
                "relative flex items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110",
                scrolled
                  ? "bg-gradient-modern p-3 shadow-lg"
                  : "bg-white/20 backdrop-blur-md p-3 border border-white/30",
              )}
            >
              <Leaf className={cn("h-7 w-7 transition-all duration-500", scrolled ? "text-white" : "text-green-600")} />
              <div className="absolute inset-0 rounded-2xl bg-gradient-modern opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span
                className={cn(
                  "font-bold text-xl transition-all duration-500",
                  scrolled ? "text-gray-800" : "text-white",
                )}
              >
                JardinPro
              </span>
              <span
                className={cn(
                  "text-xs font-medium transition-all duration-500",
                  scrolled ? "text-green-600" : "text-green-200",
                )}
              >
                Garden Expert
              </span>
            </div>
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 group",
                  pathname === link.href
                    ? scrolled
                      ? "bg-green-100 text-green-700 shadow-md"
                      : "bg-white/20 text-white backdrop-blur-md border border-white/30"
                    : scrolled
                      ? "text-gray-700 hover:bg-gray-100 hover:text-green-600"
                      : "text-white hover:bg-white/10 hover:backdrop-blur-md",
                )}
              >
                {link.name}
                {pathname === link.href && (
                  <div className="absolute inset-0 rounded-full bg-gradient-modern opacity-10 animate-pulse-glow"></div>
                )}
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-modern transition-all duration-300 group-hover:w-full group-hover:left-0"></div>
              </Link>
            ))}
          </nav>

          {/* Actions desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/store" className="relative group">
              <div
                className={cn(
                  "p-2 rounded-full transition-all duration-300",
                  scrolled
                    ? "bg-gray-100 hover:bg-green-100 text-gray-600 hover:text-green-600"
                    : "bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border border-white/30",
                )}
              >
                <ShoppingBag className="h-5 w-5" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center font-bold">
                3
              </div>
            </Link>

            <Button
              className={cn(
                "btn-modern text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300",
                scrolled ? "bg-gradient-modern" : "bg-white/20 backdrop-blur-md hover:bg-white/30",
              )}
              asChild
            >
              <Link href="/contact-us">
                <Phone className="mr-2 h-4 w-4" />
                Contact
              </Link>
            </Button>
          </div>

          {/* Bouton menu mobile */}
          <button
            className="lg:hidden z-50 p-2 rounded-full transition-all duration-300 hover:bg-white/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className={cn("h-6 w-6 transition-colors duration-300", scrolled ? "text-gray-800" : "text-white")} />
            ) : (
              <Menu
                className={cn("h-6 w-6 transition-colors duration-300", scrolled ? "text-gray-800" : "text-white")}
              />
            )}
          </button>
        </div>
      </div>

      {/* Menu mobile ultra-moderne */}
      <div
        className={cn(
          "fixed inset-0 lg:hidden transition-all duration-500 ease-out",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible",
        )}
      >
        {/* Backdrop avec blur */}
        <div className="absolute inset-0 bg-gradient-mesh backdrop-blur-2xl"></div>

        {/* Contenu du menu */}
        <div className="relative flex flex-col justify-center items-center h-full p-8">
          <nav className="flex flex-col items-center gap-6">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "glass-card px-8 py-4 text-xl font-medium text-white rounded-2xl transition-all duration-300 hover:scale-105 hover-glow animate-slide-up",
                  pathname === link.href && "bg-white/20 shadow-lg",
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.name}
              </Link>
            ))}

            <div className="flex items-center gap-4 mt-8 animate-slide-up" style={{ animationDelay: "0.5s" }}>
              <Link
                href="/store"
                className="glass-card p-4 rounded-2xl text-white hover:scale-105 transition-all duration-300"
              >
                <ShoppingBag className="h-6 w-6" />
              </Link>

              <Button className="btn-modern bg-white text-green-700 hover:bg-white/90" asChild>
                <Link href="/contact-us">
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Us
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
