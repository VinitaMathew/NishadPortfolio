import React from "react";
import testimonialData from "./TestimonialsData";
import "./Testimonials.scss";

const ColonImg = require("../../../assets/colon.png");

export default function Testimonials() {
  return (
    <div className="testimonials-container">
      <h2>Testimonials</h2>
      <div className="testimonials">
        <div className="testimonials-list-wrapper">
          {testimonialData[0].map((item) => {
            return (
              <div className="testimonial">
                <div className="content-wrapper">{item.comment}</div>
                <div className="footer">
                  <div className="footer-profile">
                    <img className="profile-pic" src={item.profilePic} alt="" />
                    <div className="signature">
                      <div className="name">{item.name}</div>
                      <div className="designation">{item.designation}</div>
                    </div>
                  </div>
                  <img className="colon" src={ColonImg} alt="" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="testimonials-list-wrapper">
          {testimonialData[1].map((item) => {
            return (
              <div className="testimonial">
                <div className="content-wrapper">{item.comment}</div>
                <div className="footer">
                  <div className="footer-profile">
                    <img className="profile-pic" src={item.profilePic} alt="" />
                    <div className="signature">
                      <div className="name">{item.name}</div>
                      <div className="designation">{item.designation}</div>
                    </div>
                  </div>
                  <img className="colon" src={ColonImg} alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
