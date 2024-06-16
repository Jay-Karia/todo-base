import AddTodo from "./AddTodo"
import Todos from "./Todos"

export default function MainArea() {
    return (
        <div className="flex justify-center h-full p-10">
            <div className="w-[50%] flex flex-col space-y-11">
                <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                    Todos
                </h2>
                <AddTodo />
                <Todos />
            </div>
        </div>
    )
}