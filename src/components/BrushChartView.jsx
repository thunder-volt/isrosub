import React from 'react'
import BrushScatter from '../components/chartsView/BrushScatter';
import "../styles/charts.css"
const BrushChartView = () => {
    return (
        <div className='components-container'>
            <div className="components-heading">
                BrushScatter Chart of Intesities
            </div>
            <div className="BrushScatter-container">
                <BrushScatter />
            </div>
        </div>
    )
}

export default BrushChartView