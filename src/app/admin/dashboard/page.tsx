import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/authOptions"
import { redirect } from "next/navigation"
import { Session } from "next-auth" // ✅ 加這行

export default async function DashboardPage() {
  const session: Session | null = await getServerSession(authOptions) // ✅ 明確指定型別

  if (!session) {
    redirect("/admin/login")
  }

  return (
    <div>
      <h1>主人，歡迎回來，{session.user?.name}</h1>
      <p>這是管理員後台頁面</p>
    </div>
  )
}

