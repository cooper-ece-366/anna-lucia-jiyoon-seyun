
// import React, {useState, useRef, useEffect} from 'react'
import React from 'react'
// import MiniPlayerControls from "./MiniPlayerControls";
import AudioPlayerDetails from "./AudioPlayerDetails";

import ReactAudioPlayer from "react-audio-player";
// import ReactAudioPlayer from 'react-audio-player';

//Coded by: Seyun Kim
function AudioPlayer(props) {
    //console.log(props.song.src)
    return (
        <div className="audio-player pt-[1rem] pb-[5rem]">
            <div className="mini-description pb-[5rem]">
                <AudioPlayerDetails
                   song={props.song}
                />
            </div>
            <div className="mini-player">
                {/* TODO: Redesign Player Bar */}
                {/* TODO: Solve Audio not playing Issue */}
                <ReactAudioPlayer
                    src={props.song.src}
                    autoPlay={false}
                    controls
                />
            </div>
        </div>

    );

}

export default AudioPlayer;