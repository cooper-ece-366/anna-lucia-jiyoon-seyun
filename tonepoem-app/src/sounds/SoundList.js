import React, { useState, useEffect } from 'react';
import axios  from 'axios';
import { Link } from 'react-router-dom';

function SoundList() {
    const [sounds, setSounds] = useState([])

    useEffect(function() {
        async function getSounds() {
            try {
                const response = await axios.get("http://localhost:8080/api/sounds");
                setSounds(response.data);
                console.log('working');
            } catch(error) {
                console.log('error', error);
            }   
        }
        getSounds();
    }, []);

    return (
        <div>
            <h2>Sounds</h2>
            {sounds.map((sound) => {
                return(
                    <div key={sound._id}>
                        <h4><Link to={`/sounds/${sound._id}`}>{sound.adjs.aggressive}</Link></h4>
                        <small>_id: {sound._id}</small>
                        <h2> wordwordwod</h2>
                    </div>
                )
            })}
        </div>
    )
}

export default SoundList;