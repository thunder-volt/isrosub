import React from 'react'
import RadarChat from '../components/chartsView/RadarChat';
import "../styles/charts.css"
const RadarView = () => {
    return (
        <div className='components-container'>
            <div className="components-heading">
                RadarView Chart of Intesities
            </div>
            <div className="radar-conrainer">
                <RadarChat />
            </div>
        </div>
    )
}

export default RadarView