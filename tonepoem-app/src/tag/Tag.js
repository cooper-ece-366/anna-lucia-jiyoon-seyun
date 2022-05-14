/* Code by Seyun Kim and Jiyoon Pyo */
// Music Player coded by Seyun Kim
// Pie Chart coded by Jiyoon Pyo

import React, { useRef, useState, useEffect } from "react";
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

import MiniPlayer from '../mini_audio_player/MiniPlayer';
import { ADJS } from './adjectives';

import { InteractionItem } from 'chart.js';
import { 
    Chart as ChartJS, 
    ArcElement, 
    Tooltip, 
    Legend 
} from 'chart.js';

import {
    Pie,
    getElementAtEvent,
} from 'react-chartjs-2';

ChartJS.register(
    ArcElement, 
    Tooltip, 
    Legend
);

export const data = {
    labels: ['bad', 'fearful', 'peaceful', 'happy', 'sad', 'disgusted', 'angry'],
    datasets: [
      {
          label: 'adjectives',
          data: [1, 1, 1, 1, 1, 1, 1],
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(54, 162, 235, 1)',
          ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

function changeData(chart, label){
  chart.data.labels = label;
  chart.update();
}

const Tag = () => {
    const [ sound, setSound ] = useState([]);

    let { _id } = useParams();

    useEffect(function() {
        async function getSound() {
            try {
                const response = await axios.get(`http://localhost:8080/api/sounds/${_id}`);
                setSound(response.data);
                //console.log(response.data.adjs.active);
            } catch(error) {
                console.log('error', error);
            }
        }
        getSound();
    }, []);

    const chartRef = useRef();
    var adjectiveLevel = 0;
    var item = ADJS;
    var selection;

    const onClick = (event) => {
        const chart = chartRef.current;
        var index = getElementAtEvent(chartRef.current, event)[0].index;
     
        if(adjectiveLevel < 2){
          item = item.children[index];
          const test = [
            item.children[0].label, 
            item.children[1].label, 
            item.children[2].label, 
            item.children[3].label,
            item.children[4].label,
            item.children[5].label,
            item.children[6].label,
          ];
          changeData(chart, test);
          adjectiveLevel += 1;
        }

        if(adjectiveLevel == 2){
          selection = item.children[index].label;
          console.log(selection);
        }
    }

    const sendRequest = async() => {
      await axios.put(`http://localhost:8080/api/sounds/${id}`, {
        selection
      })
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      sendRequest().then(() => history("/explore"));
    }

    return(
        <div>
          <div className="text-xl text-[#67748a] text-left px-[5rem] py-[1rem]">
            <b>Tag</b>
          </div>

          <div className = "wrapper flex items-center justify-between px-[5rem] w-[100%] relative z-[3]">
            <div className="music flex flex-col items-center text-center justify-center w-[50%]">
                <MiniPlayer
                    song={sound}
                />
            </div>
                  
            <div className="chart relative w-[50%]">
              <Pie 
                ref={chartRef}
                data={data} 
                onClick={onClick}
              />

              <button type="submit">Submit</button>
            </div>
          </div>
        </div>
    );
}

export default Tag;