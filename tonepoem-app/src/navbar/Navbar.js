import React from 'react' // THIS LINE IS REQUIRED
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className = "Navbar">
            <a href = "/" className = "Header">Tone-Poem</a>
            <div className = "Linkbar">
                <a href = "/tag" className = "Links">Tag</a>
                <a href = "/explore" className = "Links">Explore</a>
                <a href = "/data" className = "Links">Data/API</a>
                <a href = "/contact" className = "Links">Contact Us</a>
            </div>
        </nav>
    );
}

export default Navbar;