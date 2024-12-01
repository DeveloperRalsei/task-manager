import { object, string } from "zod";

export const credentialsSchema = object({
    email: string().email("Please enter a valid email"),
    password: string().min(4, "The password must contain at least 4 character"),
});
