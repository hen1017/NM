import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
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

// ✅ 將 handler 匯出為 GET 與 POST 給 Next.js 認得
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

