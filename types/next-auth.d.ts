import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            role: string;
            domain: string;
        } & DefaultSession["user"];
    }

    interface User {
        role: string;
        domain: string;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        role: string;
        domain: string;
        id: string;
    }
}
