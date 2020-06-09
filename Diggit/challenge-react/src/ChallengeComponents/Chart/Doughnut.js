import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';
import {render} from 'react-dom';

export default class DoughnutChart extends Component{

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
                <Doughnut 
                    options={{
                        responsive: true,
                        cutoutPercentage: 80,
                        legend: {
                            display:  true,
                            position: 'right',
                            labels: {
                                fontColor: '#849fb4',
                                boxWidth: 5,
                                padding: 10
                            },
                            rtl: true
                        },
                        animation: {
                            animateScale: true
                        }
                    }}
                    data= {this.state.data}
                />
            </div>
        )
    }
}
