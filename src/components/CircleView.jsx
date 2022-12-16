import React from 'react'
import CircleFacet from '../components/chartsView/CircleFacet'
import "../styles/charts.css"
const CircleView = () => {
    return (
        <div className='components-container'>
            <div className="components-heading">
                CircleView Chart of Intesities
            </div>
            <div className="circlefacet-container">
                <CircleFacet />
            </div>
        </div>
    )
}

export default CircleView