export type Permision = "createUser" | "deleteUser";

export type User = {
    email: string;
    password: string;
    role: "admin" | "user";
    hasPermissions?: Permision[];
};

export type navLink = {
    label: string;
    href?: string;
    icon?: React.ReactNode;
    children?: navLink[];
};
