import { Button, Breadcrumbs as MantineBreadcrumbs } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";

export function Breadcrumbs({
    data,
}: {
    data: { label: string; href: string }[];
}) {
    return (
        <MantineBreadcrumbs
            separatorMargin={"xs"}
            separator={<IconArrowRight size={20} />}>
            {data.map((item, index) => (
                <Link href={item.href} key={index}>
                    <Button
                        fz={23}
                        size="compact-lg"
                        variant="subtle"
                        color="gray">
                        {item.label}
                    </Button>
                </Link>
            ))}
        </MantineBreadcrumbs>
    );
}
