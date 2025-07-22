import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function Navbar(){
    return (
        <nav className="mb-8 fixed top-0 left-0 right-0 z-50">
            <div className="flex justify-between items-center px-10 py-3 border-b-2 dark:border-b-[#2c3035]">
                <div className="flex gap-4">
                    <Sparkles className=" text-indigo-400 w-6 h-6" />
                    <p className="font-bold">
                        LearnMate
                    </p>
                </div>
                <div className="flex items-center gap-6">
                    <ModeToggle />
                    <SignedOut>
                        <Button>
                            <Link href="/sign-up">
                                Sign Up
                            </Link>
                        </Button>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </div>
        </nav>
    )
}