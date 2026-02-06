import { Balloon, ChevronDown, Sparkles } from "lucide-react";
import SocialLinks from "../../layout/SocialLinks";
import { Typewriter } from "react-simple-typewriter";
import PrimaryButton from "../../layout/PrimaryButton";
import SecundaryButton from "../../layout/SecundaryButton";
import BalloonDev from "../../layout/BalloonDev";

const Hero = () => {
  const wordsList = [
    "Desenvolvedor Web",
    "Criador de Soluções",
    "Apaixonado por Código",
    "Estudante de Tecnologia",
  ];

  return (
    <section
      id="Home"
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
    >
      {/* Content */}
      <div className="max-w-full mx-auto p-4 sm:p-6  lg:px-8 z-10">
        {/* balloon */}
        <div
          className="inline-block mb-8 text-center "
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <div className="absolute -inset-0.5 bg-linear-to-r from-cyan-800 to-cyan-700 rounded-full blur opacity-40 transition duration-1000 " />

          <span className="text-cyan-400 text-sm font-medium justify-center flex items-center bg-slate-800 border border-slate-700 rounded-full px-4 py-2  ">
            <Sparkles size={16} className="inline-block mr-2 " /> Bem-vindo ao
            meu portfólio
          </span>
        </div>

        {/* Hero Title */}
        <h1
          className="text-4xl md:text-6xl font-bold mb-6"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          Full Stack
          <span className="block bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Developer
          </span>
        </h1>

        {/* Typewriter Effect */}
        <span
          className="text-2xl opacity-80 font-semibold text-slate-300 sm:mb-2 inline-block h-12"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <Typewriter words={wordsList} loop cursor cursorColor="#00FFFF" />
        </span>

        {/* Balloons Frameworks*/}
        <div
          className="flex flex-wrap gap-1 mb-6"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          <BalloonDev tech="React" />
          <BalloonDev tech="Node.js" />
          <BalloonDev tech="Tailwind CSS" />
        </div>

        {/* Call to Action Buttons */}
        <div
          className="flex gap-4 justify-center mb-12 flex-wrap"
          data-aos="fade-up"
          data-aos-delay="1200"
        >
          <PrimaryButton href="#portfolio" content="Ver Projetos" />

          <SecundaryButton
            href="https://drive.google.com/file/d/1Bybz5h4px9FRD9e8Ii9lm-yv7Sm3DPNW/view?usp=drive_link"
            _blank
            content="Download CV"
          />
        </div>

        {/* Social Links */}
        <SocialLinks fate="true" />

        {/* Scroll indicator */}
        <a
          href="#About"
          className="flex justify-center animate-bounce"
          data-aos="fade-up"
          data-aos-delay="1400"
        >
          <ChevronDown className="text-cyan-400" size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
