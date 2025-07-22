import Database from "better-sqlite3"
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function setupDatabase() {
  try {
    console.log("🚀 Initialisation de la base de données SQLite...")

    // Chemin vers la base de données
    const dbPath = path.join(process.cwd(), "jardinage.db")

    // Supprimer l'ancienne base si elle existe
    if (fs.existsSync(dbPath)) {
      fs.unlinkSync(dbPath)
      console.log("📁 Ancienne base de données supprimée")
    }

    // Créer la nouvelle base de données
    const db = new Database(dbPath)
    console.log("✅ Base de données créée:", dbPath)

    // Lire le script SQL
    const sqlPath = path.join(__dirname, "init-database.sql")
    const sqlScript = fs.readFileSync(sqlPath, "utf8")

    // Exécuter le script SQL
    db.exec(sqlScript)
    console.log("✅ Tables créées et données initiales insérées")

    // Vérifier que tout fonctionne
    const servicesCount = db.prepare("SELECT COUNT(*) as count FROM services").get()
    console.log(`✅ ${servicesCount.count} services ajoutés`)

    // Fermer la connexion
    db.close()

    console.log("🎉 Base de données initialisée avec succès !")
    console.log("")
    console.log("📋 Prochaines étapes:")
    console.log("1. Lancez votre application: npm run dev")
    console.log("2. Testez le formulaire de contact sur: http://localhost:3000")
    console.log("3. Consultez les demandes sur: http://localhost:3000/admin")
  } catch (error) {
    console.error("❌ Erreur lors de l'initialisation:", error)
    process.exit(1)
  }
}

setupDatabase()
