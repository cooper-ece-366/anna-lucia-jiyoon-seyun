import React from "react";

//Coded by: Jiyoon Pyo
const Purpose = () => {
  return (
    <div className="experience flex flex-col items-center justify-start px-[5rem] bg-[#020917] h-[60rem] pt-[18rem] mt-[-10rem] relative z-[2] rounded-b-[5rem]">
      <div className="headline mt-7 flex flex-col items-center text-[2rem]">
        <span> <b>Why Does it Matter?</b> </span>
        </div>

        <div>
            <span>
                There are few tagged databases of sounds and of those that are documented, the tags are exclusively literal descriptions. Audio tagging is an important task to be able to predict the tags of audio clips. This is only possible with thoroughly tagged audio-database. With TonePoem, you can explore the audio space associated with words and apply to other various tasks like deep learning.
            </span>
      </div>

      <div className="headline mt-7 flex flex-col items-center text-[2rem]">
        <span> <b>How Does it Work?</b> </span>
        </div>

        <div>
            <span>
            To contribute to the database of audio tags and explore the audio space, listen to a short randomly-selected audio clip and choose from the word wheel the best adjective associated with the audio. Then learn more about the source of the audio clip which will be revealed and what adjectives other users picked! Have fun!
            </span>
      </div>

      <div className="headline mt-7 flex flex-col items-center text-[2rem]">
        <span> <b>How Can I Interact with the Data?</b> </span>
        </div>

        <div>
            <span>
            Have fun <i>tagging</i> audio! You can also <i>explore</i> what sounds have been associated with which adjectives. If you're intersted in <i>playing</i> with the data we collect and <i>expanding</i> on the TONEPOEM mission, all tags are made open-source as are the audio databases we pull from. Check out the Data/API tab and feel free to contact us.
            </span>
      </div>

      <div className="headline mt-7 flex flex-col items-center text-[2rem]">
        <span> <b>What Can I Do With It?</b> </span>
        </div>

        <div>
            <span>
            Explore audio space in a way you never did by associating it with words! Compare your thoughts on the audio sample you tagged with how others did by looking at our distributions! Apply our open audio database for your state of the art deep learning models! And have fun!
            </span>
      </div>
    </div>
  );
}

export default Purpose;