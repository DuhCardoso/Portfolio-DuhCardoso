import { ExternalLink, Github } from "lucide-react";

const TechStack = () => {
  return (
    <div>
      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        <span className="px-3 py-1 text-xs font-medium bg-slate-800 text-cyan-400 rounded-full border border-cyan-400/30"></span>
      </div>

      {/* Links */}
      <div className="flex gap-4">
        <a
          href=""
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-linear-to-r from-cyan-400 to-blue-500 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300"
        >
          <ExternalLink size={18} />
          Live Demo
        </a>
        <a
          href=""
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
        >
          <Github size={18} />
          Código
        </a>
      </div>
    </div>
  );
};

export default TechStack;
