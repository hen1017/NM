import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// 把 NextAuth 的設定定義為 authOptions
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "帳號", type: "text" },
        password: { label: "密碼", type: "password" },
      },
      async authorize(credentials) {
        const { username, password } = credentials ?? {};
        if (username === "admin" && password === "1234") {
          return { id: "1", name: "管理員" };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/admin/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET || "secret-key",
};

// 把 NextAuth 設定套用給 handler
const handler = NextAuth(authOptions);

// 導出 handler 和 authOptions
export { handler as GET, handler as POST };
