import NextAuth, { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

type Credential = {
  email: string;
  id: string;
  role: string;
  name: string;
};

const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      authorize: (credential, req) => {
        const { email, id, role, name } = req.body as Credential;
        console.log("credential", credential);
        return {
          email,
          role,
          id,
          name,
        } as User;
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    signOut: "/",
  },
  callbacks: {
    jwt(params) {
      console.log("params", params);
      if (params.user?.role) {
        params.token.role = params.user.role;
      }
      return params.token;
    },
    session({ session, token }) {
      const { user } = session;
      if (token) {
        user.role = token.role as string;
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);
