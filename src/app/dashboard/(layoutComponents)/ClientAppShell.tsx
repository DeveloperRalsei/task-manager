"use client";

import { AppShell, AppShellMain, Container, Stack } from "@mantine/core";
import { Session } from "next-auth";
import DashboardWrapper from "./DashboardWrapper";
import { useDisclosure } from "@mantine/hooks";

export default function Dashboard({
    children,
    session,
}: {
    children: React.ReactNode;
    session: Session;
}) {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            navbar={{
                width: 250,
                breakpoint: "sm",
                collapsed: { desktop: opened, mobile: !opened },
            }}
            header={{
                height: 70,
            }}>
            <DashboardWrapper
                session={session}
                sidebarState={{
                    opened,
                    toggle,
                }}
            />
            <AppShellMain>
                <Container size="md" my={"xl"}>
                    <Stack w={"100%"}>{children}</Stack>
                </Container>
            </AppShellMain>
        </AppShell>
    );
}
