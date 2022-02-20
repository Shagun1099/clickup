import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
);

const LineChart = ({ labels, showXGrid, showYGrid, noFill, lineColor, lineColors, height, width, top, multiple, datasets, borderWidth, noPointFill, noCurvy }) => {


    const options = {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
            x: {
                grid: {
                    display: showXGrid ? true : false,
                }
            },
            y: {
                grid: {
                    display: showYGrid ? true : false
                }
            }
        }
    }

    const data = {
        labels,
        datasets: !multiple ? [{
            fill: noFill ? false : 'start',
            lineTension: noCurvy ? 0 : 0.5,
            data: [1, -23, 8, 65, 0, 35, -40, 67, -25, 46, 79, 51, 6, 0, 25, 35, 35, 40, 27, 19, 50, 12, 35],
            borderColor: lineColor ? lineColor : '#614ecc',
            backgroundColor: "#ffeefb",
            pointBackgroundColor: lineColor ? lineColor : "#614ecc",
            borderWidth: borderWidth ? borderWidth : 2,
        }] :
            datasets.map((d, i) => ({
                fill: noFill ? false : 'start',
                lineTension: noCurvy ? 0 : 0.5,
                data: d,
                borderColor: lineColors[i],
                backgroundColor: "#f9f9f9",
                pointBackgroundColor: noPointFill ? "white" : lineColors[i],
                borderWidth: borderWidth ? borderWidth : 2,
            }))
    }
    return (
        <div style={{ height: height ? height : "100%", marginTop: top ? top : null, width: width ? width : "100%" }}>
            <Line options={options} data={data} />
        </div>
    )
};

export default LineChart;