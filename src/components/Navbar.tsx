import { Button } from "./ui/button"
import Image from "next/image"

export default function Navbar() {
    return (
        <nav className="flex items-center justify-around p-1 border-b">
            <div className="flex space-x-2">
                <Image src="/icon.png" alt="Todo Base" width={30} height={10} />
                <h4 className="scroll-m-20 text-xl font-normal tracking-tight">
                    Todo Base
                </h4>
            </div>
            <Button>Login</Button>
        </nav>
    )
}