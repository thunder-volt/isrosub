import React, { useState, useEffect } from 'react'
import { Facet } from '@ant-design/plots';

const CircleFacet = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        fetch('http://localhost:5000/circle', {
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
        type: 'circle',
        fields: ['clarity'],
        data,
        tooltip: {
            showMarkers: false,
        },
        meta: {
            cut: {
                sync: true,
            },
        },
        eachView: (view, f) => {
            return {
                type: 'pie',
                options: {
                    data: f.data,
                    angleField: 'mean',
                    colorField: 'cut',
                    pieStyle: {
                        stroke: null,
                    },
                },
            };
        },
    };

    return <Facet {...config} />;
}

export default CircleFacet