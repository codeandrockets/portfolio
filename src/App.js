import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Code and Rockets</h1>
        <h2>Front-End Web Development by Steven Jasionowicz</h2>
        <ul role="nav">
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    );
  }
}

export default App;
