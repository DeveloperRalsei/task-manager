import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";

export const authOptions = {
    providers: [
        Credentials({
            credentials: {
                email: { label: "E-Mail", type: "Email" },
                password: { label: "Password", type: "password" },
            },
            authorize(credentials) {
                if (!credentials) return null;

                const { email, password } = credentials;

                if (email !== "admin@test.com" || password !== "1234") {
                    return null;
                }

                return {
                    id: "1",
                    email: "admin@test.com",
                    name: "Rıza | Admin",
                };
            },
        }),

        Github({
            clientId:
                process.env.GITHUB_CLIENTID ||
                (function () {
                    throw new Error("GITHUB_CLIENTID is not set");
                })(),
            clientSecret:
                process.env.GITHUB_SECRET ||
                (function () {
                    throw new Error("GITHUB_SECRET is not set");
                })(),
        }),
    ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
