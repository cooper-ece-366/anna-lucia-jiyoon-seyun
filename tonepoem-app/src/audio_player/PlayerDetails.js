import React from 'react'

<<<<<<< HEAD
<<<<<<<< HEAD:tonepoem-app/src/audio_player/PlayerDetails.js
//Coded by: Jiyoon Pyo
========
//Function coded by: Seyun Kim
>>>>>>>> 4965377a91fe991d74fcd1b8d0badf48007bdaa5:tonepoem-app/src/components/PlayerDetails.js
=======
//Function coded by: Seyun Kim
>>>>>>> 4965377a91fe991d74fcd1b8d0badf48007bdaa5
function PlayerDetails(props) {
    return (
        <div className="c-player--details">
            <p className="details-title"><strong>Title:</strong> {props.title}</p>
            <p className="details-artist"><strong>Artist: </strong>{props.artist}</p>

        </div>
    )
}

export default PlayerDetails