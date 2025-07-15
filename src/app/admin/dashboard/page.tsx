import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import LogoutButton from "./LogoutButton";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/admin/login");
  }

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif", color: "white" }}>
      <h1>主人， 歡迎回來，{session.user?.name || "使用者"}</h1>
      <p>這是管理員後台頁面</p>
      <LogoutButton />
    </div>
  );
}

