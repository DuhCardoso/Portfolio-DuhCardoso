const FormTextarea = ({ icon, name, placeholder, durationFate }) => {
  return (
    <div
      className="relative group"
      data-aos="fade-up"
      data-aos-duration={durationFate}
    >
      {icon}

      <textarea
        name={name}
        placeholder={placeholder}
        rows="6"
        className="textareaForm "
        required
      />
    </div>
  );
};

export default FormTextarea;
