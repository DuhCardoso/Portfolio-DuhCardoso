import React from "react";

const CardAbout = ({ icon, number, label, aos, duration }) => {
  return (
    <div
      key={label}
      className="p-4 bg-slate-800 rounded-lg border border-slate-700 hover:border-cyan-400/50 transition-colors"
      data-aos={aos}
      data-aos-duration={duration}
    >
      <div className="flex items-center justify-between gap-3 mb-2">
        {/* Icon container */}
        <div className="w-8 h-8 lg:w-14 lg:h-14 rounded-full flex items-center justify-center bg-white/10">
          {icon}
        </div>

        <span
          className="text-2xl font-bold text-cyan-400"
          data-aos="fade-up-left"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-bottom"
        >
          {number}
        </span>
      </div>

      {/* Text card */}
      <p
        className="text-sm text-slate-400"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        {label}
      </p>
    </div>
  );
};

export default CardAbout;
