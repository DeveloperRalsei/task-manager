import { DefaultUser } from "next-auth";

declare module "next-auth" {
    interface User extends DefaultUser {
        password?: string;
        role?: "Riza" | "admin" | "user";
    }

    interface Session {
        user?: User;
    }
}
