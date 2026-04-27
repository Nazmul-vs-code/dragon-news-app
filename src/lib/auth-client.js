import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: "https://dragon-news-app-2pk1.vercel.app",
});

// ✅ use SAME instance
export const { signIn, signUp, signOut, useSession } = authClient;