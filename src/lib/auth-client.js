import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: "http://localhost:3000",
});

// ✅ use SAME instance
export const { signIn, signUp, signOut, useSession } = authClient;