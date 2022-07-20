import axios from 'axios';

export const API = axios.create({
    baseURL: 'http://localhost:3002'//process.env.API_URL
})