import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.scss";

const Logo = require("../../../assets/logo.png");
const BehanceLogo = require("../../../assets/behance-logo.png");
const LinkedInLogo = require("../../../assets/linkedin-logo.png");
const GmailLogo = require("../../../assets/gmail-logo.png");

export default function Menu(props:any) {
    return (
      <div className="menu-container" style={{ marginBottom: props.isFooter ?"136px":"unset", borderTop: props.isFooter ?"3px solid #F4F4F4":"unset"}}>
        <NavLink end to="/" className="link">
          <img src={Logo} alt="" className="logo" />
        </NavLink>
        <ul className="nav-links">
          <li className="nav-link">
            <NavLink end to="/" className="link">
              Home
            </NavLink>
          </li>
          <li className="nav-link" onClick={props.scrollToProjects}>
            Work
          </li>
          <li className="nav-link">
            <NavLink to="/about" className="link">
              About
            </NavLink>
          </li>
        </ul>
        <div className="external-links">
          <a href="/" target="_blank">
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