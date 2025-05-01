import NextAuth, { DefaultSession } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "@auth/core/providers/google";

import { loginAuth, loginGAuth } from "@/api/serverApiService";
import { isErrorToToast } from "@/types/errors/ErrorToToast";

declare module "next-auth" {
  interface User {
    company_name: string;
    tokenId: string;
    is_admin: boolean;
  }

  interface Session {
    tokenId: string;
    user: {
      company_name: string;
      is_admin: boolean;
    } & DefaultSession["user"];
  }

  interface JWT {
    tokenId: string;
    company_name: string;
    is_admin: boolean;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google,
    Credentials({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
        id_token: { label: "Google Token ID", type: "text" },
        company_name: { label: "Company Name", type: "text" },
      },
      authorize: async (credentials) => {
        let response = await loginAuth(credentials);

        if (isErrorToToast(response)) {
          return null;
        }

        return response;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        token.tokenId = user.tokenId;
        token.company_name = user.company_name;
        token.is_admin = user.is_admin;
      }

      // 🔥 Handle Google sign-in separately
      if (account?.provider === "google" && account.id_token) {
        let response = await loginGAuth(account.id_token);

        if (!isErrorToToast(response) && response?.tokenId) {
          token.tokenId = response.tokenId;
          token.company_name = response.company_name;
          token.is_admin = response.is_admin;
        }
      }

      return token;
    },

    async session({ session, token }) {
      return {
        ...session,
        tokenId: token.tokenId,
        user: {
          ...session.user,
          company_name: token.company_name as string,
          is_admin: token.is_admin as boolean,
        },
      };
    },

    async signIn({ account, profile }) {
      if (!account) return false;

      if (account.provider === "google" && account.id_token) {
        let response = await loginGAuth(account.id_token);

        if (isErrorToToast(response)) {
          return response.message === "InvalidEmailOrPassword"
            ? `/signup/google?email=${profile?.email}&id_token=${account.id_token}`
            : false;
        } else return !!response?.tokenId;
      }

      return true;
    },
  },
});
