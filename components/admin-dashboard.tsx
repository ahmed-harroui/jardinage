"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { updateRequestStatus } from "@/app/actions"
import { Phone, Mail, Calendar, MessageSquare, User } from "lucide-react"

interface ContactRequest {
  id: number
  name: string
  email: string
  phone: string
  service?: string
  urgency?: string
  message: string
  status: string
  created_at: string
}

interface AdminDashboardProps {
  requests: ContactRequest[]
}

const statusColors = {
  nouveau: "bg-blue-100 text-blue-800",
  "en cours": "bg-yellow-100 text-yellow-800",
  traité: "bg-green-100 text-green-800",
  annulé: "bg-red-100 text-red-800",
}

const urgencyColors = {
  urgent: "bg-red-100 text-red-800",
  semaine: "bg-orange-100 text-orange-800",
  mois: "bg-blue-100 text-blue-800",
  flexible: "bg-gray-100 text-gray-800",
}

export function AdminDashboard({ requests }: AdminDashboardProps) {
  const [filter, setFilter] = useState<string>("tous")

  const filteredRequests = requests.filter((request) => filter === "tous" || request.status === filter)

  const handleStatusChange = async (id: number, newStatus: string) => {
    const result = await updateRequestStatus(id, newStatus)
    if (result.success) {
      // La page se rechargera automatiquement grâce à revalidatePath
      window.location.reload()
    }
  }

  const stats = {
    total: requests.length,
    nouveau: requests.filter((r) => r.status === "nouveau").length,
    enCours: requests.filter((r) => r.status === "en cours").length,
    traité: requests.filter((r) => r.status === "traité").length,
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Tableau de bord - Demandes clients</h1>
          <p className="text-gray-600">Gérez vos demandes de jardinage</p>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
                </div>
                <User className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Nouvelles</p>
                  <p className="text-2xl font-bold text-blue-600">{stats.nouveau}</p>
                </div>
                <MessageSquare className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">En cours</p>
                  <p className="text-2xl font-bold text-yellow-600">{stats.enCours}</p>
                </div>
                <Calendar className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Traitées</p>
                  <p className="text-2xl font-bold text-green-600">{stats.traité}</p>
                </div>
                <Badge className="h-8 w-8 bg-green-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filtres */}
        <div className="mb-6">
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filtrer par statut" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="tous">Toutes les demandes</SelectItem>
              <SelectItem value="nouveau">Nouvelles</SelectItem>
              <SelectItem value="en cours">En cours</SelectItem>
              <SelectItem value="traité">Traitées</SelectItem>
              <SelectItem value="annulé">Annulées</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Liste des demandes */}
        <div className="space-y-4">
          {filteredRequests.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <p className="text-gray-500">Aucune demande trouvée</p>
              </CardContent>
            </Card>
          ) : (
            filteredRequests.map((request) => (
              <Card key={request.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{request.name}</CardTitle>
                      <CardDescription className="flex items-center gap-4 mt-2">
                        <span className="flex items-center gap-1">
                          <Mail className="h-4 w-4" />
                          {request.email}
                        </span>
                        <span className="flex items-center gap-1">
                          <Phone className="h-4 w-4" />
                          {request.phone}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(request.created_at).toLocaleDateString("fr-FR")}
                        </span>
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={statusColors[request.status as keyof typeof statusColors]}>
                        {request.status}
                      </Badge>
                      {request.urgency && (
                        <Badge
                          variant="outline"
                          className={urgencyColors[request.urgency as keyof typeof urgencyColors]}
                        >
                          {request.urgency}
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {request.service && (
                      <div>
                        <span className="font-medium text-gray-700">Service demandé: </span>
                        <span className="text-gray-600">{request.service}</span>
                      </div>
                    )}

                    <div>
                      <span className="font-medium text-gray-700">Message: </span>
                      <p className="text-gray-600 mt-1">{request.message}</p>
                    </div>

                    <div className="flex items-center gap-2 pt-4 border-t">
                      <span className="text-sm font-medium text-gray-700">Changer le statut:</span>
                      <Select value={request.status} onValueChange={(value) => handleStatusChange(request.id, value)}>
                        <SelectTrigger className="w-40">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="nouveau">Nouveau</SelectItem>
                          <SelectItem value="en cours">En cours</SelectItem>
                          <SelectItem value="traité">Traité</SelectItem>
                          <SelectItem value="annulé">Annulé</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
