/* Code by Seyun Kim and Jiyoon Pyo */
// Music Player coded by Seyun Kim
// Pie Chart coded by Jiyoon Pyo

import React, { useRef, useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReactWordcloud from 'react-wordcloud'

import AudioPlayer from '../../Components/AudioPlayer/AudioPlayer';

var adjCloudData = [];

var options = {
    rotations: 1,
    rotationAngles: [0, 180],
    fontSizes: [100, 50, 30],
};
  
const size = [600, 600];

const Tag = () => {
    const [ sound, setSound ] = useState([]);
    const [ adjective, setAdjective ] = useState([]);

    let { _id } = useParams();

    useEffect(function() {
        async function getSound() {
            try {
                const response = await axios.get(`http://localhost:8080/api/sounds/${_id}`);
                // AFTER REPOPULATING DATABASE TEST WITH _ID
                const adj = await axios.get("http://localhost:8080/api/sounds/6277d91677ac0a73d9596173/adj");
                setSound(response.data);
                setAdjective(adj.data);
            } catch(error) {
                console.log('error', error);
            }
        }
        getSound();
    }, []);

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
                <AudioPlayer
                    song={sound}
                />
            </div>
                  
            <div className="chart relative w-[50%]">
                <ReactWordcloud
                    options = {options}
                    minSize = {size}
                    words = {adjCloudData}
                />

              <button type="submit">Submit</button>
            </div>
          </div>
        </div>
    );
}

export default Tag;