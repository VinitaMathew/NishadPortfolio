import React from "react";
import LandingSection from "./LandingSection/LandingSection";
import Projects from "./Projects/Projects";
import OtherProjects from "./OtherProjects/OtherProjects";
import Testimonials from "./Testimonials/Testimonials";
import Contact from "./Contact/Contact";
import "./HomePage.scss";

export default function HomePage(props:any) {
  return (
    <div className="home-page">
      <LandingSection workClick={props.workClick} />
      <Projects ref={props.projectRef} />
      <OtherProjects />
      <Testimonials />
      <Contact ref={props.contactRef} />
    </div>
  );
}
