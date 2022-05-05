import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Do npm install react-router-dom@5
import './App.css';

import Navbar from '../navbar/Navbar';
import Home from '../home/Home';

import Tag from '../tag/Tag';
import Explore from '../explore/Explore';
import Contact from '../contact/Contact';

const App = () => {
  return(
    <div className="App bg-[#020917] text-white overflow-hidden">
      <Router>
        <div className = "routing">
          <Navbar />

          <Switch>
            <Route exact path = "/">
              <Home />
            </Route>

            <Route exact path = "/explore">
              <Explore />
            </Route>

            <Route exact path = "/tag">
              <Tag />
            </Route>

            <Route exact path = "/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

