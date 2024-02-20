// import NextAuth, { DefaultSession, DefaultJWT } from "next-auth";
// import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      userId: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    userId: string;
  }
}

export type User = {
  id?: string | null;
  name?: string | null;
  email?: string | null;
};
