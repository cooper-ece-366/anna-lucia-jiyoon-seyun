import React, {useState, useRef, useEffect} from 'react'
import PlayerDetails from "./PlayerDetails";
import PlayerControls from "./PlayerControls";
import ReactPlayer from "react-player";
import ReactAudioPlayer from 'react-audio-player';

//Function coded by: Seyun Kim
function Player(props) {
    // control what song is played
    // const currentSongIndex = 2;
    const [isPlaying, setIsPlaying] = useState(false);

    const SkipSong = (forwards = true) => {
        if (forwards) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;

                if (temp > props.songs.length - 1) {
                    temp = 0;
                }
                return temp;
            });
        } else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp --;

                if (temp < 0) {
                    temp = props.songs.length -1;
                }
                return temp;
            });
        }
    }
    return (
        <div class="full-audio-player">
            <PlayerDetails title="playerDetails"
                song={props.songs[props.currentSongIndex]}
            />
            <div>
                <ReactAudioPlayer
                    title="audioPlayer"
                    src={props.songs[props.currentSongIndex].src}
                    autoPlay={false}
                    controls
                />
                <PlayerControls
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying}
                    SkipSong={SkipSong}
                />
            </div>
            <p>Next up: </p>
            <p><strong>{props.songs[props.nextSongIndex].title}</strong> by <strong>{props.songs[props.nextSongIndex].artist}</strong></p>

        </div>





        // <ReactPlayer
        //     className="react-player"
        //     // url={[
        //     //     "https://www.youtube.com/watch?v=IUMTaAQ43lY&ab_channel=NPRMusic",
        //     //     "https://www.youtube.com/watch?v=hwKZxdhu95E&ab_channel=LONGSHOW",
        //     //     "https://www.youtube.com/watch?v=M1N_wbhAfQ4",
        //     // ]}
        //
        //     url = {["../assets/000002.mp3"]}
        //     // url={[
        //     //     "../assets/000002.mp3",
        //     //     "../assets/000005.mp3"
        //     // ]}
        //
        //     width="400px"
        //     height="50px"
        //     playing={false}
        //     controls={true}
        //     light={true}
        // />


    );

}

export default Player;