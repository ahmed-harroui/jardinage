import { getContactRequests } from "@/app/actions"
import { AdminDashboard } from "@/components/admin-dashboard"

export default async function AdminPage() {
  const result = await getContactRequests()

  if (!result.success) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Erreur</h1>
          <p className="text-gray-600">{result.error}</p>
        </div>
      </div>
    )
  }

  return <AdminDashboard requests={result.data || []} />
}
