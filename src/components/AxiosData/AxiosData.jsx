import axios from 'axios'
import React, { useEffect } from 'react'

const AxiosData = () => {

    useEffect(() => {
        const data = axios.get(`https://data.covid19india.org/v4/min/data.min.json`).then((res) => {
            return res.data;
        }).catch((err) => {
            console.log("err", err);
        })
    }, [])
    
    console.log("data", data);

    return (
        <>
            
        </>
    )
}

export default AxiosData