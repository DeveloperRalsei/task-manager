import { Group, Skeleton, Stack } from "@mantine/core";

export default function Loading() {
    return (
        <Stack>
            <Group>
                <Skeleton height={40} width={200} /> {"/"}
                <Skeleton height={40} width={200} />
            </Group>

            <Stack>
                {Array(12)
                    .fill(0)
                    .map((_, i) => (
                        <Skeleton w={"100%"} height={40} key={i} />
                    ))}
            </Stack>
        </Stack>
    );
}
