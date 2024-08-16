import { Target } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { GoLinkExternal } from "react-icons/go";
interface Project {
  name: string;
  duration: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    name: 'Advanced Fake News Detector',
    duration: 'May 2023 - July 2023',
    description: `
      - Engineered a hybrid BERT model with 92% accuracy<br />
      - Enhanced content verification reliability, reducing false reports by 80%<br />
      - Achieved 93% precision and 90% recall, outperforming traditional models<br />
      - Reduced training time by 30% using BERT transfer learning
    `,
    link: 'https://example.com',
  },
  {
    name: 'AI Ethics Research Paper',
    duration: 'Apr 2022 - Jun 2022',
    description: `
      - Conducted research on AI ethics; pending publication<br />
      - Anticipated to influence policy-making for 100+ organizations
    `,
    link: 'https://example.com',
  },
  // Add more projects as needed
];

const ProjectsPage: React.FC = () => {
  return (
    <section className="pb-16 mb-16 mt-20 w-full">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl text-center font-bold tracking-tight text-white sm:text-4xl">Projects</h2>
          <p className="mt-4 text-gray-400 dark:text-gray-500">
            Here are some of my projects:
          </p>
        </div>
        <div className="m-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link href={project.link} target='_blank'>
            <div key={index} className="p-6 border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 rounded-lg shadow-lg">
              <div className="flex items-center justify-between">
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{project.name}</h3>
                  <span className="inline block"><GoLinkExternal /></span>
              </div>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{project.duration}</time>
              <p
                className="text-base font-normal text-gray-500 dark:text-gray-400"
                dangerouslySetInnerHTML={{ __html: project.description }}
              />
            </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
