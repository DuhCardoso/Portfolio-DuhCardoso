const ButtonSetPage = ({ icon, page, label, selectComponent }) => {
  return (
    <button
      className={`grow text-sm sm:text-md px-5 py-3 rounded-lg border flex flex-col items-center gap-1 text-cyan-400 font-medium cursor-pointer transition-all ${selectComponent == true ? "border-cyan-400 bg-slate-800" : "border-slate-700   hover:border-cyan-400/60 bg-slate-800/40 hover:bg-slate-800/70"}`}
      onClick={page}
    >
      {icon}
      <span>{label}</span>

      {selectComponent == true ? (
        <div className="absolute -z-1   bg-linear-to-r from-cyan-800 to-cyan-700 rounded-full blur opacity-50  "></div>
      ) : (
        <></>
      )}
    </button>
  );
};

export default ButtonSetPage;
