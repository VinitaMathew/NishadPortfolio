import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./PersonaCarousel.scss";

const image1 = require("../../../../../../assets/persona-image1.png");
const image2 = require("../../../../../../assets/persona-image2.png");

const PersonaCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1.26,
      partialVisibilityGutter: 100, // Adjust this value to control the amount of next and previous images shown
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      partialVisibilityGutter: 80,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 60,
    },
  };

  const images = [image1, image2];

  return (
    <Carousel responsive={responsive} containerClass="carousel-container">
      {images.map((image, index) => (
        <div key={index} className="slide-item">
          <img src={image} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default PersonaCarousel;
