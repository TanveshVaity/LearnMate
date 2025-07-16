import { Button } from "./ui/button";


export default function Navbar(){
    return (
        <div className="mt-4 mb-10">
            <div className="flex justify-between items-center px-10">
                <div>
                    <p className="font-bold">
                        LernMate
                    </p>
                </div>
                <div>
                    <Button>Get Started</Button>
                </div>
            </div>
        </div>
    )
}