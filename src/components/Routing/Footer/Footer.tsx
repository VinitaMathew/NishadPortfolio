import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Footer.scss";

const Logo = require("../../../assets/logo.png");
const BehanceLogo = require("../../../assets/behance-logo.png");
const LinkedInLogo = require("../../../assets/linkedin-logo.png");
const GmailLogo = require("../../../assets/gmail-logo.png");

export default function Footer() {

  return (
    <div className="footer-container">
        <img src={Logo} alt="" className="logo" />
    </div>
  );
}
