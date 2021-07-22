import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { db } from "../../../firebase";
import { FirebaseAdapter } from "@next-auth/firebase-adapter";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],

  adapter: FirebaseAdapter(db),
});
