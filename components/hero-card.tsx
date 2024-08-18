import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check, Linkedin } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

//export const HeroCards = () => {
//  return (
    <div className="flex flex-wrap gap-8 relative max-w-xl">
      <Card className="absolute flex flex-col drop-shadow-xl shadow-black/10 dark:shadow-white/10">{/* shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] */}
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src="/assets/avatar.jpg"
            alt="user avatar"
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">Ahmad M</CardTitle>
          <CardDescription className="font-normal text-primary dark:text-primary">
          Researcher | AI, Machine Learning
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
          Ahmad M. is a dedicated researcher with a strong focus on Artificial Intelligence and Machine Learning. His expertise spans several key areas within these fields, with particular emphasis on Sentiment Analysis, a crucial component in understanding and interpreting human emotions and opinions from textual data. Ahmad's proficiency in Python, one of the most versatile and widely-used programming languages in AI and data science, allows him to efficiently implement complex algorithms and develop robust machine learning models. His deep understanding of Machine Learning principles and techniques enables him to tackle challenging problems in data analysis, pattern recognition, and predictive modeling. With a solid foundation in these cutting-edge technologies, Ahmad is well-equipped to contribute to innovative research and practical applications in the rapidly evolving landscape of AI and Machine Learning.
          </p>
        </CardContent>

        <CardFooter className="flex justify-center w-full">
          <div>
            <a
              rel="Ahmad M"
              href="https://github.com/Ahmad8426"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Github icon</span>
              <GitHubLogoIcon className="w-5 h-5" />
            </a>
            <a
              rel="noreferrer noopener"
              href=""
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">X icon</span>
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-foreground w-5 h-5"
              >
                <title>X</title>
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </a>

            <a
              rel="Ahmad M"
              href="https://www.linkedin.com/in/1ahmadm/"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Linkedin icon</span>
              <Linkedin size="20" />
            </a>
          </div>
        </CardFooter>
      </Card>
      
    </div>
  );
};
