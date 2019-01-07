import React, { Component } from 'react';
export default class Contact extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1><span>Get In Touch.</span></h1>
          </div>
          <div className="ten columns">
            <p className="lead">Please feel free to contact me below and I will respond as soon as possible.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="ten columns">
            {/* form */}
            <form method="POST" action="https://formspree.io/contact@peterhenryseger.com" id="contactForm" name="contactForm">
                <div>
                  <label htmlFor="contactName">Name <span className="required">*</span></label>
                  <input type="text" size={35} id="contactName" name="contactName" />
                </div>
                <div>
                  <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                  <input type="email" size={35} id="contactEmail" name="contactEmail" />
                </div>
                <div>
                  <label htmlFor="contactSubject">Subject</label>
                  <input type="text" size={35} id="contactSubject" name="contactSubject" />
                </div>
                <div>
                  <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                  <textarea cols={50} rows={15} id="contactMessage" name="contactMessage" defaultValue={""} />
                </div>
                <div className="submit" size={35}>
                    <input type="submit" value="Send" className="submit"/>
                </div>
                {/* <button type="submit" value="Send" className="submit">Submit</button> */}
            </form> {/* Form End */}
            {/* contact-warning */}
            <div id="message-warning"> Error boy</div>
            {/* contact-success */}
            <div id="message-success">
              <i className="fa fa-check" />Your message was sent, thank you!<br />
            </div>
          </div>
        </div>
      </section>
      </React.Fragment>
    );
  }
}