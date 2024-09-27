import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Home() {
  return (
    <section className="container mx-auto px-4 py-12 min-h-screen flex flex-col justify-between bg-white dark:bg-black text-black dark:text-white">
      <main className="flex-grow flex flex-col items-center justify-center space-y-8">
        <h1 className="text-5xl md:text-6xl font-bold text-center">
          <span className="bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
            Welcome
          </span>
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 text-center max-w-2xl">
          Ahmad M. is a researcher specializing in AI and Machine Learning, with expertise in Computer Vision and NLP.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-md">
          <Link href="/contact" className="w-full sm:w-1/2">
            <Button className="w-full bg-black dark:bg-white text-white dark:text-black font-bold rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
              Contact
            </Button>
          </Link>
          <Link href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-1/2">
            <Button variant="outline" className="w-full border-black dark:border-white text-black dark:text-white font-bold rounded-md hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
              Resume
            </Button>
          </Link>
        </div>
      </main>

      <footer className="mt-12 flex justify-center space-x-6">
        <a href="https://github.com/Ahmad8426" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
          <FaGithub size={24} />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
          <FaTwitter size={24} />
        </a>
        <a href="https://linkedin.com/in/1ahmadm" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
          <FaLinkedin size={24} />
        </a>
      </footer>
    </section>
  );
}
