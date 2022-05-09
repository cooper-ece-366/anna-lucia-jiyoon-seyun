import React, { useState, useEffect } from 'react';

import Hero from './Hero';
import Purpose from './Purpose'

//Coded by: Jiyoon Pyo
const Home = () => {     
    return (
        <div className="Home">
            <Hero />
            <Purpose />
        </div>
    );
}

export default Home;