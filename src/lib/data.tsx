import { navLink } from "@/types/data";
import { IconPlus, IconUser, IconUsers, IconX } from "@tabler/icons-react";

export const NavLinks: navLink[] = [
    {
        label: "Projects",
        icon: <IconUsers />,
        children: [
            {
                label: "List",
                href: "/dashboard/projects",
                icon: <IconUser />,
            },
            {
                label: "Create",
                icon: <IconPlus />,
                href: "/dashboard/projects/create",
            },
            {
                label: "Delete",
                href: "/dashboard/projects/delete",
                icon: <IconX />,
            },
        ],
    },
    {
        label: "Settings",
        icon: <IconPlus />,
    },
];

export const GITHUB_ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN ?? "";
