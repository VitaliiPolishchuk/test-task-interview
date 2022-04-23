import React from "react";

const Button = ({ children, width }) => {
  return (
    <button className="button" style={{ width: width }}>
      {children}
    </button>
  );
};

export default Button;
