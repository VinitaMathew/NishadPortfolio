import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Menu.scss";

const Logo = require("../../../assets/logo.png");
const BehanceLogo = require("../../../assets/behance-logo.png");
const LinkedInLogo = require("../../../assets/linkedin-logo.png");
const GmailLogo = require("../../../assets/gmail-logo.png");
const MenuIcon = require("../../../assets/hamburger-icon.png");
const CloseIcon = require("../../../assets/close-icon.png");

export default function Menu(props: any) {
  const [isMobile] = useState(
    window.matchMedia("only screen and (max-width:1024px)").matches
  );
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState<any>(
    window.location.href.split("/").pop()
  );
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuIconClick = (isOpen: boolean) => {
    setIsMenuOpen(isOpen);
  };
  const handleResumeClick = () => {
    window.open("/Nishad_Resume.pdf", "_blank");
  };

  const handleMenuClick = () => {
    setCurrentPath(window.location.href.split("/").pop());
    setIsMenuOpen(false);
  };

  useEffect(() => {
    setCurrentPath(window.location.href.split("/").pop());
  }, [location]);

  return (
    <div
      className={
        isMobile
          ? "menu-container-mobile"
          : scrollY > 0
          ? "menu-container-desktop scrolled"
          : "menu-container-desktop"
      }
      style={{ boxShadow: isMenuOpen ? "0 6px 12px rgba(0,0,0,.1)" : "unset" }}
    >
      <div className="common-container">
        <NavLink
          end
          to="/"
          className="link"
          onClick={() => {
            handleMenuClick();
            window.scrollTo(0, 0);
          }}
        >
          <img src={Logo} alt="" className="logo" />
        </NavLink>
        {isMobile ? (
          <div className="mobile-wrapper-menu">
            <button
              className="menu-button"
              onClick={() => {
                handleMenuIconClick(!isMenuOpen);
              }}
            >
              <img
                src={isMenuOpen ? CloseIcon : MenuIcon}
                alt="toggle menu"
              ></img>
            </button>
          </div>
        ) : null}
        {(isMobile && isMenuOpen) || !isMobile ? (
          <div className="menu-list">
            <ul className="nav-links">
              <li
                className="nav-link"
                onClick={() => {
                  handleMenuClick();
                  window.scrollTo(0, 0);
                }}
              >
                <NavLink end to="/" className="link">
                  Home
                </NavLink>
              </li>
              {currentPath !== "" ? (
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
              <li
                className="nav-link"
                onClick={() => {
                  handleMenuClick();
                  window.scrollTo(0, 0);
                }}
              >
                <NavLink to="/about" className="link">
                  About
                </NavLink>
              </li>
              {currentPath !== "" ? (
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
              <a
                href="https://www.behance.net/nishads3"
                target="_blank"
                rel="noreferrer"
              >
                <img className="link-img" src={BehanceLogo} alt="" />
              </a>
              <a
                href="https://www.linkedin.com/in/nishad-s-1384b5189/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="link-img" src={LinkedInLogo} alt="" />
              </a>
              <a
                href="mailto:nishadskumar03@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <img className="link-img" src={GmailLogo} alt="" />
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
