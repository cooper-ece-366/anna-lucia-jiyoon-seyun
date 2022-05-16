import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './Pages/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Tag from './Pages/Tag/Tag';
import Explore from './Pages/Explore/Explore';
import ExploreIndiv from './Pages/Explore/ExploreIndiv'
import Contact from './Pages/Contact/Contact';
import Learn_more from './Pages/learn_more/Learn_more';

//Routing Completed by: Jiyoon Pyo
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

            <Route exact path = "/explore/:_id">
              <ExploreIndiv />
            </Route>

            <Route exact path = "/tag/:_id">
              <Tag />
            </Route>

            <Route exact path = "/contact">
              <Contact />
            </Route>
            <Route exact path = "/learn_more">
              <Learn_more />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

