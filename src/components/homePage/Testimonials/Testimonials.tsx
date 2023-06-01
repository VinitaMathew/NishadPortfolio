import React from "react";
import testimonialData from "./TestimonialsData";
import "./Testimonials.scss";
import { useInView } from "react-intersection-observer";

const ColonImg = require("../../../assets/colon.png");

export default function Testimonials() {
  const [ref, inView] = useInView({
    threshold: 0.01,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={
        inView
          ? "slide-up testimonials-container"
          : "hidden testimonials-container"
      }
    >
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
