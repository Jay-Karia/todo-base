"use server"

import prisma from "@/lib/db"

async function createTodo(title: string) {
    if (title.length === 0)
        return

    await prisma.todo.create({
        data: {
            title,
        }
    })
}

async function getTodos() {
    return await prisma.todo.findMany()
}

export { createTodo, getTodos }