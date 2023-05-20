import React from "react";
import PersonaCarousel from "./PersonaCarousel/PersonaCarousel";
import "./BrightSmilesProject.scss";

const IntroImg = require("../../../../../assets/client-project3.png");

export default function BrightSmilesProject() {
    return (
      <div className="bright-smiles-container">
        <img src={IntroImg} alt="" />
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
          <PersonaCarousel/>
        </div>
      </div>
    );
}