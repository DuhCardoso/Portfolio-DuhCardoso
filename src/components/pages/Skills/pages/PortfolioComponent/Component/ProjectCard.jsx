import { ExternalLink, Github } from "lucide-react";
import { useEffect, useState } from "react";

import PrimaryButton from "../../../../../layout/PrimaryButton";
import SecundaryButton from "../../../../../layout/SecundaryButton";

const ProjectCard = ({ projectData }) => {
  const [direction, setDirection] = useState("");

  const fateById = () => {
    if ([1, 4, 7, 10].includes(projectData.id)) {
      setDirection("-right");
    } else if ([2, 5, 8, 11].includes(projectData.id)) {
      setDirection("");
    } else if ([3, 6, 9, 12].includes(projectData.id)) {
      setDirection("-left");
    }
  };

  useEffect(() => {
    window.addEventListener("load", fateById());
    return () => {
      window.removeEventListener("load", fateById());
    };
  });

  return (
    <div
      key={projectData.id}
      className="flex flex-col justify-between bg-slate-900 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/20"
      data-aos={`fade-up${direction}`}
      data-aos-duration="1000"
    >
      {/* Project Image */}
      <div className="relative p-5 z-10 ">
        <img
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 rounded-lg"
          src={projectData.image}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-cyan-400">
          {projectData.title}
        </h3>
        <p className="text-slate-300 mb-4 leading-relaxed">
          {projectData.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {projectData.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-slate-800 text-cyan-400 rounded-full border border-cyan-400/30"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          <PrimaryButton
            href={projectData.liveUrl}
            _black
            content="Live Demo"
            icon={<ExternalLink size={18} />}
            classNameButton=" flex items-center justify-center gap-2"
            classNameLink="flex-1"
          />
          <SecundaryButton
            href={projectData.githubUrl}
            _blank
            content="Código"
            icon={<Github size={18} />}
            classNameButton=" flex items-center justify-center gap-2"
            classNameLink="flex-1"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
