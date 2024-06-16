import { getTodos } from "@/actions/todo"

export default async function Todos () {
    const todos = await getTodos()
    return (
        <div className="space-y-5">
            {todos && (
                todos.map((todo) => (
                    <div key={todo.id} className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm border hover:bg-gray-50">
                        <p>{todo.title}</p>
                        <input type="checkbox" checked={todo.completed} />
                    </div>
                ))
            )}
        </div>
    )
}