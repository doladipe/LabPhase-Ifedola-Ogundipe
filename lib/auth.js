import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

const adminEmail = process.env.ADMIN_EMAIL;
const adminPass = process.env.ADMIN_PASSWORD;
let adminHash;
(async () => {
  adminHash = await bcrypt.hash(adminPass, 10);
})();

export const authOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: { email: {}, password: {} },
      async authorize(credentials) {
        if (
          credentials.email === adminEmail &&
          (await bcrypt.compare(credentials.password, adminHash))
        ) {
          return { id: "admin-1", email: adminEmail, role: "admin" };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role || "admin";
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role;
      return session;
    },
  },
  pages: { signIn: "/login" },
};
