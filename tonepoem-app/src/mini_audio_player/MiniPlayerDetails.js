<<<<<<< HEAD
//Code written by Seyun Kim
=======
>>>>>>> 4965377a91fe991d74fcd1b8d0badf48007bdaa5
//This function displays the detail of the song being played,
//including song title and artist
import React from 'react'

<<<<<<< HEAD
//Coded by: Jiyoon Pyo
=======
//Coded by: Seyun Kim
>>>>>>> 4965377a91fe991d74fcd1b8d0badf48007bdaa5
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