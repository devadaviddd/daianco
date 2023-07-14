/* eslint-disable no-unused-vars */
import NextAuth, { DefaultSession } from "next-auth"

declare module "next-auth" {
  interface User extends DefaultUser {
    role: string;
  }

  interface User {
    role?: Role;
    subscribed: boolean;
  }

  interface Session {
    user: {
      /** The user's postal address. */
      address: string;
      role: string;
    } & DefaultSession["user"]
  }
}
