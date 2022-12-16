import React, { useState, useEffect } from 'react'
import { Line } from '@ant-design/plots';

const MultipleLinePlotChart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = async () => {
        let result = await fetch('http://localhost:5000/multi', {
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
        xField: 'year',
        yField: 'gdp',
        seriesField: 'name',
        yAxis: {
            label: {
                formatter: (v) => `${(v / 10e8).toFixed(1)} B`,
            },
        },
        legend: {
            position: 'top',
        },
        smooth: true,
        // @TODO 后续会换一种动画方式
        animation: {
            appear: {
                animation: 'path-in',
                duration: 5000,
            },
        },
    };

    return <Line {...config} />;
}

export default MultipleLinePlotChart