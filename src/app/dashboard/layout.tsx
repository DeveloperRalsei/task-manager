import {
    AppShell,
    AppShellHeader,
    AppShellMain,
    AppShellNavbar,
    AppShellSection,
    ScrollArea,
    Group,
    Avatar,
    Menu,
    MenuTarget,
    Button,
    MenuDropdown,
    Grid,
    GridCol,
    Stack,
    Text,
    MenuDivider,
    ActionIcon,
    NavLink,
    Title,
} from "@mantine/core";
import { IconSettings } from "@tabler/icons-react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { LogOutButton, NavbarToggleButton } from "./(layoutComponents)/Buttons";
import Link from "next/link";
import { NavLinks } from "@/data";
import { useNavbarContext } from "@/components";

export default async function Dashboard({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerSession(authOptions);

    if (!session?.user?.name) {
        redirect("/login");
    }

    // const { isOpen } = useNavbarContext();

    return (
        <AppShell
            navbar={{
                width: 250,
                breakpoint: "sm",
                collapsed: { desktop: false, mobile: false },
            }}
            header={{
                height: 70,
            }}>
            <AppShellHeader>
                <Group h={"100%"}>
                    <Group px={"sm"} w={"100%"} justify="space-between">
                        <Group>
                            <NavbarToggleButton />
                            <Title order={4}>Task Manager</Title>
                        </Group>
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
                            {session.user.image ? (
                                <Avatar src={session.user.image} />
                            ) : (
                                <Avatar />
                            )}
                            <Menu position="right-start">
                                <MenuTarget>
                                    <Button
                                        variant="subtle"
                                        color="gray"
                                        size="compact-sm">
                                        {session.user.name}
                                    </Button>
                                </MenuTarget>
                                <MenuDropdown p={"sm"}>
                                    <Grid>
                                        <GridCol span={3}>
                                            <Avatar src={session.user.image} />
                                        </GridCol>
                                        <GridCol span={9}>
                                            <Stack gap={5}>
                                                <Text inline>
                                                    {session.user.name}
                                                </Text>
                                                <Text c={"dimmed"} fz={"sm"}>
                                                    {session.user.email}
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
            <AppShellMain>{children}</AppShellMain>
        </AppShell>
    );
}
