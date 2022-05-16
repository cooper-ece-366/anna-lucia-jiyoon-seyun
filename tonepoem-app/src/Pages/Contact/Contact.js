import React from 'react'

//Function coded by: Jiyoon Pyo
const Contact = () => {
    return (
        <div className="Contact px-[5rem] py-[1.5rem]">
            <div className="text-2xl">
                Contact Us
            </div>

            <div className="email py-[0.7rem]">
                <div className="emailtitle text-[0.9rem] py-[0.5rem]">
                    Email
                </div>

                <input require 
                    className="text-black w-[75%] h-[2rem] rounded-[0.3rem]" 
                    type="text" 
                    id="myText" />

            </div>

            <div className="inquiry py-[0.7rem]">
                <div className="inquirytitle text-[0.9rem] py-[0.5rem]">
                    Enquiry
                </div>

                <input require
                    className="text-black w-[75%] h-[15rem] rounded-[0.3rem] align-text-top"
                    type="text"
                    id="myText" />
            </div>

            <button className="mr-[35px] hover:bg-[#232A4E] border-[2px] rounded-[10px] border-[#232A4E] px-[25px] py-[7px]"
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href=`/contact`;
                }}>
                Submit
            </button>
        </div>
    );
}

export default Contact;