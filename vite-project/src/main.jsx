import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from './App';
import About from "./pages/About";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Resume from "./pages/resume";
import Error from "./pages/Error";

import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path='/About' component={About} />
        <Route path='/home' component={Home} />
        <Route path='/projects' component={Projects} />
        <Route path='/resume' component={Resume} />
        <Route component={Error} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);