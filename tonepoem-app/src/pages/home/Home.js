import React, { Component } from 'react';
import '../../index.js';
import './Home.css';
//import {THE_APP_NAME} from "../constants";

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <div className="container">
                    {/* <div className="graf-bg-container">
                        <div className="graf-layout">
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                        </div>
                    </div> */}
                    <h1 className="home-title">Demo</h1>
                </div>
            </div>
        )
    }
}

export default Home;