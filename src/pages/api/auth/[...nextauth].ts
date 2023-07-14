import NextAuth, { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

type Credential = {
  email: string;
  password: string;
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
      // eslint-disable-next-line no-unused-vars
      authorize (credential, req) {
        const { email, password } = credential as Credential;
        if (email !== "123@gmail.com" || password !== "123") {
          throw new Error("invalid credentials");
        }

        // if everything is fine
        return {
          id: "1234",
          name: "John Doe",
          email: "john@gmail.com",
          role: "admin",
        } as User;
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    signOut: '/',
  },
  callbacks: {
    jwt(params) {
      if (params.user?.role) {
        params.token.role = params.user.role;
        console.log("params", params);
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
