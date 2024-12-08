import { Stack } from "@mantine/core";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { GithubLoginButton } from "./(forms)/Buttons";

export default async function Login() {
    const session = await getServerSession(authOptions);

    if (session?.user?.name) {
        redirect("/dashboard");
    }

    return (
        <Stack h={"100vh"} align="center" justify="center">
            <GithubLoginButton />
        </Stack>
    );
}
