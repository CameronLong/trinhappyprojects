import React from "react";
import '../index.css';
import footerImage from '../IMG_5914.jpeg';

function Footer() {
  return (
    <>
      <div className="inquireSection">
        <img className="footer-image" src={footerImage}></img>
        <h1 className="footerImageText">LET'S HAVE SOME FUN</h1>
      </div>
      <div className="footer">
        <p>footer text</p>
      </div>
    </>
  );
}

export default Footer;
