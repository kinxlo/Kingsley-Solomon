import axios from 'axios'

export const axiosInstance = axios.create({
    headers: {
        'X-User-Agent': process.env.NEXT_PUBLIC_API_AGENT,
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY,
        'Access-Control-Allow-Origin': '*'
    },
})
