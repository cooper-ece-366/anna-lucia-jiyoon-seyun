import React, { Component, MouseEvent, useRef, useEffect, useState } from 'react'
import Player from '../components/Player';

import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { PolarArea } from 'react-chartjs-2';

  ChartJS.register(
    RadialLinearScale, 
    ArcElement, 
    Tooltip, 
    Legend
  );
 
  export const data = {
    labels: ['One', 'Two', 'Three', 'Four', 'Five', 'Six'],
    datasets: [
      {
        label: 'First Type',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132)',
          'rgba(54, 162, 235)',
          'rgba(255, 206, 86)',
          'rgba(75, 192, 192)',
          'rgba(153, 102, 255)',
          'rgba(255, 159, 64)',
        ],
        borderWidth: 1,
      }
    ],
  };
  
export const options = {
  scales: {
    r: {
      display: false
    }
  }                                                                                                   
}

  function changeData(chart, label, data){
    chart.data.labels = label;
    chart.data.datasets = data;  
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
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
                'rgba(153, 102, 255)',
                'rgba(255, 159, 64)',
            ],
            borderWidth: 1,
            }
        ],
        [
            {
            label: 'Third Type',
            data: [6, 5, 4, 3, 2, 1],
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
                'rgba(153, 102, 255)',
                'rgba(255, 159, 64)',
            ],
            borderWidth: 1,
            }
        ]
        ]

        changeData(chart, label[adjectiveLevel], secondData[adjectiveLevel]);
        adjectiveLevel += 1;

        console.log('click click')
    }

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
          <div class="text-xl text-[#67748a] text-left px-[5rem] py-[1rem]">
            <b>Tag</b>
          </div>

          <div className = "wrapper flex items-center justify-between px-[5rem] w-[100%] relative z-[3]">
            <div class="music flex flex-col items-center text-center justify-center w-[50%]">
              <Player
                testID = "player"
                currentSongIndex={currentSongIndex}
                setCurrentSongIndex={setCurrentSongIndex}
                nextSongIndex={nextSongIndex}
                songs={songs}
              />
            </div>
              
            <div class="chart relative w-[50%]">
              <PolarArea
                ref={chartRef}
                data={data}
                onClick={onClick}
                options={options}
              />
            </div>
          </div>
        </div>
    );
}




//////

// import React, { Component, MouseEvent, useRef, useEffect, useState } from 'react';

// import { InteractionItem } from 'chart.js';
// import { 
//   Chart as ChartJS, 
//   ArcElement, 
//   Tooltip, 
//   Legend 
// } from 'chart.js';

// import {
//   Pie,
//   getDatasetAtEvent,
//   getElementAtEvent,
//   getElementsAtEvent,
// } from 'react-chartjs-2';

// ChartJS.register(
//   ArcElement, 
//   Tooltip, 
//   Legend
// );

// export const data = {
//   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//   datasets: [
//     {
//       label: '# of Votes',
//       data: [1, 1, 1, 1, 1, 1],
//       backgroundColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//         'rgba(153, 102, 255, 1)',
//         'rgba(255, 159, 64, 1)',
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//         'rgba(153, 102, 255, 1)',
//         'rgba(255, 159, 64, 1)',
//       ],
//       borderWidth: 1,
//     },
//   ],
// };

function changeData(chart, label){
  chart.data.labels = label;
  chart.update();
}

const Tag = () => {

  const printElementAtEvent = function (dataset) {
    console.log('test');
  }
  // var printElementAtEvent = (chart, element) => {
  //   if(!element[0].length){
  //     return;
  //   }

  //   var index = element[0].index;

  //   console.log('here');
  //   return index;
  //   //console.log(data.labels[index]);
  // }
//   var printDatasetAtEvent = function (dataset) {
//     if (!dataset.length)
//         return;
//     var datasetIndex = dataset[0].datasetIndex;
//     console.log(data.datasets[datasetIndex].label);
// };

  // var printDatasetAtEvent = function (dataset){
  //   if(!dataset.length){
  //     return;
  //   }

  //   var a = dataset[0];
  //   var datasetIndex = a.datasetIndex;
  //   var index = a.index;

  //   console.log(data.labels[index], data.datasets[datasetIndex].data[index])
  // }
  

  const chartRef = useRef();
  var adjectiveLevel = 0;

  const onClick = (event) => {
    const chart = chartRef.current;
    const label = [['1', '2', '3', '4', '5', '6'], ['a', 'b', 'c', 'd', 'e', 'f']];

    if(!chart) {
      return;
    }

    // console.log(getDatasetAtEvent(chart, event));
    // console.log(getElementAtEvent(chart, event))
    // console.log(getElementsAtEvent(chart, event));

    console.log(printElementAtEvent(chart, getElementAtEvent(chart, event)));
    
    changeData(chart, label[adjectiveLevel]);
    adjectiveLevel += 1;
  }

  return(
    <div>
      <div className="text-xl text-[#67748a] text-left px-[5rem] py-[1rem]">
        <b>Tag</b>
      </div>
      <div className="w-[40%]">
        <Pie 
          ref={chartRef}
          data={data} 
          onClick={onClick}
        />
      </div>
    </div>
  );
}

//export default Tag;
export default Explore;