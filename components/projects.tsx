"use client";
import { motion } from "framer-motion";
import { AreaChart, BookOpenText, BracketsIcon, CodeIcon, Drill, Dumbbell, Icon, Mic, PocketIcon, QuoteIcon } from "lucide-react";
import Image from "next/image";
 {/* <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <BracketsIcon className="h-8 w-8 mb-2" />
            <h3 className="font-semibold">syntaxUI</h3>
            <p>Ready-to-use UI elements designed for rapid development.</p>
          </div>
          <div>
            <PocketIcon className="h-8 w-8 mb-2" />
            <h3 className="font-semibold">Prettyfolio</h3>
            <p>A curated collection of portfolios for inspiration.</p>
          </div>
          <div>
            <CodeIcon className="h-8 w-8 mb-2" />
            <h3 className="font-semibold">Enchant</h3>
            <p>A vibrant theme for Visual Studio Code.</p>
          </div>
          <div>
            <QuoteIcon className="h-8 w-8 mb-2" />
            <h3 className="font-semibold">Quote Vault</h3>
            <p>Social media, but for sharing quotes.</p>
          </div>
        </div> */}
const ProjectsData = [
  {
    id: 1,
    name: "MaksatDushanov",
    description: "Fullstack platform for Fintess Influencer and bodybuilding coach.",
    link: "maksatdushanov.com",
    icon: <Dumbbell className="h-8 w-8 mb-2" />,
  },
  {
    id: 1,
    name: "CO2 Dashboard",
    description: "Visualization of CO2 Emissions by year, country, and GDP.",
    link: "https://github.com/sharipovartem/co2_dashboard",
    icon: <AreaChart className="h-8 w-8 mb-2" />,
  },
  {
    id: 2,
    name: "CaptainCanadian",
    description: "A Website for a construction company.",
    link: "https://captaincanadian.com",
    icon: <Drill className="h-8 w-8 mb-2" />,
  },
  {
    id: 3,
    name: "Podcastify",
    description: "An app to turn any youtube video into a podcast.",
    link: "",
    icon:  <Mic className="h-8 w-8 mb-2" />,
  },

];

export default function Projects() {
  return (
    <div>
      <div className="grid w-full grid-cols-1 md:grid-cols-4">
        {ProjectsData.map((project) => {
          return (
            <motion.div
              whileHover={{
                y: -8,
              }}
              transition={{
                type: "spring",
                bounce: 0.7,
              }}
              key={project.id}
              className="mt-5 text-left"
            >
              <a target="_blank" rel="noopener noreferrer" href={project.link}>
                {project.icon}
                <div className="mb-1 text-sm font-medium text-gray-900">
                  {project.name}
                </div>
                <div className="max-w-[250px] text-sm font-normal text-gray-500">
                  {project.description}
                </div>
              </a>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
