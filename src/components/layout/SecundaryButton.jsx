import React from "react";

const SecundaryButton = ({ href, content }) => {
  return (
    <a href="#contact">
      <button className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
        Download CV
      </button>
    </a>
  );
};

export default SecundaryButton;
