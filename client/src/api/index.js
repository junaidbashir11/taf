import axios from 'axios';
import { getTime, getType } from '../utilities/HelperFunctions';
const key = "052fbd51564d4652972d7e7cb2686c57";


export const getStockData = async (type = "4", ticker = "AAPL") => {
    const start_date = getTime(type);
    const url = `https://api.twelvedata.com/time_series?symbol=${ticker}&start_date=${start_date}&interval=${getType(type)}&apikey=${key}`;
    return await axios.get(url);
}

// 1D 5min
// 1W 1hr
// 1M 1hr
// rest 1 day