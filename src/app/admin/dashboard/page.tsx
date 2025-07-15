import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/admin/login");
  }

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>🎉 歡迎進入後台！</h1>
      <p>登入使用者：{session.user?.name}</p>
      <p>你現在看到的是保護頁面</p>
    </div>
  );
}

