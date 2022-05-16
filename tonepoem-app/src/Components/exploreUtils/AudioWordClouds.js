// Coded by: Seyun Kim
// Designed by: Jiyoon Pyo

import React from 'react';
import HorizPlayer from '../HorizPlayer/HorizPlayer';

const AudioWordClouds = ({ sounds, loading }) => {
    return (
        <div>
            <div className="list-group flex flex-col justify-center place-items-center" >
                    {sounds.map(sound => {
                        return(
                            <div key={sound._id} className="relative nothing flex flex-row justify-self-center place-items-center text-sm">
                                <HorizPlayer
                                    song={sound}
                                />   

                                <button className="place-self-center ml-[12rem] mr-[35px] w-[100px] px-[25px] py-[7px] hover:bg-[#E9C46A] hover:text-[#081730] border-[2px] rounded-[10px] border-[#E9C46A]" 
                                    onClick={(e) => 
                                        {e.preventDefault();
                                            window.location.href=`/explore/${sound._id}`;
                                        }
                                    }>
                                    More
                                </button>                             
                            </div>
                        )  
                    })}
                
            </div>
    </div>           
    )
}

export default AudioWordClouds