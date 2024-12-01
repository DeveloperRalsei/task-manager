"use client";

import { credentialsSchema } from "@/types/zod-schemas";
import { Alert, Button, PasswordInput, Stack, TextInput } from "@mantine/core";
import { ZodError } from "zod";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { nprogress } from "@mantine/nprogress";

export function CredentialsForm() {
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const [zodErrors, setZodErrors] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        nprogress.start();
        setLoading(true);
        e.preventDefault();

        let validatedData;
        try {
            validatedData = credentialsSchema.parse(formValues);

            setZodErrors({});
            setError("");
        } catch (err) {
            if (err instanceof ZodError) {
                const formattedErrors: Record<string, string> = {};
                err.errors.forEach((zodError) => {
                    const field = zodError.path[0] as string;
                    formattedErrors[field] = zodError.message;
                });
                setZodErrors(formattedErrors);
            } else {
                setError("Something went wrong.");
            }
        }

        const result = await signIn("credentials", {
            ...validatedData,
            redirect: false,
            callbackUrl: "/dashboard",
        });

        if (result?.error) {
            setError("Try Again");
        }

        setLoading(false);
        nprogress.complete();
    }

    return (
        <form onSubmit={handleSubmit}>
            <Stack>
                <TextInput
                    type="email"
                    label="E-Mail"
                    placeholder="example@example.com"
                    value={formValues.email}
                    onChange={(e) =>
                        setFormValues((prev) => ({
                            ...prev,
                            email: e.target.value,
                        }))
                    }
                    error={zodErrors.email || false}
                />
                <PasswordInput
                    placeholder="****"
                    label="Password"
                    value={formValues.password}
                    onChange={(e) =>
                        setFormValues((prev) => ({
                            ...prev,
                            password: e.target.value,
                        }))
                    }
                    error={zodErrors.password || false}
                />

                <Button type="submit" loading={loading}>
                    Login
                </Button>

                {error && <Alert color="red">{error}</Alert>}
            </Stack>
        </form>
    );
}
