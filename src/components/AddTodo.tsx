"use client"

import { Input } from "./ui/input"
import { Button } from "./ui/button"

import { createTodo } from "@/actions/todo"

export default function AddTodo () {
    return (
        <div className="flex space-x-5">
            <Input placeholder="Enter title" id="title"/>
            <Button onClick={()=> {createTodo("new title")}}>Add</Button>
        </div>
    )
}