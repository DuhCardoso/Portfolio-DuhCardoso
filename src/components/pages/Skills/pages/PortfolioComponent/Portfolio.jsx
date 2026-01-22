import { ExternalLink, Github } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "IntervueAI",
      description:
        "Plataforma de mock interviews em tempo real com IA. Conversas naturais e personalizadas para praticar entrevistas.",
      tech: ["React", "Node.js", "OpenAI API", "PostgreSQL"],
      image: "🤖",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Blendy",
      description:
        "App social para conectar pessoas em tempo real. Login com um clique, compartilhe momentos e posts instantaneamente.",
      tech: ["React", "Firebase", "Tailwind CSS", "Socket.io"],
      image: "👥",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "WATCHit",
      description:
        "Plataforma de streaming de vídeos. Interface intuitiva para descobrir e assistir seu conteúdo favorito.",
      tech: ["React", "Express", "MongoDB", "REST API"],
      image: "🎬",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "E-Commerce Platform",
      description:
        "Plataforma completa de e-commerce com carrinho, pagamentos e painel administrativo.",
      tech: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
      image: "🛒",
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <>
      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-slate-900 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/20"
          >
            {/* Project Image */}
            <div className="relative h-48 bg-linear-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center overflow-hidden">
              <div className="text-7xl group-hover:scale-110 transition-transform duration-300">
                {project.image}
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-slate-900 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-cyan-400">
                {project.title}
              </h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
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
                <a
                  href={project.liveUrl}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-linear-to-r from-cyan-400 to-blue-500 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Github size={18} />
                  Código
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More */}
      <div className="text-center mt-12">
        <button className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105">
          Ver Mais Projetos
        </button>
      </div>
    </>
  );
}
