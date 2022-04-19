// https://stackoverflow.com/questions/67254778/how-to-get-onclick-event-for-a-label-in-chartjs-and-react
import React, { Component, MouseEvent, useRef } from 'react'
//import type { InteractionItem } from 'chart.js';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

import {
    getDatasetAtEvent,
    getElementAtEvent,
    getElementsAtEvent,
  } from 'react-chartjs-2';

import { PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

//const chartRef = useRef();

var chartData = {
  labels: ['Adjective 1', 'Adjective 2', 'Adjective 3', 'Adjective 4', 'Adjective 5', 'Adjective 6'],
  datasets: [
      {
        label: 'Number of Selection',
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
      },
    ]
};


export default class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: true,
            new: false,
            data: props.chartData
        }
        this.onClicking = this.onClicking.bind(this)
    }

//    chartRef = useRef();
//    onClicking = (event) => {
//       console.log('hello');
//    };

    onClicking() {
      console.log("onClicking() ***");
      console.log(this.data);
    }


componentDidMount() {
  console.log("componentDidMount(): ----");
}


    // REFER TO: https://react-chartjs-2.js.org/docs/working-with-events
    // TODO: React Chartjs with class version

    render(){
        return (
            <PolarArea
              data={this.state.data}
               options = {{
                onClick: function(evt, element) {
                  // onClickNot working element null
                  console.log(evt, element);
                  if (element.length > 0) {
                    console.log(element, element[0]._datasetInde);
                    // you can also get dataset of your selected element
                    console.log(data.datasets[element[0]._datasetIndex]);
               }}
              }
            }
                // ref={this.chartRef}  
            />)
    }
}