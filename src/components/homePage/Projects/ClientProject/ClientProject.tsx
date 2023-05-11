import React from "react";
import "./ClientProject.scss";

const ClientProject1 = require("../../../../assets/client-project1.png");
const ClientProject2 = require("../../../../assets/client-project2.png");
const ClientProject3 = require("../../../../assets/client-project3.png");

export default function ClientProject() {
  return (
    <div className="client-project-container">
      <img src={ClientProject1} className="project1" alt="Pranati Project" />
      <img src={ClientProject2} className="project2" alt="Tag Project" />
      <img src={ClientProject3} className="project3" alt="Bright Smiles Project" />
    </div>
  );
}
