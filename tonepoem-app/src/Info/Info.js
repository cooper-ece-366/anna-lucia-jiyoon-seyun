import React, { Component } from 'react' // THIS LINE IS REQUIRED
import { AgChartsReact } from 'ag-charts-react'
import './Info.css'

export default class Info extends Component {
    data = [
        {
            adjective: 'Adjective 1',
            selection: 10,
            check: 1,
        },
        {
            adjective: 'Adjective 2',
            selection: 13,
            check: 1,
        },
        {
            adjective: 'Adjective 3',
            selection: 7,
            check: 1,
        },
        {
            adjective: 'Adjective 4',
            selection: 17,
            check: 1,
        },
        {
            adjective: 'Adjective 5',
            selection: 9,
            check: 1,
        },
        {
            adjective: 'Adjective 6',
            selection: 8,
            check: 1,
        }
    ];

    constructor(props) {
        super(props);

        this.state = {
            options: {
                data: this.data,
                series: [{
                    type: 'pie',
                    labelKey: 'adjective',
                    angleKey: 'check',
                    radiusKey: 'selection',
                    tooltip: { renderer: renderer },
                    listeners: {
                        nodeClick: function (event) {
                            //var datum = event.datum;
                            window.alert(
                                'Clicking'
                            )
                        }
                    }
                }],
            },
        };
    }

    // TODO: Disable tooltip content display
        // Refer to: https://www.ag-grid.com/react-charts/tooltips/
    // TODO: Button 'on-click' event
        // Refer to: https://www.ag-grid.com/react-charts/events/

    render() {        
        return (
            <div>
                <div class="split left">
                    {/* <div class="centered"> */}
                        <h2>Name of Sound</h2>
                        <span>Sound bar <br></br></span>
                        <span>Short explanation of the sound</span>
                    {/* </div> */}
                </div>

                <div class="split right">
                    {/* <div class="centered"> */}
                        <AgChartsReact options={this.state.options} />
                    {/* </div> */}
                </div>
            </div>
        )
    }
}

function renderer(params) {
    return {
        content: params.radiusValue,
    };
}