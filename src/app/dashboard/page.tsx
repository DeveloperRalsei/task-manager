"use client";

import { Container, Title } from "@mantine/core";
import Document from "./document.mdx";

export default function Home() {
    return (
        <Container size="md" my={"xl"}>
            <Document />
        </Container>
    );
}
