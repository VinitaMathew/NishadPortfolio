import React from "react";
import "./Footer.scss";

const Logo = require("../../../assets/logo.png");

export default function Footer() {

  return (
    <div className="footer-container">
      <img src={Logo} alt="" className="logo" />
      <div className="details">
        <div>Website -</div>
        <div>
          Designed by{" "}
          <a target="_blank" rel="noreferrer" href="/">
            Nishad
          </a>{" "}
          | Developed by{" "}
          <a target="_blank" rel="noreferrer" href="/">
            Vinita
          </a>
        </div>
      </div>
    </div>
  );
}
