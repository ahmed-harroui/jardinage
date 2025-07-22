"use client"

import type React from "react"

import { useState, useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare } from "lucide-react"
import { submitContactForm, type ContactFormData } from "@/app/actions"

export default function ContactUsPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    urgency: "",
  })

  const [isPending, startTransition] = useTransition()
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message?: string; error?: string } | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    startTransition(async () => {
      const result = await submitContactForm(formData as ContactFormData)
      setSubmitResult(result)

      if (result.success) {
        setIsSubmitted(true)
        setTimeout(() => {
          setIsSubmitted(false)
          setSubmitResult(null)
          setFormData({
            name: "",
            email: "",
            phone: "",
            service: "",
            message: "",
            urgency: "",
          })
        }, 5000)
      }
    })
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <main className="min-h-screen pt-24 flex items-center justify-center">
        <div className="container mx-auto max-w-2xl px-4">
          <Card className="card-ultra-modern text-center">
            <CardContent className="p-12">
              <div className="bg-gradient-modern p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-8 animate-pulse-glow">
                <CheckCircle className="h-12 w-12 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h1>
              <p className="text-lg text-gray-600 mb-6">
                Thank you for reaching out! We'll get back to you within 24 hours.
              </p>
              <Badge className="bg-green-100 text-green-700 px-6 py-3 text-base">Response guaranteed within 24h</Badge>
            </CardContent>
          </Card>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <div className="animate-slide-up">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient">Get In Touch</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Ready to transform your garden? Let's discuss your vision and create something beautiful together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="animate-slide-up">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  We're here to help bring your garden dreams to life. Reach out through any of these channels.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    title: "Phone",
                    content: "+33 6 12 34 56 78",
                    subtitle: "Mon-Sat: 8AM-6PM",
                    color: "bg-blue-500",
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    content: "hello@jardinpro.fr",
                    subtitle: "Response within 24h",
                    color: "bg-green-500",
                  },
                  {
                    icon: MapPin,
                    title: "Service Area",
                    content: "Paris & Surrounding Areas",
                    subtitle: "30km radius coverage",
                    color: "bg-purple-500",
                  },
                  {
                    icon: Clock,
                    title: "Business Hours",
                    content: "Monday - Saturday",
                    subtitle: "8:00 AM - 6:00 PM",
                    color: "bg-orange-500",
                  },
                ].map((item, index) => (
                  <Card
                    key={index}
                    className="card-ultra-modern animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className={`${item.color} p-3 rounded-xl`}>
                          <item.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{item.title}</h3>
                          <p className="text-gray-700">{item.content}</p>
                          <p className="text-sm text-gray-500">{item.subtitle}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="card-ultra-modern animate-slide-up" style={{ animationDelay: "0.3s" }}>
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                    <MessageSquare className="h-8 w-8 text-green-600" />
                    Send Us a Message
                  </CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you with a personalized quote
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-semibold text-gray-700">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          placeholder="Your full name"
                          className="glass-card border-2 border-gray-200 focus:border-green-400 rounded-xl py-3"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          placeholder="+33 6 12 34 56 78"
                          className="glass-card border-2 border-gray-200 focus:border-green-400 rounded-xl py-3"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="your@email.com"
                        className="glass-card border-2 border-gray-200 focus:border-green-400 rounded-xl py-3"
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="service" className="text-sm font-semibold text-gray-700">
                          Service Needed
                        </Label>
                        <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                          <SelectTrigger className="glass-card border-2 border-gray-200 focus:border-green-400 rounded-xl py-3">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="garden-design">Garden Design</SelectItem>
                            <SelectItem value="maintenance">Garden Maintenance</SelectItem>
                            <SelectItem value="landscaping">Landscaping</SelectItem>
                            <SelectItem value="irrigation">Irrigation Systems</SelectItem>
                            <SelectItem value="consultation">Consultation</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="urgency" className="text-sm font-semibold text-gray-700">
                          Timeline
                        </Label>
                        <Select value={formData.urgency} onValueChange={(value) => handleChange("urgency", value)}>
                          <SelectTrigger className="glass-card border-2 border-gray-200 focus:border-green-400 rounded-xl py-3">
                            <SelectValue placeholder="When do you need this?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="urgent">ASAP (within 48h)</SelectItem>
                            <SelectItem value="week">This week</SelectItem>
                            <SelectItem value="month">This month</SelectItem>
                            <SelectItem value="flexible">I'm flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-semibold text-gray-700">
                        Project Details *
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        placeholder="Tell us about your garden, your vision, approximate size, budget range, and any specific requirements..."
                        className="glass-card border-2 border-gray-200 focus:border-green-400 rounded-xl min-h-[120px] py-3"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full btn-modern text-white text-lg py-4 shadow-xl hover:shadow-2xl transition-all duration-300"
                      disabled={isPending}
                    >
                      <Send className="mr-3 h-5 w-5" />
                      {isPending ? "Sending Message..." : "Send Message"}
                    </Button>
                  </form>
                  {submitResult && !submitResult.success && (
                    <div className="mt-6 glass-card bg-red-50 border-2 border-red-200 rounded-xl p-4">
                      <p className="text-red-700 font-medium">{submitResult.error}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Service Area</h2>
            <p className="text-xl text-gray-600">We proudly serve Paris and surrounding areas within a 30km radius</p>
          </div>

          <Card className="card-ultra-modern overflow-hidden">
            <CardContent className="p-0">
              <div className="h-96 bg-gradient-to-br from-green-100 to-emerald-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Interactive Map</h3>
                  <p className="text-gray-600">Google Maps integration coming soon</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How quickly can you start my project?",
                answer:
                  "We typically begin new projects within 48-72 hours of initial consultation, depending on the scope and season.",
              },
              {
                question: "Do you provide free estimates?",
                answer:
                  "Yes! We offer completely free, no-obligation estimates for all our services. We'll visit your property and provide a detailed quote.",
              },
              {
                question: "What areas do you serve?",
                answer:
                  "We serve Paris and all surrounding areas within a 30km radius. Contact us to confirm if we service your specific location.",
              },
              {
                question: "Are your services eco-friendly?",
                answer:
                  "We prioritize sustainable practices, organic solutions, and environmentally conscious methods in all our work.",
              },
            ].map((faq, index) => (
              <Card
                key={index}
                className="card-ultra-modern animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
