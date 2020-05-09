import React, { Component } from 'react';
export default class Experience extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <section id="resume">
        {/* Education
      ----------------------------------------------- */}
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Olin College of Engineering</h3>
                <p className="info">B.S. in Computer Science and Engineering <span>•</span> <em className="date">May 2020</em></p>
                <p>
                  Attend Olin on a 50% merit-based scholarship where I have taken courses including: Modeling & Simulation of the Physical World,
                  Quantitative Engineering, Foundations of CS, Programming Languages, Fullstack Engineering, Software Design, & User Oriented Collaborative Design.
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>V.U. University Amsterdam</h3>
                <p className="info">Study Away Semester <span>•</span> <em className="date">Spring 2019</em></p>
                <p>
                  Currently on study away at V.U. Amsterdam where I am studying computer science and entrepreneurship.
                  Courses include: Probability Theory, Machine Learning, & Entrepreneurship for AI and CS.
                </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div>

      <div className="row education">
          <div className="three columns header-col">
            <h1><span>Experience</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Uber</h3>
                <h4>San Francisco</h4>
                <p className="info">Full-Stack Engineering Intern <span>•</span> <em className="date">Summer 2018</em></p>
                <p>
                Worked on the Customer Obsessions Answer Discovery team working on predictive intent for ranking of help articles on help.uber.com. 
                Here I designed and implemented a new backend service in Go for ingesting Kafka messages and interacting with ML models. 
                Worked on frontend serivces in NodeJS to add logging of user interactions. Built multiple ETL pipelines for training ML models as well 
                as included logging and metrics for services using ELK and Grafana. My project was used as a proof of concept for a larger initiative 
                and this architecture is now being used for in-app help.
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>VOSS Technologies - Chalmers University</h3>
                <h4>Gothenburg, Sweden</h4>
                <p className="info">Software Engineer Intern <span>•</span> <em className="date">Summer 2017</em></p>
                <p>
                Worked with professor building a design system for autonomous vehicles. 
                My focus was to build a schematic visualization system in C. 
                Used an existing API in Functional Language (FL) to recreate functionality in C to increase speed, accuracy, and dependability of the tool. 
                Used advanced data structures and heuristics to create informative and accurate schematics from Register Transfer Language (RTL) descriptions.
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Olin College</h3>
                <h4>Boston, MA</h4>
                <p className="info">Teacher's Assistant <span>•</span> <em className="date">Fall 2018</em></p>
                <p>
                Worked as a TA for two classes: Software Design and Foundational Writing Skills. Responsibilities included grading students' work,
                preparing tutorials and toolboxes for learning, and holding regular office hours. Software Design course was taught in Python, so extensive
                knowledge and troubleshooting experience was required.
                </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div>

        <div className="row skill">
        <div className="three columns header-col">
          <h1><span>Skills</span></h1>
        </div>
        <div className="nine columns main-col">
          <p>My progamming experience spans backend and frontend with an emphasis on building highly efficient and effective backend services.
            Additionally, I have significant experience writing embedded firmware in C for both consumer grade and custom applications.
            I am most confident in Python where I have experience using it for machine learning, visualizations, scripting, web development, and more.
            I also have extensive experience teaching and tutoring students in Python.
          </p>
          <div className="bars">
            <ul className="skills">
              <li><span className="bar-expand css" /><em>Python</em></li>
              <li><span className="bar-expand html5" /><em>NodeJS & React</em></li>
              <li><span className="bar-expand html5" /><em>HTML5 & CSS</em></li>
              <li><span className="bar-expand photoshop" /><em>Go</em></li>
              <li><span className="bar-expand photoshop" /><em>C</em></li>
            </ul>
          </div>{/* end skill-bars */}
        </div> {/* main-col end */}
      </div>

      </section>
      </React.Fragment>
    );
  }
}