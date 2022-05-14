import React from 'react';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay, faPause, faForward, faBackward} from "@fortawesome/free-solid-svg-icons";

//Coded by: Seyun Kim
function HorizPlayerControls(props) {
    return (
        <div className="c-player--controls">
            <button className="play-btn" onClick={() => props.setIsPlaying(!props.isPlaying)}>
                <FontAwesomeIcon icon={faPlay} />
            </button>

        </div>
    )
}

export default HorizPlayerControls;