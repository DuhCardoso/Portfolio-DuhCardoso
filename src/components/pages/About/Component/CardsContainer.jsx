import { Code, Zap, BookOpen } from "lucide-react";
import { useState } from "react";
import CardAbout from "./CardAbout";

const CardsContainer = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  const sizeIcons = windowWidth >= 1024 ? 30 : 24;

  return (
    <div className="grid grid-cols-3 gap-2 opacity-80 hover:opacity-100 transition-opacity">
      <CardAbout
        icon={<Code className="text-cyan-400" size={sizeIcons} />}
        number="8"
        label="Projetos Completados"
        aos="fade-up-left"
        duration="1000"
      />
      <CardAbout
        icon={<BookOpen className="text-cyan-400" size={sizeIcons} />}
        number="4"
        label="Certificados"
        aos="fade-up-left"
        duration="1200"
      />
      <CardAbout
        icon={<Zap className="text-cyan-400" size={sizeIcons} />}
        number="3+"
        label="Anos de Experiência"
        aos="fade-up-left"
        duration="1400"
      />
    </div>
  );
};

export default CardsContainer;
