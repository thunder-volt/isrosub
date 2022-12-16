import React, { useEffect, useState } from 'react'
import * as XLSX from 'xlsx';
import { Line } from '@ant-design/plots';
import "../styles/charts.css"
import "../styles/excel.css"
import { Pie, G2 } from '@ant-design/plots';

const ExcellSheet = () => {
    const [fileName, setFileName] = React.useState('');
    const [sheetData, setSheetData] = React.useState({})
    const [data, setData] = React.useState([]);
    const [load, setLoad] = React.useState(false);
    const [line, setLine] = useState("");
    const [pie, setPie] = useState("");
    const readExcel = async (e) => {
        const file = e.target.files[0];
        setFileName(file.name)
        const data = await file.arrayBuffer();
        const workbook = XLSX.read(data);
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        setSheetData(await jsonData)
        setData(await jsonData)
        console.log(sheetData);
    }

    const config = {
        data,
        padding: 'auto',
        xField: 'name',
        yField: 'intensity',
        xAxis: {
            // type: 'timeCat',
            tickCount: 5,
        },
        color: '#FF66FF',
    };


    const G = G2.getEngine('canvas');
    const cfg = {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 0.75,
        legend: false,
        label: {
            type: 'spider',
            labelHeight: 40,
            formatter: (data, mappingData) => {
                const group = new G.Group({});
                group.addShape({
                    type: 'circle',
                    attrs: {
                        x: 0,
                        y: 0,
                        width: 40,
                        height: 50,
                        r: 5,
                        fill: mappingData.color,
                    },
                });
                group.addShape({
                    type: 'text',
                    attrs: {
                        x: 10,
                        y: 8,
                        text: `${data.type}`,
                        fill: mappingData.color,
                    },
                });
                group.addShape({
                    type: 'text',
                    attrs: {
                        x: 0,
                        y: 25,
                        text: `${data.value} ${data.percent * 100}%`,
                        fill: 'rgba(0, 0, 0, 0.65)',
                        fontWeight: 700,
                    },
                });
                return group;
            },
        },
        interactions: [
            {
                type: 'element-selected',
            },
            {
                type: 'element-active',
            },
        ],
    };
    const configPie = cfg;



    return (
        <div className="excel-container">
            <div className="excel-func">
                <label htmlFor="file-upload" className="excel-input">
                    Select Excel File
                    <input id="file-upload" type="file" onChange={(e) => {
                        readExcel(e);
                    }} />

                </label>
                <div className='chart-box'>
                    <h3>Charts</h3>
                    <div className='chart-option'>
                        <div className='chart'>
                            <input
                                type='radio'
                                id='pie-checked'
                                name='chart'
                                defaultChecked={false}
                                onClick={() => {
                                    setLine("line");
                                    setPie("");
                                    setLoad(false)
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
                                    setPie('pie');
                                    setLine("")
                                    setLoad(false);
                                }}
                            />
                            <label htmlFor='pie-checked'>PieChart</label>
                        </div>
                    </div>
                </div>
                <button onClick={(e) => {
                    setLoad(true)
                }} className="excel-btn">SUBMIT</button>
            </div>

            {load && line && <div className='linechart-container' style={{ "minWidth": "100vw" }}><Line {...config} /></div>}
            {load && pie && <div className='piechart-container' style={{ "minWidth": "100vw" }}><Pie {...configPie} /></div>}

        </div>
    )
}

export default ExcellSheet