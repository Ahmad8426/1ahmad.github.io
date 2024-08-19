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
    duration: 'March 2023 - March 2023',
    description: `
      - Engineered a machine learning-based fake news detector using the Passive Aggressive Classifier <br />
- Enhanced content verification reliability with TF-IDF vectorization <br />
- Achieved approximately 93% average accuracy <br />
- Reduced training time by using efficient data preprocessing techniques
    `,
    link: 'https://github.com/Ahmad8426/Fake-News-Detector',
  },
  {
    name: 'Reinforment Learning Review',
    duration: 'Jun 2024 - Aug 2024',
    description: `
      - Conducted an in-depth Meta synthesis on advancements of Reinforcement Learning in the last decade<br />
      - Targeted towards young researchers for getting a good initial grasp of development in Reinforcement Learning
    `,
    link: '/assets/RL review (1).pdf',
  },
  // Add more projects as needed
];

const ProjectsPage: React.FC = () => {
  return (
    <div className="container mx-auto mt-8 px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Projects</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">Explore my recent projects and contributions.</p>
      </div>
      <div className="m-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Link href={project.link} target='_blank' key={index}>
            <div className="p-6 border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 rounded-lg shadow-lg">
              <div className="flex items-center justify-between">
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{project.name}</h3>
                <span className="inline-block"><GoLinkExternal /></span>
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
  );
};

export default ProjectsPage;
