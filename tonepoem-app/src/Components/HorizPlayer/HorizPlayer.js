// Coded by: Seyun Kim
// Designed by: Jiyoon Pyo

import React from 'react'
import ReactAudioPlayer from "react-audio-player";

function HorizPlayer(props) {
    return (
        <div className="horiz-player flex justify-between pt-[1rem] pb-[5rem]">
            <div className="information-player">
                <div className="horiz-description">
                    <span className = "title flex items-left justify-left text-[1.2rem]">
                        {/* Moment */}
                        {props.song.title}
                    </span>

                    <span className = "artist flex items-left justify-left text-[0.8rem] py-[0.2rem]">
                        {/* FIVE NEW OLD */}
                        {props.song.artist}
                    </span>
                </div>
                <div className="horiz-music">
                    <ReactAudioPlayer
                        src={props.song.src}
                        autoPlay={false}
                        controls
                    />
                </div>
            </div>
        </div>

    );

}

export default HorizPlayer;