import { navLink } from "@/types/data";
import { IconPlus, IconUser, IconUsers, IconX } from "@tabler/icons-react";

export const NavLinks: navLink[] = [
    {
        label: "Users",
        icon: <IconUsers />,
        children: [
            {
                label: "Create",
                icon: <IconPlus />,
                href: "/dashboard/users/create",
            },
            {
                label: "List",
                href: "/dashboard/users",
                icon: <IconUser />,
            },
            {
                label: "Delete",
                href: "/dashboard/users/delete",
                icon: <IconX />,
            },
        ],
    },
    {
        label: "Projects",
        href: "/dashboard/projects",
    },
    {
        label: "Settings",
        icon: <IconPlus />,
    },
];
