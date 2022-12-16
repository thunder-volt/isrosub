import React from 'react'
import "../styles/about.css";
// import * as astro from "./Fitslib"
const Fits = () => {

    const [fitsfile, setFitsfile] = React.useState();

    return (
        <div className="excel-container">
            <div className="excel-func">
                <label htmlFor="file-upload" className="excel-input">
                    Select Excel File
                    <input id="file-upload" type="file" onChange={(e) => {
                        var FITS = astro.FITS;

                        var file = e.target.files[0];
                        var callback = function () {
                            var hdu = this.getHDU();
                            var header = this.getHeader();
                            var header = hdu.header;
                            var bitpix = header.get('BITPIX');
                            var dataunit = hdu.data;
                            var dataunit = this.getDataUnit();
                        }
                        var fits = new FITS.File(file, callback);
                        console.log(fits);
                        setFitsfile(fits);
                    }} />

                </label>
                {/* <div className='chart-box'>
                    <h3>Gender</h3>
                    <div className='chart-option'>
                        <div className='chart'>
                            <input
                                type='radio'
                                id='pie-checked'
                                name='chart'
                                defaultChecked={false}
                                onClick={() => {

                                }}
                            />
                            <label htmlFor='pie-checked'>LineChart</label>
                        </div>
                        <div className='chart'>
                            <input
                                type='radio'
                                id='pie-checked'
                                name='chart'
                                defaultChecked={false}
                                onClick={() => {

                                }}
                            />
                            <label htmlFor='pie-checked'>PieChart</label>
                        </div>
                    </div>
                </div> */}
                <button onClick={(e) => {
                    console.log(fitsfile);
                }} className="excel-btn">SUBMIT</button>
            </div>
        </div>
    )
}

export default Fits