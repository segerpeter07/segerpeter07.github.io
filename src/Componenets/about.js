import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profile.jpg" alt />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>I'm a Boston based <span>full-stack</span> developer who has worked on a myriad of projects ranging from 
            embedded systems, visualization systems, to machine learning. I have worked on small scale projects all the way to large, 
            distributed systems capable of handling thousands of queries per second. Experienced in <span>frontend</span> and <span>backend</span> services for projects at scale.
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  Peter Seger<br />
                  1000 Olin Way<br />
                    Needham, MA 02492 US
                  <br />
                  <a href="mailto:contact@peterhenryseger.com">contact@peterhenryseger.com</a>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
                </p>
              </div>
            </div> {/* end row */}
          </div> {/* end .main-col */}
        </div>
      </section>
      </React.Fragment>
    );
  }
}