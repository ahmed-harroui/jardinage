"use client"

import type React from "react"
import { useState, useTransition } from "react"
import { submitContactForm, type ContactFormData } from "@/app/actions"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react"

export function ContactForm() {
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
        // Reset après 5 secondes
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
      <section id="contact" className="py-20 px-4 bg-green-50">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-green-200 bg-white shadow-xl">
            <CardContent className="p-12 text-center">
              <div className="mx-auto bg-green-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Message envoyé avec succès !</h3>
              <p className="text-lg text-gray-600 mb-6">
                Merci pour votre demande. Je vous recontacterai dans les plus brefs délais.
              </p>
              <Badge variant="secondary" className="bg-green-100 text-green-700 px-4 py-2">
                Réponse sous 24h garantie
              </Badge>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-20 px-4 bg-green-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Contactez-nous en un clic</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Décrivez vos besoins et recevez un devis personnalisé rapidement
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Informations de contact */}
          <div className="space-y-6">
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <Phone className="h-5 w-5" />
                  Téléphone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">06 12 34 56 78</p>
                <p className="text-sm text-gray-600">Lun-Sam: 8h-18h</p>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <Mail className="h-5 w-5" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">contact@jardinpro.fr</p>
                <p className="text-sm text-gray-600">Réponse sous 24h</p>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <MapPin className="h-5 w-5" />
                  Zone d'intervention
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">Paris et banlieue</p>
                <p className="text-sm text-gray-600">Rayon de 30km</p>
              </CardContent>
            </Card>
          </div>

          {/* Formulaire de contact */}
          <div className="lg:col-span-2">
            <Card className="border-green-200 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Demande de devis gratuit</CardTitle>
                <CardDescription className="text-lg">
                  Remplissez ce formulaire et recevez une réponse personnalisée
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom complet *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="Votre nom"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        placeholder="06 12 34 56 78"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="votre@email.fr"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="service">Type de service</Label>
                      <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choisir un service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="taille">Taille et élagage</SelectItem>
                          <SelectItem value="plantation">Plantation</SelectItem>
                          <SelectItem value="pelouse">Entretien pelouse</SelectItem>
                          <SelectItem value="arrosage">Arrosage automatique</SelectItem>
                          <SelectItem value="traitement">Traitement bio</SelectItem>
                          <SelectItem value="massifs">Création massifs</SelectItem>
                          <SelectItem value="autre">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="urgency">Urgence</Label>
                      <Select value={formData.urgency} onValueChange={(value) => handleChange("urgency", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Délai souhaité" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="urgent">Urgent (sous 48h)</SelectItem>
                          <SelectItem value="semaine">Cette semaine</SelectItem>
                          <SelectItem value="mois">Ce mois-ci</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Décrivez votre projet *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Décrivez votre jardin, vos besoins, la surface approximative..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg"
                    disabled={isPending}
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {isPending ? "Envoi en cours..." : "Envoyer ma demande"}
                  </Button>
                </form>
                {submitResult && !submitResult.success && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-700">{submitResult.error}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
