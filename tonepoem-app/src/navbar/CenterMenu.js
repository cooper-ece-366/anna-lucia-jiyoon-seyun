import React from 'react' // THIS LINE IS REQUIRED

function CenterMenu() {
    return (
        <div className = "menu flex">
            <ul className="flex w-[100%] justify-between">
                <a className="mr-[3rem] hover:cursor-pointer text-white" href="/tag">Tag</a>
                <a className="mr-[3rem] hover:cursor-pointer text-white" href="/explore">Explore</a>
                <a className="mr-[3rem] hover:cursor-pointer text-white" href="/contact">Contact Us</a>
            </ul>
        </div>
    )
}

export default CenterMenu