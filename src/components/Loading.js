import React from "react";

const Loading = (props) => (
  <div className="loading">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={40}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      style={{
        marginRight: "-2px",
        display: "block",
        backgroundRepeatY: "initial",
        backgroundRepeatX: "initial",
        animationPlayState: "paused",
      }}
      {...props}
    >
      <circle
        cx={50}
        cy={50}
        fill="none"
        stroke="#00bdd3"
        strokeWidth={10}
        r={35}
        strokeDasharray="164.93361431346415 56.97787143782138"
        style={{
          transform: "matrix(1,0,0,1,0,0)",
          animationPlayState: "paused",
        }}
      />
    </svg>
  </div>
);

export default Loading;
