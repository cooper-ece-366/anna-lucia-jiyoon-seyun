import React from 'react' // THIS LINE IS REQUIRED
import ReactDOM from 'react-dom'
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className = "Navbar">
            <h1>Tone-Poem</h1>
            <div className = "Linkbar">
                <a href = "/" className = "Links"></a>
                <a href = "/tag" className = "Links">Tag</a>
                <a href = "/explore" className = "Links">Explore</a>
                <a href = "/data" className = "Links">Data/API</a>
                <a href = "/contact" className = "Links">Contact Us</a>
            </div>
        </nav>
    );
}

export default Navbar;