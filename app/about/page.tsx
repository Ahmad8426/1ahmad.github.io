import Image from "next/image";

export default function About() {
  return (
    <section className="pb-16 mb-16 mt-20 w-full">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-3xl text-center font-bold tracking-tight text-black dark:text-white sm:text-4xl">About Me</h1>
        </div>
        <div className="mt-10 lg:mt-20 flex flex-col items-center">
          <Image
            src="/assets/avatar.jpg"
            alt="Mohamed Ahmad M L M"
            width={200}
            height={200}
            className="rounded-full"
          />
          <h2 className="mt-6 text-2xl font-bold tracking-tight text-black dark:text-white">Ahmad M L M</h2>
          <h3 className="mt-2 text-xl font-semibold text-primary dark:text-primary">Software Engineer</h3>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 text-center max-w-2xl">
            I am a passionate software engineer with a strong background in developing scalable web applications and working across the full stack. I have experience in various technologies including React, Node.js, and MongoDB. I enjoy solving complex problems and continuously learning new skills to stay up-to-date with the latest industry trends.
          </p>
        </div>
      </div>
    </section>
  );
}
