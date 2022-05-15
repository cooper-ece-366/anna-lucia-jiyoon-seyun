import React from 'react'
import AudioPlayerDetails from "./AudioPlayerDetails";
import ReactAudioPlayer from "react-audio-player";

//Coded by: Seyun Kim
function AudioPlayer(props) {
    return (
        <div className="audio-player pt-[1rem] pb-[5rem]">
            <div className="mini-description pb-[5rem]">
                <AudioPlayerDetails
                   song={props.song}
                />
            </div>
            <div className="mini-player">
                {/* TODO: Redesign Player Bar */}
                <ReactAudioPlayer
                    src={props.src}
                    autoPlay={false}
                    controls
                />
            </div>
        </div>

    );

}

export default AudioPlayer;