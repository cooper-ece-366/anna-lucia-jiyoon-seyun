//Coded by: Jiyoon Pyo

import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import Purpose from './Purpose'

// Home Page Design
const Home = () => {     
    return (
        <div className="Home">
            <Hero />
            <Purpose />
        </div>
    );
}

export default Home;