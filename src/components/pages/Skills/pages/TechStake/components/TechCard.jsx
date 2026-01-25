const TechCard = ({ tech }) => {
  const durationFate = 1000 + tech.id * 100;

  return (
    <div data-aos={`fade-up`} data-aos-duration={durationFate}>
      <a _blank href={tech.href}>
        <div
          key={tech.id}
          className="group p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl"
        >
          <img
            className="relative h-16 w-16 md:h-20 md:w-20 transform transition-transform duration-300"
            src={tech.icon}
          />
          <span className="text-slate-300 font-semibold text-sm md:text-base tracking-wide group-hover:text-white transition-colors duration-300">
            {tech.name}
          </span>
        </div>
      </a>
    </div>
  );
};

export default TechCard;
