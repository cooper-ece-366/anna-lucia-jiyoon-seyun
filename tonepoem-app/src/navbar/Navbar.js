import React from 'react' // THIS LINE IS REQUIRED
import CenterMenu from './CenterMenu'
import Login from "./login/Login"

const Navbar = () => {
    return (
        <nav className = "header bg-[#081730] flex items-center justify-between px-[5rem] py-[2.4rem] text-[0.9rem] text-white">
            <a href = "/" className="text-2xl"><b>TonePoem</b></a>

            <CenterMenu />

            <div className="buttons flex">
                <Login />
                {/* <button className="bg-[#232A4E] border-[2px] rounded-[10px] border-[#232A4E] px-[25px] py-[7px]">
                    Sign Up
                </button> */}
            </div>
        </nav>
    );
}

export default Navbar;