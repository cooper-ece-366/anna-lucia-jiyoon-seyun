//This function displays the detail of the song being played,
//including song title and artist
import React from 'react'

//Coded by: Seyun Kim
function MiniPlayerDetails(props) {
    return (

        <div className="details  text-sm py-[0.5rem]">
            <span className = "image flex items-center justify-center pb-[1rem]">
                {/* TODO: Find a better picture fitting the theme */}
                <img
                    src={require("../../img/song-art.png")}
                    alt=""
                    className="border-[2px] rounded-[13px] h-[15rem]"
                />
            </span>
            <p className="details-title flex items-center justify-center">
                Title: <strong>{props.song.title}</strong>
            </p>
            <p className="details-artist flex items-center justify-center">
                Artist: <strong>{props.song.artist}</strong>
            </p>

        </div>
    )
}

export default MiniPlayerDetails