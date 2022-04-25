import React from 'react' // THIS LINE IS REQUIRED
import ReactDOM from 'react-dom'
import './Explore.css';

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function Explore(){
    var value = getRandomInt(3000);
    return (
        <div className="explore">
            <h1>Explore Page</h1>
            <span>{value}</span>
        </div>
    );
}

export default Explore;