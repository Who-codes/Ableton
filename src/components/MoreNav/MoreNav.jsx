import React from "react";
import { useGlobalContext } from "../../context";
import MainNav from "../MainNav/MainNav";
import NavSlider from "../NavSlider/NavSlider";
import "./MoreNav.css";

const MoreNav = () => {
  const { showMore } = useGlobalContext();

  if (showMore) {
    return (
      <div className="more">
        <div className="more-on">
          <h3 className="more-title">More on Ableton.com:</h3>
          <MainNav
            texts={[
              "Blog",
              "Ableton for the Classroom",
              "Ableton for Colleges and Universities",
              "Certified Training",
              "About Ableton",
              "Jobs",
              "Apprenticeships",
            ]}
            className="more-on-list"
            divName="more-list-container flex"
          />
        </div>
        <div className="more-from more-list-container flex">
          <h3 className="more-title">More from Ableton:</h3>
          <NavSlider
            texts={[
              {
                title: "Loop",
                desc: "Watch Talks, Performances and Features from Ableton's Summit for Music Makers",
              },
              {
                title: "Learning Music",
                desc: "Watch Talks, Performances and Features from Ableton's Summit for Music Makers",
              },
              {
                title: "Learning Synths",
                desc: "Learn the fundamentals of music making right in your browser.",
              },
              {
                title: "Making Music",
                desc: "Some tips from 74 Creative Strategies for Electronic Producers.",
              },
            ]}
          />
        </div>
      </div>
    );
  }
};

export default MoreNav;
