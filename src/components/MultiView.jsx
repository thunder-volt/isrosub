import React from 'react'
import MultipleLinePlotChart from '../components/chartsView/MultipleLinePlotChart';
import "../styles/charts.css"
const MultiView = () => {
    return (
        <div className='components-container'>
            <div className="components-heading">
                MultiView Chart of Intesities
            </div>
            <div className="mlp-container">
                <MultipleLinePlotChart />
            </div>
        </div>
    )
}

export default MultiView