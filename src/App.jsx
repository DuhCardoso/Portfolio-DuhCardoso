import onScrollFunctions from "./components/functions/onScrollFunctions";
import { useEffect } from "react";

// Components
import Navigation from "./components/layout/Navigation";
import Hero from "./components/pages/HeroSection/Hero";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";
import Footer from "./components/layout/Footer";
import SkillsSection from "./components/pages/Skills/SkillsSection";

const App = () => {
  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", onScrollFunctions);
    }

    watchScroll();
    return () => {
      window.removeEventListener("scroll", onScrollFunctions);
    };
  });

  return (
    <div className="max-w-full overflow-x-hidden">
      <header>
        <Navigation />
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
