/* Code by Seyun Kim and Jiyoon Pyo */


import React, { useRef, useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReactWordcloud from 'react-wordcloud'
import ReactAudioPlayer from "react-audio-player";

import AudioPlayer from '../../Components/mini_audio_player/MiniPlayer';
import MiniPlayer from "../../Components/mini_audio_player/MiniPlayer";
//import AudioPlayer from '../../Components/AudioPlayer/AudioPlayer';
//import ReactAudioPlayer from "react-audio-player";
//import styled from 'styled-components';

var adjCloudData = [];

var options = {
    rotations: 1,
    rotationAngles: [0, 180],
    //fontSizes: [100, 50, 30],
};
  
const size = [600, 600];
const Tag = () => {
// const Button = styled.button`
//     background-color: #E9C46A;
//     color: black;
//     padding: 5px 5px;
//     border-radius: 6px;
//     outline: 0;
//     box-shadow: 0px 1.2px 1.2px black;
// `

// const ExploreIndiv = () => {
    const [ sound, setSound ] = useState([]);
    const [ adjective, setAdjective ] = useState([]);

    let { _id } = useParams();

    useEffect(function() {
        async function getSound() {
            try {
                const response = await axios.get(`http://localhost:8080/api/sounds/${_id}`);
                const adj = await axios.get("http://localhost:8080/api/sounds/6277d91677ac0a73d9596173/adj");
                setSound(response.data);
                setAdjective(adj.data);
            } catch(error) {
                console.log('error', error);
            }
        }
        getSound();
    }, []);
    // console.log("hellll/" + sound.src);

    adjCloudData = adjective;
    // TO DO: FIND A WAY TO MAKE THE WORD SIZE TO BE 10 TIMES VALUE
    //console.log(adjCloudData[0].value);
    return(
        <div className="ExploreIndiv px-[5rem] py-[1.5rem]">
          <div className="text-2xl text-[#67748a] text-left">
            Explore
          </div>

          <div className = "wrapper flex items-center justify-between px-[5rem] w-[100%] relative z-[3]">
            <div className="music flex flex-col items-center text-center justify-center w-[50%]">
                <MiniPlayer
                    song={sound}
                    src={"http://localhost:3000/" + sound.src}
                />
                {/* <ReactAudioPlayer
                    src={"http://localhost:3000/" + sound.src}
                    autoPlay={false}
                    controls /> */}
            </div>
                  
            <div className="chart relative w-[50%]">
                <ReactWordcloud
                    options = {options}
                    minSize = {size}
                    words = {adjCloudData}
                />

                <Button className="button w-[100px] flex justify-center items-center ml-[10rem]" 
                    onClick={(e) => 
                        {e.preventDefault();
                            window.location.href=`/tag/${sound._id}`;
                        }
                    }>
                    <strong>Tag</strong>
                </Button>   
            </div>
          </div>
        </div>
    );
}

export default ExploreIndiv;