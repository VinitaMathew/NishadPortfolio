import React from "react";
import { NavLink } from "react-router-dom";
import "./ClientProject.scss";

const ClientProject1 = require("../../../../assets/client-project1.png");
const ClientProject2 = require("../../../../assets/client-project2.png");
const ClientProject3 = require("../../../../assets/client-project3.png");

export default function ClientProject() {
  return (
    <div className="client-project-container">
      <div className="image-wrapper">
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
      <div className="image-wrapper">
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
      <div className="image-wrapper">
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
