/* Code by Seyun Kim and Jiyoon Pyo */


import React, { useRef, useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReactWordcloud from 'react-wordcloud'

import AudioPlayer from '../../Components/AudioPlayer/AudioPlayer';
import styled from 'styled-components';

var adjCloudData = [];
  
const size = [600, 600];
const ExploreIndiv = () => {
const Button = styled.button`
    background-color: #E9C46A;
    color: black;
    padding: 5px 5px;
    border-radius: 6px;
    outline: 0;
    box-shadow: 0px 1.2px 1.2px black;
`

var options = {
    rotations: 1,
    rotationAngles: [0, 180],
    //fontSizes: [100, 50, 30],
};

// const ExploreIndiv = () => {
    const [ sound, setSound ] = useState([]);
    const [ adjectives, setAdjectives ] = useState([]);

    let { _id } = useParams();

    useEffect(function() {
        async function getSound() {
            try {
                const response = await axios.get(`http://localhost:8080/api/sounds/${_id}`);
                const adj = await axios.get(`http://localhost:8080/api/sounds/${_id}/adj`);
                setSound(response.data);
                setAdjectives(adj.data);
            } catch(error) {
                console.log('error', error);
            }
        }
        getSound();
    }, []);
    // console.log("hellll/" + sound.src);

    //adjCloudData = adjective;
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
                    src={"http://localhost:3000/" + sound.src}
                />
            </div>
                  
            <div className="chart relative w-[50%]">
                <ReactWordcloud
                    options = {options}
                    minSize = {size}
                    words = {adjectives}
                />

                { ((localStorage.getItem("login_token")) &&
                    <Button className="button w-[100px] flex justify-center items-center ml-[10rem]"
                                        onClick={(e) =>
                                            {e.preventDefault();
                                                window.location.href=`/tag/${sound._id}`;
                                            }
                                        }>
                                        <strong>Tag</strong>
                                    </Button>
                    )
                    ||
                    <strong>Login to Tag</strong>
                }

            </div>
          </div>
        </div>
    );
}

export default ExploreIndiv;