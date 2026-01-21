import React from "react";

const BalloonDev = ({ tech }) => {
  return (
    <span
      key={tech}
      className="px-4 py-2 hidden sm:block rounded-full backdrop-blur-sm text-sm font-medium bg-slate-800/60 hover:bg-slate-800/90 text-slate-300/70 hover:text-slate-300 border border-cyan-400/30 transition-colors duration-300 cursor-default select-none"
    >
      {tech}
    </span>
  );
};

export default BalloonDev;
