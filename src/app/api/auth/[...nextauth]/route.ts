import { prisma } from "@/lib/prisma";
import NextAuth, { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import bcrypt from "bcrypt";
import { User } from "@/types/data";

export const authOptions: AuthOptions = {
    providers: [
        Github({
            clientId: process.env.GITHUB_CLIENTID ?? "",
            clientSecret: process.env.GITHUB_SECRET ?? "",
        }),

        Credentials({
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "example@example.net",
                },
                password: { label: "Password", type: "password" },
            },
            authorize: async (credentials) => {
                if (!credentials) return null;

                try {
                    const user = await prisma.user.findUnique({
                        where: {
                            email: credentials.email,
                        },
                    });

                    if (!user) return null;

                    const validUser = await bcrypt.compare(
                        credentials.password,
                        user.password
                    );

                    if (validUser)
                        return {
                            ...user,
                            role: user.role as User["role"],
                        };

                    return null;
                } catch (error) {
                    throw error;
                }
            },
        }),
    ],

    pages: {
        signIn: "/login",
    },
};

const handler = NextAuth(authOptions);

export { handler as POST, handler as GET };
