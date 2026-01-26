const FormImput = ({ icon, type, name, placeholder, durationFate }) => {
  return (
    <div
      className="relative group  "
      data-aos="fade-up"
      data-aos-duration={durationFate}
    >
      {icon}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="imputForm"
        required
      />
    </div>
  );
};

export default FormImput;
