import React, { useState, useEffect } from "react";
import { get, patch } from 'axios';
import { useParams } from 'react-router-dom';

function SoundEdit(props) {
    const initialState = { title: '', artist: '', album: '', src: '', adjs:{} }
    const [ sound, setSound ] = useState(initialState)
    let { _id } = useParams();

    useEffect(function() {
        async function getSound() {
            try {
                const response = await get(`http://localhost:8080/api/sounds/${_id}`);
            } catch(error) {
                console.log(error);
            }
        }
        getSound();
    }, []);

    function handleSubmit(event) {
        event.preventDefault();
        async function updateSound() {
            try {
                await patch(`http://localhost:8080/api/sounds/${_id}`, sound);
                //props.history.push(`/sounds/${_id}`);
            } catch(error) {
                console.log(error);
            }
        }
        updateSound();
    };

    function handleChange(event) {
        setSound({...sound, [event.target.name]: event.target.value})
    };

    function handleCancel(event) {
        props.history.push(`/sounds/${_id}`);
    };

    // const increments = () => {
    //     fetch(`http://localhost:8080/api/sounds/${_id}`, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             Accept: "application/json",
    //         },
    
    //     })
    //         .then((res) => res.json())
    //         .then(console.log)
    //         .catch(console.error);
    // };

    return (
        <div>
            <h1>Edit</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" name="adjs.abandoned" value={sound.adjs.abandoned} onChange={handleChange} className="form-control" />
                </div>

                <div className="form-group">
                    <label>Content</label>
                    <textarea name="adjs.abandoned" rows="5" value={3} onChange={handleChange} className="form-control" />
                </div>

                <div className="btn-group">
                    <button type="submit" className="btn btn-primary">Update</button>
                    <button type="button" onClick={handleCancel} className="btn btn-secondary">Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default SoundEdit;