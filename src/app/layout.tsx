import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { theme } from "@/theme";

import "./globals.css";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/nprogress/styles.css";
import { Notifications } from "@mantine/notifications";
import { NavigationProgress } from "@mantine/nprogress";
import { getServerSession } from "next-auth";
import SessionProvider from "@/components/context/SessionProvider";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await getServerSession();

    return (
        <html lang="en" data-mantine-color-scheme="dark">
            <head>
                <ColorSchemeScript />
            </head>
            <body cz-shortcut-listen="true">
                <SessionProvider session={session}>
                    <MantineProvider theme={theme}>
                        <Notifications />
                        <NavigationProgress />
                        {children}
                    </MantineProvider>
                </SessionProvider>
            </body>
        </html>
    );
}
