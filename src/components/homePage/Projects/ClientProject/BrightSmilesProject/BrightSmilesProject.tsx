import React from "react";
import PersonaCarousel from "./PersonaCarousel/PersonaCarousel";
import "./BrightSmilesProject.scss";

const IntroImg = require("../../../../../assets/client-project3.png");
const BSImage1 = require("../../../../../assets/bs-image1.png");
const BSImage2 = require("../../../../../assets/bs-image2.png");
const BSImage3 = require("../../../../../assets/bs-image3.png");
const BSImage4 = require("../../../../../assets/bs-image4.png");
const BSImage5 = require("../../../../../assets/bs-image5.png");
const BSImage6 = require("../../../../../assets/bs-image6.png");
const BSImage7 = require("../../../../../assets/bs-image7.png");
const BSImage8 = require("../../../../../assets/bs-image8.png");
const BSImage9 = require("../../../../../assets/bs-image9.png");

export default function BrightSmilesProject() {
    return (
      <div className="bright-smiles-container">
        <img src={IntroImg} alt="" />
        <br/>
        <br/>
        <br/>
        <div className="objective">
          <b>Bright Similes Orthodontics is a Bangalore based Dental Clinic.</b>{" "}
          The primary objective is to design a clean and modern website that
          would provide them a prominent digital presence. A website that
          represents their emotion as a brand, their warmth and care that they
          provide to their patients, and also shows their experience and
          professionalism in the dental field.
        </div>
        <div className="analysis">
          <h2>Primary analysis - Dentistry in India </h2>
          <div>
            Oral health issues are significant in India since{" "}
            <b>
              the country has one of the highest rates of oral cancers in the
              world
            </b>
            . Dental diseases in India are a result of many factors, including
            poor oral hygiene, tobacco use and a sugary diet.
          </div>
          <div className="analysis-group">
            <div className="item">
              <div className="percentage">85-90%</div>
              <div className="desc">of Indian adults have dental cavities</div>
            </div>
            <div className="item">
              <div className="percentage">60-80%</div>
              <div className="desc">of the crowd being children.</div>
            </div>
            <div className="item">
              <div className="percentage">30%</div>
              <div className="desc">
                of children have misaligned jaws and teeth.
              </div>
            </div>
          </div>
          <div className="source">*Source - internet</div>
          <div>
            A series of user surveys and interviews were conducted and we did
            gain the following insights that would enable us to take a more
            informed decision while designing the clinic website.{" "}
          </div>
          <ul>
            <li>
              Majority of the users visited the dentist for general checkup and
              clean up
            </li>
            <li>
              Most of the participants visited the dentist only once in a year
            </li>
            <li>
              Referral from a friend turned out to be one of the popular reason
              to choose a dentist
            </li>
            <li>
              People prefer to visit the dentist either on a weekday evening or
              a weekend morning
            </li>
            <li>
              People didn’t mind travelling more than 5kms for a good dental
              visit
            </li>
            <li>
              Users preferred to make appointments via phone calls over other
              methods
            </li>
          </ul>
        </div>
        <div className="user-persona">
          <h2>User persona for a better understanding</h2>
          <PersonaCarousel />
        </div>
        <h2>Getting to work - The thought process</h2>
        <div>
          <div>
            Before actually getting into designing the layouts and prioritizing
            the sections and functionalities, it was important to go through
            dental websites that are already out there. After spending some time
            analyzing the websites the following points were noticed -
          </div>
          <ul>
            <li>
              Most of the websites followed a template approach - lacked
              uniqueness in them
            </li>
            <li>
              These websites didn’t speak about their emotions and didn’t
              maintain a tone
            </li>
            <li>
              These websites lacked a modern outlook and few of them failed
              accessibility
            </li>
          </ul>
          <div>
            Thus, it was important for our dental website to speak out with a
            warm tone and maintain a young and dynamic approach with it’s
            patients/visitors
            <br />
            One important point to be noted here was the client wanted the
            website up and running as soon as possible. Thus, we decided to roll
            out this project into 3 phases.
            <br />
            The first phase would have a responsive website that would let the
            client have an internet presence, it would describe who they are and
            what they can do. This would also have a functionality of just
            booking a slot for a check-up.
            <br />
            The next phase would allow the user to make payments via the website
            and also download receipts and doctor’s prescription.
          </div>
        </div>
        <br />
        <h2>Quick ideation - Works perfectly on a paper :)</h2>
        <img src={BSImage1} alt="" />
        <div>
          <br></br>
          <div>
            Based on the layouts created on the paper, few points were noticed -
          </div>
          <ul>
            <li>
              It is important to provide some free service in order to acquire
              customers. We spoke to the client and they agreed to{" "}
              <b>provide a first time customer</b> to have a free dental
              check-up.
            </li>
            <li>
              Insights from the user interviews and survey suggested that
              <b>
                customers preferred to call the clinic directly and confirm the
                booking.
              </b>{" "}
              Hence, it was important to display the clinic contact number at a
              visible location on the layout.
            </li>
            <li>
              The research also showed that{" "}
              <b>
                customers preferred to know the cost of services before hand.
              </b>{" "}
              Hence it was important to show costs and time required to complete
              certain procedures or dental services.
            </li>
            <li>
              There were constrains with available content. By following a card
              layout, it was found that{" "}
              <b>
                users tend to click on the tiles to know more details regarding
                the service.
              </b>{" "}
              Hence, it was decided to have a layout for the services section
              that did not mislead the user into clicking to know more
              information.
            </li>
            <li>
              It was also very important to <b>provide social proof</b> - hence,
              a section for testimonials was added. Also, on the landing page, a
              small section was added to show the number of satisfied customers.
              This would trigger a <b>sense of trust</b> among the website
              users.
            </li>
          </ul>
        </div>
        <h2>Working on the UI</h2>
        <br />
        <img src={BSImage2} alt="" />
        <div>
          <br />
          <br />
          <br />
          <br />
          Poppins is the font used throughout this project. The primary reason
          for using Poppins is to convey a friendly yet professional feel to the
          end user. It shows the young and dynamic nature of Bright Smiles while
          also catering to accessibility factors like readability.
          <br />
        </div>
        <img src={BSImage3} alt="" />
        <br />
        <br />
        <br />
        <br />
        <h2>The hero section</h2>
        <br />
        <br />
        <img src={BSImage4} alt="" />
        <br />
        <br />
        <br />
        <div>
          <div>
            The tagline used for Bright Smiles Orthodontics is “We care for your
            smile”. Hence, it had to also reflect in the images used in the hero
            section. Images were carefully chosen that reflects the tagline. The
            images were tweaked on Photoshop, using the brush tool, a simple
            pattern was created and the images were placed accordingly.
          </div>
          <br />
          <div>The following points are the highlights -</div>
          <ul>
            <li>Happy imagery to portray brand - “Bright Smiles”</li>
            <li>Option to schedule appointment via website</li>
            <li>
              Option to call and schedule appointment ( Based on user research)
            </li>
            <li>Showing social proof of 900+ happy customers</li>
          </ul>
        </div>
        <h2>Services section</h2>
        <br />
        <img src={BSImage5} alt="" />
        <br />
        <br />
        <br />
        <div>
          <div>
            This would probably be consider one of the most important sections
            of the website. From the research that was conducted, the users had
            mentioned about the importance of transparency. This was achieved by
            showing to the users the services offered along with the average
            cost of each treatment. Average operation time is also mentioned in
            order to provide clarity about the amount of time each of the
            treatment would take.
          </div>
          <br />
          <div>The following are the highlights of this section -</div>
          <ul>
            <li>Clear description of each specialty</li>
            <li>Accurate usage of icons for better understanding</li>
            <li>Providing transparency with rates and time period</li>
            <li>Establishing confidence with showing successful operations</li>
          </ul>
        </div>
        <h2>Testimonials</h2>
        <br />
        <img src={BSImage6} alt="" />
        <br />
        <br />
        <div>
          Testimonials are an essential component of any dental clinic website
          as they provide valuable feedback from patients who have experienced
          the clinic's services. Positive testimonials from satisfied patients
          can help build trust and credibility for the clinic, giving potential
          patients confidence in choosing their services. Additionally,
          testimonials can offer insights into the patient experience, including
          the quality of care, the professionalism of the staff, and the overall
          atmosphere of the clinic. By highlighting positive feedback from past
          patients, the testimonials section can help attract new patients and
          establish a positive reputation for the clinic.
        </div>
        <br />
        <br />
        <h2>Meet the team</h2>
        <br />
        <img src={BSImage7} alt="" />
        <br />
        <br />
        <div>
          This section is crucial to building trust and humanising the practice.
          It highlights expertise and provides a personalised experience for
          patients. Patients can get to know the faces behind the practice,
          creating a sense of familiarity and confidence in their choice of
          dental provider
        </div>
        <br />
        <br />
        <h2>Contact us section</h2>
        <br />
        <img src={BSImage8} alt="" />
        <br />
        <br />
        <div>
          The last section of the website deals with the location of the dental
          clinic. This would open the location to the clinic and the customer
          can simply find directions to the place. Also, as an additional
          customer conversion element, we’ve added a button to schedule
          appointment or simply call them to book an appointment.
        </div>
        <br />
        <br />
        <h2>Conclusion</h2>
        <br />
        <img src={BSImage9} alt="" />
        <br />
        <br />
        <div>
          Bright Smiles Orthodontics was a fun project to work on. This design
          of this project was completed within 2 weeks of commencement. This
          included the user research and interviews as well. The next phase of
          the project is yet to kick-off. Hoping it would start soon and the
          updates would be added to this case study.<br/><br/> Reach out to me for any
          queries regarding this project or have a similar idea to execute.
          Would love to be a part of something fun :)
        </div>
      </div>
    );
}