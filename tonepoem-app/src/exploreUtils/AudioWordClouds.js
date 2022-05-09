import React from 'react'
import MiniPlayer from '../mini_audio_player/MiniPlayer'
import ReactWordcloud from 'react-wordcloud'

const AudioWordClouds = ({ callbacks, options, size, words, sounds, loading}) => {
    if(loading) {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <div className="list-group flex flex-col justify-center items-center" >
                    {sounds.map(sound => {
                        // console.log(sound);
                        return(
                            <div key={sound._id} className="nothing flex flex-row justify-center items-center text-sm">
                            <MiniPlayer
                                song={sound}
                            />
                            
                            <ReactWordcloud
                                callbacks = {callbacks}
                                options = {options}
                                size = {size}
                                words = {words}
                            />
                        </div>
                    )
                       
                    })}
                
            </div>
    </div>           
    )
}

export default AudioWordClouds