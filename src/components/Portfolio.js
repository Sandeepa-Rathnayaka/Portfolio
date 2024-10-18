import React from "react";
import portfolio_5 from "../img/portfolio/portfolio_5.png";
import portfolio_1 from "../img/portfolio/portfolio-1.jpg";
import portfolio_3 from "../img/portfolio/portfolio-3.jpg";
import portfolio_4 from "../img/portfolio/portfolio-4.jpg";

function Portfolio() {
  return (
    <div>
      <div id="portfolio" class="portfolio">
        <div class="container">
          <div class="section-title">
            <h2>Portfolio</h2>
            <p>Group Projects</p>
          </div>

          <div class="row">
            <div class="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter="*" class="filter-active">
                  All
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="containerNew">
          <div class="card">
            <div class="card-image">
              <img src={portfolio_5} />
            </div>
            <div class="card-text">
              <p class="card-meal-type">
                Hospital Management System
              </p>

              <p class="card-body">
                We implemented fully functional Hospital Management System for
                MEDIXO - E Health. From centralized platform both patients,
                doctors and administrators can perform more than 8 functions. It
                includes Patient management component, Doctor management
                component, Lab report management component, Online channeling,
                Pharmacy management component, Room management component,
                Inventory management component, Payment management component
              </p>
              <p style={{fontSize: "12px", color:"#d499f2"}}>
              <b>Category: Web Application <br></br>
              Technologies: React.js, Node.js, Express.js, MongoDB(MERN Stack) <br></br>
              Project date: Mar 2023 - May 2023</b>
            </p>
            </div>
            <div class="card-price">
                <a href="https://github.com/IT21191442/Health-Care-Management-System.git">
              <button className="btn btn-warning">
                <b>Code</b>
              </button></a>
            </div>
          </div>
          <div class="card">
            <div class="card-image">
              <img src={portfolio_3} />{" "}
            </div>
            <div class="card-text">
              <p class="card-meal-type">
                Online Game Searching and Playing System
              </p>
              <p class="card-body">
                Implemented a user-friendly system that administrators can use
                to add, delete, view, and update games, provide solutions for
                problems that users face while using the system, and collect
                feedback and complaints.
              </p>
              <p style={{fontSize: "13px", color:"#d499f2"}}>
              <b>Category: Web Application <br></br>
              Technologies: HTML, CSS, Java, JavaScript, MySQL <br></br>
              Project date: Aug 2022 - Oct 2022</b>
            </p>
            </div>
            <div class="card-price">
                <a href="https://github.com/IT21191442/Online-Game-Searching-Site.git">
              <button className="btn btn-warning">
                <b>Code</b>
              </button></a>
            </div>
          </div>
        </div>
      </div>

      <div class="containerNew">
        <div class="card">
          <div class="card-image">
            <img src={portfolio_1} />
          </div>
          <div class="card-text">
            <p class="card-meal-type">
              Online Examination System
            </p>

            <p class="card-body input-sm">
              Examination System is a website provided for an organization which
              the employees get the opportunity to take their examinations
              online in a smooth and effective manner. The main objective of
              this online examination system is to provide a user-friendly
              environment for both employees and the staff to interact with,
              which does not require any formal knowledge about technology to
              use this system.
            </p>
            <p style={{fontSize: "13px", color:"#d499f2"}}>
              <b>Category: Web Application <br></br>
              Technologies: HTML, CSS, PHP, JavaScript <br></br>
              Project date: Mar 2022 - May 2022</b>
            </p>
            
          </div>
          <div class="card-price">
            <a href="https://github.com/IT21191442/Online-Examination-System.git">
            <button className="btn btn-warning">
              <b>Code</b>
            </button></a>
          </div>
        </div>
        <div class="card">
          <div class="card-image">
            <img src={portfolio_4} />
          </div>
          <div class="card-text">
            <p class="card-meal-type">
              Finance Management Application
            </p>
            <p class="card-body" >
              The Comprehensive Project is a financial management and employment
              search app designed to help users improve their financial
              situation and reach their professional goals. It has tools for
              budgeting, investment management, and access to resources for
              financial education. It also has a job search function to help
              users discover employment opportunities.
            </p>
            <p style={{fontSize: "13px", color:"#d499f2"}}>
            <b>Category: Mobile Application <br></br>
              Technologies: Kotlin, SQLite <br></br>
              Project date: Mar 2023 - May 2023</b>
            </p>
          </div>
          <div class="card-price">
            <a href="https://github.com/IT21191442/Finance-Management-System.git">
            <button className="btn btn-warning">
              <b>Code</b>
            </button></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
