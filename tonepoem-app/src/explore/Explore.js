/*Code written by : Jiyoon Pyo, Seyun Kim*/
//Music Players coded by: Seyun Kim
//WordCloud coded by: Jiyoon Pyo

/*File objective: Display Explore page where user can listen to audio data samples and
* discover statistics of adjectives selected by other users for the corresponding audio sample.
* Users can also navigate to a specific tag page where they can tag adjectives for each audio sample.
* */
import React, { useState, useEffect } from 'react'
import axios  from 'axios';
import { Link } from 'react-router-dom';

import ReactWordcloud from 'react-wordcloud'
import MiniPlayer from '../mini_audio_player/MiniPlayer'
import ReactPaginate from 'react-paginate'
import AudioWordClouds from '../exploreUtils/AudioWordClouds'
import Pagination from '../exploreUtils/Pagination'

const words = [
  {
    text: 'told',
    value: 5000,
  },

  {
    text: 'mistake',
    value: 2000,
  },

  {
    text: 'thought',
    value: 3000,
  },

  {
    text: 'bad',
    value: 1200,
  },
]

const callbacks = {
  onWordMouseOver: console.log,
  getWordTooltip: word => `${word.text} (${word.value}) [${word.value > 50 ? "good" : "bad"}]`,
}

const options = {
  rotations: 1,
  rotationAngles: [0, 180],
};

const size = [600, 200];



const Explore = () => {
    const [ sounds, setSounds ] = useState([]); 
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [soundsPerPage, setSoundsPerPage] = useState(6);

    // Get songs from database
    useEffect(() => {
        const fetchAudio = async () => {
            setLoading(true);
            const res = await axios.get("http://localhost:8080/api/sounds");
            setSounds(res.data);
            setLoading(false);
        }

        fetchAudio();
    }, []);

    // Get current posts
    const indexOfLastSound = currentPage * soundsPerPage;
    const indexOfFirstSound = indexOfLastSound - soundsPerPage;
    const currentSounds = sounds.slice(indexOfFirstSound, indexOfLastSound);

    const pageCount = Math.ceil( sounds.length / soundsPerPage );

    const handlePageClick = (event) => {

        // console.log("page clicked")
        console.log(event.selected)
        setCurrentPage(event.selected+1);
    }

    
    // console.log("sound number " + sounds.length)
    return(
        <div>
        <div className="text-xl text-[#67748a] text-left px-[5rem] py-[1rem]">
            <b>Explore</b>
        </div>
            <div>
                
                <div className="container">

                    <AudioWordClouds
                        callbacks={callbacks}
                        options={options}
                        size={size}
                        words={words}
                        sounds={currentSounds}
                        loading={loading} 
                    />

                </div>
            </div>

            <div className="sample py-[4rem]">
                <ReactPaginate
                    pageCount={pageCount}
                    previousLabel={'<<'}
                    nextLabel={'>>'}
                    // marginPagesDisplayed={3}
                    containerClassName={'pagination justify-content-center'}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    onPageChange={handlePageClick}
                    // previousClassName={'page-item'}
                    previousLinkClassName={'page-link'}
                    // nextClassName={'page-item'}
                    nextLinkClassName={'page-link'}
                    // breakClassName={'page-item'}
                    // breakLinkClassName={'page-link'}
                    activeClassName={'active'}
                />
            </div>
        </div>
    );
}

export default Explore;