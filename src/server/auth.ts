import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/src/utils/dbconnect";

export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  // database: process.env.DB_URI,
  secret: process.env.SECRET,
  session: {
    strategy: "jwt",
  },

  pages: {},
  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    // on signin, jwt called before session callback, and user.id is from db!
    async jwt({ token, user }) {
      if (user?.id) {
        token.userId = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.userId) {
        session.user.userId = token.userId;
      }
      return session;
    },
  },
  events: {},
  debug: false,
};
