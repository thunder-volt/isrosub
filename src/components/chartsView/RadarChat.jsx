import React, { useState, useEffect } from 'react'
import { Radar } from '@ant-design/plots';

const RadarChat = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        fetch('http://localhost:5000/radar', {
            method: 'GET',
            headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`,
            },
        })
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };
    const config = {
        data,
        xField: 'item',
        yField: 'score',
        seriesField: 'user',
        meta: {
            score: {
                alias: '分数',
                min: 0,
                max: 80,
            },
        },
        xAxis: {
            line: null,
            tickLine: null,
            grid: {
                line: {
                    style: {
                        lineDash: null,
                    },
                },
            },
        },
        // 开启面积
        area: {},
        // 开启辅助点
        point: {
            size: 2,
        },
    };

    return <Radar {...config} />;
}

export default RadarChat