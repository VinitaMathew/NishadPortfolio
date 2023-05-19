import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./MenuTop.scss";

const Logo = require("../../../assets/logo.png");
const BehanceLogo = require("../../../assets/behance-logo.png");
const LinkedInLogo = require("../../../assets/linkedin-logo.png");
const GmailLogo = require("../../../assets/gmail-logo.png");

export default function MenuTop(props: any) {
  const handleResumeClick = () => {
    window.open("/Nishad_Resume.pdf", "_blank");
  };
  const [currentPath, setCurrentPath] = useState<any>(
    window.location.href.split("/").pop()
  );

  const handleMenuClick = () => {
    setCurrentPath(window.location.href.split("/").pop());
  };

  return (
    <div
      className="menu-top-container"
    >
      <NavLink end to="/" className="link" onClick={handleMenuClick}>
        <img src={Logo} alt="" className="logo" />
      </NavLink>
      <ul className="nav-links">
        <li className="nav-link" onClick={handleMenuClick}>
          <NavLink end to="/" className="link">
            Home
          </NavLink>
        </li>
        {currentPath === "about" ? (
          <li className="nav-link" onClick={props.scrollToProjects}>
            <NavLink end to="/" className="link">
              Work
            </NavLink>
          </li>
        ) : (
          <li className="nav-link" onClick={props.scrollToProjects}>
            Work
          </li>
        )}
        <li className="nav-link" onClick={handleMenuClick}>
          <NavLink to="/about" className="link">
            About
          </NavLink>
        </li>
        {currentPath === "about" ? (
          <li className="nav-link" onClick={props.scrollToContact}>
            <NavLink end to="/" className="link">
              Contact
            </NavLink>
          </li>
        ) : (
          <li className="nav-link" onClick={props.scrollToContact}>
            Contact
          </li>
        )}
        <li className="nav-link" onClick={handleResumeClick}>
          Resume
        </li>
      </ul>
      <div className="external-links">
        <a href="https://www.behance.net/nishads3" target="_blank">
          <img className="link-img" src={BehanceLogo} alt="" />
        </a>
        <a href="/" target="_blank">
          <img className="link-img" src={LinkedInLogo} alt="" />
        </a>
        <a href="mailto:nishadskumar03@gmail.com" target="_blank">
          <img className="link-img" src={GmailLogo} alt="" />
        </a>
      </div>
    </div>
  );
}
