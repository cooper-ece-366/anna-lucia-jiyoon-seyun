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

const handlePageClick = (event) => {

    console.log("page clicked")
    console.log(event.selected)
}

const Explore = () => {
    const [ sounds, setSounds ] = useState([]);

    useEffect(function() {
        async function getSounds() {
            try {
                const response = await axios.get("http://localhost:8080/api/sounds");
                setSounds(response.data);
            } catch(error) {
                console.log('error', error);
            }   
        }
        getSounds();
    }, []);

    return(
        <div>
        <div className="text-xl text-[#67748a] text-left px-[5rem] py-[1rem]">
            <b>Explore</b>
        </div>

            <div className = "wrapper flex flex-col items-center w-[100%] h-[100%]">
                {sounds.map((sound) => {
                    return(
                        <div className="MiniPlayerStat flex flex-row items-center justify-center text-sm" key={sound._id}>
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
                        // <div key={sound._id}>
                        //     <h4><Link to={`/sounds/${sound._id}`}>{sound.adjs.aggressive}</Link></h4>
                        //     <small>_id: {sound._id}</small>
                        //     <h2> wordwordwod</h2>
                        // </div>
                    )
                })}
                
            </div>
            <div className="paginate py-[4rem]">
                <ReactPaginate
                    pageCount={10}
                    previousLabel={'<<'}
                    nextLabel={'>>'}
                    marginPagesDisplayed={3}
                    containerClassName={'pagination justify-content-center'}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    onPageChange={handlePageClick}
                    previousClassName={'page-item'}
                    previousLinkClassName={'page-link'}
                    nextClassName={'page-item'}
                    nextLinkClassName={'page-link'}
                    breakClassName={'page-item'}
                    breakLinkClassName={'page-link'}
                    activeClassName={'active'}
                />
            </div>
        </div>
    );
}

export default Explore;