/* Code by Seyun Kim and Jiyoon Pyo */
// Music Player coded by Seyun Kim
// Pie Chart coded by Jiyoon Pyo

import React, { useRef, useState, useEffect } from "react";
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

import MiniPlayer from '../mini_audio_player/MiniPlayer';
// import Adjective from './Adjective';
//import Player from '../audio_player/Player'

// import Tree from './Tree';
// import { ADJS } from './adjectives';

import { InteractionItem } from 'chart.js';
import { 
  Chart as ChartJS, 
  ArcElement, 
  Tooltip, 
  Legend 
} from 'chart.js';

import {
  Pie,
  getDatasetAtEvent,
  getElementAtEvent,
  getElementsAtEvent,
} from 'react-chartjs-2';

ChartJS.register(
  ArcElement, 
  Tooltip, 
  Legend
);

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [1, 1, 1, 1, 1, 1],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

function changeData(chart, label){
  chart.data.labels = label;
  chart.update();
}

const Tag = (props) => {
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

    const printElementAtEvent = function (dataset) {
        console.log('test');
    }

    const chartRef = useRef();
    var adjectiveLevel = 0;

    const onClick = (event) => {
      const chart = chartRef.current;
      const label = [['1', '2', '3', '4', '5', '6'], ['a', 'b', 'c', 'd', 'e', 'f']];

      if(!chart) {
        return;
      }

      console.log(printElementAtEvent(chart, getElementAtEvent(chart, event)));
      
      changeData(chart, label[adjectiveLevel]);
      adjectiveLevel += 1;
    }

    return(
        <div>
          <div className="text-xl text-[#67748a] text-left px-[5rem] py-[1rem]">
            <b>Tag</b>
          </div>

          <div className = "wrapper flex items-center justify-between px-[5rem] w-[100%] relative z-[3]">
            <div class="music flex flex-col items-center text-center justify-center w-[50%]">
                <MiniPlayer
                    song={sound}
                />
            </div>
                  
            <div class="chart relative w-[50%]">
              <Pie 
                ref={chartRef}
                data={data} 
                onClick={onClick}
              />
            </div>
          </div>
        </div>
    );
}

export default Tag;