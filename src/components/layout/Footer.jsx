const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            >
              &lt;Dev /&gt;
            </a>
            <p className="text-slate-400 mt-2">
              Desenvolvendo soluções inovadoras uma linha de código por vez.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {["Home", "Sobre", "Portfólio", "Contato"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Info */}
          <div>
            <h4 className="text-white font-bold mb-4">Stack Utilizado</h4>
            <ul className="space-y-2">
              {["React", "Tailwind CSS", "Node.js", "Vite"].map((tech) => (
                <li key={tech}>
                  <span className="text-slate-400">{tech}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} Todos os direitos reservados.
            </p>
            <p className="text-slate-400 text-sm">
              Feito com <span className="text-cyan-400">❤️</span> usando React +
              Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
