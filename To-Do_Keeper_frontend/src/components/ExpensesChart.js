
import React from 'react';
import Chart from '../components/Chart/Chart';
function getMonthNumberFromName(monthName) {
    return new Date(`${monthName} 1, 2022`).getMonth();
  }
 function ExpensesChart(props){
    const chartDataPoints = [
        {label:'Jan' , value : 0},
        {label:'Feb' , value : 0},
        {label:'March' , value : 0},
        {label:'April' , value : 0},
        {label:'May' , value : 0},
        {label:'Jun' , value : 0},
        {label:'July' , value : 0},
        {label:'Aug' , value : 0},
        {label:'Sep' , value : 0},
        {label:'Oct' , value : 0},
        {label:'Nov' , value : 0},
        {label:'Dec' , value : 0}

       
    ]

    for(const expense of props.data){
        const expenseMonth = expense.item_date.split(" ")[0];
        const month_index = (getMonthNumberFromName(expenseMonth));
        chartDataPoints[month_index].value+=1;
    }
    // console.log(chartDataPoints);
    return <Chart dataPoints = {chartDataPoints} key={chartDataPoints.label}/>

    
 };

 export default ExpensesChart;