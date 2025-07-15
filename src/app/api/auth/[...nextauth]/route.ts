import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// 驗證邏輯寫在這
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (
          credentials?.username === "Hank" &&
          credentials?.password === "1234"
        ) {
          return {
            id: "1",
            name: "管理員",
          };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/admin/login",
  },
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub;
      return session;
    },
  },
};

// ✅ 必須 export default 為 route handler 給 Next.js 用！
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

