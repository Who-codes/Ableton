import React from "react";
import "./NavComponents.css";

const NavComponents = ({ isClicked }) => {
  return (
    <div className={`nav-components ${isClicked && "item-position"}`}>
      <ul className="nav-lists nav-main-lists">
        <li className="main-list">live</li>
        <li className="main-list">push</li>
        <li className="main-list">link</li>
        <li className="main-list">shop</li>
        <li className="main-list">packs</li>
        <li className="main-list">help</li>
      </ul>
      <ul className="nav-lists nav-secondary-lists">
        <li className="main-list">try live for free</li>
        <li className="secondary-list">Login or register</li>
      </ul>
      <div className="more-list">
        <ul className="more-on-list">
          <li className="main-list">More on Ableton.com:</li>
          <li className="secondary-list">Blog</li>
          <li className="secondary-list">Ableton for the classroom</li>
          <li className="secondary-list">
            Ableton for college and universities
          </li>
          <li className="secondary-list">Certified traning</li>
          <li className="secondary-list">About ableton</li>
          <li className="secondary-list">jobs</li>
          <li className="secondary-list">apprenticeships</li>
        </ul>
        <ul className="more-from-list"></ul>
      </div>
    </div>
  );
};

export default NavComponents;
