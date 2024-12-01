"use client";

import { useState } from "react";
import { Stack, TextInput, PasswordInput, Button } from "@mantine/core";
import { signIn } from "next-auth/react";
import { credentialsSchema } from "@/types/zod-schemes";

export function CredentialsForm() {
    const [errors, setErrors] = useState<{ email?: string; password?: string }>(
        {}
    );

    const handleSubmit = async (formData: FormData) => {
        const data = {
            email: formData.get("email") as string,
            password: formData.get("password") as string,
        };

        const result = credentialsSchema.safeParse(data);

        if (!result.success) {
            const validationErrors = result.error.format();
            setErrors({
                email: validationErrors.email?._errors[0],
                password: validationErrors.password?._errors[0],
            });
            return false;
        }

        setErrors({});
        return data;
    };

    return (
        <form
            action={async (formData) => {
                const validatedData = await handleSubmit(formData);

                if (validatedData) {
                    await signIn("credentials", {
                        callbackUrl: "/dashboard",
                        ...validatedData,
                    });
                }
            }}>
            <Stack>
                <TextInput
                    name="email"
                    type="email"
                    label="email"
                    error={errors.email}
                />
                <PasswordInput
                    name="password"
                    label="password"
                    error={errors.password}
                />
                <Button type="submit">Sign In</Button>
            </Stack>
        </form>
    );
}
