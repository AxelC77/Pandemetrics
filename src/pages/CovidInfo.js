import React from 'react'
import { Line } from 'react-chartjs-2'

const data = {
    labels: null,
    datasets: [
        {
            label: null,
            data: null,
            fill: false,
            backgroundColor: null,
            borderColor: null,
        }
    ]
}

function CovidInfo() {
    return (
        <div>
            <Line data={data} />
        </div>
    )
}

export default CovidInfo
