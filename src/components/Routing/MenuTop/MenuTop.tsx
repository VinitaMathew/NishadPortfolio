import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./MenuTop.scss";

const Logo = require("../../../assets/logo.png");
const BehanceLogo = require("../../../assets/behance-logo.png");
const LinkedInLogo = require("../../../assets/linkedin-logo.png");
const GmailLogo = require("../../../assets/gmail-logo.png");
const MenuIcon = require("../../../assets/hamburger-icon.png");
const CloseIcon = require("../../../assets/close-icon.png");

export default function MenuTop(props: any) {
  const [isMobile] = useState(
    window.matchMedia("only screen and (max-width:1024px)").matches
  );
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleMenuIconClick = (isOpen:boolean) => {
    setIsMenuOpen(isOpen);
  };
  const handleResumeClick = () => {
    window.open("/Nishad_Resume.pdf", "_blank");
  };
  const [currentPath, setCurrentPath] = useState<any>(
    window.location.href.split("/").pop()
  );

  const handleMenuClick = () => {
    setCurrentPath(window.location.href.split("/").pop());
    setIsMenuOpen(false);
  };

  return (
    <div
      className={
        isMobile ? "menu-top-container-mobile" : "menu-top-container-desktop"
      }
      style={{ boxShadow: isMenuOpen ? "0 6px 12px rgba(0,0,0,.2)" : "unset" }}
    >
      <NavLink end to="/" className="link" onClick={handleMenuClick}>
        <img src={Logo} alt="" className="logo" />
      </NavLink>
      {isMobile ? (
        <div className="mobile-wrapper-menu">
          <button
            className="menu-button"
            onClick={() => handleMenuIconClick(!isMenuOpen)}
          >
            <img src={isMenuOpen ? CloseIcon : MenuIcon}></img>
          </button>
        </div>
      ) : null}
      {(isMobile && isMenuOpen) || !isMobile ? (
        <div className="menu-list">
          <ul className="nav-links">
            <li className="nav-link" onClick={handleMenuClick}>
              <NavLink end to="/" className="link">
                Home
              </NavLink>
            </li>
            {currentPath === "about" ? (
              <li
                className="nav-link"
                onClick={() => {
                  props.scrollToProjects();
                  handleMenuClick();
                }}
              >
                <NavLink end to="/" className="link">
                  Work
                </NavLink>
              </li>
            ) : (
              <li
                className="nav-link"
                onClick={() => {
                  props.scrollToProjects();
                  handleMenuClick();
                }}
              >
                Work
              </li>
            )}
            <li className="nav-link" onClick={handleMenuClick}>
              <NavLink to="/about" className="link">
                About
              </NavLink>
            </li>
            {currentPath === "about" ? (
              <li
                className="nav-link"
                onClick={() => {
                  props.scrollToContact();
                  handleMenuClick();
                }}
              >
                <NavLink end to="/" className="link">
                  Contact
                </NavLink>
              </li>
            ) : (
              <li
                className="nav-link"
                onClick={() => {
                  props.scrollToContact();
                  handleMenuClick();
                }}
              >
                Contact
              </li>
            )}
            <li
              className="nav-link"
              onClick={() => {
                handleResumeClick();
                handleMenuClick();
              }}
            >
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
      ) : null}
    </div>
  );
}
