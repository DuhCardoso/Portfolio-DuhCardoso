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

  (useEffect(() => {
    const openClose = () => {
      setIsOpen(true);
      window.scrollTo({
        top: 5,
        left: 0,
        behavior: "smooth",
      });
      setTimeout(() => {
        setIsOpen(false);
      }, 50);
    };

    window.addEventListener("load", window.innerWidth < 640 ? openClose : null);
    window.addEventListener(
      "riseze",
      window.innerWidth < 640 ? openClose : null,
    );
    if (window.innerWidth > 640 || isOpen == true) {
      function watchScroll() {
        window.addEventListener("scroll", onScrollFunctions);
      }

      watchScroll();
      return () => {
        window.removeEventListener("scroll", onScrollFunctions);
      };
    }
  }),
    [window.addEventListener("scroll", null)]);

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
