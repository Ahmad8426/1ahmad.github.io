import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Home() {
  return (
    <section className="container mx-auto px-4 py-12 min-h-screen flex flex-col justify-between bg-black text-white">
      <header className="flex justify-between items-center mb-12">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-[#F596D3] to-[#D247BF] rounded-md"></div>
          <span className="text-xl font-bold">Portfolio</span>
        </div>
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <nav className="hidden md:flex space-x-4">
          <Link href="/about" className="hover:text-[#F596D3] transition-colors">About</Link>
          <Link href="/projects" className="hover:text-[#F596D3] transition-colors">Projects</Link>
          <Link href="/contact" className="hover:text-[#F596D3] transition-colors">Contact</Link>
        </nav>
      </header>

      <main className="flex-grow flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left md:w-1/2 space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
              Welcome
            </span>
          </h1>
          <p className="text-xl text-gray-300 md:w-10/12">
           Ahmad M is a researcher specializing in AI and Machine Learning, with expertise in Computer Vision and NLP.
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <Link href="/contact">
              <Button className="w-full md:w-auto px-8 py-3 bg-white text-black font-bold rounded-md hover:bg-gray-200 transition-colors">
                Contact
              </Button>
            </Link>
            <Link href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full md:w-auto px-8 py-3 border-white text-white font-bold rounded-md hover:bg-white hover:text-black transition-colors">
                Resume
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <footer className="mt-12 flex flex-col items-center space-y-4">
        <div className="flex items-center space-x-4">
          <Image src="/assets/profile-image.jpg" alt="Ahmad M" width={80} height={80} className="rounded-full" />
        <div className="flex space-x-4">
          <a href="https://github.com/Ahmad8426" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaGithub size={24} />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaTwitter size={24} />
          </a>
          <a href="https://linkedin.com/in/1ahmadm" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaLinkedin size={24} />
          </a>
        </div>
      </footer>
    </section>
  );
}
