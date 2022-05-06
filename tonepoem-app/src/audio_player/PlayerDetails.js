import React from 'react'

//Coded by: Jiyoon Pyo
function PlayerDetails(props) {
    return (
        <div className="c-player--details">
            <p className="details-title"><strong>Title:</strong> {props.title}</p>
            <p className="details-artist"><strong>Artist: </strong>{props.artist}</p>

        </div>
    )
}

export default PlayerDetails