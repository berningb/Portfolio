import React from "react";
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";

import Portfolio from './Pages/Portfolio/Portfolio'
import About from './Pages/About/About'
import Header from './Components/Header'
import './App.css';
import './Styles/Commons.css'


function App() {
  return (
    <Router>
      <Header />
      <Switch>
          <Route path="/" exact component={Portfolio} />
          <Route path="/about"  component={About} />
          <Route path="/contact"  component={Portfolio} />
      </Switch>
    </Router>
  );
}


export default App;
