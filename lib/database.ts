import Database from "better-sqlite3"
import path from "path"

const dbPath = path.join(process.cwd(), "jardinage.db")
const db = new Database(dbPath)

// Configuration pour de meilleures performances
db.pragma("journal_mode = WAL")
db.pragma("synchronous = NORMAL")

// Types TypeScript pour nos tables
export interface ContactRequest {
  id?: number
  name: string
  email: string
  phone: string
  service?: string
  urgency?: string
  message: string
  status?: string
  created_at?: string
  updated_at?: string
}

export interface Service {
  id?: number
  name: string
  description?: string
  price_range?: string
  duration?: string
  active?: boolean
  created_at?: string
}

export interface Client {
  id?: number
  name: string
  email: string
  phone?: string
  address?: string
  notes?: string
  created_at?: string
}

// Fonctions pour les demandes de contact
export const contactRequestsDb = {
  // Créer une nouvelle demande
  create: (data: Omit<ContactRequest, "id" | "created_at" | "updated_at">) => {
    const stmt = db.prepare(`
      INSERT INTO contact_requests (name, email, phone, service, urgency, message)
      VALUES (?, ?, ?, ?, ?, ?)
    `)
    return stmt.run(data.name, data.email, data.phone, data.service, data.urgency, data.message)
  },

  // Récupérer toutes les demandes
  getAll: () => {
    const stmt = db.prepare("SELECT * FROM contact_requests ORDER BY created_at DESC")
    return stmt.all() as ContactRequest[]
  },

  // Récupérer une demande par ID
  getById: (id: number) => {
    const stmt = db.prepare("SELECT * FROM contact_requests WHERE id = ?")
    return stmt.get(id) as ContactRequest | undefined
  },

  // Mettre à jour le statut d'une demande
  updateStatus: (id: number, status: string) => {
    const stmt = db.prepare(`
      UPDATE contact_requests 
      SET status = ?, updated_at = CURRENT_TIMESTAMP 
      WHERE id = ?
    `)
    return stmt.run(status, id)
  },

  // Supprimer une demande
  delete: (id: number) => {
    const stmt = db.prepare("DELETE FROM contact_requests WHERE id = ?")
    return stmt.run(id)
  },
}

// Fonctions pour les services
export const servicesDb = {
  getAll: () => {
    const stmt = db.prepare("SELECT * FROM services WHERE active = 1 ORDER BY name")
    return stmt.all() as Service[]
  },

  getById: (id: number) => {
    const stmt = db.prepare("SELECT * FROM services WHERE id = ?")
    return stmt.get(id) as Service | undefined
  },
}

// Fonctions pour les clients
export const clientsDb = {
  create: (data: Omit<Client, "id" | "created_at">) => {
    const stmt = db.prepare(`
      INSERT OR REPLACE INTO clients (name, email, phone, address, notes)
      VALUES (?, ?, ?, ?, ?)
    `)
    return stmt.run(data.name, data.email, data.phone, data.address, data.notes)
  },

  getAll: () => {
    const stmt = db.prepare("SELECT * FROM clients ORDER BY name")
    return stmt.all() as Client[]
  },

  getByEmail: (email: string) => {
    const stmt = db.prepare("SELECT * FROM clients WHERE email = ?")
    return stmt.get(email) as Client | undefined
  },
}

export default db
