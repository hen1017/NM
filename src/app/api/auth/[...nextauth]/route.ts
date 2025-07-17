import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// ✅ 登入邏輯放這裡
const authOptions = {
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

// ✅ 這才是 Next.js API route 要求的格式：**僅 export handler**
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
export { authOptions };

