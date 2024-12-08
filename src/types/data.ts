export type Permision = "createUser" | "deleteUser";

export type User = {
    email: string;
    password: string;
    role: "Riza" | "admin" | "user";
    hasPermissions?: Permision[];
};

export type navLink = {
    label: string;
    href?: string;
    icon?: React.ReactNode;
    children?: navLink[];
};

export type Project = {
    id: number;

    type: "personal" | "github";
    name: string;
    description: string;
    owner: User;
    members: User[];
};

export type Repository = {
    id: number;
    name: string;
    description: string;
    owner: User;
    members: User[];
    permissions: Permision[];
};
