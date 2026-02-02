import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function listUsers() {
    try {
        const users = await prisma.user.findMany({
            select: { id: true, email: true, resetToken: true }
        });
        console.log("Users and tokens:");
        users.forEach(u => {
            console.log(`Email: ${u.email}, Token: ${u.resetToken === null ? "NULL" : `'${u.resetToken}'`}`);
        });
    } catch (e) {
        console.error(e);
    } finally {
        await prisma.$disconnect();
    }
}

listUsers();
