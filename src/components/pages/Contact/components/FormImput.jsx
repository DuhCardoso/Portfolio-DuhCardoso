const FormImput = ({ icon, type, name, placeholder }) => {
  return (
    <div className="relative group  ">
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
