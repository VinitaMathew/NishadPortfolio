import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./AboutPage.scss";

const AboutImage = require("../../assets/about-image.png");
const GmailIcon = require("../../assets/gmail-blue-logo.png");
const BehanceIcon = require("../../assets/behance-blue-icon.png");
const LinkedinIcon = require("../../assets/linkedin-blue-icon.png");


export default function AboutPage() {
  return (
    <div className="about-page">
      <h1 className="heading">About me :)</h1>
      <img className="image" src={AboutImage} alt=""></img>
      <Accordion allowZeroExpanded={true} className="accordion">
        <AccordionItem className="accordion-item">
          <AccordionItemHeading>
            <AccordionItemButton className="accordion-button">
              Personal background
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="accordion-panel">
            <div>
              A little about my personal background; I am a Malayali, but born
              and bought up in Bengaluru. I can speak English, Malayalam,
              Kannada, Hindi and Tamil.
              <br />
              <br /> Movies, music, PC games and going on bike rides have always
              been my stress busters. I also love socializing, so please do
              reach out if you want to discuss design, Tech, movies or
              entertainment :)
            </div>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="accordion-item">
          <AccordionItemHeading>
            <AccordionItemButton className="accordion-button">
              Work experience
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="accordion-panel">
            <ul className="list">
              <li className="list-item">
                <div className="range">Nov 2020 — Present (2.5 years)</div>
                <div className="right-section">
                  <div className="title">
                    UX/UI Designer at Tata Consultancy Services Ltd
                  </div>
                  <div className="desc">
                    Worked in designing websites and apps for a major Australian
                    banking client at TCS. Worked in more than 7 major projects
                    of the bank. Based on the project, tasks varied from
                    conducting User research and Designing User interface. All
                    the projects were designed keeping Microsoft Fluent UI,
                    Bank’s enterprise design system, Material Design, and Human
                    Interface Guidelines as reference.
                  </div>
                </div>
              </li>
              <li className="list-item">
                <div className="range">
                  June 2020 — Oct 2020 (4 months Internship)
                </div>
                <div className="right-section">
                  <div className="title">UX/UI Designer at Maxc Studios</div>
                  <div className="desc">
                    At Maxc, worked on two projects primarily. One was an end to
                    end application for schools and colleges to conduct online
                    classes efficiently. The other project was about a social
                    networking app called Kutumb. Had to take ownership of the
                    Notification and Connection modules of the app.
                  </div>
                </div>
              </li>
              <li className="list-item">
                <div className="range">
                  Jan 2020 — April 2020 (3 months Internship)
                </div>
                <div className="right-section">
                  <div className="title">Product Specialist at ADDA</div>
                  <div className="desc">
                    Interned at ADDA as an Associate Product Specialist. Primary
                    task was to conduct User research to gain insights on ways
                    to improve the existing experience of the app.
                    <br /> Research methods varied from conducting in person
                    interviews with Stakeholders and End users, surveys and
                    gaining insights from site analytics. Also had a chance to
                    work in an Agile environment and created and maintained
                    sprint task. Was an active User Experience tester for the
                    app in all platforms.
                  </div>
                </div>
              </li>
            </ul>
            <div>
              Apart from these, I have also taken up 5 freelance website design
              projects. They were delivered over different timelines.
            </div>
            <ul>
              <li>Pranati - Wellness website</li>
              <li>Tag - Food and Beverage website</li>
              <li>Bright Smiles - Dental clinic website</li>
              <li>Way to wealth traders - Trading website</li>
              <li>Wedding card designs</li>
            </ul>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="accordion-item">
          <AccordionItemHeading>
            <AccordionItemButton className="accordion-button">
              How I got into design
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="accordion-panel">
            <div>
              I’m a computer science engineering graduate. During my second
              semester of engineering, I happened to attend a workshop on User
              Interface Designing conducted by two of my college seniors. That
              was my first introduction to the field of Design! And I’ve never
              looked back since then.
              <br />
              <br /> I became an active member of the software design and
              development club of the college to learn and experience more about
              how it works in the design field. I started taking part in many
              designing competitions that were held in the college and slowly
              became part of the design community at college.
            </div>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="accordion-item">
          <AccordionItemHeading>
            <AccordionItemButton className="accordion-button">
              Education
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="accordion-panel">
            <ul className="list">
              <li className="list-item">
                <div className="edu-range">Aug 2016 — Sep 2020</div>
                <div className="right-section">
                  <div className="school">
                    MVJ College of Engineering, Bangalore
                  </div>
                  <div className="desc">
                    B.E in Computer Science Engineering, CGPA: 7.2
                  </div>
                </div>
              </li>
              <li className="list-item">
                <div className="edu-range">April 2014 — April 2016</div>
                <div className="right-section">
                  <div className="school">
                    St. Joseph’s Pre University College, Bangalore
                  </div>
                  <div className="desc">PUC in Science, Percentage: 90.3%</div>
                </div>
              </li>
              <li className="list-item">
                <div className="edu-range">April 2004 — Mar 2014</div>
                <div className="right-section">
                  <div className="school">
                    Army Public School, ASC C&C, Bangalore
                  </div>
                  <div className="desc">
                    10th Standard CBSE Board, CGPA: 9.4
                  </div>
                </div>
              </li>
            </ul>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="accordion-item">
          <AccordionItemHeading>
            <AccordionItemButton className="accordion-button">
              Contact
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="accordion-panel">
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
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
