
import React, {useState, useRef, useEffect} from 'react'
import MiniPlayerControls from "./MiniPlayerControls";
import MiniPlayerDetails from "./MiniPlayerDetails";

import ReactPlayer from "react-player";
import ReactAudioPlayer from "react-audio-player";
// import ReactAudioPlayer from 'react-audio-player';

//Coded by: Seyun Kim
function MiniPlayer(props) {
    return (
        <div className="mini-audio-player py-[0.8rem]">
            <div className="mini-description">
                <MiniPlayerDetails
                   song={props.song}
                />
            </div>
            <div className="mini-player">
                <ReactAudioPlayer
                    src={props.song.src}
                    autoPlay={false}
                    controls
                />
            </div>

        </div>

    );

}

export default MiniPlayer;