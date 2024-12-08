import { Breadcrumbs } from "@/components/BreadCrumbs";
import { getGithubProjects } from "@/lib/projects";
import { wait } from "@/lib/utils";
import {
    Container,
    Stack,
    Table,
    TableTbody,
    TableTd,
    TableTh,
    TableThead,
    TableTr,
} from "@mantine/core";

export default async function Projects() {
    const projects = await getGithubProjects();
    await wait(1000);
    return (
        <>
            <Breadcrumbs
                data={[
                    { label: "Dashboard", href: "/dashboard" },
                    { label: "Projects", href: "/dashboard/projects" },
                ]}
            />

            <Table>
                <TableThead>
                    <TableTr>
                        <TableTh w={0}>#</TableTh>
                        <TableTh>Name</TableTh>
                        <TableTh>Description</TableTh>
                        <TableTh>Owner</TableTh>
                    </TableTr>
                </TableThead>

                <TableTbody>
                    {projects.map((project, i) => (
                        <TableTr key={project.id}>
                            <TableTd fw={700}>{i + 1}</TableTd>
                            <TableTd>{project.name}</TableTd>
                            <TableTd>{project.description}</TableTd>
                        </TableTr>
                    ))}
                </TableTbody>
            </Table>
        </>
    );
}
