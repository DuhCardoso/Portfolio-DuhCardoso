const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 justify-center">
        {/* Brand */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex-1 hidden lg:block">
            <a
              href="#home"
              className="text-2xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            >
              DuhCardoso
            </a>
            <p className="text-slate-400 mt-2">
              Desenvolvendo soluções inovadoras <br /> uma linha de código por
              vez.
            </p>
          </div>
          {/* Divider */}
          <p className="text-slate-400 text-sm flex-1">
            © {currentYear} Todos os direitos reservados.
          </p>
          <p className="text-slate-400 text-sm ">
            Feito com <span className="text-cyan-400">❤️</span> usando React +
            Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
