"use client";

import {
    ActionIcon,
    AppShellHeader,
    AppShellNavbar,
    AppShellSection,
    Avatar,
    Button,
    Grid,
    GridCol,
    Group,
    Menu,
    MenuDivider,
    MenuDropdown,
    MenuTarget,
    NavLink,
    ScrollArea,
    Text,
    Stack,
    Title,
    Burger,
} from "@mantine/core";
import { LogOutButton } from "./Buttons";
import { NavLinks } from "@/lib/data";
import { IconSettings } from "@tabler/icons-react";
import Link from "next/link";
import { Session } from "next-auth";
import { ColorSchemeToggler } from "@/components/ColorSchemeToggler";

export default function DashboardWrapper({
    session,
    sidebarState,
}: {
    session: Session;
    sidebarState: {
        opened: boolean;
        toggle: () => void;
    };
}) {
    const { opened, toggle } = sidebarState;

    return (
        <>
            <AppShellHeader>
                <Group h={"100%"}>
                    <Group px={"sm"} w={"100%"} justify="space-between">
                        <Group>
                            <Burger opened={opened} onClick={toggle} />
                            <Title order={4}>Task Manager</Title>
                        </Group>
                        <ColorSchemeToggler />
                    </Group>
                </Group>
            </AppShellHeader>
            <AppShellNavbar>
                <AppShellSection grow component={ScrollArea}>
                    {NavLinks.map((link, i) => {
                        if ("children" in link) {
                            return (
                                <NavLink
                                    key={link.label + i}
                                    label={link.label}
                                    leftSection={link.icon}>
                                    {link.children?.map((child, i) => (
                                        <NavLink
                                            key={child.label + i}
                                            label={child.label}
                                            leftSection={child.icon}
                                            component={Link}
                                            href={child.href || ""}
                                        />
                                    ))}
                                </NavLink>
                            );
                        } else {
                            return (
                                <NavLink
                                    leftSection={link.icon}
                                    component={Link}
                                    href={link.href || ""}
                                    key={link.label + i}
                                    label={link.label}
                                />
                            );
                        }
                    })}
                </AppShellSection>
                <AppShellSection
                    h={100}
                    component={Stack}
                    align="center"
                    justify="center">
                    <Group wrap="nowrap">
                        <Group w={"100%"} wrap="nowrap" gap={6}>
                            {session.user!.image ? (
                                <Avatar src={session.user!.image} />
                            ) : (
                                <Avatar />
                            )}
                            <Menu>
                                <MenuTarget>
                                    <Button
                                        variant="subtle"
                                        color="gray"
                                        size="compact-sm">
                                        {session.user!.name}
                                    </Button>
                                </MenuTarget>
                                <MenuDropdown p={"sm"}>
                                    <Grid>
                                        <GridCol span={3}>
                                            <Avatar src={session.user!.image} />
                                        </GridCol>
                                        <GridCol span={9}>
                                            <Stack gap={5}>
                                                <Text inline>
                                                    {session.user!.name}
                                                </Text>
                                                <Text c={"dimmed"} fz={"sm"}>
                                                    {session.user!.email}
                                                </Text>
                                            </Stack>
                                        </GridCol>
                                    </Grid>

                                    <MenuDivider />
                                    <Group justify="space-between">
                                        <ActionIcon variant="light">
                                            <IconSettings />
                                        </ActionIcon>
                                        <LogOutButton />
                                    </Group>
                                </MenuDropdown>
                            </Menu>
                        </Group>
                    </Group>
                </AppShellSection>
            </AppShellNavbar>
        </>
    );
}
