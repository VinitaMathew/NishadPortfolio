import React from "react";
import tagScreenData from "./TagScreensData";
import "./TagProject.scss";
import { NavLink } from "react-router-dom";

const IntroImg = require("../../../../../assets/client-project2.png");
const TagImage1 = require("../../../../../assets/tag-image1.png");
const TagImage2 = require("../../../../../assets/tag-image2.png");
const TagImage3 = require("../../../../../assets/tag-image3.png");
const TagImage4 = require("../../../../../assets/tag-image4.png");
const TagImage5 = require("../../../../../assets/tag-image5.png");
const NavIcon = require("../../../../../assets/nav-icon.png");

export default function TagProject() {
  return (
    <div className="tag-container">
      <img src={IntroImg} alt="" />
      <br />
      <br />
      <br />
      <div className="objective">
        Tag is a food and beverage solutions provider with their head office in
        UAE. They underwent a complete rebranding and hence needed to redesign
        their website according to the new brand guidelines.{" "}
        <b>
          This was a very fast based project with extremely short timelines. The
          design was completed within 5 working days
        </b>{" "}
        and the developed website was delivered within 2 weeks of completion of
        design.
      </div>
      <br />
      <br />
      <h2>Getting to work - Requirements Analysis</h2>
      <div>
        The client wanted their redesigned website up and running as soon as
        possible as they had to showcase their brand during one of the industry
        expos that was happening. Hence, I didn’t have time to conduct extensive
        user research and gain insights before designing the actual website.
        Thus, this being the situation,{" "}
        <b>I decided to proceed with the project in two phases.</b>
        <br /> The first phase would be a simple static website that talks about
        Tag. The second phase would be including more research, spending more
        time with image selections and also adding more user interactions within
        the website.
      </div>
      <br />
      <br />
      <h2>Client insights</h2>
      <div className="insights">
        <div className="desc">
          <div>
            A series of meetings were conducted to gain more insights about what
            the client was expecting from this website redesign. They wanted a
            website that was heavy on interactions ie., mouse hover effects, on
            scroll effects etc. also, they wanted a website that would help them
            show their professional outlook.
          </div>
          <br />
          <div>They wanted the website to have the following pages -</div>
          <ul>
            <li>Home page</li>
            <li>About us page</li>
            <li>Our Products & Specializations page</li>
            <li>Blogs page</li>
            <li>Careers page</li>
          </ul>
        </div>
        <img src={TagImage1} alt="" />
      </div>
      <h2>Quick wireframe</h2>
      <div className="wireframe">
        <img src={TagImage2} alt="" />
        <div className="desc">
          <img src={TagImage3} alt="" />
          <div>
            As mentioned earlier, this project was very fast paced. I was
            given only a few hours to come up with the wireframe. The clients
            just wanted to see how the website structure would look like. They
            didn’t want anything picture perfect in the first phase of the
            project
          </div>
        </div>
      </div>
      <br />
      <br />
      <div>
        <div>
          On showing this to clients few feedback was received and on analysing
          the feedback, the following changes were made -
        </div>
        <ul>
          <li>
            They explained the importance and difficulty in the process of
            obtaining the certificates of standards that were displayed in the
            website. A quick research was conducted on their competitor websites
            and they lacked these industry standard certificates. Hence, that
            section was moved up in the website wireframe.
          </li>
          <li>
            The client preferred having their products range section on the
            initial half of the website.
          </li>
          <li>
            We also decided to emphasis their business partners as they have few
            big names under their belt.
          </li>
          <li>
            On reviewing the wireframes with the developers, it was noticed that
            few interactions and animations that was planned for would be
            difficult to achieve in the allocated timelines. Hence, changes were
            also made in the those sections - eg- Our product range. It was made
            more simple with the interaction due to time constraints.
          </li>
        </ul>
      </div>
      <div className="info-container">
        <b>
          These insights from the first iteration of wire framing was directly
          implemented into the UI phase as the client was satisfied with the
          rest of the UX flow.
        </b>
      </div>
      <br />
      <br />
      <h2>Working on the UI</h2>
      <div>
        The following UI was designed for a bigger screen - 1920px as against
        the regular 1440px
      </div>
      <br />
      <img src={TagImage4} alt="" />
      <br />
      <br />
      <br />
      <ul className="screen-wrapper">
        {tagScreenData.map((data, index) => {
          return (
            <li className="screen-item" key={index}>
              <img className="screen-img" src={data.image} alt="" />
              <div className="desc">
                <div className="index">
                  {index < 8 && "0"}
                  {index + 1}
                </div>
                <div>{data.desc}</div>
              </div>
            </li>
          );
        })}
      </ul>
      <br />
      <h2>Other internal pages</h2>
      <br />
      <img src={TagImage5} alt="" />
      <br />
      <br />
      <br />
      <div>
        Awaiting the response from the actual users and the client partners for
        more feedback. TAG will also be extended to another phase of design and
        development. This would involve more user research and analysis. More
        micro interactions would be added. The next phase would be spread across
        a longer timeline hence enabling the design and development teams more
        time to work and produce efficient products.
      </div>
      <br/><br/>
      <div className="nav-buttons">
        <div className="prev-nav">
          <div>Previous case study</div>
          <NavLink
            to="/Pranati"
            onClick={() =>
              window.scrollTo({
                top: 0,
              })
            }
          >
            Pranati - Wellness <img src={NavIcon} alt="previous project"></img>
          </NavLink>
        </div>
        <div className="prev-nav">
          <div>Read the next case study</div>
          <NavLink
            to="/BrightSmiles"
            className="right-nav"
            onClick={() =>
              window.scrollTo({
                top: 0,
              })
            }
          >
            Bright Smiles <img src={NavIcon} alt="next project"></img>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
