import MenuBar from "@/components/menu";
import Image from "next/image";
export default function About() {
    return (
        <section>
      
        <div className="mt-10 lg:pt-10 md:p-4">
        <div className="flex flex-col items-center justify-center space-y-8">
          <Image
            src="/assets/avatar.jpg"
            alt="Mohamed Ahmad M L M"
            width={200}
            height={200}
            className="rounded-full"
          />
          <h1 className="scroll-m-20 md:text-4xl text-2xl text-center 
           font-extrabold tracking-tight lg:text-5xl relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]">
             Ahmad M <span className="inline-block">L M</span>
          </h1>
          <h2 className="text-2xl font-bold tracking-tight">Software Engineer</h2>
          <p className="text-justify">
          
          </p>
        </div>
        </div>
      </section>
    );
}
