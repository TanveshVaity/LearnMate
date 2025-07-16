import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans flex flex-col min-h-screen">
      <Navbar />
      <div className="relative w-full max-w-5xl h-[80vh] mx-auto flex items-center justify-center">
        <Image
          src="/images/heroBackground.png"
          alt="background image"
          fill
          className="object-fit"
          priority
        />

        <div className="absolute bottom-10 flex flex-col justify-center items-start px-4 sm:px-8 md:px-12 z-10">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 max-w-3xl">
            Unlock Your Learning Potential with LearnMate AI
          </h1>
          <p className="text-white text-base sm:text-lg md:text-xl mb-6 max-w-xl">
            Transform any content into summaries, flashcards, and quizzes. Learn smarter, not harder.
          </p>
          <Button size="lg" className="text-md">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}