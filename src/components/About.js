import React from "react";
import { Helmet } from "react-helmet";
//import { RiHtml5Line, RiCss3Line, RiReactLine, RiPythonLine, RiJavaLine, RiJavascriptLine, RiKotlinLine, RiBootstrapFill, RiPhpLine, RiFigmaLine, RiPostmanLine, RiGithubLine } from 'react-icons/ri';
import html from "../img/icons/html.png";
import Bootstrap from "../img/icons/bootstrap.png";
import css from "../img/icons/css-3.png";
import java from "../img/icons/java.png";
import JS from "../img/icons/js.png";
import react from "../img/icons/atom.png";
import python from "../img/icons/python.png";
import figma from "../img/icons/figma.png";
import php from "../img/icons/php.png";
import github from "../img/icons/github.png";
import kotlin from "../img/icons/kotlin.png";
import postman from "../img/icons/postman.png";
import me from "../img/hero-bg.jpeg";
import UOM from "../img/UOM.jpg";
import sololearn from "../img/sololearn.png"

function About() {
  return (
    <>
      <div>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
            rel="stylesheet"
          />
        </Helmet>
        {/* About Section */}
        <br></br>
        <div className="section-main">
        <div id="about" className="about">
          <div className="about-me container">
            <div className="section-title">
              <h2>About</h2>
              <p>Learn more about me</p>
            </div>

            <div className="row">
              <div className="col-lg-4" data-aos="fade-right">
                <img
                  src={me}
                  className="img-fluid"
                  alt=""
                  style={{ opacity: "0.8" }}
                />
              </div>
              <div
                className="col-lg-8 pt-4 pt-lg-0 content"
                data-aos="fade-left"
              >
                <h3>Software Engineering Undergraduate &amp; Fullstack Developer</h3>
                <br></br>
                <p className="fst-italic">
                  <br></br>
                  Hey, I'm Sandeepa Rathnayaka. I’m an undergraduate student at
                  the SLIIT Faculty of Computing.
                </p>
                <div className="row">
                  <br></br>
                  <br></br>
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Birthday:</strong> <span>17 July 2000</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Phone:</strong> <span>+94 309 6330</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>City:</strong> <span>Kalutara, Sri Lanka</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Age:</strong> <span>23</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Degree:</strong>{" "}
                        <span>Undergraduate Software Engineering</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Email:</strong>{" "}
                        <span>sandeeparathnayaka20@gmail.com</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <p>
                  <br></br>
                  I'm an undergraduate with proficiency in software development
                  skills and good communication skills, seeking an opportunity
                  to build a prosperous professional career in Software
                  Development. I have a variety of skills, including event
                  management,operations management, project management, and tech
                  assistance for computers. I also have a solid experience in
                  software engineering and information technology, having earned
                  an undergraduate degree in this area from SLIIT.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          {/* Skills  */}
          <br></br>
          <div class="skills container">
            <div class="section-title">
              <h2>Skills</h2>
            </div>

            <div class="row skills-content">
              <div class="col-lg-6">
                <div class="progress">
                  <span class="skill">
                    HTML <i class="val">95%</i>
                  </span>
                  <div class="w3-grey w3-tiny w3-round">
                    <div
                      class="w3-container w3-green"
                      style={{ width: "95%", paddingTop: "1.5%" }}
                    ></div>
                  </div>
                </div>

                <div class="progress">
                  <span class="skill">
                    CSS <i class="val">90%</i>
                  </span>
                  <div class="w3-grey w3-tiny w3-round">
                    <div
                      class="w3-container w3-green"
                      style={{ width: "90%", paddingTop: "1.5%" }}
                    ></div>
                  </div>
                </div>

                <div class="progress">
                  <span class="skill">
                    JavaScript <i class="val">75%</i>
                  </span>
                  <div class="w3-grey w3-tiny w3-round">
                    <div
                      class="w3-container w3-green"
                      style={{ width: "75%", paddingTop: "1.5%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div class="col-lg-6">
                <div class="progress">
                  <span class="skill">
                    Java <i class="val">70%</i>
                  </span>
                  <div class="w3-grey w3-tiny w3-round">
                    <div
                      class="w3-container w3-green"
                      style={{ width: "70%", paddingTop: "1.5%" }}
                    ></div>
                  </div>
                </div>

                <div class="progress">
                  <span class="skill">
                    PHP <i class="val">80%</i>
                  </span>
                  <div class="w3-grey w3-tiny w3-round">
                    <div
                      class="w3-container w3-green"
                      style={{ width: "80%", paddingTop: "1.5%" }}
                    ></div>
                  </div>
                </div>

                <div class="progress">
                  <span class="skill">
                    React <i class="val">85%</i>
                  </span>
                  <div class="w3-grey w3-tiny w3-round">
                    <div
                      class="w3-container w3-green"
                      style={{ width: "95%", paddingTop: "1.5%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Skills */}
        </div>

        <div>
          {/* Interests */}
          <div className="interests container">
            <div className="section-title">
              <br />
              <h2>Technologies & Tools</h2>
            </div>

            <div className="row">
              <div class="col-lg-3 col-md-4">
                <div class="icon-box">
                  <img src={html} style={{ width: "25px", height: "auto" }} />{" "}
                  &nbsp; &nbsp;
                  <h3>HTML</h3>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
                <div class="icon-box">
                  <img src={css} style={{ width: "25px", height: "auto" }} />{" "}
                  &nbsp; &nbsp;
                  <h3>CSS</h3>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
                <div class="icon-box">
                  <img src={react} style={{ width: "25px", height: "auto" }} />{" "}
                  &nbsp; &nbsp;
                  <h3>React</h3>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 mt-4 mt-lg-0">
                <div class="icon-box">
                  <img src={python} style={{ width: "25px", height: "auto" }} />{" "}
                  &nbsp; &nbsp;
                  <h3>Python</h3>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 mt-4">
                <div class="icon-box">
                  <img src={java} style={{ width: "25px", height: "auto" }} />{" "}
                  &nbsp; &nbsp;
                  <h3>Java</h3>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 mt-4">
                <div class="icon-box">
                  <img src={JS} style={{ width: "25px", height: "auto" }} />{" "}
                  &nbsp; &nbsp;
                  <h3>JavaScript</h3>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 mt-4">
                <div class="icon-box">
                  <img src={kotlin} style={{ width: "25px", height: "auto" }} />{" "}
                  &nbsp; &nbsp;
                  <h3>Kotlin</h3>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 mt-4">
                <div class="icon-box">
                  <img
                    src={Bootstrap}
                    style={{ width: "25px", height: "auto" }}
                  />{" "}
                  &nbsp; &nbsp;
                  <h3>Bootstrap</h3>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 mt-4">
                <div class="icon-box">
                  <img src={php} style={{ width: "25px", height: "auto" }} />{" "}
                  &nbsp; &nbsp;
                  <h3>PHP</h3>
                </div>
              </div>
              
              <div class="col-lg-3 col-md-4 mt-4">
                <div class="icon-box">
                  <img src={figma} style={{ width: "25px", height: "auto" }} />{" "}
                  &nbsp; &nbsp;
                  <h3>Figma</h3>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 mt-4">
                <div class="icon-box">
                  <img
                    src={postman}
                    style={{ width: "25px", height: "auto" }}
                  />{" "}
                  &nbsp; &nbsp;
                  <h3>Postman</h3>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 mt-4">
                <div class="icon-box">
                  <img src={github} style={{ width: "25px", height: "auto" }} />{" "}
                  &nbsp; &nbsp;
                  <h3>Github</h3>
                </div>
              </div>
              
            </div>
          </div>
          {/* End Interests */}
        </div>
        <br></br>
        <br></br>
        {/*Contact Section*/}
        <div id="contact" class="contact">
          <div class="container">
            <div class="section-title">
              <h2>Certifications</h2>

              <div className="row">
                <br></br>
                <br></br>
                <div className="col-lg-6">
                  <ul>
                    
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>
                        <img
                          src={UOM}
                          alt="UOM"
                          style={{ width: "5%", height: "auto" }}
                        />
                      </strong>{" "}
                      <span>
                        University Of Moratuwa - CODL e-certificate for Python
                      </span>
                   
                    <br></br><br></br>
                    
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>
                        <img
                          src={UOM}
                          alt="UOM"
                          style={{ width: "5%", height: "auto" }}
                        />
                      </strong>{" "}
                      <span>
                        University Of Moratuwa - CODL e-certificate for Web Development
                      </span>
                      <br></br><br></br>
                    
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>
                        <img
                          src={sololearn}
                          alt="sololearn"
                          style={{ width: "5%", height: "auto" }}
                        />
                      </strong>{" "}
                      <span>
                        Sololearn - Programming with React + Redux
                      </span>
                      <br></br><br></br>
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default About;
