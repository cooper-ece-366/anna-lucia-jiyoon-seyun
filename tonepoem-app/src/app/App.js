import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Do npm install react-router-dom@5

import Navbar from '../navbar/Navbar';
import Home from '../home/Home';

import Tag from '../tag/Tag';
//import RecordList from '../tag/RecordList';
import Explore from '../explore/Explore';
import Contact from '../contact/Contact';
import SoundList from '../sounds/SoundList';
import SoundInfo from '../sounds/SoundInfo';
//import SoundEdit from '../sounds/SoundEdit';
//import SoundAdd from '../sounds/SoundAdd';

<<<<<<< HEAD
//Function coded by: Jiyoon Pyo
=======
//Routing Completed by: Jiyoon Pyo
>>>>>>> 4965377a91fe991d74fcd1b8d0badf48007bdaa5
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

            <Route exact path = "/sounds/:_id">
              <SoundInfo />
            </Route>

            {/* <Route exact path = "/sounds/:_id/edit">
              <SoundEdit />
            </Route>+

            <Route exact path = "/sounds/new">
              <SoundAdd />
            </Route> */}

            <Route exact path = "/explore">
              <Explore />
            </Route>

            <Route exact path = "/tag/:_id">
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

