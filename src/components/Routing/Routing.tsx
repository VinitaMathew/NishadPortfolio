import React, { useRef } from "react";
import { HashRouter, Routes, Route, NavLink } from "react-router-dom";
import MenuTop from "./MenuTop/MenuTop";
import MenuBottom from "./MenuBottom/MenuBottom";
import HomePage from "../homePage/HomePage";
import PranatiProject from "../homePage/Projects/ClientProject/PranatiProject/PranatiProject";
import TagProject from "../homePage/Projects/ClientProject/TagProject/TagProject";
import BrightSmilesProject from "../homePage/Projects/ClientProject/BrightSmilesProject/BrightSmilesProject";
import AboutPage from "../aboutPage/AboutPage";
import "./Routing.scss";

export default function Routing() {
  const ref = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const scrollToProjects = () => {
    setTimeout(() => {
      // Scroll to the reference component
      if (ref.current) {
        ref.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };
  const scrollToContact = () => {
    setTimeout(() => {
      // Scroll to the reference component
      if (contactRef.current) {
        contactRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };
  return (
    <div className="routingContainer">
      <HashRouter>
        <div>
          <MenuTop
            scrollToProjects={scrollToProjects}
            scrollToContact={scrollToContact}
          />
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  workClick={scrollToProjects}
                  projectRef={ref}
                  contactClick={scrollToContact}
                  contactRef={contactRef}
                />
              }
            />
            <Route path="/Pranati" element={<PranatiProject />} />
            <Route path="/Tag" element={<TagProject />} />
            <Route path="/BrightSmiles" element={<BrightSmilesProject />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <MenuBottom
            scrollToProjects={scrollToProjects}
            scrollToContact={scrollToContact}
          />
        </div>
      </HashRouter>
    </div>
  );
}
