/* Code by Seyun Kim and Jiyoon Pyo */
// Audio Player Made by Seyun Kim:
// Else: Jiyoon Pyo

/*Functionality:
The Explore Individual Page allows the user to see the top 10 adjectives describing the sound. The user may also use the
audio player on the left to re-listen to the sound. If they are willing to tag the sound, they must be logged in to hit
the 'Tag' button
*/
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReactWordcloud from 'react-wordcloud'

import AudioPlayer from '../../Components/AudioPlayer/AudioPlayer';
  
const size = [600, 600];
const options = {
    rotations: 1,
    rotationAngles: [0, 180],
};

const ExploreIndiv = () => {
    const [ sound, setSound ] = useState([]);
    const [ adjectives, setAdjectives ] = useState([]);

    let { _id } = useParams();

    // The function sets adj to be the top 10 adjectives list and sets response to the information on the sound
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
                {(window.localStorage.getItem("login_token") !== null) && 
                    <button className="place-self-center mb-[10rem] mt-[7rem] ml-[23rem] mr-[35px] w-[100px] px-[25px] py-[7px] hover:bg-[#E9C46A] hover:text-[#081730] border-[2px] rounded-[10px] border-[#E9C46A]" 
                        onClick={(e) => 
                            {e.preventDefault();
                                window.location.href=`/tag/${sound._id}`;
                            }
                        }>
                        Tag
                    </button> ||
                    <div className="ml-[20rem] mt-[7rem] mb-[10rem] text-xl">
                        <b>Log in</b> to Tag
                    </div>
                }
            </div>
          </div>
        </div>
    );
}

export default ExploreIndiv;