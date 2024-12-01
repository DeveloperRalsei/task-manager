export type Permision = "createUser" | "deleteUser";

export type User = {
    email: string;
    password: string;
    role: "admin" | "user";
    hasPermissions?: Permision[];
};
