"use server";

import { Project, Repository } from "@/types/data";
import { GITHUB_ACCESS_TOKEN } from "./data";

export async function getGithubProjects(): Promise<Project[]> {
    const response = await fetch("https://api.github.com/user/repos", {
        headers: {
            Authorization: `token ${GITHUB_ACCESS_TOKEN}`,
        },
    });

    if (!response.ok) {
        throw new Error("Github Api Error: " + response.statusText);
    }

    const data = await response.json();

    return data.map((repo: Repository) => ({
        id: repo.id,
        type: "github",
        name: repo.name,
        description: repo.description,
        owner: {
            email: repo.owner.email,
            password: "",
            role: "user",
        },
        members: [],
    }));
}
