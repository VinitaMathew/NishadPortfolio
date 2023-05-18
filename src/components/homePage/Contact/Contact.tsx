import React from "react";
import "./Contact.scss";

const GmailIcon = require("../../../assets/gmail-blue-logo.png");
const BehanceIcon = require("../../../assets/behance-blue-icon.png");
const LinkedinIcon = require("../../../assets/linkedin-blue-icon.png");

const Contact = React.forwardRef((props, contactRef: any) => {
  return (
    <div className="contact-container" ref={contactRef}>
      <h2>Let’s connect</h2>
      <div className="content-wrapper">
        <div className="description">
          I’m thrilled that you made it all the way down here! If you’re
          interested in connecting with me, I’d love to hear from you. Whether
          you have a project proposal, a question, or just want to say hello,
          you can get in touch. I’m always looking to engage with fellow
          professionals and potential collaborators in the tech and innovation
          space, so don’t hesitate to reach out ;)
        </div>
        <div className="info-container">
          <div className="email">
            <img src={GmailIcon} alt="" />
            <span>nishadskumar03@gmail.com</span>
          </div>
          <div className="behance">
            <img src={BehanceIcon} alt="" />
            <a href="https://www.behance.net/nishads3" target="_blank">
              nishads3
            </a>
          </div>
          <div className="linkedin">
            <img src={LinkedinIcon} alt="" />
            <a href="/" target="_blank">
              Nishad S
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Contact;
