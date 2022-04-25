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
// Class format reference: https://www.codegrepper.com/code-examples/javascript/react+chart+js+2+api+data
// 

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

function Test() {
  const chartRef = useRef();
  var adjectiveLevel = 1;

  const onClick = () => {
    const chart = chartRef.current;

    const label = [['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'], ['a', 'b', 'c', 'd', 'e', 'f']];
    const secondData = [
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
    ]

    changeData(chart, label[0], secondData);

    console.log('click click')
  }

  useEffect(() => {
    const chart = chartRef.current;

    triggerTooltip(chart);
  }, []);

  return (
    <PolarArea
      ref={chartRef}
      data={data}
      onClick={onClick}
    />
  );
}

export default Test;