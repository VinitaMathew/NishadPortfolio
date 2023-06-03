import React from "react";
import "./Contact.scss";
import { useInView } from "react-intersection-observer";

const GmailIcon = require("../../../assets/gmail-blue-logo.png");
const BehanceIcon = require("../../../assets/behance-blue-icon.png");
const LinkedinIcon = require("../../../assets/linkedin-blue-icon.png");

const Contact = React.forwardRef((props, contactRef: any) => {
  const [ref, inView] = useInView({
    threshold: 0.01,
    triggerOnce: true,
  });
  return (
    <div className="contact-container" ref={contactRef}>
      <h2
        ref={ref}
        className={
          inView ? "slide-up content-wrapper" : "hidden content-wrapper"
        }
      >
        Let’s connect
      </h2>
      <div
        ref={ref}
        className={
          inView ? "slide-up content-wrapper" : "hidden content-wrapper"
        }
      >
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
            <a
              href="mailto:nishadskumar03@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              nishadskumar03@gmail.com
            </a>
          </div>
          <div className="behance">
            <img src={BehanceIcon} alt="" />
            <a
              href="https://www.behance.net/nishads3"
              target="_blank"
              rel="noreferrer"
            >
              nishads3
            </a>
          </div>
          <div className="linkedin">
            <img src={LinkedinIcon} alt="" />
            <a
              href="https://www.linkedin.com/in/nishad-s-1384b5189/"
              target="_blank"
              rel="noreferrer"
            >
              Nishad S
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Contact;
