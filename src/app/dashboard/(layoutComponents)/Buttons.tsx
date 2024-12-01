"use client";

import { ActionIcon } from "@mantine/core";
import { IconLogout } from "@tabler/icons-react";
import { signOut } from "next-auth/react";

export function LogOutButton() {
    return (
        <ActionIcon
            onClick={() => signOut({ callbackUrl: "/login" })}
            type="submit"
            variant="light"
            color="red">
            <IconLogout />
        </ActionIcon>
    );
}
