import { PrismaClient } from "@prisma/client";
import crypto from "crypto";

const prisma = new PrismaClient();

async function debugToken() {
    const email = "admin@asper.com"; // Hardcoded for simplicity/speed
    console.log(`Checking user: ${email}`);

    try {
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            console.error("User not found!");
            return;
        }

        console.log("Current DB Token:", user.resetToken);

        const newToken = crypto.randomBytes(32).toString("hex");
        console.log("Generated New Token:", newToken);

        const updated = await prisma.user.update({
            where: { id: user.id },
            data: {
                resetToken: newToken,
                resetTokenExpiry: new Date(Date.now() + 3600000)
            }
        });

        console.log("Updated DB Token:", updated.resetToken);

        if (updated.resetToken === newToken) {
            console.log("SUCCESS: Token was updated correctly.");
        } else {
            console.error("FAILURE: Token mismatch after update!");
        }

        // Verify read back
        const readBack = await prisma.user.findUnique({ where: { id: user.id } });
        console.log("Read-back DB Token:", readBack?.resetToken);

        if (readBack?.resetToken === newToken) {
            console.log("SUCCESS: Read-back verified.");
        } else {
            console.error("FAILURE: Read-back failed!");
        }

    } catch (e) {
        console.error("Error:", e);
    } finally {
        await prisma.$disconnect();
    }
}

debugToken();
