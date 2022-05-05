//Code written by Seyun Kim
//This function displays the detail of the song being played,
//including song title and artist
import React from 'react'

function PlayerDetails(props) {
    return (
        <div className="c-player--details">
            <p className="details-title"><strong>Title:</strong> {props.title}</p>
            <p className="details-artist"><strong>Artist: </strong>{props.artist}</p>

        </div>
    )
}

export default PlayerDetails