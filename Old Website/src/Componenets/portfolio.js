import React, { Component } from 'react';
export default class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Projects.</h1>
            {/* portfolio-wrapper */}
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-01" title>
                    <img alt src="images/portfolio/carCrop.jpeg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Olin Electric Motorsports</h5>
                        <p>Leadership Team</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-02" title>
                    <img alt src="images/portfolio/tae.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>TAE Furniture</h5>
                        <p>Startup Co-Founder and CEO</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-03" title>
                    <img alt src="images/portfolio/paris.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Peter Seger Photography</h5>
                        <p>Photography</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-04" title>
                    <img alt src="images/portfolio/strolle.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Strolle</h5>
                        <p>Web Development Project</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-05" title>
                    <img alt src="images/portfolio/eve.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>EVE - Virtual Nurse Assistant</h5>
                        <p>User Oriented Collaborative Design</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-06" title>
                    <img alt src="images/portfolio/fitspot.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Fitspot</h5>
                        <p>Frequency Analysis App</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-07" title>
                    <img alt src="images/portfolio/discrete.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Schedlr</h5>
                        <p>Graph Theory Application</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-08" title>
                    <img alt src="images/portfolio/pcDash.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Barbot</h5>
                        <p>Party Organization Webapp</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
            </div> {/* portfolio-wrapper end */}
          </div> {/* twelve columns end */}
          {/* Modal Popup
	      --------------------------------------------------------------- */}
          <div id="modal-01" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/car.jpg" alt />
            <div className="description-box">
              <h4>Olin Electric Motorsports</h4>
              <p>
                  One of my largest focuses outside of classes is my work on Olin’s Formula SAE Electric build team. Each year, we design, 
                  build, and race a Formula One style race car from scratch. I have been on the team since starting at Olin. Originally 
                  on the Electrical subteam, I worked on designing and fabricating the dashboard PCB from scratch and writing all the 
                  firmware required for it to initialize the start-up sequence, report speed, and handle multiple safety features. 
                  The next year, I became the firmware lead where I handled all the firmware requirements on 20 custom PCBs and distributed 
                  the workload to ~15 engineers. My role required me to teach the skills to students, maintain a high level of organization, 
                  and meet strict deadlines. During my time as firmware lead, I also wrote a new AVR-C build chain using a Python script to 
                  generate and execute shell commands. This was done in hopes of simplifying our build process for so many boards as well as 
                  make our build chain more modular and easy to expand/modify.
            </p>
            <p>
                This year, I have joined the leadership team as the Marketing Manager. My role requires me to secure $65k in sponsorship for our team 
                from corporate sponsors, local sponsors, as well as run a family & friends fundraising campaign. Additional responsibilities 
                include taking photos and video for our social media sites, producing videos to highlight special projects and milestones, and 
                send quarterly update newsletters to all our sponsors. This year, our team struggled with member retention and member’s having 
                value on the team, so I help launch our first team climate survey which provided deep insights into members’ motivations, feelings, 
                and value on the team. Further, we are investigating our team’s unbalanced gender representation in hopes of creating a team for 
                all genders that equally prepares members to excel in the workforce. This is something that I am incredibly passionate about and 
                motivates me to better define our leadership roles and the place we hold on the team in terms of productivity, personal growth, 
                and team culture.
            </p>
              <span className="categories"><i className="fa fa-tag" />Leadership, Embedded Firmware, C</span>
            </div>
            <div className="link-box">
              {/* <a href="http://www.behance.net">Details</a> */}
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-01 End */}
          <div id="modal-02" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/tae.png" alt />
            <div className="description-box">
              <h4>TAE Furniture</h4>
              <p>
                In my second year of undergrad, I helped launch an online business focused on designing and building folding furniture for 
                people living in small spaces such as first time apartment dwellers and students. After developing our business plan and 
                experimenting with product-market fit within our school’s environment, we began a limited first run of our flagship folding chair. 
                As we endeavoured into turning this project into an actual business, I took the role of CEO and managed all the incorporation process, 
                website build-out, and lead our marketing strategies. Through this process, I learned a lot about the legality of starting a business 
                and all the intricacies involved with incorporating a limited liability corp in the state of Delaware. 
                Additionally, I learned an incredible amount about product-market fit and the actual feasability of bringing a new product to market
                including the roll that online advertising has in pushing products successfully to market.
                While the business 
                unfortunately did not take off as we had hoped and we were forced to close about a year later, it was an incredible learning 
                experience for all of us and has ignited an entrepreneurial fire within me truly teaching me the value of hustle and hard work.
              </p>
              <span className="categories"><i className="fa fa-tag" />CEO, Entrepreneurship</span>
            </div>
            <div className="link-box">
              {/* <a href="http://www.behance.net">Details</a> */}
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-02 End */}
          <div id="modal-03" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/paris.jpg" alt />
            <div className="description-box">
              <h4>Peter Seger Photography</h4>
                <p>
                    During my limited free time, one of my passions is photography which I have been lucky enough to earn some money from. 
                    In high school, I was able to take senior portraits as well as explore travel and landscape photography. Additionally, 
                    I explored the fascinating genre of sports photography where I was able to study under the mentorship of a professional 
                    sports photographer in Sweden. During this mentorship, I was able to photograph professional soccer, football, and ice 
                    hockey. I now focus on portraiture, landscape, and travel photography.
                </p>
              <span className="categories"><i className="fa fa-tag" />Photography, Entrepreneurship</span>
            </div>
            <div className="link-box">
              {/* <a href="http://www.behance.net">Details</a> */}
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-03 End */}
          <div id="modal-04" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/strolle.png" alt />
            <div className="description-box">
              <h4>Strolle</h4>
              <p>
                As part of a full stack engineering class, I worked as the project manager and engineer for a team project where we built 
                a webapp to design and share walks, hikes, and runs in new cities. My role included defining all the requirements of our 
                app and then translating that into API endpoints on the backend in NodeJS which interacted with our MySQL persistence layer. 
                I also built the front end in React. Through the class, we also learned about continuous integration/deployment using Jenkins, 
                Docker containers, and deploying to Google Cloud Platform. This project really got me interested in Full Stack engineering 
                and has helped me end up where I am today.
              </p>
              <span className="categories"><i className="fa fa-tag" />Web development, Full-Stack, NodeJS, React, Docker, Google Cloud Platform</span>
            </div>
            <div className="link-box">
              {/* <a href="http://www.behance.net">Details</a> */}
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-04 End */}
          <div id="modal-05" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/eve.png" alt />
            <div className="description-box">
              <h4>EVE - Virtual Nurse Assistant</h4>
              <p>
                During my User Oriented Collaborative Design course, I worked with three other students to co-design with community nurses and 
                attempted to come up with a proof-of-concept solution to one of their problems. During this class, we went out and interviewed 
                community nurses in a broad range of situations from ICU nurses, nurse practitioners in the university setting, research nurses, 
                and many more. Through our series of interviews, we more narrowly defined community nurses to be ICU nurses which we then worked 
                closely to co-design a solution to a problem we identified. That problem being that nurses felt they were being pulled in two 
                directions: helping patients bedside, and working closely with patients’ families to communicate their patients’ status and 
                provide emotional support. Together with our nurses, we came up with EVE our virtual nurse assistant that would tie into their 
                existing patient tracking software, EPIC, and would provide an AI chatbot for family members to get updates as well as communicate 
                back and forth with the virtual nurse or the real nurse with provided seamless hand-off of communication. This class provided an 
                incredible opportunity for us to identify user groups, work closely with them to get to know them and their problems, and then 
                work together to generate a solution to their idea all while constantly documenting and presenting our findings through journey 
                maps, persona creations, mind maps, and many more industry standard ideation techniques.
              </p>
              <span className="categories"><i className="fa fa-tag" />Product Design, User Focused Design, Project Development</span>
            </div>
            <div className="link-box">
              {/* <a href="http://www.behance.net">Details</a> */}
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-05 End */}
          <div id="modal-06" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/fitspot.png" alt />
            <div className="description-box">
              <h4>Fitspot</h4>
              <p>
                As part of my Quantitative Engineering course, I worked with a partner to come up with a webapp that produced custom Spotify 
                playlists off of running accelerometer data. Using a smartphone to collect accelerometer data from a run, we built a system that 
                ingests the raw data, performs Fourier frequency analysis on it to identify the frequency of the running motion and convert that 
                to beats per minute (BPM). It then uses the Spotify API to search for song that match the average BPM of the run and adds them 
                to a playlist. This project taught me a lot about the power of frequency domain translation as well as provided practical experience 
                in interacting with external APIs.
              </p>
              <span className="categories"><i className="fa fa-tag" />API, Frequency Domain Analysis, Spotify</span>
            </div>
            <div className="link-box">
              {/* <a href="http://www.behance.net">Details</a> */}
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-06 End */}
          <div id="modal-07" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/discrete.png" alt />
            <div className="description-box">
              <h4>Schedlr</h4>
              <p>
                As part of my Discrete Mathematics course, I worked with two partners on a final project studying graph coloring theory in the 
                application of scheduling theory. We decided to study the math behind complex scheduling optimization problems since we thought 
                it would nicely culminate our semester of studying in combinatorics, graph theory, and other discrete topics. When looking 
                for an appropriate real-world problem, our professor provided us with a weekend-long faculty candidate conference she scheduled 
                the year prior. We were excited with this real-world application and built an app in Python that allows users to create a standard 
                conflict matrix in Excel/Sheets and then import it as a CSV where our system built this into appropriate data structures and 
                produced an optimized schedule with no conflicts. Additionally our program produced colored graphs for validation and 
                beautified HTML template schedules.
              </p>
              <span className="categories"><i className="fa fa-tag" />Graph Theory, Scheduling Theory, Python</span>
            </div>
            <div className="link-box">
              {/* <a href="http://www.behance.net">Details</a> */}
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-07 End */}
          <div id="modal-08" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/pcDash.png" alt />
            <div className="description-box">
              <h4>Barbot</h4>
              <p>
                During my first year Software Design class I was the project manager and system architect for a Python Flask webapp for automated parties. 
                Myself and a team of 3 other people built a full stack webapp with MySQL database, Bootstrap front end, and Flask app development. 
                Worked to layout the system and describe all functionality and worked with three other team members with varying levels of experience 
                to ensure everyone had impact.
              </p>
              <span className="categories"><i className="fa fa-tag" />Project Management, Architecture, Python, Flask</span>
            </div>
            <div className="link-box">
              {/* <a href="http://www.behance.net">Details</a> */}
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-08 End */}
        </div> {/* row End */}
      </section>
      </React.Fragment>
    );
  }
}