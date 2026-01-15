import { ChevronDown } from "lucide-react";
import SocialLinks from "../../layout/SocialLinks";
import { Typewriter } from "react-simple-typewriter";
import PrimaryButton from "../../layout/PrimaryButton";
import SecundaryButton from "../../layout/SecundaryButton";

const Hero = () => {
  const wordsList = [
    "Desenvolvedor Web",
    "Criador de Soluções",
    "Apaixonado por Código",
    "Estudante de Tecnologia",
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
    >
      {/* Content */}
      <div className="max-w-full mx-auto p-4 sm:p-6  lg:px-8 z-10">
        {/* balloon */}
        <div className="inline-block px-4 py-2 bg-slate-800 border border-slate-700 rounded-full mb-8 hover:scale-105 transition-transform duration-300 text-center hover:shadow-lg hover:shadow-cyan-400/40">
          <span className="text-cyan-400 text-sm font-medium">
            👋 Bem-vindo ao meu portfólio
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Full Stack
          <span className="block bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Developer
          </span>
        </h1>

        {/* Typewriter Effect */}
        <span className="text-2xl opacity-80 font-semibold text-slate-300 mb-6 inline-block h-12">
          <Typewriter words={wordsList} loop cursor cursorColor="#00FFFF" />
        </span>

        {/* Call to Action Buttons */}
        <div className="flex gap-4 justify-center mb-12 flex-wrap">
          <PrimaryButton href="#portfolio" content="Ver Projetos" />

          <SecundaryButton href="#contact" content="Download CV" />
        </div>

        {/* Social Links */}
        <SocialLinks />

        {/* Scroll indicator */}
        <a href="#about" className="flex justify-center animate-bounce">
          <ChevronDown className="text-cyan-400" size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
