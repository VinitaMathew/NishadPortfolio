import React from "react";
import "./OtherProjects.scss";
import { NavLink } from "react-router-dom";

const Project1 = require("../../../assets/other-project1.png");
const Project2 = require("../../../assets/other-project2.png");
const Project3 = require("../../../assets/other-project3.png");
const Project4 = require("../../../assets/other-project4.png");
const BackgroundImg = require("../../../assets/background-img2.png");

export default function OtherProjects() {
  return (
    <div className="other-projects-container">
      <h2>Other Projects</h2>
      <img className="background-img" src={BackgroundImg} alt="" />
      <div className="projects-wrapper">
        <a href="/" target="_blank">
          <img
            className="project clickable"
            src={Project1}
            alt="Taj website redesign"
          />
        </a>
        <span>
          <img className="project" src={Project2} alt="The Road Project" />
        </span>
        <a href="/" target="_blank">
          <img
            className="project clickable"
            src={Project3}
            alt="Way to wealth - Traders website"
          />
        </a>
        <a href="/" target="_blank">
          <img
            className="project clickable"
            src={Project4}
            alt="DaMensch - Concept website design"
          />
        </a>
      </div>
      <NavLink to="/about" className="about-nav">
        <button onClick={() => window.scrollTo(0, 0)} className="about-btn">
          Know more about me ;)
        </button>
      </NavLink>
    </div>
  );
}
