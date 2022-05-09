import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function SoundInfo(props) {
    const [ sound, setSound ] = useState([]);
    let { _id } = useParams();

    useEffect(function() {
        async function getSound() {
            try {
                const response = await axios.get(`http://localhost:8080/api/sounds/${_id}`);
                setSound(response.data);
            } catch(error) {
                console.log('error', error);
            }
        }
        getSound();
    }, []);

    return (
        <div>
            <h2>{sound.title}</h2>
            <small>_id: {sound._id}</small>
            <p>{sound.artist}</p>
            <p>{sound.src}</p>
        </div>
    );
};

export default SoundInfo;