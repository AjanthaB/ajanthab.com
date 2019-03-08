import React, { Component } from 'react';
import './App.css';
import '../node_modules/bilstrap/css/bilstrap.min.css'
import Header from './Components/Header';
import About from './Components/About';
import Works from './Components/Works';
import Certification from './Components/Certifications';
import Experinace from './Components/Experiance';
import Education from './Components/Education';
import Portfolio from './Components/Portforlio';
import Contact from './Components/Contacts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Works />
        <Certification />
        <Experinace />
        <Education />
        <Portfolio />
        <Contact />
      </div>
    );
  }
}

export default App;
