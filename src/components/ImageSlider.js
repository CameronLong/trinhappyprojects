import React, { useRef, useState } from "react";
import "../index.css";
import left_arrow from '../left-arrow.svg';
import right_arrow from '../right-arrow.svg';
import "react-slideshow-image/dist/styles.css";
import { Fade, Zoom, Slide } from "react-slideshow-image";

const slideImages = [
  {
    url: "https://images-pw.pixieset.com/elementfield/KdW4XDY/IMG_5200-67f6f49f-2500.jpeg",
    caption: "First Slide",
  },
  {
    url: "https://images-pw.pixieset.com/elementfield/erxYO5y/IMG_84761-97c9012b-2500.JPG",
    caption: "Second Slide",
  },
  {
    url: "https://images-pw.pixieset.com/elementfield/od6je5O/Tezza-10891-349f465b-2500.JPG",
    caption: "Third Slide",
  },
];

function ImageSlider() {
  const properties = {
    prevArrow: <img className={"arrows"} src={left_arrow}/>,
    nextArrow: <img className={"arrows"} src={right_arrow}/>
  }
  return (
    <>
      <div className="slide-container">
        <Slide {...properties}>
          {slideImages.map((image, index) => {
            let imageClass = "";
            if (image.caption == "First Slide") {
              imageClass = "firstImage";
            } else if (image.caption == "Second Slide") {
              imageClass = "secondImage";
            } else {
              imageClass = "thirdImage";
            }
            return (
              <div key={index}>
                <div className="divStyle">
                  <img class={imageClass} src={image.url}></img>
                  <p className="slider-text">CAPTURING HAPPY MOMENTS</p>
                </div>
              </div>
            );
          })}
        </Slide>
      </div>
    </>
  );
}

export default ImageSlider;
