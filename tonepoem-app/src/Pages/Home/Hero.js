import React from 'react'

//Coded by: Jiyoon Pyo
const Hero = () => {
    return (
        <div className = "wrapper bg-[#081730] flex items-center justify-between px-[5rem] rounded-b-[5rem] w-[100%] h-[50rem] relative z-[3]">
            <div className="headings flex flex-col items-start justify-center h-[100%] text-[4rem]">
                <span>What is <b><font color="#E9C46A">TONE</font><font color="#F4A261">POEM</font></b>?</span>
                <span className="text-[18px] text-[#67748a] text-left">
                    A collaborative effort to create a comprehensive and well-classified <br />
                    database of sounds using a concise list of adjectives.<br />
                </span>

                <div className="github py-[1.5rem]">
                    <a href="https://github.com/cooper-ece-366/anna-lucia-jiyoon-seyun">
                        <img
                            src={require("../../img/github.png")}
                            alt=""
                            className="border-[2px] border-[#67748a] rounded-[13px] h-[3rem]"
                        />
                    </a>
                </div>
                
            </div>

            <div className="image relative w-[50%] pr-[3rem]">
                <img
                    src={require("../../img/hero-img.png")}
                    alt=""
                />
                {/* <span className="text-[15px] text-[#525D6E]">
                    IMAGE
                </span> */}
            </div>
        </div>
    );
}

export default Hero;