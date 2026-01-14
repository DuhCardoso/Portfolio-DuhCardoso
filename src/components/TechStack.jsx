export default function TechStack() {
  const categories = [
    {
      category: "Frontend",
      technologies: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "JavaScript",
        "HTML5",
        "CSS3",
      ],
    },
    {
      category: "Backend",
      technologies: [
        "Node.js",
        "Express",
        "Python",
        "REST API",
        "GraphQL",
        "Microservices",
      ],
    },
    {
      category: "Database",
      technologies: [
        "PostgreSQL",
        "MongoDB",
        "Firebase",
        "Prisma",
        "Supabase",
        "Redis",
      ],
    },
    {
      category: "Tools & DevOps",
      technologies: [
        "Git",
        "Docker",
        "Vercel",
        "AWS",
        "GitHub Actions",
        "Webpack",
      ],
    },
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Tech Stack</h2>
          <p className="text-slate-400 text-lg">
            Tecnologias que domino e utilizo em meus projetos
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4"></div>
        </div>

        {/* Tech Categories */}
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.category}
              className="p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-slate-900 text-slate-300 rounded-lg border border-slate-600 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 cursor-pointer font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="text-center p-6 bg-slate-800 rounded-xl border border-slate-700">
            <div className="text-4xl font-bold text-cyan-400 mb-2">15+</div>
            <p className="text-slate-400">Tecnologias Dominadas</p>
          </div>
          <div className="text-center p-6 bg-slate-800 rounded-xl border border-slate-700">
            <div className="text-4xl font-bold text-cyan-400 mb-2">100%</div>
            <p className="text-slate-400">Projetos em Produção</p>
          </div>
          <div className="text-center p-6 bg-slate-800 rounded-xl border border-slate-700">
            <div className="text-4xl font-bold text-cyan-400 mb-2">API</div>
            <p className="text-slate-400">Integração Completa</p>
          </div>
        </div>
      </div>
    </section>
  );
}
