import React, { useEffect } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';
import { useState } from 'react';
import { getStockData } from '../api';
import { BsSearch } from "react-icons/bs";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        // legend: {
        //     position: 'top',
        // },
        // title: {
        //     display: false,
        //     text: 'Stock Chart',
        // },
    },
    scales:{
        display: false
    }
};

export default function Chart() {
    const [type, setType] = useState("0");
    const [ticker, setTicker] = useState("AAPL");
    const [labels, setlabels] = useState([]);
    const [price, setprice] = useState([]);
    const style1 = "rounded-full text-white bg-blue-gray-400 p-3 hover:bg-blue-gray-100 hover:text-black";
    const style2 = "rounded-full text-black bg-blue-gray-100 p-3";

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Price',
                data: price,
                borderColor: 'rgb(99, 148, 255)',
                backgroundColor: 'rgb(99, 148, 255)',
                borderWidth: 1,
                pointRadius: 0,
                display: false
            }
        ],
    };

    async function fetchData() {
        let data = await getStockData(type, ticker);
        data = data.data.values;
        const x_cor = [];
        const y_cor = [];
        data?.map(({ close, datetime }) => { x_cor.push(close); y_cor.push(datetime) });
        x_cor.reverse();
        y_cor.reverse();
        setprice(x_cor);
        setlabels(y_cor);
    }

    useEffect(() => {
        fetchData();
    }, [type])

    const submit = (event) => {
        if (event.keyCode === 13) {
            console.log("object");
            handleClick();
        }
    }

    const handleClick = () => {
        fetchData();
    }

    return (
        <div className=''>
            <div className='container w-full py-2 px-8'>
                <div className='flex w-full flex-col gap-2'>
                    <div className='w-full flex flex-wrap items-center justify-between'>
                        <div className='flex items-center justify-between gap-2'>
                            <button className={type == "0" ? style2 : style1} onClick={() => setType("0")} >1 D</button>
                            <button className={type == "1" ? style2 : style1} onClick={() => setType("1")}>1 W</button>
                            <button className={type == "2" ? style2 : style1} onClick={() => setType("2")}>1 M</button>
                            <button className={type == "3" ? style2 : style1} onClick={() => setType("3")}>3 M</button>
                            <button className={type == "4" ? style2 : style1} onClick={() => setType("4")}>1 Y</button>
                        </div>
                        <div className="flex justify-center item-center gap-2">
                            <div className="w-full sm:w-56 mt-4 sm:mt-0 relative">
                                <BsSearch
                                    path="res-react-dash-search"
                                    className="w-5 h-5 search-icon left-3 absolute"
                                />
                                <input className="pl-12 py-2 pr-2 block w-full rounded-lg border-gray-300 bg-card" type="text" value={ticker} onChange={e => setTicker(e.target.value)} onKeyDown={(e) => submit(e)} />
                            </div>
                            {/* <input className="pl-12 py-2 pr-2 block w-full rounded-lg border-gray-300 bg-card" type="text" value={ticker} onChange={e => setTicker(e.target.value)} onKeyDown={(e) => submit(e)} />
                            <button onClick={handleClick}><BsSearch className='w-6 h-6 text-white' /></button> */}
                        </div>
                    </div>
                    <Line options={options} data={data} />
                </div>
            </div>
        </div>
    )
}
