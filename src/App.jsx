import onScrollFunctions from "./components/functions/onScrollFunctions";
import { useEffect, useState } from "react";

// Components
import Navigation from "./components/layout/Navigation";
import Hero from "./components/pages/HeroSection/Hero";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";
import Footer from "./components/layout/Footer";
import SkillsSection from "./components/pages/Skills/SkillsSection";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 640 || isOpen == true) {
      function watchScroll() {
        window.addEventListener("scroll", onScrollFunctions);
      }

      watchScroll();
      return () => {
        window.removeEventListener("scroll", onScrollFunctions);
      };
    }
  });

  return (
    <div className="max-w-full overflow-x-hidden">
      <header>
        <Navigation mobileMode={isOpen} setMobileMode={setIsOpen} />
      </header>

      <main>
        <Hero />
        <About />
        <SkillsSection />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
