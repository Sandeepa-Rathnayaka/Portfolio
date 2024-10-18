import React from "react";

function Header() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "30px" }}>
      <h2><a href="/" style={{color:"white"}}><b>Sandeepa Rathnayake</b></a></h2>
      <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link" href="/">Home</a></li>
          <li><a className="nav-link" href="/about">About</a></li>
          <li><a className="nav-link" href="/portfolio">Portfolio</a></li>
          <li><a className="nav-link" href="/contact">Contact</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
      
    </div>
  );
}

export default Header;
