import React, {useState} from 'react'
import MiniPlayer from '../mini_audio_player/MiniPlayer'
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
  

const AudioWordClouds = ({ sounds, loading}) => {

    const [id, setId] = useState();
    const history = useHistory();

    const handleProceed = (event) => {
        console.log(id);
        id && history.push(generatePath("/tag/:id", { id }));
    }
    console.log(id);
    return (
        

        <div>
            <div className="list-group flex flex-col justify-center items-center" >
                    {sounds.map(sound => {
                        
                        return(
                            
                            <div key={sound._id} className="nothing flex flex-row justify-center items-center text-sm">
                            <MiniPlayer
                                song={sound}
                            />                    

                            <Button className="button w-[100px]" 
                            onClick={() => 
                                {setId(sound._id);
                                handleProceed();
                                }
                            }>
                                <strong>More</strong>
                            </Button> 

                            {/* <button onClick={handleProceed}>
                                More
                            </button> */}

                            {/* <a href="http://localhost:3000/tag/${}">
                                <button onClick={handleProceed}>
                                    More
                                </button>
                            </a> */}

                            
                        </div>
                    )
                       
                    })}
                
            </div>
    </div>           
    )
}

export default AudioWordClouds


// const Navigation = () => {
//     return (
//         <div>
//             <Router>
//                 <Switch>
//                     <Route path="/tag/:id">
//                         <AudioWordClouds />
//                     </Route>
//                     {/* <Route path="/">
//                         <
//                     </Route> */}
//                 </Switch>
//             </Router>
//         </div>

//     )
// }