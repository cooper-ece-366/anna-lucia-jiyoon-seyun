import React from 'react';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay, faPause, faForward, faBackward} from "@fortawesome/free-solid-svg-icons";

<<<<<<< HEAD
//Coded by: Jiyoon Pyo
=======
//Coded by: Seyun Kim
>>>>>>> 4965377a91fe991d74fcd1b8d0badf48007bdaa5
function MiniPlayerControls(props) {
    return (
        <div className="c-player--controls">
            <button className="play-btn" onClick={() => props.setIsPlaying(!props.isPlaying)}>
                <FontAwesomeIcon icon={faPlay} />
            </button>

        </div>
    )
}

export default MiniPlayerControls;