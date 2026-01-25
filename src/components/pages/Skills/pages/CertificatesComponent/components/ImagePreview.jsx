import { ClosedCaptionIcon, X } from "lucide-react";

const ImagePreview = ({ image, onClose }) => {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 "
    >
      {/* Container da imagem */}
      <div
        onClick={(e) => e.stopPropagation()}
        className=" relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
      >
        {/* Botão fechar */}
        <button
          onClick={onClose}
          className="fixed top-4 right-4 text-white text-2xl hover:opacity-80"
        >
          <X />
        </button>
        <img
          src={image}
          alt="Preview"
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
};

export default ImagePreview;
