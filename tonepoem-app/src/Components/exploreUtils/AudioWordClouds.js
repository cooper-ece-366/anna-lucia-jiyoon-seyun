import React, {useState} from 'react';
import MiniPlayer from '../mini_audio_player/MiniPlayer';
import HorizPlayer from '../HorizPlayer/HorizPlayer';
import styled from 'styled-components';

import {
    BrowserRouter as Router,
    generatePath,
    useHistory,
  } from "react-router-dom";

const Button = styled.button`
    background-color: #E9C46A;
    color: black;
    padding: 5px 15px;
    border-radius: 6px;
    outline: 0;
    box-shadow: 0px 1.2px 1.2px black;
`
const AudioWordClouds = ({ sounds, loading }) => {
    return (
        <div>
            <div className="list-group flex flex-col justify-center items-center" >
                    {sounds.map(sound => {
                        return(
                            <div key={sound._id} className="nothing flex flex-row justify-center items-center text-sm">
                            <HorizPlayer
                                song={sound}
                            />                    
                            <Button className="button w-[100px] flex justify-center items-center ml-[10rem]" 
                                onClick={(e) => 
                                    {e.preventDefault();
                                        window.location.href=`/explore/${sound._id}`;
                                    }
                                }>
                                <strong>More</strong>
                            </Button>                             
                        </div>
                    )
                       
                    })}
                
            </div>
    </div>           
    )
}

export default AudioWordClouds