"use client";

import { Button, Paper } from "@mantine/core";
import { IconBrandGithub } from "@tabler/icons-react";
import { signIn } from "next-auth/react";

export function GithubLoginButton() {
    return (
        <Paper withBorder p={"md"}>
            <Button
                size="xl"
                rightSection={<IconBrandGithub />}
                onClick={() =>
                    signIn("github", {
                        callbackUrl: "/dashboard",
                        redirect: true,
                    })
                }>
                {"Login with Github"}
            </Button>
        </Paper>
    );
}
