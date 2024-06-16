"use client"

import { Input } from "./ui/input"
import { Button } from "./ui/button"

import { createTodo } from "@/actions/todo"
import { useState } from "react"

export default function AddTodo () {
    const [title, setTitle] = useState<string>("")
    return (
        <div className="flex space-x-5">
            <Input placeholder="Enter title" id="title" onChange={(e)=>{setTitle(e.target.value)}}/>
            <Button onClick={()=> {createTodo(title)}}>Add</Button>
        </div>
    )
}