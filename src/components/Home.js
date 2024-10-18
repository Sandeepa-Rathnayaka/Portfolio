import React from "react";
import { Link } from "react-router-dom";
import profile from "../img/meProfile.jpg";

function Home() {
  return (
    <div>
      <header id="header">
        <div class="container">
        <div className="row">
          <h1>
            <a href="/">Sandeepa Rathnayake</a>
          </h1>

          {/*<a href="index.html" class="mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"/></a>*/}
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left"><br></br>
              <h3>Fullstack Developer &amp; Software Engineering Undergraduate </h3><br></br>
              <div class="social-links" style={{ marginBottom: "0" }}>
            <a href="#" class="twitter">
              <i class="bi bi-twitter"></i>
            </a>
            <a
              href="https://web.facebook.com/sandeepa.rathnayaka.92"
              class="facebook"
            >
              <i class="bi bi-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/sandeepa.rathnayaka.20/"
              class="instagram"
            >
              <i class="bi bi-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/sandeepa-rathnayaka"
              class="linkedin"
            >
              <i class="bi bi-linkedin"></i>
            </a>
          </div>
          <br></br>
          <div>
            <a href="SandeepaRathnayaka.pdf" download="SandeepaRathnayaka.pdf">
              <button className="btn btn-warning">
                <b>Get Resume</b>
              </button>
            </a>
            &nbsp;&nbsp;
            <a href="/contact">
              <button className="btn btn-secondary">
                <b>Hire Me</b>
              </button>
            </a>
          </div>
        </div>
        <div className="col-lg-4" data-aos="fade-right">
              <img src={profile} className="rounded-circle" alt="Bird" width="300" height="300" style={{opacity:"0.8"}}/>
            </div>
              </div>
          {/*<nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link active" href="/">Home</a></li>
          <li><a class="nav-link" href="/about">About</a></li>
          <li><a class="nav-link" href="#Home">Portfolio</a></li>
          <li><a class="nav-link" href="/contact">Contact</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>*/}

          
        </div>
      </header>
    </div>
    
  );
}

export default Home;
