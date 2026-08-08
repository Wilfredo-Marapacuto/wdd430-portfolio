import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { z } from "zod";

const credentialsSchema = z.object({
  email: z.string().trim().toLowerCase().email(),
  password: z.string().min(1),
});

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        const validatedCredentials =
          credentialsSchema.safeParse(credentials);

        if (!validatedCredentials.success) {
          return null;
        }

        const { email, password } = validatedCredentials.data;
        const authorizedEmail = process.env.AUTH_USER_EMAIL
          ?.trim()
          .toLowerCase();
        const passwordHash = process.env.AUTH_USER_PASSWORD_HASH;

        if (!authorizedEmail || !passwordHash) {
          console.error("Missing authentication environment variables.");
          return null;
        }

        const passwordMatches = await bcrypt.compare(
          password,
          passwordHash,
        );

        if (email !== authorizedEmail || !passwordMatches) {
          return null;
        }

        return {
          id: "1",
          name: "Wilfredo Marapacuto",
          email: authorizedEmail,
        };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
});