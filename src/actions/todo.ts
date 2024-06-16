"use server"

import prisma from "@/lib/db"

async function createTodo(title: string) {
    await prisma.todo.create({
        data: {
            title,
            completed: true
        }
    })
}

export { createTodo }