import React from "react";
// import TitleIcon from "../../../assets/title-icon.svg";
import "./LandingSection.scss";

// const { ReactComponent } = require("react-svg-loader");
//const TitleIcon = require("../../../assets/title-icon.svg").default;

export default function LandingSection(props:any) {
  return (
    <div className="landing-section">
      <div className="content-wrapper">
        <div className="details-container">
          {/* <img className="title-icon" src={TitleIcon} alt=""></img> */}
          <div className="line1">Hi, I’m Nishad.</div>
          <div className="line2">
            I’m a designer based out of Bangalore, India.
            <br /> I can help you design digital products that are{" "}
            <b>efficient, elegant, impactful</b> and most importantly{" "}
            <b>usable</b>.
          </div>
          <button className="work-button" onClick={props.workClick}>
            Check out my work
          </button>
        </div>
      </div>
    </div>
  );
}
