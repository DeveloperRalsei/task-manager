import { AuthOptions } from "next-auth";
import Github from "next-auth/providers/github";

export const authOptions: AuthOptions = {
    providers: [
        Github({
            clientId: process.env.GITHUB_CLIENTID ?? "",
            clientSecret: process.env.GITHUB_SECRET ?? "",
            authorization: { params: { prompt: "login" } },
        }),
    ],

    pages: {
        signIn: "/login",
    },

    callbacks: {
        async signIn({ profile }) {
            if (
                profile?.email === "fluffycutegoatboi@gmail.com" ||
                "rizayildirim126@gmail.com"
            ) {
                return true;
            }
            return false;
        },
    },
};
