import { getServerSession } from "next-auth";
import ClientAppShell from "./(layoutComponents)/ClientAppShell";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { getCsrfToken } from "next-auth/react";
import { getToken } from "next-auth/jwt";

export default async function Dashboard({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerSession(authOptions);
    if (!session?.user?.name) {
        redirect("/login");
    }

    return <ClientAppShell session={session}>{children}</ClientAppShell>;
}
