import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

async function main() {
    await prisma.$connect();
    console.log("MongoDb Connected");
}

main().catch((e) => {
    console.log(e);
    prisma.$disconnect();
});
