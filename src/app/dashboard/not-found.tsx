import { Button, Stack, Text, Title } from "@mantine/core";
import Link from "next/link";

export default function NotFound() {
    return (
        <Stack mih={"100vh"} align="center" justify="center">
            <Title order={1} fw={800} c={"red"}>
                404
            </Title>
            <Text>We could not found a page that you want</Text>
            <Button
                variant="subtle"
                size="compact-lg"
                component={Link}
                href={"/dashboard"}>
                Return Home Page
            </Button>
        </Stack>
    );
}
