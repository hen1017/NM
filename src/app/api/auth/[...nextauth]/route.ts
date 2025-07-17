import NextAuth from "next-auth";
import { authOptions } from "@/lib/authOptions"; // ✅ 匯入剛才抽出來的

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

