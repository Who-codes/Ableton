import React from "react";

const Logo = ({ className, isClicked, screenSize }) => {
  return (
    <svg
      role="img"
      aria-labelledby="logo"
      xmlns="http://www.w3.org/2000/svg"
      width="45"
      height="21"
      viewBox="0 0 45 21"
      className={className}
      style={
        isClicked && screenSize < 1200 ? { fill: "#fff" } : { fill: "#000" }
      }
    >
      <path d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z"></path>
    </svg>
  );
};

export default Logo;
