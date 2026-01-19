const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none ">
      {/* Background gradient */}
      <div className="absolute inset-0  from-slate-900 via-slate-900 to-slate-800 z-0"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl z-0"></div>

      {/* Animation */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none flex justify-center items-center filter blur-[100px] opacity-50">
        <div className="bg-violet-500 w-87.5 h-62.5 rounded-full absolute animate-movinBg rotate-45"></div>
        <div className="bg-blue-500 w-90 h-65 rounded-full absolute animate-movinBg rotate-90"></div>
        <div className="bg-cyan-500 w-92.5 h-67.5 rounded-full absolute animate-movinBg "></div>
        <div className="bg-indigo-500 w-95 h-70 rounded-full absolute animate-movinBg rotate-180"></div>
        <div className="bg-purple-500 w-97.5 h-72.5 rounded-full  absolute animate-movinBg -rotate-45"></div>
        <div className="bg-teal-500 w-100 h-75 rounded-full absolute animate-movinBg -rotate-90"></div>
        <div className="bg-sky-500 w-102.5 h-77.5 rounded-full  absolute animate-movinBg -rotate-180"></div>
      </div>
    </div>
  );
};

export default Background;
