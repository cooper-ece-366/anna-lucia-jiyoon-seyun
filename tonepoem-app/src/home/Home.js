import React, { useState, useEffect } from 'react';

import Hero from './Hero';
import Purpose from './Purpose'

const Home = () => {     
    return (
        <div className="Home">
            <Hero />
            <Purpose />
        </div>
    );
}

export default Home;