import React from 'react' // THIS LINE IS REQUIRED
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Do npm install react-router-dom@5
import './App.css';
import Navbar from '../navbar/Navbar';
import Home from '../home/Home';
import Tag from '../tag/Tag';
import Explore from '../explore/Explore';
import Contact from '../contact/Contact';
import Info from '../Info/Info'
import Test from '../Info/Test'

function App() {

  return(
    <Router>
      <div className = "App">
        <Navbar />
        <div className = "links">
          <Switch>
            <Route exact path = "/">
              <Home />
            </Route>

            <Route exact path = "/tag">
              <Tag />
            </Route>

            <Route exact path = "/explore">
              <Explore />
            </Route>

            <Route exact path = "/contact">
              <Contact />
            </Route>

            <Route exact path = "/info">
              <Info />
            </Route>

            <Route exact path = "/testing">
              <Test />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;

