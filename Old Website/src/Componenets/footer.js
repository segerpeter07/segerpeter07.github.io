import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
            <li><a href="https://www.facebook.com/peter.seger.54" target="_blank"><i className="fa fa-facebook" /></a></li>
              <li><a href="https://twitter.com/swenadianpup" target="_blank"><i className="fa fa-twitter" /></a></li>
              <li><a href="https://www.linkedin.com/in/peter-seger/" target="_blank"><i className="fa fa-linkedin" /></a></li>
              <li><a href="https://www.instagram.com/swenadian/" target="_blank"><i className="fa fa-instagram" /></a></li>
            </ul>
            <ul className="copyright">
              <li>Made with <a className="fa fa-heart"></a> in <a title="Styleshout" href="https://reactjs.org/" target="_blank">React</a></li>
              <li>Design by <a title="Styleshout" href="https://www.styleshout.com/" target="_blank">Styleshout</a></li>   
            </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
      </footer>
      </React.Fragment>
    );
  }
}