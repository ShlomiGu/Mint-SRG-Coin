import React from 'react';
// import 'App.css';
import DonutChart from './DonutChart';
const donutData = [
 {name: "<5", value: 19},
 {name: "5-9", value: 20},
 {name: "10-14", value: 19},
 {name: "15-19", value: 24},
 {name: "20-24", value: 22},
 {name: "25-29", value: 29},
 {name: "30-34", value: 22},
 {name: "35-39", value: 18},
 {name: "40-44", value: 23},
 {name: "45-49", value: 19},
 {name: "50-54", value: 16},
 {name: "55-59", value: 19},
 {name: "60-64", value: 28},
 {name: "65-69", value: 17},
 {name: "70-74", value: 20},
 {name: "75-79", value: 17},
 {name: "80-84", value: 18},
 {name: "≥85", value: 21}
]


const Chart3D = () => {
    return (
        <div className="App">
            <DonutChart data={donutData}  />
        </div>
    );
}

export default Chart3D;

