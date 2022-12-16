import React, { useState, useEffect } from 'react'
import { Scatter } from '@ant-design/plots';
const BrushScatter = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = async () => {
        let result = await fetch('http://localhost:5000/brush', {
            method: 'GET',
            headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`,
            },
        });
        result = await result.json();
        console.log(result)
        setData(result);
    };
    const config = {
        data,
        xField: 'weight',
        yField: 'height',
        colorField: 'name',
        size: 5,
        shape: 'circle',
        pointStyle: {
            fillOpacity: 1,
        },
        brush: {
            enabled: true,
            mask: {
                style: {
                    fill: 'rgba(255,0,0,0.15)',
                },
            },
        },
    };

    return <Scatter {...config} />;
}

export default BrushScatter