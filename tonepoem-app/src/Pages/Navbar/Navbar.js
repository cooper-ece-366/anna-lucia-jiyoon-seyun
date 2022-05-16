import React from 'react' // THIS LINE IS REQUIRED
import CenterMenu from './CenterMenu'
import Login from "./login/Login"

//Coded by: Jiyoon Pyo
const Navbar = () => {
    return (
        <nav className = "header bg-[#081730] flex items-center justify-between px-[5rem] py-[2.4rem] text-[1rem] text-white">
            <a href = "/" className="text-2xl hover:cursor-pointer"><b>TonePoem</b></a>

            <CenterMenu />

            <div className="buttons flex">
                <Login />
            </div>
        </nav>
    );
}

export default Navbar;