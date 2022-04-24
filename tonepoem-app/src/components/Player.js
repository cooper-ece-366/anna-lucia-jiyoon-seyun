import React, {useState, useRef, useEffect} from 'react'
import PlayerDetails from "./PlayerDetails";
import PlayerControls from "./PlayerControls";
import ReactPlayer from "react-player";
import ReactAudioPlayer from 'react-audio-player';

import sound from "../assets/000002.mp3";

function Player(props) {
    // control what song is played
    const currentSongIndex = 0;

    return (
        <div>
            <PlayerDetails songs={props.songs} />

            <ReactAudioPlayer
                // src="../assets/000002.mp3"
                src={props.songs[currentSongIndex].src}
                autoPlay={false}
                controls
            />

        </div>





        // <ReactPlayer
        //     className="react-player"
        //     // url={[
        //     //     "https://www.youtube.com/watch?v=IUMTaAQ43lY&ab_channel=NPRMusic",
        //     //     "https://www.youtube.com/watch?v=hwKZxdhu95E&ab_channel=LONGSHOW",
        //     //     "https://www.youtube.com/watch?v=M1N_wbhAfQ4",
        //     // ]}
        //
        //     url = {["../assets/000002.mp3"]}
        //     // url={[
        //     //     "../assets/000002.mp3",
        //     //     "../assets/000005.mp3"
        //     // ]}
        //
        //     width="400px"
        //     height="50px"
        //     playing={false}
        //     controls={true}
        //     light={true}
        // />


    );

}

export default Player;