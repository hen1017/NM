import CredentialsProvider from "next-auth/providers/credentials";
import { Session } from "next-auth";         // ✅ 新增這行
import { JWT } from "next-auth/jwt";         // ✅ 新增這行

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (credentials?.username === "Hank" && credentials?.password === "1234") {
          return { id: "1", name: "管理員" };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/admin/login",
  },
  callbacks: {
    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user) {
        session.user.id = token.sub as string;
      }
      return session;
    },
  },
};

