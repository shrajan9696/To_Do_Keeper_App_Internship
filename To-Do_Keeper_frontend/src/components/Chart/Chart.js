import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';
const Chart = props =>{
    const dataPointValue = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValue);
    // console.log(props.dataPoints);
    return <div className="chart">
        {props.dataPoints.map(function(dataPoint){
            return <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label}  />
        })}
    </div>
        
    
}

export default Chart;
