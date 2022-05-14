//This function displays the detail of the song being played,
//including song title and artist
import React from 'react';

// Coded by: Seyun Kim
// Designed by: Jiyoon Pyo
function HorizPlayerDetails(props) {
    return (
        <div className = "songs-details">
            <span className = "image flex items-center justify-center pb-[1rem]">
                {/* TODO: Find a better picture fitting the theme */}
                <img
                    src={require("../../img/song-art.png")}
                    alt=""
                    className="border-[2px] rounded-[13px] h-[15rem]"
                />
            </span>
            <span className = "title flex items-center justify-center text-[1.2rem]">
                {/* Moment */}
                {props.song.title}
            </span>

            <span className = "artist flex items-center justify-center text-[0.8rem] py-[0.2rem]">
                {/* FIVE NEW OLD */}
                {props.song.artist}
            </span>
        </div>
    );
};

export default HorizPlayerDetails;