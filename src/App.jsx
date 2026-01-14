import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import TechStack from "./components/TechStack";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-slate-900 text-white">
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
}

export default App;
