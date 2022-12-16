import React from 'react'
import "../styles/homepage.css"
import { Link } from "react-router-dom"
const Features = () => {
    return (
        <div className='homepage-cards-container'>
            <div className="features-title">
                Features
            </div>
            <div className="homepage-cards">
                <Link to="/linechart">
                    <div className="homepage-card">
                        A Line Chart to show the different comparison between intensities of different stars and to develop a deeper and more accurate understaning about them
                        <div className="Explore">Explore</div>
                    </div>


                </Link>
                <Link to="/brushchart">
                    <div className="homepage-card">
                        A solar flare is an intense localized eruption of electromagnetic radiation in the Sun's atmosphere. With the help of these tool you clearly see the distribution of the solar flares over the years from the sun
                        <div className="Explore">Explore</div>
                    </div>
                </Link>
                <Link to="/radarchart">
                    <div className="homepage-card">
                        Due to the change in the rotation of the sun's core and it's shit the major areas of emmision of the solar flares change, using this tool you would be able to visualize the shit in the pattern
                        <div className="Explore">Explore</div>
                    </div>
                </Link>
                <Link to="/circlefacet">
                    <div className="homepage-card">
                        Several factors such as rotation of Earth about it's own axis and about the sun and the distance of them from the sun also results in different about of radiation reaching to the Earth. This tool gives a picture on how does earth recive radiation in an year of it's revolution
                        <div className="Explore">Explore</div>
                    </div>
                </Link>
                <Link to="/multichart">
                    <div className="homepage-card">
                        A range of electromagnetic radiations persists in the waves reaching the earth. But due to shit in it's pattern of radition and it's helium getting used up it can be seen that the radiation pattern also changes . This tool provides you with a visual to this change
                        <div className="Explore">Explore</div>
                    </div>
                </Link>
                <Link to="/xls">
                    <div className="homepage-card">
                        Latest feature , which inculde visualization of different datasets in the form of excel file that can be upload and the respective type of graph will be displayd
                        <div className="Explore">Explore</div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Features