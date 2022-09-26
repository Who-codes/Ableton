import React, { useState } from "react";
import Logo from "../Logo";
import "./Nav.css";
import Triangle from "../Triangle";

const Nav = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <header>
      <nav className="nav sm-nav">
        <Logo className="logo" isClicked={isClicked} />
        <div
          className="menu-container"
          onClick={handleClick}
          style={isClicked ? { color: "#fff" } : { color: "#000" }}
        >
          <h3 className="menu">Menu</h3>
          <Triangle
            className={`triangle ${isClicked && "rotate"}`}
            isClicked={isClicked}
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
