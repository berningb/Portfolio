import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'

import './App.css';
import './Styles/Commons.css'


function App() {

  return (
    <Router>
          <Switch>
              <Route path="/" exact component={About} />
              <Route path="/contact" exact component={Contact} />
          </Switch>
    </Router>
  );
}


export default App;
