import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = ({ mobileMode, setMobileMode }) => {
  const navItems = [
    { id: 1, name: "Home", href: "Home" },
    { id: 2, name: "Sobre", href: "About" },
    { id: 3, name: "Portfólio", href: "Portfolio" },
    { id: 4, name: "Contato", href: "Contact" },
  ];

  return (
    <nav
      id="Navbar"
      className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b-2 border-slate-700 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="shrink-0">
          <a
            href="#Home"
            className="text-2xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            DuhCardoso
          </a>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                id={`nav${item.href}`}
                href={`#${item.href}`}
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium desableNav activeNav"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMode(!mobileMode)}
            className="text-slate-300 hover:text-cyan-400"
          >
            {mobileMode ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMode && (
          <div className="absolute right-0 top-16 md:hidden px-6 py-4 border-l-2  border-b-2 border-r-2 rounded-b-xl bg-slate-900/95 border-slate-700">
            {navItems.map((item) => (
              <a
                id={`mobileNav${item.href}`}
                key={item.name}
                href={`#${item.href}`}
                className="block py-2 hover:text-cyan-400 transition-colors desableNav activeNav"
                onClick={() => setMobileMode(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
