import React from "react";

const RadioButton = ({ value, label, position, setPosition }) => {
  return (
    <div className="radio-button">
      <input
        type="radio"
        value={value}
        name="position"
        checked={parseInt(value) === parseInt(position)}
        onChange={(e) => {
          setPosition(e.currentTarget.value);
        }}
      />
      <div className="radio-label">{label}</div>
    </div>
  );
};

export default RadioButton;
