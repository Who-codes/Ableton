import React from "react";
import "./NavSlider.css";

const NavSlider = ({ texts }) => {
  return (
    <ul className="more-on-wrapper">
      {texts.map((item, index) => {
        const { title, desc } = item;
        return (
          <li key={index} className="more-on-lists">
            <h3 className="more-from-title">{title}</h3>
            <p className="more-from-desc">{desc}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default NavSlider;
