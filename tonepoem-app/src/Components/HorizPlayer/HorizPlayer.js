import React from 'react'
import ReactAudioPlayer from "react-audio-player";

import { IconButton } from "@mui/material";
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';

// Coded by: Seyun Kim
// Designed by: Jiyoon Pyo

function HorizPlayer(props) {
    console.log(typeof props.song.src)
    return (
        <div className="horiz-player flex justify-between pt-[1rem] pb-[5rem]">
            <div className="play-button h-[5rem] pr-[1rem]">
                <PlayCircleFilledIcon sx={{fontSize:60}} />
                <PauseCircleFilledIcon sx={{fontSize:60}} />
            </div>

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