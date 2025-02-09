import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="container grid grid-two--cols">
        <div className="hero-content">
          <h1 className="heading-xl">
            Explore the World, One Country at a Time.
          </h1>
          <p className="paragraph">
            This is a simple web application that allows you to search for
            countries and view their details. You can also filter countries by
            region.
          </p>
          <button className="btn btn-darken btn-inline bg-white-box">
            Start Exploring
            <FaLongArrowAltRight />
          </button>
        </div>
        <div className="hero-image">
          <img src="/images/image.png" alt="Hero" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
