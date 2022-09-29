import React, { useState } from "react";
import MainNav from "../MainNav/MainNav";
import "./NavComponents.css";
import MoreNav from "../MoreNav/MoreNav";

const NavComponents = ({ isClicked, screenSize, showMore, handleMore }) => {
  return (
    <div className={`nav-components ${isClicked && "item-position"}`}>
      <MainNav
        texts={["live", "push", "link", "shop", "packs", "help"]}
        className="main-list"
        divName="main-list-container flex"
      />
      <h3 className="more-text" onClick={handleMore}>
        More <span className="sign">{showMore ? "-" : "+"}</span>
      </h3>
      <MainNav
        texts={["try live for free", "login or register"]}
        className="secondary-list"
        divName="secondary-list-container flex"
      />
      {screenSize < 1200 && <MoreNav />}
    </div>
  );
};

export default NavComponents;
