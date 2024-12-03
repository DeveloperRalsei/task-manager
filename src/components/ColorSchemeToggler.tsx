"use client";

import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconMoon, IconSunFilled } from "@tabler/icons-react";

export const ColorSchemeToggler = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    return (
        <ActionIcon
            onClick={toggleColorScheme}
            variant="light"
            color={colorScheme === "dark" ? "yellow" : "blue"}>
            {colorScheme === "dark" ? <IconSunFilled /> : <IconMoon />}
        </ActionIcon>
    );
};
