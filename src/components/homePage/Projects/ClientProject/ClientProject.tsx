import React from "react";
import { NavLink } from "react-router-dom";
import "./ClientProject.scss";
import { useInView } from "react-intersection-observer";

const ClientProject1 = require("../../../../assets/client-project1.png");
const ClientProject2 = require("../../../../assets/client-project2.png");
const ClientProject3 = require("../../../../assets/client-project3.png");
const BackgroundImg = require("../../../../assets/background-img1.png");

export default function ClientProject() {
  const [project1, inView1] = useInView({
    threshold: 0.01,
    triggerOnce: true,
  });
  const [project2, inView2] = useInView({
    threshold: 0.01,
    triggerOnce: true,
  });
  const [project3, inView3] = useInView({
    threshold: 0.01,
    triggerOnce: true,
  });

  return (
    <div className="client-project-container">
      <img className="background-img" src={BackgroundImg} alt="" />
      <div
        ref={project1}
        className={inView1 ? "slide-up image-wrapper" : "hidden image-wrapper"}
      >
        <NavLink to="/Pranati">
          <img
            src={ClientProject1}
            className="project1"
            alt="Pranati Project"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          />
        </NavLink>
      </div>
      <div
        ref={project2}
        className={inView2 ? "slide-up image-wrapper" : "hidden image-wrapper"}
      >
        <NavLink to="/Tag">
          <img
            src={ClientProject2}
            className="project2"
            alt="Tag Project"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          />
        </NavLink>
      </div>
      <div
        ref={project3}
        className={inView3 ? "slide-up image-wrapper" : "hidden image-wrapper"}
      >
        <NavLink to="/BrightSmiles">
          <img
            src={ClientProject3}
            className="project3"
            alt="Bright Smiles Project"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          />
        </NavLink>
      </div>
    </div>
  );
}
