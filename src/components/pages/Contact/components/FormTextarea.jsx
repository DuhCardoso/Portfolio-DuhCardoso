const FormTextarea = ({ icon, name, placeholder }) => {
  return (
    <div className="relative group  ">
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
