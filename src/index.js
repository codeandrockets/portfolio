import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './App';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';
import './index.css';

ReactDOM.render((
  <Router history={hashHistory}>
  	<Route path="/" component={App}/>
  	<Route path="/portfolio" component={Portfolio}/>
  	<Route path="/about" component={About}/>
  	<Route path="/contact" component={Contact}/>
  </Router>
  ), document.getElementById('root')
);

