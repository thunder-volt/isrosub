import React from 'react'
import LineChart from '../components/chartsView/LineChart';
import "../styles/charts.css"
const LineChartview = () => {
    return (
        <div className='components-container'>
            <div className="components-heading">
                Line Chart of Intesities
            </div>
            <div className='linechart-container'>
                <LineChart />
            </div>
        </div>
    )
}

export default LineChartview