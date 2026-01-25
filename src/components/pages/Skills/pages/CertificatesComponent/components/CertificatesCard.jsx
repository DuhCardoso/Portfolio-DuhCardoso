import { useEffect, useState } from "react";
import ImagePreview from "./ImagePreview";

const CertificatesCard = ({ certData }) => {
  const [open, setOpen] = useState(false);
  const durationFate = 1000 + certData.id * 100;

  useEffect(() => {
    if (!open) return;

    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  return (
    <div data-aos={`fade-up`} data-aos-duration={durationFate}>
      <a className="cursor-pointer" onClick={() => setOpen(true)}>
        <div
          key={certData.id}
          className="relative p-6 bg-linear-to-br from-slate-900 to-slate-800 rounded-xl border border-slate-700 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105 group"
        >
          <img src={certData.image} />
        </div>
      </a>
      {open && (
        <ImagePreview image={certData.image} onClose={() => setOpen(false)} />
      )}
    </div>
  );
};

export default CertificatesCard;
