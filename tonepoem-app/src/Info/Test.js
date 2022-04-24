import React, { Component, MouseEvent, useRef, useEffect } from 'react'

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

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
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

export const dataLevelTwo = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
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
};

export const dataLevelThree = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
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
  ],
};

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

function addData(chart){
  const newDataSet = {
    label: 'Second Type',
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
  };
  //chart.data.datasets.push()
}

// function action(chart){
//   const data = chart.data;

//   const newDataSet = {
//     label: 'Second Type',
//     data: [6, 5, 4, 3, 2, 1],
//     backgroundColor: [
//       'rgba(255, 99, 132, 0.5)',
//       'rgba(54, 162, 235, 0.5)',
//       'rgba(255, 206, 86, 0.5)',
//       'rgba(75, 192, 192, 0.5)',
//       'rgba(153, 102, 255, 0.5)',
//       'rgba(255, 159, 64, 0.5)',
//     ],
//     borderWidth: 1,
//   }

//   chart.data.datasets.pop();
//   chart.data.datesets.push(newDataSet);
//   chart.update();
// }

// Actions: https://www.chartjs.org/docs/latest/samples/advanced/progress-bar.html
const actions = [
  {
    name: 'Modify',
    handler(chart) {
      const data = chart.data;

      const newDataSet = {
        label: 'Second Type',
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

      chart.data.dataset.pop();
      chart.data.datasets.push(newDataSet);
      chart.update();
    }
  }
];

function Test() {
  const chartRef = useRef();
  var adjectiveLevel = 1;

  const onClick = (event) => {

    if(!chartRef) {
      return;
    }

    console.log('this is being clicked');
    adjectiveLevel += 1;
    addData(chartRef);
    // console.log(adjectiveLevel);
    
  }

  useEffect(() => {
    const chart = chartRef.current;

    triggerTooltip(chart);
    // addData(chart);
    // action(chartRef.current);
  }, []);

  return (
    <PolarArea
      ref={chartRef}
      data={data}
      onClick={onClick}
      // options={
      // }
    />
  );
}

export default Test;