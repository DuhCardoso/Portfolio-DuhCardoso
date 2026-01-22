const PrimaryButton = ({
  href,
  content,
  _blank,
  icon,
  classNameButton,
  classNameLink,
}) => {
  return (
    <a
      href={href}
      target={_blank ? "_blank" : undefined}
      className={classNameLink}
    >
      <button
        className={`px-8 py-3 bg-linear-to-r from-cyan-400 to-blue-500 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-105 ${classNameButton}`}
      >
        {icon}
        {content}
      </button>
    </a>
  );
};

export default PrimaryButton;
