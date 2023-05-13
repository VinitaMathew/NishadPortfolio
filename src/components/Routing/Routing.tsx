import React, { useRef } from "react";
import { HashRouter, Routes, Route, NavLink } from "react-router-dom";
import Menu from "./Menu/Menu";
import HomePage from "../homePage/HomePage";
import PranatiProject from "../homePage/Projects/ClientProject/PranatiProject/PranatiProject";
import TagProject from "../homePage/Projects/ClientProject/TagProject/TagProject";
import BrightSmilesProject from "../homePage/Projects/ClientProject/BrightSmilesProject/BrightSmilesProject";
import "./Routing.scss";

export default function Routing() {
  const ref = useRef<HTMLDivElement>(null);
  const scrollToProjects = () => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="routingContainer">
      <HashRouter>
        <div>
          <Menu isFooter={false} scrollToProjects={scrollToProjects} />
          <Routes>
            <Route
              path="/"
              element={
                <HomePage workClick={scrollToProjects} projectRef={ref} />
              }
            />
            <Route path="/Pranati" element={<PranatiProject />} />
            <Route path="/Tag" element={<TagProject />} />
            <Route path="/BrightSmiles" element={<BrightSmilesProject />} />
          </Routes>
          <Menu isFooter={true} scrollToProjects={scrollToProjects} />
        </div>
      </HashRouter>
    </div>
  );
}
