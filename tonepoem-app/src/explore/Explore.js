import React, { Component, MouseEvent, useRef, useEffect, useState } from 'react'

import './Explore.css';
import Player from '../components/Player';

import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { PolarArea } from 'react-chartjs-2';
  import { getDatasetAtEvent, getElementAtEvent } from 'react-chartjs-2';

  ChartJS.register(
    RadialLinearScale, 
    ArcElement, 
    Tooltip, 
    Legend
  );
  
  // Event Reference: https://react-chartjs-2.js.org/examples/chart-events
  // Update Data: https://react-chartjs-2.js.org/examples/chart-ref
  // Additional (Gradient Radar): https://www.chartjs.org/docs/latest/samples/advanced/radial-gradient.html
  // Class format reference: https://www.codegrepper.com/code-examples/javascript/react+chart+js+2+api+data
  
  export const data = {
    labels: ['One', 'Two', 'Three', 'Four', 'Five', 'Six'],
    datasets: [
      {
        label: 'First Type',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
        ],
        borderWidth: 1,
      }
    ],
  };
  // Updates Reference: https://www.chartjs.org/docs/latest/developers/updates.html
  
  function changeData(chart, label, data){
    //chart.data.labels.pop();
    chart.data.labels = label;
    //chart.data.labels.push(label);
    chart.data.datasets = data;
    // const temp = [1, 2, 3, 4, 5, 6];
  
    // chart.data.datasets.forEach((dataset) => {
    //   dataset.data = temp;
    // });
  
    chart.update();
  }
  
  function triggerTooltip(chart){
    var tooltip = chart === null || chart === void 0 ? void 0: chart.Tooltip;
  
    if(!tooltip) {
      return;
    }
  
    if(tooltip.getActiveElements().length > 0) {
      tooltip.setActiveElements([], {x: 0, y: 0});
    }
  
    else {
      var chartArea = chart.chartArea;
      tooltip.setActiveElements([
        {
          datasetIndex: 0,
          index: 2,
        },
        {
          datasetIndex: 1,
          index: 2,
        },
      ], {
        x: (chartArea.left + chartArea.right) / 2,
        y: (chartArea.top + chartArea.bottom) / 2,
      });
    }
    chart.update();
  
  }

// Actions: https://www.chartjs.org/docs/latest/samples/advanced/progress-bar.html
// Reference: Custom On Click Actions: https://www.chartjs.org/docs/latest/configuration/legend.html

function Explore(){
    const chartRef = useRef();
    var adjectiveLevel = 0;

    const onClick = () => {
        const chart = chartRef.current;

        const label = [['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'], ['a', 'b', 'c', 'd', 'e', 'f']];
        const secondData = [
        [
            {
            label: 'Second Type',
            data: [1, 2, 3, 4, 5, 6],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)',
            ],
            borderWidth: 1,
            }
        ],
        [
            {
            label: 'Third Type',
            data: [6, 5, 4, 3, 2, 1],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)',
            ],
            borderWidth: 1,
            }
        ]
        ]

        changeData(chart, label[adjectiveLevel], secondData[adjectiveLevel]);
        adjectiveLevel += 1;

        console.log('click click')
    }

    useEffect(() => {
        const chart = chartRef.current;

        triggerTooltip(chart);
    }, []);

    const title = 'Welcome to the new blog';
  const likes = 50;

  const [songs] = useState([
    {
      title: "Food",
      artist: "AWOL",
      album: "AWOL - A Way of Life",
      src: "000002.mp3"
    },
    {
      title: "This World",
      artist: "AWOL",
      album: "AWOL - A Way of Life",
      src: "000005.mp3"
    },
    {
      title: "Freeway",
      artist: "Kurt Vile",
      album: "Constant Hitmaker",
      src: "000010.mp3"
    },
    {
      title: "Queen Of The Wires",
      artist: "Alec K Redfearn And The Eyesores",
      album: "The Blind Spot",
      src: "000140.mp3"
    },
    {
      title: "Ohioo",
      artist: "Alec K Redfearn And The Eyesores",
      album: "Every Man For Himself",
      src: "000148.mp3"
    }
  ]);


  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    })
  }, [currentSongIndex])

    return(
        <div>
            <div class="split left">
                <h3>Now Playing</h3>
                <Player
                    testID = "player"
                    currentSongIndex={currentSongIndex}
                    setCurrentSongIndex={setCurrentSongIndex}
                    nextSongIndex={nextSongIndex}
                    songs={songs}
                />
            </div>
            <div class="split right">
                <PolarArea
                    ref={chartRef}
                    data={data}
                    onClick={onClick}
                />
            </div>
        </div>
    );
}

export default Explore;