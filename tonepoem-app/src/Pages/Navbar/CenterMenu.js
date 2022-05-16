import React from 'react'

//Coded by: Jiyoon Pyo
function CenterMenu() {
    return (
        <div className = "menu flex">
            <ul className="flex w-[100%] justify-between">
                <a className="mr-[3rem] hover:cursor-pointer text-white" href="/explore">Explore</a>
                <a className="mr-[3rem] hover:cursor-pointer text-white" href="/contact">Contact Us</a>
                <a className="mr-[3rem] hover:cursor-pointer text-white" href="/learn_more">Learn More</a>
            </ul>
        </div>
    )
}

export default CenterMenu