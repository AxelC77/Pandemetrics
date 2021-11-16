import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';

class Chart extends Compoenent {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: null,
                datasets: null
            }
        }
    }

    render() {
        return (
            <div className ="chart">
                <Line
                    data = {this.state.chartData}
                    options={{}}
                />
            </div>
        )
    }
}

export default Chart