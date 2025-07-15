import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "帳號", type: "text" },
        password: { label: "密碼", type: "password" },
      },
      async authorize(credentials) {
        const { username, password } = credentials;

        // 這邊是帳密驗證（你可以自己改）
        if (username === "Hank" && password === "1017") {
          return { id: 1, name: "管理員" };
        }

        return null; // 登入失敗
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
});

export { handler as GET, handler as POST };

