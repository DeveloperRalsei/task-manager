"use client";

import { Stack, TextInput, PasswordInput, Button } from "@mantine/core";
import { signIn } from "next-auth/react";

export function CredentialsForm() {
    return (
        <form
            action={async (formdata) => {
                await signIn("credentials", {
                    callbackUrl: "/dashboard",
                    ...formdata,
                });
            }}>
            <Stack>
                <TextInput name="email" type="email" label="email" />
                <PasswordInput name="password" label="password" />
                <Button type="submit">Sign In</Button>
            </Stack>
        </form>
    );
}
