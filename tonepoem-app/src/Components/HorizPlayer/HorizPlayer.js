import React from 'react'
import ReactAudioPlayer from "react-audio-player";

import HorizPlayerDetails from "./HorizPlayerDetails";

// Coded by: Seyun Kim
// Designed by: Jiyoon Pyo

function AudioPlayer(props) {
    return (
        <div className="horiz-player pt-[1rem] pb-[5rem]">
            <div className="horiz-description pb-[5rem]">
                <HorizPlayerDetails
                   song={props.song}
                />
            </div>
            <div className="horiz-music">
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