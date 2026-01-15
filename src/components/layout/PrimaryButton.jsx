const PrimaryButton = ({ href, content }) => {
  return (
    <a href={href}>
      <button className="px-8 py-3 bg-linear-to-r from-cyan-400 to-blue-500 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-105">
        {content}
      </button>
    </a>
  );
};

export default PrimaryButton;
