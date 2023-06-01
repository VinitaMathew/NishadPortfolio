import React from "react";
import "./OtherProjects.scss";
import { NavLink } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const Project1 = require("../../../assets/other-project1.png");
const Project2 = require("../../../assets/other-project2.png");
const Project3 = require("../../../assets/other-project3.png");
const Project4 = require("../../../assets/other-project4.png");
const BackgroundImg = require("../../../assets/background-img2.png");

export default function OtherProjects() {
   const [project1, inView1] = useInView({
     threshold: 0.01,
     triggerOnce: true,
   });
   const [project2, inView2] = useInView({
     threshold: 0.01,
     triggerOnce: true,
   });
   const [buttonRef, inView3] = useInView({
     threshold: 0.01,
     triggerOnce: true,
   });
  return (
    <div className="other-projects-container">
      <h2 ref={project1} className={inView1 ? "slide-up" : "hidden"}>
        Other Projects
      </h2>
      <img className="background-img" src={BackgroundImg} alt="" />
      <div className="projects-wrapper">
        <a
          href="/"
          target="_blank"
          ref={project1}
          rel="noreferrer"
          className={inView1 ? "slide-up" : "hidden"}
        >
          <img
            className="project clickable"
            src={Project1}
            alt="Taj website redesign"
          />
        </a>
        <span ref={project1} className={inView1 ? "slide-up" : "hidden"}>
          <img className="project" src={Project2} alt="The Road Project" />
        </span>
        <a
          href="/"
          target="_blank"
          ref={project2}
          rel="noreferrer"
          className={inView2 ? "slide-up" : "hidden"}
        >
          <img
            className="project clickable"
            src={Project3}
            alt="Way to wealth - Traders website"
          />
        </a>
        <a
          href="/"
          target="_blank"
          ref={project2}
          rel="noreferrer"
          className={inView2 ? "slide-up" : "hidden"}
        >
          <img
            className="project clickable"
            src={Project4}
            alt="DaMensch - Concept website design"
          />
        </a>
      </div>
      <NavLink
        to="/about"
        ref={buttonRef}
        className={inView3 ? "slide-up about-nav" : "hidden about-nav"}
      >
        <button onClick={() => window.scrollTo(0, 0)} className="about-btn">
          Know more about me ;)
        </button>
      </NavLink>
    </div>
  );
}
