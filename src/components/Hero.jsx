import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-slate-900 via-slate-900 to-slate-800 z-0"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl z-0"></div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
        <div className="inline-block px-4 py-2 bg-slate-800 border border-slate-700 rounded-full mb-8">
          <span className="text-cyan-400 text-sm font-medium">
            👋 Bem-vindo ao meu portfólio
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Full Stack
          <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Developer
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          Criando experiências digitais incríveis com React, Node.js e
          tecnologias modernas. Transformando ideias em soluções escaláveis.
        </p>

        <div className="flex gap-4 justify-center mb-12 flex-wrap">
          <button className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-105">
            Ver Projetos
          </button>
          <button className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
            Download CV
          </button>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 justify-center mb-16">
          <a
            href="#"
            className="p-3 bg-slate-800 hover:bg-cyan-400 text-slate-300 hover:text-slate-900 rounded-lg transition-all duration-300 transform hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a
            href="#"
            className="p-3 bg-slate-800 hover:bg-cyan-400 text-slate-300 hover:text-slate-900 rounded-lg transition-all duration-300 transform hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="#"
            className="p-3 bg-slate-800 hover:bg-cyan-400 text-slate-300 hover:text-slate-900 rounded-lg transition-all duration-300 transform hover:scale-110"
          >
            <Mail size={24} />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center animate-bounce">
          <ChevronDown className="text-cyan-400" size={32} />
        </div>
      </div>
    </section>
  );
}
