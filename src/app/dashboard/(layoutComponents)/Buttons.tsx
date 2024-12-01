"use client";

import { useNavbarContext } from "@/components";
import { ActionIcon, Burger } from "@mantine/core";
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

export function NavbarToggleButton() {
    const { isOpen, setIsOpen } = useNavbarContext();
    return (
        <Burger
            hiddenFrom="sm"
            opened={isOpen}
            onClick={() => setIsOpen(!isOpen)}
        />
    );
}
