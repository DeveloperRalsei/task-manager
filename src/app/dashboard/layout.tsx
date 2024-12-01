import {
    AppShell,
    AppShellHeader,
    AppShellMain,
    AppShellNavbar,
    AppShellSection,
    ScrollArea,
    Skeleton,
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
} from "@mantine/core";
import { IconSettings } from "@tabler/icons-react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { LogOutButton } from "./(layoutComponents)/Buttons";

export default async function Dashboard({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerSession(authOptions);

    if (!session?.user?.name) {
        redirect("/login");
    }

    return (
        <AppShell
            navbar={{
                width: 250,
                breakpoint: "sm",
            }}
            header={{
                height: 70,
            }}>
            <AppShellHeader>header</AppShellHeader>
            <AppShellNavbar p="md">
                <AppShellSection grow component={ScrollArea}>
                    60 links in a scrollable section
                    {Array(60)
                        .fill(0)
                        .map((_, index) => (
                            <Skeleton
                                key={index}
                                h={28}
                                mt="sm"
                                animate={false}
                            />
                        ))}
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
