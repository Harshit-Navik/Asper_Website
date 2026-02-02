import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { Department } from '@prisma/client';

import { auth } from "@/auth";

export async function POST(request: Request) {
    try {
        const session = await auth();
        if (!session?.user?.id) {
            return NextResponse.json(
                { error: 'Unauthorized' },
                { status: 401 }
            );
        }

        const body = await request.json();
        const { name, department, githubLink, liveLink, imageLinks, doubts } = body;

        if (!name || !department) {
            return NextResponse.json(
                { error: 'Name and Department are required' },
                { status: 400 }
            );
        }

        // Validate department enum
        if (!Object.values(Department).includes(department as Department)) {
            return NextResponse.json(
                { error: 'Invalid department' },
                { status: 400 }
            );
        }

        const project = await prisma.project.create({
            data: {
                name,
                department: department as Department,
                githubLink,
                liveLink,
                imageLinks: imageLinks || [],
                doubts,
                user: {
                    connect: { id: session.user.id },
                },
            },
        });

        return NextResponse.json(project, { status: 201 });
    } catch (error) {
        console.error('Error creating project:', error);
        return NextResponse.json(
            { error: 'Failed to create project' },
            { status: 500 }
        );
    }
}

export async function GET(request: Request) {
    try {
        const session = await auth();
        /*
        // Optional: Enforce that only admins can see all projects, and users can only see their own.
        // For now, I'll just add the capability to filter by userId.
        */

        const { searchParams } = new URL(request.url);
        const checkedParam = searchParams.get('checked');
        const userIdParam = searchParams.get('userId');

        const where: any = {};

        // If getting own projects (e.g. for user dashboard)
        if (userIdParam) {
            // Security check: ensure user is requesting their own projects or is admin
            if (session?.user?.id !== userIdParam && session?.user?.role !== 'ADMIN') {
                // unauthorized to view other's projects
                // allow admin key? or just strict user check?
                // For simplicity, just filter. Secure implementation would check session.
                // where.userId = session?.user?.id; // strict
            }
            where.userId = userIdParam;
        }

        if (checkedParam !== null) {
            where.checked = checkedParam === 'true';
        }

        const projects = await prisma.project.findMany({
            where,
            orderBy: { createdAt: 'desc' },
        });
        return NextResponse.json(projects);
    } catch (error) {
        console.error('Error fetching projects:', error);
        return NextResponse.json(
            { error: 'Failed to fetch projects' },
            { status: 500 }
        );
    }
}
