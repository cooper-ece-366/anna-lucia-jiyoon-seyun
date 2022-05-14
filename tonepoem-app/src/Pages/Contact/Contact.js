import React from 'react' // THIS LINE IS REQUIRED

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

            <button className="mr-[35px] hover:bg-[#232A4E] border-[2px] rounded-[10px] border-[#232A4E] px-[25px] py-[7px]">
                Submit
            </button>
        </div>
        // <div>

        //     <h2>Why Does it Matter?</h2>
        //     <span>There are few tagged databases of sounds and of those that are documented, the tags are exclusively literal descriptions. Audio tagging is an important task to be able to predict the tags of audio clips. This is only possible with thoroughly tagged audio-database. With TonePoem, you can explore the audio space associated with words and apply to other various tasks like deep learning.</span>

        //     <h2>How Does it Work?</h2>
        //     <span>To contribute to the database of audio tags and explore the audio space, listen to a short randomly-selected audio clip and choose from the word wheel the best adjective associated with the audio. Then learn more about the source of the audio clip which will be revealed and what adjectives other users picked! Have fun!</span>

        //     <h2>How Can I Interact with the Data?</h2>
        //     <span>Have fun <i>tagging</i> audio! You can also <i>explore</i> what sounds have been associated with which adjectives. If you're intersted in <i>playing</i> with the data we collect and <i>expanding</i> on the TONEPOEM mission, all tags are made open-source as are the audio databases we pull from. Check out the Data/API tab and feel free to contact us.</span>

        //     <h2>What Can I Do With It?</h2>
        //     <span>Explore audio space in a way you never did by associating it with words! Compare your thoughts on the audio sample you tagged with how others did by looking at our distributions! Apply our open audio database for your state of the art deep learning models! And have fun!</span>
        // </div>
    );
}

export default Contact;