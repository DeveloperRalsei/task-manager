"use server";

import { prisma } from "@/lib/prisma";

export async function getUsers() {
    const users = await prisma.user.findMany();
    return users;
}

export async function getUser(id: string) {
    const user = await prisma.user.findUnique({
        where: {
            id,
        },
    });
    return user;
}

export async function createUser(data: any) {
    const user = await prisma.user.create({
        data,
    });
    return user;
}

export async function updateUser(id: string, data: any) {
    const user = await prisma.user.update({
        where: {
            id,
        },
        data,
    });
    return user;
}

export async function deleteUser(id: string) {
    const user = await prisma.user.delete({
        where: {
            id,
        },
    });
    return user;
}
