import React from 'react'

function PlayerDetails(props) {
    return (
        <div className="c-player--details">
            {/*<div className="details-img">*/}
            {/*    <img src={props.song.img} />*/}
            {/*</div>*/}
            <p className="details-title">Title: <strong>{props.songs[0].title}</strong></p>
            <p className="details-artist">Artist: <strong>Artist: {props.songs[0].artist}</strong></p>

        </div>
    )
}

export default PlayerDetails