import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/plots';
const LineChart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = async () => {
        let result = await fetch('http://localhost:5000/line', {
            method: 'GET',
            headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`,
            },
        });
        result = await result.json();
        setData(result);

    };
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

    return <Line {...config} />;
};

export default LineChart;