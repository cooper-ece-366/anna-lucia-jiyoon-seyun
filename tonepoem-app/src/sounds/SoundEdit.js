// import React, { useState, useEffect } from "react";
// import { get, patch } from 'axios';
// import { Link, useParams } from 'react-router-dom';
// import { eventNames } from "../../../TonePoemService/models/sound";

// function SoundEdit(props) {
//     const initialState = { title: '', artist: '', album: '', src: '' }
//     const [ sound, setSound ] = useState(initialState)
//     let { _id } = useParams();

//     useEffect(function() {
//         async function getSound() {
//             try {
//                 const response = await get(`http://localhost:8080/api/sounds/${_id}`);
//             } catch(error) {
//                 console.log(error);
//             }
//         }
//         getSound();
//     }, []);

//     function handleSubmit(event) {
//         event.preventDefault();
//         async function updateSound() {
//             try {
//                 await path
//             }
//         }
//     }
// }