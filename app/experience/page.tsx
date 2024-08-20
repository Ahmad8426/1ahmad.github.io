"use client";
import { Button } from "@/components/ui/button";
import { FaAddressCard, FaPhoneAlt } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import {
 Form,
 FormControl,
 FormField,
 FormItem,
 FormLabel,
 FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { isValidPhoneNumber } from "react-phone-number-input";
import { z } from "zod";
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { Toaster } from "@/components/ui/toaster";

interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string;
}

const experiences: Experience[] = [
  {
    company: 'Tamil Nadu Skill Development Corporation',
    position: 'Data Scientist',
    duration: 'April 2024 - July 2024',
    description: 'Contributed to data-driven skill development initiatives, leveraging AI and machine learning techniques to enhance workforce capabilities across Tamil Nadu.',
  },
  {
    company: 'Aalim Muhammed Salegh College of Engineering',
    position: 'Machine Learning Researcher',
    duration: 'Jun 2024 - Aug 2024',
    description: 'Developed an advanced fake news detector using TF-IDF and conducted meta synthesis of 4 seminal Reinforcement Learning, to get a grasp of technical foundations and recent advances in the field.',  
  },
  // Add more experiences as needed
];

const ExperienceSection: React.FC = () => {
  return (
    <section className="pb-16 mb-16 mt-20 w-full">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-3xl text-center font-bold tracking-tight text-black dark:text-white sm:text-4xl">Experience</h1>
        </div>
        <div className="m-10">
          <ol className="relative border-s border-gray-200 dark:border-gray-700">
            {experiences.map((experience, index) => (
              <li key={index} className="mb-10 ms-6 p-6 border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 rounded-lg">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                  </svg>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">{experience.company}</h3>
                <h3 className="flex items-center mb-1 text-md font-semibold text-primary dark:text-primary">{experience.position}</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{experience.duration}</time>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{experience.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;