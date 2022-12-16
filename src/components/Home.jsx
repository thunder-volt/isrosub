import React from 'react'
import "../styles/home.css"
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate();
    return (
        <div className='home-container'>
            <div className="home-title">
                GUI Tool
            </div>
            <div className="home-content">
                Solar flares are large explosions from the surface of the sun that emit intense bursts of electromagnetic radiation. The intensity of the explosion determines what classification the flare belongs to. The most powerful are X-class flares, followed by M-, C- and B-class; A-class flares are the smallest. We at ISRO GUI provide a tool to graphically visualize the data that has been and collected so far by ISRO;

            </div>
            <button className='home-btn' onClick={() => {
                navigate("/features")
            }}>Explore Features</button>
        </div>
    )
}

export default Home