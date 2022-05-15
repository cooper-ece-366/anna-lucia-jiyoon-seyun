/*Code written by : Jiyoon Pyo, Seyun Kim*/
// Music Players coded by: Seyun Kim

/*File objective: Display Explore page where user can listen to audio data samples and
* discover statistics of adjectives selected by other users for the corresponding audio sample.
* Users can also navigate to a specific tag page where they can tag adjectives for each audio sample.
* */
import React, { useState, useEffect } from 'react';
import axios  from 'axios';
import ReactPaginate from 'react-paginate';

import AudioWordClouds from '../../Components/exploreUtils/AudioWordClouds';

const Explore = () => {
    const [ sounds, setSounds ] = useState([]); 
    const [ loading, setLoading ] = useState(false);
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ soundsPerPage, setSoundsPerPage ] = useState(6);

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
        console.log(event.selected)
        setCurrentPage(event.selected+1);
    }
    
    return(
        <div className="Explore px-[5rem] py-[1.5rem]">
            <div className="text-2xl text-[#67748a] text-left">
                Explore
            </div>
            <div>
                <div className="container">
                    <AudioWordClouds
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
                    containerClassName={'pagination justify-content-center'}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    onPageChange={handlePageClick}
                    previousLinkClassName={'page-link'}
                    nextLinkClassName={'page-link'}
                    activeClassName={'active'}
                />
            </div>

            {/* <div>
                <Pagination count={10} disabled />
            </div> */}
        </div>
    );
}

export default Explore;