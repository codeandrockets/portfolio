import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <ul role="nav">
          <li><Link to="/portfolio" activeClassName="active">Portfolio</Link></li>
          <li><Link to="/about" activeClassName="active">About</Link></li>
          <li><Link to="/contact" activeClassName="active">Contact</Link></li>
        </ul>

        {this.props.children}

      </div>
    );
  }
}

export default App;
