import { Divider, Paper, Stack } from "@mantine/core";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { CredentialsForm } from "./(forms)/CredentialsForm";
import { GithubLoginButton } from "./(forms)/Buttons";

export default async function Login() {
    const session = await getServerSession(authOptions);

    if (session?.user?.name) {
        redirect("/dashboard");
    }

    return (
        <Stack h={"100vh"} align="center" justify="center">
            <Paper withBorder p={"lg"}>
                <CredentialsForm />

                <Divider label="or sign in with" my={"sm"} />

                <Stack>
                    <GithubLoginButton />
                </Stack>
            </Paper>
        </Stack>
    );
}
