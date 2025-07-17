import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";


export default function Navbar(){
    return (
        <div className="mb-8">
            <div className="flex justify-between items-center px-10 py-4 border-b-2 dark:border-b-[#2c3035]">
                <div>
                    <p className="font-bold">
                        LearnMate
                    </p>
                </div>
                <div className="flex items-center gap-6">
                    <ModeToggle />
                    <Button>Get Started</Button>
                </div>
            </div>
        </div>
    )
}