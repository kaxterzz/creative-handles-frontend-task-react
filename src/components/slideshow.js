import React from "react";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "react-awesome-slider/src/styled/cube-animation";
import img1 from "../assets/slider-1.jpeg";
import img2 from "../assets/slider-2.jpg";

function SlideShow() {
  return (
    <div>
      <AwesomeSlider
        className="sliderStyles"
        animation="cubeAnimation"
        cssModule={AwesomeSliderStyles}
      >
        <div data-src={img1} />
        <div data-src={img2} />
      </AwesomeSlider>
    </div>
  );
}

export default SlideShow;
