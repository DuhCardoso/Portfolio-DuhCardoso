import { Award, CheckCircle } from "lucide-react";

export default function Certificates() {
  const certificates = [
    {
      id: 1,
      title: "Full Stack Web Development",
      issuer: "Udemy",
      date: "2023",
      icon: "🎓",
    },
    {
      id: 2,
      title: "React Advanced Patterns",
      issuer: "Frontend Masters",
      date: "2024",
      icon: "⚛️",
    },
    {
      id: 3,
      title: "Node.js & Express Mastery",
      issuer: "Coursera",
      date: "2023",
      icon: "🚀",
    },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Certificates Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="relative p-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl border border-slate-700 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="absolute top-4 right-4 text-3xl">{cert.icon}</div>

              <div className="mb-4">
                <Award className="text-cyan-400 mb-3" size={32} />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                {cert.title}
              </h3>
              <p className="text-cyan-400 font-medium mb-3">{cert.issuer}</p>
              <p className="text-slate-400 text-sm">{cert.date}</p>

              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-700">
                <CheckCircle size={16} className="text-cyan-400" />
                <span className="text-slate-300 text-sm">Verificado</span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="bg-slate-900 rounded-xl border border-slate-700 p-8">
          <h3 className="text-2xl font-bold text-cyan-400 mb-6">
            Habilidades Complementares
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "UI/UX Design Principles",
              "Responsive Design",
              "Performance Optimization",
              "SEO Best Practices",
              "Agile & Scrum",
              "Git & Version Control",
              "Testing & Debugging",
              "Problem Solving",
            ].map((skill) => (
              <div key={skill} className="flex items-center gap-3">
                <CheckCircle className="text-cyan-400" size={20} />
                <span className="text-slate-300">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
