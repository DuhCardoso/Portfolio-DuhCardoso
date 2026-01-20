import onScrollFunctions from "./components/functions/onScrollFunctions";
import { useEffect } from "react";

// Components
import Navigation from "./components/layout/Navigation";
import Hero from "./components/pages/HeroSection/Hero";
import About from "./components/pages/About/About";
import Portfolio from "./components/pages/Portfolio";
import TechStack from "./components/layout/TechStack";
import Certificates from "./components/pages/Certificates";
import Contact from "./components/pages/Contact";
import Footer from "./components/layout/Footer";

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
    <div className="">
      <header>
        <Navigation />
      </header>

      <main>
        <Hero />
        <About />
        <Portfolio />
        <TechStack />
        <Certificates />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
