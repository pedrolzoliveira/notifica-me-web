import axios from 'axios';

export const API = axios.create({
    baseURL: 'http://localhost:3041'//process.env.API_URL
})