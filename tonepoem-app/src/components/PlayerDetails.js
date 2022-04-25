import React from 'react'

function PlayerDetails(props) {
    return (
        <div className="c-player--details">
            {/*<div className="details-img">*/}
            {/*    <img src={props.song.img} />*/}
            {/*</div>*/}
            <p className="details-title"><strong>Title:</strong> {props.song.title}</p>
            <p className="details-artist"><strong>Artist: </strong>{props.song.artist}</p>

        </div>
    )
}

export default PlayerDetails