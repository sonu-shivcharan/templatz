import Link from "next/link";
import { Button } from "./ui/button";
import { Spotlight } from "./ui/Spotlight";

export default function Herosection() {
  return (
    <main className="conatiner dark:bg-neutral-950 flex w-screen h-screen items-center justify-center  text-center px-4 gap-10 md:gap-40 overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white"  />
      <div>
        <h2 className="pt-20 text-5xl md:text-7xl font-bold max-w-[800px]">
          AI-Powered Resume & Letter Generator
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-center">
          Writing a cover letter has never been so easy. With the Zety cover letter builder, writing a cover letter is no
          longer the long, frustrating, confusing process you’re used to. Write a job-winning cover letter in minutes
          and land your dream job!
        </p>
        <div className="w-5/6 max-h-fit mx-auto flex flex-col items-center justify-center md:flex-row gap-6 mt-10">
        <Button className="min-w-[150px] p-6 w-full md:w-auto font-semibold " variant={"outline"}>Try now</Button>
        <Link
        className="min-w-[150px] w-full md:w-auto "
         href={"/letter"}>
        <Button className="p-6 w-full font-semibold" variant={"default"}>Try Letter</Button>
        </Link>
        </div>
      
      </div>
    </main>
  );
}
