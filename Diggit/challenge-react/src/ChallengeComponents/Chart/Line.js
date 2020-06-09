import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import {render} from 'react-dom';

export default class LineChart extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: {
                labels: props.labels,
                datasets: [
                    {
                        label: props.label,
                        backgroundColor: props.backgroundColor,
                        data: props.data
                    }
                ]
            }
        }
    }
    

    render() {
        return(
            <div>
                <Line 
                    options={{
                        responsive: true,
                        legend: {
                            display:  true,
                            position: 'top',
                            labels: {
                                fontColor: '#849fb4',
                                fontSize: 16,
                                fontStyle: 'bold',
                                fontFamily: "'Rubik', sans-serif",
                                boxWidth: 0
                            },
                            align: 'center',
                            
                        }
                    }}
                    data= {this.state.data}
                />
            </div>
        )
    }
}
