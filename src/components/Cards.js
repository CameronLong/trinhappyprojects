import React from "react";

import right_arrow from "../dark-right-arrow.svg";

window.onload = function () {
  const elementsArray = document.querySelectorAll(".card");
  elementsArray.forEach((card) => {
    card.addEventListener("mouseover", () => {
      card.style.opacity = "75%";
      const cardHeader = card.querySelector(".card-header");
      cardHeader.style.opacity = "75%";
      const cardText = card.querySelector(".card-text");
      cardText.style.opacity = "75%";
      const cardArrow = card.querySelector(".card-arrow");
      cardArrow.style.opacity = "75%";
    });
    card.addEventListener("mouseleave", () => {
      card.style.opacity = "100%";
      const cardHeader = card.querySelector(".card-header");
      cardHeader.style.opacity = "100%";
      const cardText = card.querySelector(".card-text");
      cardText.style.opacity = "75%";
      const cardArrow = card.querySelector(".card-arrow");
      cardArrow.style.opacity = "0%";
    });
  });
};

function Cards() {
  return (
    <>
      <div className="card-container">
        <a className="card-link" href="/portfolio">
          <div className="card" id="card">
            <center>
              <img
                className="card-image"
                src="https://images-pw.pixieset.com/elementfield/lRkm4aj/IMG_7732-b73fd2d7-2500.JPG"
              ></img>
              <h2 className="card-header" id="card-header">
                Portfolio
              </h2>
              <p className="card-text" id="card-text">
                SEE MY WORK!
              </p>
              <img
                className="card-arrow"
                id="card-arrow"
                src={right_arrow}
              ></img>
            </center>
          </div>
        </a>
        <a className="card-link" href="/about">
          <div className="card" id="card">
            <center>
              <img
                className="second-card-image"
                src="https://images-pw.pixieset.com/elementfield/7ObvX1Y/IMG_2581-55106531-2500.JPG"
              ></img>
              <h2 className="card-header" id="card-header">
                About Me
              </h2>
              <p className="card-text" id="card-text">
                GET TO KNOW ME BETTER!
              </p>
              <img
                className="card-arrow"
                id="card-arrow"
                src={right_arrow}
              ></img>
            </center>
          </div>
        </a>
        <a className="card-link" href="/pricing">
          <div className="card" id="card">
            <center>
              <img
                className="card-image"
                src="https://images-pw.pixieset.com/elementfield/QXYRlw3/IMG_5006-0348d48b-2500.JPG"
              ></img>
              <h2 className="card-header" id="card-header">
                Investment
              </h2>
              <p className="card-text" id="card-text">
                PAKCAGES AND PRICING!
              </p>
              <img
                className="card-arrow"
                id="card-arrow"
                src={right_arrow}
              ></img>
            </center>
          </div>
        </a>
      </div>
    </>
  );
}

export default Cards;
