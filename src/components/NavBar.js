import React from "react";

function NavBar() {
  return (
    <>
      <div className="navbar">
        <p className="header">T R I N H A P P Y P R O J E C T S</p>
        <ul className="navbar-links">
          <li className="navbar-link-item">
            <a className="link" href="/">HOME</a>
          </li>
          <li className="navbar-link-item">
            <a className="link" href="/about">ABOUT</a>
          </li>
          <li className="navbar-link-item">
            <a className="link" href="/pricing">PRICING</a>
          </li>
          <li className="navbar-link-item">
            <a className="link" href="/portfolio">PORTFOLIO</a>
          </li>
          <li className="navbar-link-item">
            <a className="link" href="/contact">CONTACT</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
