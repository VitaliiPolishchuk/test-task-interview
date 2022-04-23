import React, { useState } from "react";

const Tooltip = ({ children }) => {
  const [click, setClick] = useState(false);
  let originalTextClasses = "original-text";
  if (click && children.length > 25) {
    originalTextClasses += " display-tooltip";
  }

  let hiddenTextClasses = "hidden-text";
  if (children.length > 25) {
    hiddenTextClasses += " is-clickable";
  }

  return (
    <div className="tooltip">
      <div className={hiddenTextClasses} onClick={() => setClick(!click)}>
        {children}
      </div>
      <div className={originalTextClasses}>{children}</div>
    </div>
  );
};

export default Tooltip;
