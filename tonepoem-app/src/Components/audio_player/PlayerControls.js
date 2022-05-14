import React from 'react';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay, faPause, faForward, faBackward} from "@fortawesome/free-solid-svg-icons";

//Function coded by: Seyun Kim
function PlayerControls(props) {
    return (
        <div className="c-player--controls">
            <button title="button1" className="skip-btn-forward" onClick={() => props.SkipSong(false)}>
                <FontAwesomeIcon icon={faBackward} />
            </button>
            {/*<button className="play-btn" onClick={() => props.setIsPlaying(!props.isPlaying)}>*/}
            {/*    <FontAwesomeIcon icon={faPlay} />*/}
            {/*</button>*/}
            <button className="skip-btn-backward" onClick={() => props.SkipSong()}>
                <FontAwesomeIcon icon={faForward}/>
            </button>
        </div>
    )
}

export default PlayerControls;