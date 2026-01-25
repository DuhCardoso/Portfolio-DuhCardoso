import { Code, Zap, BookOpen } from "lucide-react";
import { useState } from "react";

import Portfolio from "./pages/PortfolioComponent/Portfolio";
import Certificates from "./pages/CertificatesComponent/Certificates";
import TechStack from "./pages/TechStake/TechStake";
import ButtonSetPage from "./component/ButtonSetPage";

const SkillsSection = () => {
  const [pageState, setPageState] = useState("portfolio");

  //   Switch of components with useState
  const renderPage = () => {
    switch (pageState) {
      case "portfolio":
        return <Portfolio />;
      case "certificates":
        return <Certificates />;
      case "techStack":
        return <TechStack />;
      default:
        return <Portfolio />;
    }
  };

  return (
    <section id="Portfolio" className="py-20 min-h-screen ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div
          className="text-center mb-10"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Projetos & Habilidades
          </h2>
          <p className="text-slate-400 text-lg mb-4">
            Explore minha trajetória profissional por meio de projetos,
            certificações e habilidades técnicas. <br />
            Cada seção representa um marco importante no meu processo de
            aprendizado e evolução contínua.
          </p>
          <div className="underlineTitle"></div>
        </div>

        {/* Display switch components */}
        <div
          className=" mb-12 mx-auto px-4 py-5  flex items-center justify-center bg-slate-700/40 rounded-3xl border border-slate-600"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div className=" flex  items-stretch gap-1  grow">
            <ButtonSetPage
              selectComponent={pageState === "portfolio" ? true : null}
              icon={<Code size={18} />}
              page={() => setPageState("portfolio")}
              label="Portfolio"
            />
            <ButtonSetPage
              selectComponent={pageState === "certificates" ? true : null}
              icon={<BookOpen size={18} />}
              page={() => setPageState("certificates")}
              label="Certificados"
            />
            <ButtonSetPage
              selectComponent={pageState === "techStack" ? true : null}
              icon={<Zap size={18} />}
              page={() => setPageState("techStack")}
              label="Tech Stack"
            />
          </div>
        </div>

        {renderPage()}
      </div>
    </section>
  );
};

export default SkillsSection;
