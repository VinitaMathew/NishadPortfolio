import React from "react";
import {
  Accordion,
} from "react-accessible-accordion";
import projectData from "./CorporateProjectData";
import ProjectsAccordion from "./ProjectsAccordion";
import "./CorporateProject.scss";

const DisclaimerIcon = require("../../../../assets/disclaimer-icon.png");

export default function CorporateProject() {
  return (
    <div className="corporate-project-container">
      <div className="disclaimer">
        Unfortunately, due to policy reasons, I can’t show you the bulk of my
        work that I did at TCS and for their Banking clients, so for now, you’ll
        have to trust that I actually did quite a lot during my 2+ years of
        working with them.
      </div>
      <img className="disclaimer-icon" src={DisclaimerIcon} alt="" />
      <h3 className="overview-heading">Overview</h3>
      <div className="overview">
        I worked as a UX UI Designer here, worked primarily on the client’s
        internal employee portal. Worked for their HR, Risk and End user
        experience departments.
        <br />
        <br /> I was part of a 3 membered design team with one of them being the
        design consultant and the other being the design manager. Both the team
        members were working from onsite while I supported from Bengaluru. Have
        worked on more than 7 projects for one of the biggest banks in Australia
        over a period of 2.5 years. The following are the category of designs
        created -
      </div>
      <Accordion allowZeroExpanded={true} className="accordion">
        {projectData.map((project, index) => {
          return (
            <ProjectsAccordion project={project} index={index}/>
          );
        })}
      </Accordion>
    </div>
  );
}
