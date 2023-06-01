import React, { useState } from "react";
import ClientProject from "./ClientProject/ClientProject";
import CorporateProject from "./CorporateProject/CorporateProject";
import "./Projects.scss";

const Projects = React.forwardRef((props, projectsRef: any) => {
  const tabList = ["Featured client projects", "Work at corporates"];
  const [tab, setTab] = useState<String>(tabList[0]);
  const handleTabClick = (tab: String) => {
    setTab(tab);
  };
  return (
    <div className="projects-container" ref={projectsRef}>
      <ul className="projects-heading">
        {tabList.map((tabItem, index) => {
          return (
            <li
              key={index}
              className={tab === tabItem ? "tab-item active" : "tab-item"}
              onClick={() => handleTabClick(tabItem)}
            >
              {tabItem}
            </li>
          );
        })}
      </ul>
      <div className="projects-list-wrapper">
        {tab === tabList[0] ? <ClientProject /> : <CorporateProject />}
      </div>
    </div>
  );
});

export default Projects;
