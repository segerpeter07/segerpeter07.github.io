import React, { Component } from 'react';

import Header from './Componenets/header';
import Experience from './Componenets/experience';
import About from './Componenets/about';
import Contact from './Componenets/contact';
import Footer from './Componenets/footer';
import Portfolio from './Componenets/portfolio';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
