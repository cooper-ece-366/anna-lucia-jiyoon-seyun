//This function displays the detail of the song being played,
//including song title and artist
import React from 'react'

//Coded by: Seyun Kim
function MiniPlayerDetails(props) {
    return (

        <div className="details  text-sm py-[0.5rem]">
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