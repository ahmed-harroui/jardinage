"use server"

import { contactRequestsDb, clientsDb } from "@/lib/database"
import { revalidatePath } from "next/cache"

export interface ContactFormData {
  name: string
  email: string
  phone: string
  service?: string
  urgency?: string
  message: string
}

export async function submitContactForm(formData: ContactFormData) {
  try {
    // Validation des données
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      return {
        success: false,
        error: "Tous les champs obligatoires doivent être remplis",
      }
    }

    // Validation email basique
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return {
        success: false,
        error: "Adresse email invalide",
      }
    }

    // Enregistrer la demande de contact
    const result = contactRequestsDb.create({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service || null,
      urgency: formData.urgency || null,
      message: formData.message,
      status: "nouveau",
    })

    // Créer ou mettre à jour le client
    clientsDb.create({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: "",
      notes: `Demande initiale: ${formData.service || "Non spécifié"}`,
    })

    console.log("Nouvelle demande de contact:", {
      id: result.lastInsertRowid,
      name: formData.name,
      email: formData.email,
      service: formData.service,
      urgency: formData.urgency,
    })

    return {
      success: true,
      message: "Votre demande a été envoyée avec succès ! Nous vous recontacterons rapidement.",
      requestId: result.lastInsertRowid,
    }
  } catch (error) {
    console.error("Erreur lors de l'enregistrement:", error)
    return {
      success: false,
      error: "Une erreur est survenue. Veuillez réessayer.",
    }
  }
}

export async function getContactRequests() {
  try {
    const requests = contactRequestsDb.getAll()
    return {
      success: true,
      data: requests,
    }
  } catch (error) {
    console.error("Erreur lors de la récupération des demandes:", error)
    return {
      success: false,
      error: "Impossible de récupérer les demandes",
    }
  }
}

export async function updateRequestStatus(id: number, status: string) {
  try {
    contactRequestsDb.updateStatus(id, status)
    revalidatePath("/admin")
    return {
      success: true,
      message: "Statut mis à jour avec succès",
    }
  } catch (error) {
    console.error("Erreur lors de la mise à jour:", error)
    return {
      success: false,
      error: "Impossible de mettre à jour le statut",
    }
  }
}
