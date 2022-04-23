import React from "react";

const Input = ({ value, setValue, placeholder, label, error }) => {
  let inputContainerClasses = "input-container";
  if (error) {
    inputContainerClasses += " error-text-input";
    label = error;
  }

  return (
    <div className={inputContainerClasses}>
      <input
        type="text"
        className="input"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        autoComplete="off"
        autoFocus
        required
      />
      <span className="floating-placeholder">{placeholder}</span>
      {label && <label>{label}</label>}
    </div>
  );
};

export default Input;
