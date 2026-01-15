import { Code, Zap, Target, BookOpen } from "lucide-react";

export default function About() {
  const stats = [
    { number: "50+", label: "Projetos Completados", icon: Code },
    { number: "3+", label: "Anos de Experiência", icon: Zap },
    { number: "100%", label: "Dedicação e Qualidade", icon: Target },
    { number: "∞", label: "Aprendizado Contínuo", icon: BookOpen },
  ];

  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Sobre Mim</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image/Profile */}
          <div className="flex justify-center">
            <div className="relative w-80 h-80 rounded-xl overflow-hidden border-2 border-cyan-400/30 bg-gradient-to-br from-cyan-400/10 to-blue-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 opacity-10"></div>
              <div className="flex items-center justify-center h-full text-6xl font-bold text-cyan-400">
                💻
              </div>
            </div>
          </div>

          {/* Right - Description */}
          <div>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Olá! Sou um desenvolvedor fullstack apaixonado por criar
              aplicações web e mobile escaláveis e inovadoras. Com experiência
              sólida em React, Node.js e banco de dados modernos, estou sempre
              explorando novas tecnologias e boas práticas de desenvolvimento.
            </p>

            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Meu objetivo é transformar ideias em soluções tecnológicas de alta
              qualidade, com foco em experiência do usuário e código limpo.
              Estou comprometido com aprendizado contínuo e transição para a
              indústria de tecnologia.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 bg-slate-800 rounded-lg border border-slate-700 hover:border-cyan-400/50 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <stat.icon className="text-cyan-400" size={24} />
                    <span className="text-2xl font-bold text-cyan-400">
                      {stat.number}
                    </span>
                  </div>
                  <p className="text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
