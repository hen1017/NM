import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // 這裡寫你的帳號驗證邏輯
        if (credentials?.username === "Hank" && credentials?.password === "1234") {
          return { id: "1", name: "管理員" };
        }
        return null;
      }
    })
  ],
  pages: {
    signIn: "/admin/login",
  }
};

// ✅ 這行一定要加上！
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

