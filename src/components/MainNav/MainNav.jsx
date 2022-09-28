import React from "react";
import "./MainNav.css";

const MainNav = ({ texts, className, divName }) => {
  return (
    <ul className={divName}>
      {texts.map((item, index) => {
        return (
          <li
            className={`${className} ${
              item === "About Ableton" && "orange-txt"
            }`}
            key={index}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default MainNav;
