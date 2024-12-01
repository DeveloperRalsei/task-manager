"use client";

import { Button } from "@mantine/core";
import { IconBrandGithub } from "@tabler/icons-react";
import { signIn } from "next-auth/react";

export function GithubLoginButton() {
    return (
        <Button
            onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
            tw="700"
            rightSection={<IconBrandGithub />}
            type="submit">
            Github
        </Button>
    );
}
